import React from 'react'
import { Accordion, Card } from 'react-bootstrap';
const Faq = () => {
    return (

        <>
            {/* Breadcrumb */}
            <div className="breadcrumb-bar-two">
                <div className="container">
                    <div className="row align-items-center inner-banner">
                        <div className="col-md-12 col-12 text-center">
                            <h2 className="breadcrumb-title">FAQ</h2>
                            <nav aria-label="breadcrumb" className="page-breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <a href="index.html">Home</a>
                                    </li>
                                    <li className="breadcrumb-item" aria-current="page">
                                        FAQ
                                    </li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            {/* /Breadcrumb */}
            {/* FAQ Section */}
            <section className="faq-inner-page">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="section-inner-header text-center">
                                <h2>Frequently Asked Questions</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className="faq-info faq-inner-info">
                            <Accordion defaultActiveKey="0">
                                <Card>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>What is the process to schedule an appointment?</Accordion.Header>
                                    <Accordion.Body>
                                    To schedule an appointment, you can visit our website, use the online booking tool, or call our reception desk. You will be asked to provide your basic information and the reason for your visit.
                                    </Accordion.Body>
                                </Accordion.Item>
                                </Card>

                                <Card>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>Do I need a referral to see a specialist?</Accordion.Header>
                                    <Accordion.Body>
                                    In most cases, a referral from your primary care physician is required to see a specialist. However, some specialties may accept self-referrals depending on your insurance provider.
                                    </Accordion.Body>
                                </Accordion.Item>
                                </Card>

                                <Card>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>What insurance plans do you accept?</Accordion.Header>
                                    <Accordion.Body>
                                    We accept a wide range of insurance plans, including major providers like Blue Cross Blue Shield, Aetna, Cigna, and United Healthcare. Please contact us or check our website for a full list of accepted plans.
                                    </Accordion.Body>
                                </Accordion.Item>
                                </Card>

                                <Card>
                                <Accordion.Item eventKey="3">
                                    <Accordion.Header>What should I bring to my first appointment?</Accordion.Header>
                                    <Accordion.Body>
                                    For your first appointment, please bring a valid ID, your insurance card, any medical records or prescriptions, and a list of medications you are currently taking.
                                    </Accordion.Body>
                                </Accordion.Item>
                                </Card>

                                <Card>
                                <Accordion.Item eventKey="4">
                                    <Accordion.Header>Can I update my personal information online?</Accordion.Header>
                                    <Accordion.Body>
                                    Yes, you can update your personal information such as address, phone number, and emergency contact details by logging into your account on our patient portal.
                                    </Accordion.Body>
                                </Accordion.Item>
                                </Card>
                            </Accordion>
                            </div>
                        </div>

      {/* Column 2 */}
                        <div className="col-lg-6 col-md-6">
                            <div className="faq-info faq-inner-info">
                            <Accordion defaultActiveKey="0">
                                <Card>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Can I make an appointment online?</Accordion.Header>
                                    <Accordion.Body>
                                    Yes, you can make an appointment online using our booking system available on our website. Simply select the service you need and choose a convenient time slot.
                                    </Accordion.Body>
                                </Accordion.Item>
                                </Card>

                                <Card>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>What if I need to cancel or reschedule my appointment?</Accordion.Header>
                                    <Accordion.Body>
                                    If you need to cancel or reschedule your appointment, please do so at least 24 hours in advance to avoid any cancellation fees. You can make changes through our patient portal or by contacting our office.
                                    </Accordion.Body>
                                </Accordion.Item>
                                </Card>

                                <Card>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>Are virtual appointments available?</Accordion.Header>
                                    <Accordion.Body>
                                    Yes, we offer virtual consultations for certain services. You can request a telemedicine appointment when booking online or by contacting our office to see if it is suitable for your condition.
                                    </Accordion.Body>
                                </Accordion.Item>
                                </Card>

                                <Card>
                                <Accordion.Item eventKey="3">
                                    <Accordion.Header>What safety measures are in place for in-person visits?</Accordion.Header>
                                    <Accordion.Body>
                                    We are committed to the safety of our patients and staff. Our facilities follow all recommended health guidelines, including mask mandates, social distancing, and thorough sanitization between appointments.
                                    </Accordion.Body>
                                </Accordion.Item>
                                </Card>

                                <Card>
                                <Accordion.Item eventKey="4">
                                    <Accordion.Header>Can I bring a family member or friend to my appointment?</Accordion.Header>
                                    <Accordion.Body>
                                    Yes, we allow one family member or friend to accompany you to your appointment, provided they do not have any symptoms of illness. However, we ask that you limit additional guests to minimize the number of people in the clinic.
                                    </Accordion.Body>
                                </Accordion.Item>
                                </Card>
                            </Accordion>
                            </div>
                        </div>
    </div>
                </div>
            </section>
            {/* /FAQ Section */}
        </>

    )
}

export default Faq