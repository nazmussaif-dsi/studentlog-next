import {useEffect, useState} from "react";
import styles from '../../../styles/Home.module.css'
import Head from "next/head";
import Link from "next/link";
import {useRouter} from "next/router";

const axios = require('axios')
const student_application_api_address = "http://localhost:3001/student_application"

export async function getStaticPaths() {
    const res = await fetch(student_application_api_address)
    const applications = await res.json()

    if (!applications) {
        return {
            notFound: true,
        }
    }
    // console.log("paths applications:")
    // console.log(applications);

    const paths = applications.map(a =>{
        return {params: { application_id: a.id.toString() }}
    });
    // console.log("paths: ");
    // console.log(paths);

    return {
        paths,
        fallback: true
    };
}

export async function getStaticProps({ params }) {
    const res = await fetch(student_application_api_address+"/"+params.application_id)
    const application = await res.json()

    if (!application) {
        return {
            notFound: true,
        }
    }

    console.log("props application:")
    console.log(application);

    // Pass application data to the page via props
    return {
        props: { application },
        revalidate: 1,
        notFound: false
    }
}

export default function StudentApplication({application}) {
    const router = useRouter();
    if (router.isFallback) {
        return <div>Loading...</div>
    }

    if(!application){
        return <div>Error...</div>

    }

    const sendDecision = (decision) => {
        const confirmForm = confirm("Submit the decision?");
        if (!confirmForm) {
           return;
        }

        const changedApplication = {...application, status : decision}
        axios.patch(student_application_api_address+"/"+application.id, changedApplication).then(resp => {
            console.log(resp.data);
            alert("Saved Successfully");
            router.reload();
        }).catch(error => {
            console.log(error);
            alert("Error occurred: \n"+ JSON.stringify(error))
            router.reload();

        });
    }

    return (
        <div >
            <Head>
                <title>Student Applications Details</title>
                <link rel="icon" href="../../../public/favicon.ico"/>
            </Head>

            <main >
                <h1 className={styles.title}>
                    Student Applications Details
                </h1>

                <hr/>

                <div>
                    <p><Link href ="/">
                        <a style={{color: "blue"}}>Home Page</a>
                    </Link></p>

                    <p><Link href ="/registration">
                        <a style={{color: "blue"}}>Registration Home Page</a>
                    </Link></p>
                </div>

                <hr/>

                <div>
                    Applied Date: {application.applied_date} <br/>
                    Decision by ID: {application.decision_by_id} <br/>
                    Name : {application.name} <br/>
                    Date of Birth: {application.date_of_birth.toString().split(" ")[0]} <br/>
                    Blood Group: {application.blood_group} <br/>
                    Birth Registration ID: {application.birth_registration_id} <br/>
                    Registration ID: {application.registration_id} <br/>
                    Present Address: {application.present_address} <br/>
                    Permanent Address: {application.permanent_address} <br/>
                    Guardian Name: {application.guardian_name} <br/>
                    Guardian Email: {application.guardian_email} <br/>
                    Guardian Phone: {application.guardian_phone} <br/>
                    Applied for Grade: {application.applied_for_grade} <br/>
                    status: {application.status}
                </div>
                <hr/>
                <div>
                    <form id="decisionForm" action="none">
                        <button
                            type="button"
                            disabled={application.status !== "submitted"}
                            onClick={() => sendDecision("approved")}>
                            Approve Application
                        </button>

                        <button
                            type="button"
                            disabled={application.status !== "submitted"}
                            onClick={() => sendDecision("rejected")}>
                            Reject Application
                        </button>
                    </form>
                </div>

            </main>

            <footer className={styles.footer}>
            </footer>
        </div>
    );
}
