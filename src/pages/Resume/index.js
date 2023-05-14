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
                        <>
                            <h4 class="school-title">{title}</h4>
                            <h5 class="graduation-time">
                                <i class="fa fa-university"></i> {schoolname} - <span class="graduation-date">{graduation}</span>
                            </h5>
                            <div class="graduation-description">
                                <p>GPA: {gpa}</p>
                            </div>
                        </>
                    )}
                </div>
                <div className='divider'/>
                <div className='language'>
                    <h3>Language</h3>
                    {
                        Languages.map(({language,level,score,exam}) => 
                        <>
                            <div class="progress-bullets" role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="10">
                            <strong class="progress-title">{language}</strong>
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
                            <time className="job-date">
                                <span>Jan <strong className="text-upper">2014</strong> - Mar <strong>2016</strong></span>
                            </time>
                            <h3 className='job-title'>{title}</h3>
                            <a href={companyUrl} className='company'>{companyLogo}<span class="company-name">{company}</span></a>
                            <p>{description}</p>
                        </div>
                    )}
                </div>
            </div>
            <div className='Skills'>
                <h3>My Technology Set</h3>
                {
                    Skills.map(({title,set}) => 
                    <>
                        <h4 class="skill-title">{title}</h4>
                        <ul>
                            {set.map((brand) => 
                                <li>
                                 <div>
                                  <span class="inner"></span>
                                  <i className={brand}></i>
                                 </div>
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