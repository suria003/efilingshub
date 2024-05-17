import React, { useEffect } from 'react';
import TaxPrepration from '../../../image/service/tax-preparation-service.png';
import TaxAdvisorservice from '../../../image/service/tax-advisor-service.png';
import TaxComplianceservice from '../../../image/service/tax-compliance-service.png';
import InternatoinalTaxservice from '../../../image/service/international-tax-service.png';
import IRSservice from '../../../image/service/IRS-preparation-service.png';
import TaxPlanService from '../../../image/service/tax-plan-service.png';
import { Link } from 'react-router-dom';
import './service.css';

function Service() {

    useEffect(() => {
        const handleScroll = () => {
          const reveals = document.querySelectorAll('.service-container');
          const windowHeight = window.innerHeight;
          const revealPoint = 150;
    
          reveals.forEach(reveal => {
            const revealTop = reveal.getBoundingClientRect().top;
            if (revealTop < windowHeight - revealPoint) {
              reveal.classList.add('active');
            } else {
              reveal.classList.remove('active');
            }
          });
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);


    return (
        <>
            <div className="service-container">
                <div className="fr-service-1">
                    <img src={TaxPrepration} alt="" />
                    <h2 className="head-taxSection-one">Tax Preparation Services</h2>
                    <div className="taxprepration-content">
                        Tax preparation services encompass collecting financial information, calculating tax liabilities, and filing tax returns for individuals and businesses.
                    </div>
                    <div className="button-taxPrepration">
                        <Link to="/service" className='a'>Read More</Link>
                        <h6>T & C Apply</h6>
                    </div>
                </div>
                <div className="fr-service-2">
                    <img src={TaxAdvisorservice} alt="" />
                    <h2 className="head-taxSection-two">Tax Advisory Services</h2>
                    <div className="taxadvisore-content">Tax advisory services offer expert tax advice and guidance, providing proactive tax planning strategies, compliance reviews, and risk assessments.</div>
                    <div className="button-taxAdvisore">
                        <Link to="/service" className='a'>Read More</Link>
                        <h6>T & C Apply</h6>
                    </div>
                </div>
                <div className="fr-service-3">
                    <img src={TaxComplianceservice} alt="" />
                    <h2 className="head-taxSection-three">Tax Compliance Services</h2>
                    <div className="taxcompliance-content">Businesses help meet filing requirements, maintain accurate records, and adhere to deadlines, avoiding penalties.</div>
                    <div className="button-taxcompliance">
                        <Link to="/service" className='a'>Read More</Link>
                        <h6>T & C Apply</h6>
                    </div>
                </div>
                <div className="fr-service-4">
                    <img src={IRSservice} alt="" />
                    <h2 className="head-taxSection-four">IRS Representation Services</h2>
                    <div className="IRSservice-content">IRS representation services entail businesses representing clients in interactions with the Internal Revenue Service (IRS).</div>
                    <div className="button-IRSservice-content">
                        <Link to="/service" className='a'>Read More</Link>
                        <h6>T & C Apply</h6>
                    </div>
                </div>
                <div className="fr-service-5">
                    <img src={InternatoinalTaxservice} alt="" />
                    <h2 className="head-taxSection-five">International Tax Services</h2>
                    <div className="Internationaltax-content">International tax services specialize in addressing tax matters concerning cross-border transactions, global investments, and strategic tax planning on a global scale.</div>
                    <div className="button-Internationaltax">
                        <Link to="/service" className='a'>Read More</Link>
                        <h6>T & C Apply</h6>
                    </div>
                </div>
                <div className="fr-service-6">
                    <img src={TaxPlanService} alt="" />
                    <h2 className="head-taxSection-six">Tax Planning Services</h2>
                    <div className="taxplanservice-content">Businesses identify tax-saving opportunities, implement tax-efficient strategies, and plan for future tax obligations to minimize taxes and optimize financial outcomes.</div>
                    <div className="button-taxplanservice">
                        <Link to="/service" className='a'>Read More</Link>
                        <h6>T & C Apply</h6>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Service;