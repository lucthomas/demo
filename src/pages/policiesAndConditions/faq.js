import React from 'react';
import { Helmet } from 'react-helmet';

const head = () => {
    return (
        <Helmet bodyAttributes={{class: "faqPage"}}>
            <title>FAQ - ENGIFY</title>
        </Helmet>
    );
}

const FAQ = () => (
    <section className="content_block faq">
    {head()}
        
        <div className="grid">
            
            <div className="column column_12_12">
                <div className="content_wrap noBoarder">
                    <div className="title">FAQ</div>
                    <p className="desc">
                    What are you building?!
                    </p>
                </div>
            </div>

            <div className="column column_12_12">
                <div className="content_wrap noBoarder">
                    <div className="title">Quick answers:</div>
                    <ul className="showList">
                        <li>A dashboard for energy project developers, maintenance companies and consultancy companies.</li>
                        <li>Don't worry! You'll see.</li>
                    </ul>
                </div>
            </div>

        </div>

    </section>
);

export default FAQ;