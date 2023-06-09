import React from 'react';
import ScResume from './ScResume';
import SocialMedia from '../../components/SocialMedia';
import { Skills } from '../../constants/skills';
import { Experience } from '../../constants/experience';
import { Education } from '../../constants/education';
import { Languages } from '../../constants/languages';

const Resume = () => {
    return (
        <ScResume>
            <header>
                <h2>Ahmet Selim Pehlivan</h2>
            </header>
            <div className='education'>
                <div className='school'>
                    <h3>Education</h3>
                    {
                        Education.map(({title,schoolname,graduation,gpa}) => 
                        <div className='school-box'>
                            <h4 class="school-title">{title}</h4>
                            <h5 class="graduation-time">
                                <i class="fa fa-university"></i> {schoolname} - <span class="graduation-date">{graduation}</span>
                            </h5>
                            <div class="graduation-description">
                                <p>GPA: {gpa}</p>
                            </div>
                        </div>
                    )}
                </div>
                <divider className='box-divider'/>
                <div className='language'>
                    <h3>Language</h3>
                    {
                        Languages.map(({language,level,score,exam}) => 
                        <>
                            <div class="progress-bullets" role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="10">
                            <h4 class="progress-title">{language}</h4>
                            <span class="progress-bar">
                                {Array.from({ length: 10 }, (_, index) => (
                                    index < score
                                    ? <span class="bullet fill"></span>
                                    : <span class="bullet"></span>
                                ))}
                            </span>
                            <span class="progress-level">{level}</span>
                            <span class="progress-exam">{exam !== "" ? <p>{exam}</p> : ""}</span>
                            </div>
                        </>
                    )}
                </div>
            </div>
            <div className='experiences'>
                <h3>Experiences</h3>
                <div className="jobs">
                    {Experience.map(({company, companyUrl, companyLogo, time, title, description}) =>
                        <div className="job-box">
                            
                            <h3 className='job-title'>{title}</h3>
                            <a href={companyUrl} className='company'>{companyLogo}<span class="company-name">{company}<p className='job-time'>{time}</p></span></a>
                            <p>{description}</p>
                        </div>
                    )}
                </div>
            </div>
            <div className='Skills'>
                <h3 className='skills-header'>My Technology Set</h3>
                {
                    Skills.map(({title,set}) => 
                    <>
                        <h4 class="skill-title">{title}</h4>
                        <ul>
                            {set.map((brand) => 
                                <li>
                                    <span class="inner"></span>
                                    <i className={brand}></i>
                                </li>)}
                        </ul>
                    </>
                )}
            </div>
            <SocialMedia/>
        </ScResume>
    );
}
export default Resume;