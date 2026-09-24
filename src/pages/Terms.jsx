import { motion } from 'framer-motion';
import usePageMeta from '../hooks/usePageMeta';

const parts = [
  {
    title: 'Part 1 — Introduction & Contract Framework',
    sections: [
      { id: 'section-1', label: '1. Purpose and Scope of the Agreement' },
      { id: 'section-2', label: '2. Definitions and Interpretation' },
      { id: 'section-3', label: '3. Contract Formation and Acceptance' },
      { id: 'section-4', label: '4. Order of Precedence of Contract Documents' },
      { id: 'section-5', label: '5. Eligibility to Enter into the Agreement' },
    ],
  },
  {
    title: 'Part 2 — IMCAM Hub Software & Licence',
    sections: [
      { id: 'section-6', label: '6. Description of IMCAM Hub' },
      { id: 'section-7', label: '7. Licence to Use the Software' },
      { id: 'section-8', label: '8. Subscription Model' },
      { id: 'section-9', label: '9. Permitted Use' },
      { id: 'section-10', label: '10. Restrictions on Use' },
      { id: 'section-11', label: '11. Software Updates and Changes' },
      { id: 'section-12', label: '12. Beta, Trial and Demonstration Versions' },
    ],
  },
  {
    title: 'Part 3 — Users, Portals & Access',
    sections: [
      { id: 'section-13', label: '13. User Types and Roles' },
      { id: 'section-14', label: '14. Client/Admin Portal' },
      { id: 'section-15', label: '15. Caseworker Portal' },
      { id: 'section-16', label: '16. Candidate Portal' },
      { id: 'section-17', label: '17. Business/Sponsor Portal' },
      { id: 'section-18', label: '18. Super Admin / e2e World Access' },
      { id: 'section-19', label: '19. User Accounts and Credentials' },
      { id: 'section-20', label: '20. User Permissions and Access Controls' },
      { id: 'section-21', label: '21. Adding, Removing and Managing Users' },
      { id: 'section-22', label: '22. Customer Responsibility for User Activity' },
    ],
  },
  {
    title: 'Part 4 — Immigration-Specific Provisions',
    sections: [
      { id: 'section-23', label: '23. Nature and Purpose of IMCAM Hub' },
      { id: 'section-24', label: '24. No Guarantee of Immigration Outcome' },
      { id: 'section-25', label: '25. Immigration Advice and Professional Responsibility' },
      { id: 'section-26', label: '26. Customer\u2019s Regulatory Responsibilities' },
      { id: 'section-27', label: '27. Accuracy of Immigration Information' },
      { id: 'section-28', label: '28. Changes to UK Immigration Law and Policy' },
      { id: 'section-29', label: '29. Home Office / UKVI Disclaimer' },
      { id: 'section-30', label: '30. No Automatic Immigration Decision-Making' },
      { id: 'section-31', label: '31. No Automatic Home Office Submission' },
      { id: 'section-32', label: '32. Human Review and Verification' },
      { id: 'section-33', label: '33. Responsibility for Applications and Submissions' },
    ],
  },
  {
    title: 'Part 5 — Customer Responsibilities',
    sections: [
      { id: 'section-34', label: '34. Customer Responsibilities' },
      { id: 'section-35', label: '35. Accuracy and Completeness of Information' },
      { id: 'section-36', label: '36. Candidate/Employee Responsibilities' },
      { id: 'section-37', label: '37. Business/Sponsor Responsibilities' },
      { id: 'section-38', label: '38. Immigration Firm/Adviser Responsibilities' },
      { id: 'section-39', label: '39. Obtaining Consents and Authorisations' },
      { id: 'section-40', label: '40. Lawful Use of the Platform' },
    ],
  },
  {
    title: 'Part 6 — Case Management & Documents',
    sections: [
      { id: 'section-41', label: '41. Case Creation and Management' },
      { id: 'section-42', label: '42. Document Upload and Storage' },
      { id: 'section-43', label: '43. Document Access and Permissions' },
      { id: 'section-44', label: '44. Document Accuracy and Authenticity' },
      { id: 'section-45', label: '45. Electronic Signatures' },
      { id: 'section-46', label: '46. Records and Audit Trails' },
      { id: 'section-47', label: '47. Data Export' },
      { id: 'section-48', label: '48. Document and Data Retention' },
      { id: 'section-49', label: '49. Deletion of Cases and Documents' },
    ],
  },
  {
    title: 'Part 7 — Communications & Notifications',
    sections: [
      { id: 'section-50', label: '50. Email and Platform Communications' },
      { id: 'section-51', label: '51. Notifications and Reminders' },
      { id: 'section-52', label: '52. Customer Responsibility for Communications' },
      { id: 'section-53', label: '53. Email Delivery and Third-Party Communication Services' },
    ],
  },
  {
    title: 'Part 8 — Data Protection & Privacy',
    sections: [
      { id: 'section-54', label: '54. Data Protection' },
      { id: 'section-55', label: '55. Controller and Processor Roles' },
      { id: 'section-56', label: '56. UK GDPR and Data Protection Act 2018' },
      { id: 'section-57', label: '57. Personal Data' },
      { id: 'section-58', label: '58. Special Category Data' },
      { id: 'section-59', label: '59. Criminal Offence Data' },
      { id: 'section-60', label: '60. Children\u2019s Data' },
      { id: 'section-61', label: '61. Data Processing Instructions' },
      { id: 'section-62', label: '62. Data Security' },
      { id: 'section-63', label: '63. Data Breach and Security Incidents' },
      { id: 'section-64', label: '64. Data Subject Rights' },
      { id: 'section-65', label: '65. International Data Transfers' },
      { id: 'section-66', label: '66. Sub-Processors' },
      { id: 'section-67', label: '67. Data Retention and Deletion' },
      { id: 'section-68', label: '68. Data Protection Impact Assessments' },
      { id: 'section-69', label: '69. Data Processing Agreement' },
    ],
  },
  {
    title: 'Part 9 — Confidentiality & Security',
    sections: [
      { id: 'section-70', label: '70. Confidentiality' },
      { id: 'section-71', label: '71. Client Confidential Information' },
      { id: 'section-72', label: '72. Segregation of Customer Data' },
      { id: 'section-73', label: '73. Access to Customer Systems and Data by e2e World' },
      { id: 'section-74', label: '74. Security Measures' },
      { id: 'section-75', label: '75. Access Logging and Monitoring' },
      { id: 'section-76', label: '76. Cybersecurity' },
      { id: 'section-77', label: '77. Backups and Disaster Recovery' },
      { id: 'section-78', label: '78. Business Continuity' },
      { id: 'section-79', label: '79. Security Vulnerabilities' },
    ],
  },
  {
    title: 'Part 10 — Intellectual Property',
    sections: [
      { id: 'section-80', label: '80. Ownership of IMCAM Hub' },
      { id: 'section-81', label: '81. e2e World Intellectual Property' },
      { id: 'section-82', label: '82. Customer Data Ownership' },
      { id: 'section-83', label: '83. Customer Content and Documents' },
      { id: 'section-84', label: '84. Templates and Materials' },
      { id: 'section-85', label: '85. Feedback and Suggestions' },
      { id: 'section-86', label: '86. Restrictions on Copying, Reverse Engineering and Scraping' },
      { id: 'section-87', label: '87. Third-Party Intellectual Property' },
    ],
  },
  {
    title: 'Part 11 — Third-Party Services & Integrations',
    sections: [
      { id: 'section-88', label: '88. Third-Party Services' },
      { id: 'section-89', label: '89. Third-Party Integrations' },
      { id: 'section-90', label: '90. APIs' },
      { id: 'section-91', label: '91. Third-Party Service Availability' },
      { id: 'section-92', label: '92. Third-Party Terms and Conditions' },
    ],
  },
  {
    title: 'Part 12 — Fees & Subscription',
    sections: [
      { id: 'section-93', label: '93. Subscription Fees' },
      { id: 'section-94', label: '94. Monthly Billing' },
      { id: 'section-95', label: '95. Free Trial / Demonstration' },
      { id: 'section-96', label: '96. Payment' },
      { id: 'section-97', label: '97. Taxes and VAT' },
      { id: 'section-98', label: '98. Failed or Late Payments' },
      { id: 'section-99', label: '99. Price Changes' },
      { id: 'section-100', label: '100. Renewal' },
      { id: 'section-101', label: '101. Cancellation' },
    ],
  },
  {
    title: 'Part 13 — Service Availability & Support',
    sections: [
      { id: 'section-102', label: '102. Availability of IMCAM Hub' },
      { id: 'section-103', label: '103. Maintenance' },
      { id: 'section-104', label: '104. Planned Downtime' },
      { id: 'section-105', label: '105. Emergency Maintenance' },
      { id: 'section-106', label: '106. Technical Support' },
      { id: 'section-107', label: '107. Service Levels / SLA' },
      { id: 'section-108', label: '108. Service Credits, if applicable' },
    ],
  },
  {
    title: 'Part 14 — Suspension & Termination',
    sections: [
      { id: 'section-109', label: '109. Suspension of Access' },
      { id: 'section-110', label: '110. Termination by Customer' },
      { id: 'section-111', label: '111. Termination by e2e World' },
      { id: 'section-112', label: '112. Termination for Breach' },
      { id: 'section-113', label: '113. Termination for Non-Payment' },
      { id: 'section-114', label: '114. Effect of Termination' },
      { id: 'section-115', label: '115. Customer Data Following Termination' },
      { id: 'section-116', label: '116. Survival of Terms' },
    ],
  },
  {
    title: 'Part 15 — Warranties & Disclaimers',
    sections: [
      { id: 'section-117', label: '117. e2e World Warranties' },
      { id: 'section-118', label: '118. Customer Warranties' },
      { id: 'section-119', label: '119. Software Disclaimer' },
      { id: 'section-120', label: '120. Accuracy Disclaimer' },
      { id: 'section-121', label: '121. Immigration Outcome Disclaimer' },
      { id: 'section-122', label: '122. Third-Party Services Disclaimer' },
      { id: 'section-123', label: '123. Availability Disclaimer' },
    ],
  },
  {
    title: 'Part 16 — Liability & Indemnities',
    sections: [
      { id: 'section-124', label: '124. Limitation of Liability' },
      { id: 'section-125', label: '125. Excluded Losses' },
      { id: 'section-126', label: '126. Liability Cap' },
      { id: 'section-127', label: '127. Customer Indemnity' },
      { id: 'section-128', label: '128. Intellectual Property Indemnity' },
      { id: 'section-129', label: '129. Data Protection Liability' },
      { id: 'section-130', label: '130. Professional/Immigration Advice Liability' },
      { id: 'section-131', label: '131. Fraud and Misrepresentation' },
      { id: 'section-132', label: '132. Liabilities That Cannot Be Excluded' },
    ],
  },
  {
    title: 'Part 17 — Regulatory & Legal Compliance',
    sections: [
      { id: 'section-133', label: '133. Compliance with Laws' },
      { id: 'section-134', label: '134. Immigration Regulatory Compliance' },
      { id: 'section-135', label: '135. Professional Regulatory Compliance' },
      { id: 'section-136', label: '136. Data Protection Compliance' },
      { id: 'section-137', label: '137. Anti-Bribery and Corruption' },
      { id: 'section-138', label: '138. Modern Slavery, Where Appropriate' },
      { id: 'section-139', label: '139. Sanctions and Export Controls, Where Relevant' },
      { id: 'section-140', label: '140. Regulatory Investigations and Cooperation' },
    ],
  },
  {
    title: 'Part 18 — Changes to IMCAM Hub & Agreement',
    sections: [
      { id: 'section-141', label: '141. Changes to the Software' },
      { id: 'section-142', label: '142. Changes to Features' },
      { id: 'section-143', label: '143. Changes to Immigration Content' },
      { id: 'section-144', label: '144. Changes to These Terms' },
      { id: 'section-145', label: '145. Notification of Material Changes' },
    ],
  },
  {
    title: 'Part 19 — General Contractual Provisions',
    sections: [
      { id: 'section-146', label: '146. Force Majeure' },
      { id: 'section-147', label: '147. Notices' },
      { id: 'section-148', label: '148. Assignment' },
      { id: 'section-149', label: '149. Subcontracting' },
      { id: 'section-150', label: '150. Change of Control' },
      { id: 'section-151', label: '151. Entire Agreement' },
      { id: 'section-152', label: '152. Variation' },
      { id: 'section-153', label: '153. Waiver' },
      { id: 'section-154', label: '154. Severability' },
      { id: 'section-155', label: '155. No Partnership or Agency' },
      { id: 'section-156', label: '156. Third-Party Rights' },
      { id: 'section-157', label: '157. Relationship Between the Parties' },
      { id: 'section-158', label: '158. Further Assurance' },
    ],
  },
  {
    title: 'Part 20 — Governing Law & Disputes',
    sections: [
      { id: 'section-159', label: '159. Complaints' },
      { id: 'section-160', label: '160. Dispute Resolution' },
      { id: 'section-161', label: '161. Governing Law' },
      { id: 'section-162', label: '162. Jurisdiction' },
    ],
  },
];

const clauseText =
  'text-sm sm:text-[15px] text-text-secondary leading-relaxed mb-4';
const listItemText =
  'text-sm sm:text-[15px] text-text-secondary leading-relaxed';

function ClauseHeading({ num }) {
  return <span className="font-semibold text-navy">{num}</span>;
}

function PartHeading({ num, title }) {
  return (
    <div id={`part-${num}`} className="mt-14 mb-8 border-t border-sand-dark pt-8 scroll-mt-24">
      <p className="text-xs font-bold uppercase tracking-wide text-blue mb-1">
        Part {num}
      </p>
      <h2 className="text-2xl font-heading font-bold text-navy">{title}</h2>
    </div>
  );
}

export default function Terms() {
  usePageMeta(
    'Terms & Conditions — IMCAM Hub',
    'The Terms and Conditions (Agreement) under which e2e World provides access to and use of IMCAM Hub, its immigration case management software.'
  );

  return (
    <div>
      {/* =========================================
          HERO
          ========================================= */}
      <section className="section-padding bg-gradient-to-b from-offwhite to-sand">
        <div className="container-app">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center px-4 py-1.5 bg-blue-pale text-blue text-xs font-semibold rounded-full mb-4 uppercase tracking-wide">
              Legal
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-navy mb-4 leading-tight">
              Terms & <span className="gradient-text">Conditions</span>
            </h1>
            <p className="text-base sm:text-lg text-text-secondary max-w-xl">
              These Terms and Conditions (&ldquo;Agreement&rdquo;) set out the
              terms under which e2e World provides access to and use
              of IMCAM Hub, the immigration case management software platform.
            </p>
          </motion.div>
        </div>
      </section>

      {/* =========================================
          CONTENTS + LEGAL DOCUMENT
          ========================================= */}
      <section className="section-padding bg-white border-t border-sand-dark">
        <div className="container-app max-w-4xl">
          {/* Contents */}
          <nav aria-label="Table of contents" className="mb-10">
            <h2 className="text-lg font-heading font-bold text-navy mb-4">Contents</h2>
            {parts.map((part) => (
              <div key={part.title} className="mb-5">
                <p className="text-xs font-bold uppercase tracking-wide text-blue mb-2">
                  {part.title}
                </p>
                <ol className="space-y-2 pl-5 border-l border-sand-dark">
                  {part.sections.map((item) => (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        className="text-sm text-blue hover:text-navy transition-colors hover:underline"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </nav>

          <PartHeading num="1" title="Introduction & Contract Framework" />

          {/* Section 1 */}
          <section id="section-1" className="mb-12 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-navy mb-6 leading-snug">
              1. PURPOSE AND SCOPE OF THE AGREEMENT
            </h2>
            <p className={clauseText}>
              <ClauseHeading num="1.1" /> These Terms and Conditions
              (&ldquo;Agreement&rdquo;) set out the terms under which e2e World (&ldquo;e2e World&rdquo;, &ldquo;we&rdquo;,
              &ldquo;us&rdquo; or &ldquo;our&rdquo;) provides access to and use
              of its immigration case management software known as IMCAM Hub
              (&ldquo;IMCAM Hub&rdquo; or the &ldquo;Software&rdquo;).
            </p>
            <p className={clauseText}>
              <ClauseHeading num="1.2" /> The Agreement is entered into between
              e2e World and the organisation, immigration firm,
              immigration adviser, business or other entity that subscribes to
              IMCAM Hub (&ldquo;Customer&rdquo; or &ldquo;you&rdquo;).
            </p>
            <p className={clauseText}>
              <ClauseHeading num="1.3" /> IMCAM Hub is a business-to-business
              software platform designed to assist organisations with the
              management and administration of UK immigration-related cases,
              including the management of immigration cases, candidates,
              employees, documents, communications, tasks and related
              information.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="1.4" /> The Customer may use IMCAM Hub through
              the functionality and user portals made available as part of its
              subscription. These may include, depending on the Customer&rsquo;s
              subscription and configuration:
            </p>
            <ul className="pl-6 sm:pl-10 space-y-2 mb-4">
              <li className={listItemText}>
                <ClauseHeading num="a." /> the Client/Admin Portal, for Customer
                administrators and authorised personnel;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="b." /> the Caseworker Portal, for authorised
                caseworkers and other personnel responsible for managing
                immigration cases;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="c." /> the Candidate Portal, for individuals
                whose immigration matters are being managed through IMCAM Hub,
                including employees, workers, applicants or other candidates;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="d." /> the Business/Sponsor Portal, for
                businesses and organisations that are involved in or require
                access to immigration and sponsorship-related information
                concerning their employees or workers; and
              </li>
              <li className={listItemText}>
                <ClauseHeading num="e." /> the Super Admin functionality, which
                is operated by or on behalf of e2e World for the
                administration, maintenance, security and support of IMCAM Hub.
              </li>
            </ul>
            <p className={clauseText}>
              <ClauseHeading num="1.5" /> The Customer may authorise its
              employees, workers, contractors, professional representatives and
              other permitted individuals to access and use IMCAM Hub where such
              access is necessary for the Customer&rsquo;s use of the Software
              (&ldquo;Authorised Users&rdquo;).
            </p>
            <p className={clauseText}>
              <ClauseHeading num="1.6" /> The Customer is responsible for
              ensuring that its Authorised Users comply with this Agreement and
              shall remain responsible for all use of IMCAM Hub through accounts
              created or authorised by the Customer, subject to the provisions
              of this Agreement.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="1.7" /> The Customer must ensure that each
              Authorised User is given only the level of access reasonably
              required for that person&rsquo;s role and responsibilities. The
              availability and functionality of each portal and the permissions
              available to each Authorised User may be determined by the
              Customer&rsquo;s subscription, configuration and role-based access
              controls within IMCAM Hub.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="1.8" /> Where the Customer provides access to
              IMCAM Hub to a candidate, employee, worker, business, sponsor or
              other third party in connection with an immigration matter, such
              person may use IMCAM Hub only for the purposes authorised by the
              Customer and subject to the applicable functionality and
              permissions provided through the Software.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="1.9" /> The Customer acknowledges that
              IMCAM Hub is a technology and case-management platform. IMCAM Hub
              and e2e WORLD does not provide immigration advice or
              make immigration decisions on behalf of the Customer or its
              clients, candidates or employees through the Software.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="1.10" /> The Customer&rsquo;s subscription to
              and use of IMCAM Hub does not transfer ownership of the Software to
              the Customer. The Customer receives only the rights to access and
              use IMCAM Hub expressly granted under this Agreement.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="1.11" /> This Agreement applies to the
              Customer&rsquo;s use of IMCAM Hub and to all Authorised Users
              accessing the Software under the Customer&rsquo;s account, unless a
              separate written agreement expressly states otherwise.
            </p>
          </section>

          {/* Section 2 */}
          <section id="section-2" className="mb-12 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-navy mb-6 leading-snug">
              2. DEFINITIONS AND INTERPRETATION
            </h2>
            <h3 className="text-base font-heading font-semibold text-navy mb-3">
              2.1 Definitions
            </h3>
            <p className={`${clauseText} mb-6`}>
              In this Agreement, unless the context requires otherwise, the
              following terms have the meanings set out below:
            </p>
            <p className={clauseText}>
              <ClauseHeading num="&ldquo;Agreement&rdquo;" /> means these Terms
              and Conditions, together with any Order Form, Subscription
              details, schedules, policies or other documents expressly
              incorporated into the Agreement.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="&ldquo;Authorised User&rdquo;" /> means an
              individual who is authorised by the Customer to access and use
              IMCAM Hub under the Customer&rsquo;s subscription, including
              administrators, caseworkers, employees, contractors and other
              permitted users.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="&ldquo;Business&rdquo;" /> means an
              organisation, employer or sponsor that is granted access to
              IMCAM Hub in connection with the management of immigration matters
              relating to its employees, workers or prospective employees.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="&ldquo;Business Portal&rdquo;" /> means the
              part of IMCAM Hub made available to authorised Businesses for
              accessing and managing information and functionality relating to
              their employees, workers, sponsorship and immigration matters.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="&ldquo;Candidate&rdquo;" /> means an
              individual whose immigration matter, application or related
              information is being managed through IMCAM Hub. This may include
              an employee, worker, applicant, prospective employee or other
              individual whose information is processed through the Software.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="&ldquo;Candidate Portal&rdquo;" /> means the
              part of IMCAM Hub through which Candidates may access, provide,
              review, upload or sign information and documents relating to their
              immigration matter, subject to the permissions provided by the
              Customer.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="&ldquo;Case&rdquo;" /> means an immigration
              matter, application, instruction or other immigration-related
              matter created and managed within IMCAM Hub.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="&ldquo;Caseworker&rdquo;" /> means an
              individual authorised by the Customer to manage or work on Cases
              through IMCAM Hub.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="&ldquo;Caseworker Portal&rdquo;" /> means the
              part of IMCAM Hub made available to Caseworkers and other
              authorised personnel for managing Cases and related information.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="&ldquo;Client&rdquo;" /> means the
              Customer&rsquo;s client or another person or organisation on whose
              behalf the Customer is providing immigration or related services.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="&ldquo;Client/Admin Portal&rdquo;" /> means
              the part of IMCAM Hub made available to the Customer&rsquo;s
              authorised administrators and other permitted personnel for
              managing the Customer&rsquo;s organisation, users, Cases and
              related information.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="&ldquo;Confidential Information&rdquo;" />{" "}
              means any information disclosed by or on behalf of one party to
              the other party which is confidential in nature or which a
              reasonable person would understand to be confidential, including
              business information, technical information, security
              information, commercial information, Personal Data, Customer
              Data, client information and information relating to immigration
              matters.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="&ldquo;Customer&rdquo;" /> means the
              organisation, immigration firm, immigration adviser, business or
              other legal entity that enters into an agreement with e2e World for access to and use of IMCAM Hub.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="&ldquo;Customer Data&rdquo;" /> means
              information, documents, records, communications and other content
              submitted, uploaded, entered into, generated within or otherwise
              provided to IMCAM Hub by or on behalf of the Customer or its
              Authorised Users, including information relating to Candidates,
              Clients, employees, workers and Businesses.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="&ldquo;Data Protection Legislation&rdquo;" />{" "}
              means all applicable legislation relating to privacy and the
              protection of Personal Data applicable to the parties and their
              use of IMCAM Hub, including the UK General Data Protection
              Regulation (&ldquo;UK GDPR&rdquo;), the Data Protection Act 2018
              and any legislation amending, replacing or supplementing them.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="&ldquo;Documentation&rdquo;" /> means any user
              guides, instructions, technical documentation, help materials or
              other documentation relating to IMCAM Hub made available by e2e World.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="&ldquo;e2e World&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo; or &ldquo;our&rdquo;" />{" "}
              means the legal entity identified as the provider of IMCAM Hub in
              the applicable Order Form or Agreement.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="&ldquo;Fees&rdquo;" /> means the subscription
              fees and any other charges payable by the Customer for access to
              and use of IMCAM Hub.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="&ldquo;IMCAM Hub&rdquo; or &ldquo;Software&rdquo;" />{" "}
              means the immigration case management software platform operated
              and made available by e2e World, including its portals,
              applications, features, functionality, interfaces, databases and
              related services, as updated or modified from time to time.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="&ldquo;Order Form&rdquo;" /> means any order
              form, subscription agreement, online order, proposal or other
              document setting out the Customer&rsquo;s subscription to IMCAM Hub
              and accepted by e2e World.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="&ldquo;Personal Data&rdquo;" /> has the
              meaning given to that term under applicable Data Protection
              Legislation.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="&ldquo;Portal&rdquo;" /> means any user
              interface or access environment forming part of IMCAM Hub,
              including the Client/Admin Portal, Caseworker Portal, Candidate
              Portal and Business Portal.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="&ldquo;Subscription&rdquo;" /> means the
              Customer&rsquo;s subscription to IMCAM Hub, including the
              subscription period, applicable plan, permitted users, features
              and Fees.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="&ldquo;Subscription Period&rdquo;" /> means
              the period during which the Customer is entitled to access and
              use IMCAM Hub under its Subscription.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="&ldquo;Super Admin&rdquo;" /> means an
              authorised e2e World administrator with administrative
              access to IMCAM Hub for purposes including platform administration,
              maintenance, security, technical support and system management.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="&ldquo;Third-Party Services&rdquo;" /> means
              software, services, platforms, APIs, hosting services,
              communication services, payment services, electronic signature
              services or other services provided by third parties and used in
              connection with IMCAM Hub.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="&ldquo;UKVI&rdquo;" /> means UK Visas and
              Immigration, being the division of the UK Home Office responsible
              for the administration of the UK&rsquo;s visa and immigration
              system.
            </p>

            <h3 className="text-base font-heading font-semibold text-navy mb-3 mt-8">
              2.2 Interpretation
            </h3>
            <p className={clauseText}>In this Agreement:</p>
            <ul className="pl-6 sm:pl-10 space-y-2 mb-6">
              <li className={listItemText}>
                <ClauseHeading num="a." /> references to a
                &ldquo;person&rdquo; include an individual, company,
                corporation, partnership, organisation, government authority or
                other legal entity;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="b." /> references to the singular include
                the plural and references to the plural include the singular;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="c." /> references to a &ldquo;party&rdquo;
                or &ldquo;parties&rdquo; mean e2e World and/or the
                Customer, as applicable;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="d." /> references to &ldquo;including&rdquo;,
                &ldquo;include&rdquo; or similar expressions shall be
                interpreted without limitation;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="e." /> references to &ldquo;in
                writing&rdquo; include communication by email and other
                electronic means capable of producing a permanent record,
                unless otherwise stated;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="f." /> references to legislation or
                regulations include that legislation or regulation as amended,
                extended, re-enacted or replaced from time to time;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="g." /> headings are included for
                convenience only and do not affect the interpretation of this
                Agreement; and
              </li>
              <li className={listItemText}>
                <ClauseHeading num="h." /> where there is a conflict between a
                provision in these Terms and a provision in an applicable Order
                Form, the Order Form shall take precedence only to the extent
                of the conflict, unless expressly stated otherwise.
              </li>
            </ul>

            <h3 className="text-base font-heading font-semibold text-navy mb-3 mt-8">
              2.3 References to the Agreement
            </h3>
            <p className={clauseText}>
              Any reference in this Agreement to a &ldquo;clause&rdquo;,
              &ldquo;section&rdquo; or &ldquo;schedule&rdquo; means a clause,
              section or schedule of this Agreement unless expressly stated
              otherwise.
            </p>

            <h3 className="text-base font-heading font-semibold text-navy mb-3 mt-8">
              2.4 Schedules and Incorporated Documents
            </h3>
            <p className={clauseText}>
              Any schedules, Order Forms, Data Processing Agreements, policies
              or other documents expressly stated to form part of this Agreement
              shall be incorporated into and form part of the Agreement.
            </p>

            <h3 className="text-base font-heading font-semibold text-navy mb-3 mt-8">
              2.5 Customer&rsquo;s Users
            </h3>
            <p className={clauseText}>
              Where this Agreement places an obligation on the Customer
              concerning an Authorised User, the Customer shall take reasonable
              steps to ensure that the relevant Authorised User complies with
              that obligation.
            </p>
          </section>

          {/* Section 3 */}
          <section id="section-3" className="mb-12 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-navy mb-6 leading-snug">
              3. CONTRACT FORMATION AND ACCEPTANCE
            </h2>
            <p className={clauseText}>
              <ClauseHeading num="3.1" /> These Terms and Conditions apply to
              the Customer&rsquo;s access to and use of IMCAM Hub and form a
              legally binding agreement between the Customer and e2e World.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="3.2" /> The Agreement shall come into effect
              on the earlier of:
            </p>
            <ul className="pl-6 sm:pl-10 space-y-2 mb-4">
              <li className={listItemText}>
                <ClauseHeading num="a." /> the date on which the Customer
                accepts these Terms and Conditions;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="b." /> the date on which the Customer
                places an order or subscribes to IMCAM Hub;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="c." /> the date on which e2e World accepts the Customer&rsquo;s order or subscription; or
              </li>
              <li className={listItemText}>
                <ClauseHeading num="d." /> the date on which the Customer or
                any of its Authorised Users first accesses or uses IMCAM Hub,
              </li>
            </ul>
            <p className={clauseText}>unless otherwise agreed in writing.</p>
            <p className={clauseText}>
              <ClauseHeading num="3.3" /> Where the Customer subscribes to
              IMCAM Hub through an online registration or purchasing process,
              the Customer may be required to confirm its acceptance of these
              Terms by selecting an acceptance checkbox, clicking an acceptance
              button or completing another electronic acceptance process.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="3.4" /> By accepting these Terms, the
              Customer confirms that:
            </p>
            <ul className="pl-6 sm:pl-10 space-y-2 mb-4">
              <li className={listItemText}>
                <ClauseHeading num="a." /> it has read and understood these
                Terms;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="b." /> it agrees to be legally bound by
                them;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="c." /> the person accepting the Terms has
                authority to enter into the Agreement on behalf of the
                Customer; and
              </li>
              <li className={listItemText}>
                <ClauseHeading num="d." /> the information provided by the
                Customer during registration or subscription is accurate and
                complete.
              </li>
            </ul>
            <p className={clauseText}>
              <ClauseHeading num="3.5" /> Where an individual accepts these
              Terms on behalf of an organisation, that individual represents
              and warrants that they have authority to bind that organisation
              to the Agreement.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="3.6" /> The Customer is responsible for
              ensuring that its Authorised Users are made aware of any
              provisions of this Agreement that apply to their use of IMCAM Hub.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="3.7" /> Authorised User&rsquo;s access to
              IMCAM Hub does not create a separate contractual relationship
              between that Authorised User and e2e World. The
              Customer remains the contracting party responsible for the
              Subscription and for the use of IMCAM Hub by its Authorised Users,
              subject to any separate terms expressly applicable to individual
              users.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="3.8" /> e2e World may refuse or
              reject an application for a Subscription at its reasonable
              discretion, including where:
            </p>
            <ul className="pl-6 sm:pl-10 space-y-2 mb-4">
              <li className={listItemText}>
                <ClauseHeading num="a." /> the proposed use of IMCAM Hub would
                create legal, regulatory, security or operational concerns;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="b." /> the proposed Customer does not
                provide sufficient information to establish its identity or
                authority;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="c." /> the proposed Customer is unable to
                satisfy applicable payment or subscription requirements; or
              </li>
              <li className={listItemText}>
                <ClauseHeading num="d." /> e2e World has reasonable
                grounds to believe that IMCAM Hub may be misused.
              </li>
            </ul>
            <p className={clauseText}>
              <ClauseHeading num="3.9" /> Any quotation, proposal,
              demonstration, discussion or other pre-contract communication
              provided by e2e World does not constitute acceptance of
              an order unless expressly stated otherwise.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="3.10" /> Any demonstration or free trial of
              IMCAM Hub is subject to these Terms unless e2e World
              expressly states otherwise in writing.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="3.11" /> Where a free trial is provided, the
              trial does not create any obligation on e2e World to
              continue providing the Software after the trial period unless the
              Customer enters into a paid Subscription or e2e World
              otherwise agrees in writing.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="3.12" /> Where the Customer continues to use
              IMCAM Hub after the expiry of a free trial and a paid Subscription
              has not been agreed, e2e World may suspend or terminate
              access to the Software.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="3.13" /> Any additional terms expressly
              agreed between e2e World and the Customer in an Order
              Form or other written agreement shall form part of the Agreement.
            </p>
          </section>

          {/* Section 4 */}
          <section id="section-4" className="mb-12 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-navy mb-6 leading-snug">
              4. ORDER OF PRECEDENCE OF CONTRACT DOCUMENTS
            </h2>
            <p className={clauseText}>
              <ClauseHeading num="4.1" /> The contractual arrangements between
              e2e World and the Customer may consist of the following
              documents, where applicable:
            </p>
            <ul className="pl-6 sm:pl-10 space-y-2 mb-4">
              <li className={listItemText}>
                <ClauseHeading num="a." /> these Terms and Conditions;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="b." /> an applicable Order Form or
                subscription confirmation;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="c." /> the Data Processing Agreement;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="d." /> any applicable Service Level
                Agreement;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="e." /> any applicable schedules, policies
                or other documents expressly incorporated into the Agreement;
                and
              </li>
              <li className={listItemText}>
                <ClauseHeading num="f." /> any other written terms expressly
                agreed between e2e World and the Customer.
              </li>
            </ul>
            <p className={clauseText}>
              <ClauseHeading num="4.2" /> All documents referred to in clause
              4.1 form part of the Agreement where they are expressly stated to
              be incorporated into the Agreement.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="4.3" /> If there is any inconsistency between
              the documents forming part of the Agreement, the following order
              of precedence shall apply, unless the parties expressly agree
              otherwise in writing:
            </p>
            <ul className="pl-6 sm:pl-10 space-y-2 mb-4">
              <li className={listItemText}>
                <ClauseHeading num="a." /> any specific written amendment or
                variation signed or expressly accepted by both parties;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="b." /> the applicable Order Form or
                subscription agreement, but only in relation to the specific
                commercial terms stated in that document;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="c." /> the Data Processing Agreement, but
                only in relation to data protection and processing of Personal
                Data;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="d." /> any applicable Service Level
                Agreement, but only in relation to service levels and support;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="e." /> these Terms and Conditions; and
              </li>
              <li className={listItemText}>
                <ClauseHeading num="f." /> any other schedules, policies or
                documents incorporated into the Agreement.
              </li>
            </ul>
            <p className={clauseText}>
              <ClauseHeading num="4.4" /> A document shall not override these
              Terms merely because it contains additional or different
              information unless the document expressly states that it is
              intended to override or vary the relevant provision of these
              Terms.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="4.5" /> Where an Order Form contains a
              specific commercial term that differs from these Terms, the
              specific term in the Order Form shall apply to the relevant
              Subscription.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="4.6" /> Where a Data Processing Agreement
              contains provisions specifically relating to the processing and
              protection of Personal Data, those provisions shall prevail over
              these Terms to the extent of any inconsistency concerning data
              protection.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="4.7" /> Except as expressly provided in this
              Agreement, no statement, representation, proposal or other
              communication shall amend or vary the Agreement unless it is made
              in accordance with the variation provisions of this Agreement.
            </p>
          </section>

          {/* Section 5 */}
          <section id="section-5" className="mb-4 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-navy mb-6 leading-snug">
              5. ELIGIBILITY TO ENTER INTO THE AGREEMENT
            </h2>
            <p className={clauseText}>
              <ClauseHeading num="5.1" /> IMCAM Hub is a business-to-business
              software service intended for use by organisations, including
              immigration firms, immigration advisers, employers, businesses,
              sponsors and other professional or commercial organisations.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="5.2" /> The Customer must be a legal entity
              or organisation capable of entering into a legally binding
              agreement.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="5.3" /> By entering into this Agreement, the
              Customer represents and warrants that:
            </p>
            <ul className="pl-6 sm:pl-10 space-y-2 mb-4">
              <li className={listItemText}>
                <ClauseHeading num="a." /> it is legally entitled to enter into
                the Agreement;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="b." /> it has the necessary authority to
                enter into the Agreement and use IMCAM Hub for its business or
                organisational purposes;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="c." /> the individual accepting the
                Agreement on its behalf has the authority to bind the Customer;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="d." /> all information provided to e2e World in connection with the Customer&rsquo;s account
                and Subscription is accurate and complete; and
              </li>
              <li className={listItemText}>
                <ClauseHeading num="e." /> it will comply with all applicable
                laws and regulations in connection with its use of IMCAM Hub.
              </li>
            </ul>
            <p className={clauseText}>
              <ClauseHeading num="5.4" /> Where the Customer is an immigration
              firm, immigration adviser, employer, sponsor or other regulated
              or professionally supervised organisation, the Customer is
              responsible for maintaining any registration, authorisation,
              licence or professional status required for its activities.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="5.5" /> The Customer must not use IMCAM Hub
              for activities that the Customer is not legally authorised or
              permitted to undertake.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="5.6" /> Where the Customer provides access to
              IMCAM Hub to its employees, caseworkers, candidates, clients,
              businesses, sponsors, contractors or other third parties, the
              Customer is responsible for ensuring that such persons are
              appropriately authorised to access the relevant information and
              functionality.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="5.7" /> The Customer must notify e2e World promptly if:
            </p>
            <ul className="pl-6 sm:pl-10 space-y-2 mb-4">
              <li className={listItemText}>
                <ClauseHeading num="a." /> the Customer ceases to operate;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="b." /> the Customer&rsquo;s legal status
                changes in a way that affects its use of IMCAM Hub;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="c." /> the person responsible for the
                Customer&rsquo;s account no longer has authority to act on
                behalf of the Customer; or
              </li>
              <li className={listItemText}>
                <ClauseHeading num="d." /> the Customer becomes aware of any
                material issue affecting its legal authority to use IMCAM Hub.
              </li>
            </ul>
            <p className={clauseText}>
              <ClauseHeading num="5.8" /> e2e World may request
              reasonable information or documentation to verify the
              Customer&rsquo;s identity, legal status or authority where
              reasonably necessary for security, legal, regulatory or
              operational purposes.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="5.9" /> If e2e World reasonably
              believes that a person has entered into the Agreement without the
              authority to bind the Customer, e2e World may suspend
              or restrict the relevant account while the matter is
              investigated.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="5.10" /> Nothing in this Agreement grants the
              Customer any immigration, legal, regulatory or professional
              authorisation that it does not otherwise possess.
            </p>
          </section>

          <PartHeading num="2" title="IMCAM Hub Software & Licence" />

          {/* Section 6 */}
          <section id="section-6" className="mb-12 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-navy mb-6 leading-snug">
              6. DESCRIPTION OF IMCAM HUB
            </h2>
            <p className={clauseText}>
              <ClauseHeading num="6.1" /> IMCAM Hub is a cloud-based immigration
              case management and administration platform developed and operated
              by e2e World for use by organisations involved in UK
              immigration, sponsorship and related employment matters.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="6.2" /> IMCAM Hub is designed to provide
              Customers with a centralised platform through which they may
              manage immigration-related cases, Candidates, Clients, employees,
              Businesses, documents, information, communications, tasks,
              workflows and related activities.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="6.3" /> Depending on the Customer&rsquo;s
              Subscription and the functionality made available to the Customer,
              IMCAM Hub may include:
            </p>
            <ul className="pl-6 sm:pl-10 space-y-2 mb-4">
              <li className={listItemText}>
                <ClauseHeading num="a." /> immigration case creation and
                management;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="b." /> management of Candidates, Clients,
                employees and Businesses;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="c." /> caseworker and staff management;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="d." /> collection and management of
                information and documents;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="e." /> document uploading, storage, access
                and management;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="f." /> electronic signature functionality;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="g." /> email, notifications and other
                communication functionality;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="h." /> task, workflow and case progress
                management;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="i." /> reminders and notifications relating
                to cases and relevant dates;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="j." /> business and employee immigration
                management;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="k." /> sponsorship-related case management
                and information;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="l." /> reporting, administrative and
                management functionality;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="m." /> user and access management;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="n." /> audit trails and activity records;
                and
              </li>
              <li className={listItemText}>
                <ClauseHeading num="o." /> other features and functionality made
                available by e2e World from time to time.
              </li>
            </ul>
            <p className={clauseText}>
              <ClauseHeading num="6.4" /> The functionality available to a
              Customer may vary depending on the Customer&rsquo;s Subscription,
              user role, account configuration, technical environment and any
              additional services agreed between the parties.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="6.5" /> The Customer acknowledges that
              IMCAM Hub is a technology platform intended to assist with the
              administration and management of immigration-related matters. It
              does not replace the professional judgment, review or
              decision-making of the Customer or any appropriately qualified
              professional engaged by the Customer.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="6.6" /> IMCAM Hub software does not:
            </p>
            <ul className="pl-6 sm:pl-10 space-y-2 mb-4">
              <li className={listItemText}>
                <ClauseHeading num="a." /> automatically submit immigration
                applications to UKVI or any other government authority;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="b." /> automatically makes immigration
                decisions on behalf of a Customer, Candidate, Client or
                Business;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="c." /> independently determines whether a
                person qualifies for a particular immigration route;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="d." /> provides immigration advice
                independently of the Customer or its authorised professionals;
                or
              </li>
              <li className={listItemText}>
                <ClauseHeading num="e." /> communicates directly with UKVI or
                another government authority on behalf of the Customer.
              </li>
            </ul>
            <p className={clauseText}>
              <ClauseHeading num="6.7" /> The Customer acknowledges that e2e World may add, modify, improve, replace or discontinue
              features or functionality of IMCAM Hub from time to time, subject
              to the provisions of this Agreement concerning material changes
              to the Software.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="6.8" /> e2e World may provide
              different versions, packages, modules or levels of functionality
              within IMCAM Hub. The Customer&rsquo;s access to any particular
              feature is subject to the applicable Subscription and any
              additional terms agreed between the parties.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="6.9" /> Descriptions of IMCAM Hub provided in
              marketing materials, demonstrations, presentations or other
              promotional materials are for general information only and do not
              constitute a warranty that every described feature will be
              available to every Customer or remain available throughout the
              Subscription Period.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="6.10" /> Where a feature is described as being
              subject to development, testing, improvement or future release,
              e2e World does not guarantee that the feature will be
              released, made available by a particular date or included within
              the Customer&rsquo;s Subscription.
            </p>
          </section>

          {/* Section 7 */}
          <section id="section-7" className="mb-12 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-navy mb-6 leading-snug">
              7. LICENCE TO USE THE SOFTWARE
            </h2>
            <h3 className="text-base font-heading font-semibold text-navy mb-3">
              7.1 Grant of Licence
            </h3>
            <p className={clauseText}>
              Subject to the Customer&rsquo;s compliance with this Agreement and
              payment of all applicable Fees, e2e World grants the
              Customer a limited, non-exclusive, non-transferable and
              non-sublicensable right to access and use IMCAM Hub during the
              applicable Subscription Period for the Customer&rsquo;s internal
              business and professional purposes.
            </p>
            <h3 className="text-base font-heading font-semibold text-navy mb-3 mt-8">
              7.2 Scope of the Licence
            </h3>
            <p className={clauseText}>
              The licence granted under clause 7.1 permits the Customer and its
              Authorised Users to:
            </p>
            <ul className="pl-6 sm:pl-10 space-y-2 mb-4">
              <li className={listItemText}>
                <ClauseHeading num="a." /> access IMCAM Hub through the
                applicable user portals;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="b." /> uses the functionality made
                available under the Customer&rsquo;s Subscription;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="c." /> creates and manage Cases and related
                information;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="d." /> upload, access and manage Customer
                Data in accordance with the Customer&rsquo;s authorised use of
                the Software; and
              </li>
              <li className={listItemText}>
                <ClauseHeading num="e." /> permit Candidates, Businesses and
                other authorised third parties to access the relevant parts of
                IMCAM Hub where such access forms part of the Customer&rsquo;s
                intended use of the Software.
              </li>
            </ul>
            <h3 className="text-base font-heading font-semibold text-navy mb-3 mt-8">
              7.3 Internal Business Use
            </h3>
            <p className={clauseText}>
              The Customer may use IMCAM Hub for its own legitimate business and
              professional activities and for the management of immigration
              matters relating to its Clients, Candidates, employees, workers
              and Businesses.
            </p>
            <h3 className="text-base font-heading font-semibold text-navy mb-3 mt-8">
              7.4 No Transfer of Ownership
            </h3>
            <p className={clauseText}>
              The licence granted under this Agreement does not transfer to the
              Customer any ownership interest in:
            </p>
            <ul className="pl-6 sm:pl-10 space-y-2 mb-4">
              <li className={listItemText}>
                <ClauseHeading num="a." /> IMCAM Hub;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="b." /> the Software;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="c." /> the source code or object code;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="d." /> the underlying technology,
                architecture or infrastructure;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="e." /> the databases forming part of the
                Software;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="f." /> the user interface or design of the
                Software;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="g." /> e2e World&rsquo;s
                trademarks, branding or other intellectual property; or
              </li>
              <li className={listItemText}>
                <ClauseHeading num="h." /> any other Intellectual Property
                Rights owned or licensed by e2e World.
              </li>
            </ul>
            <h3 className="text-base font-heading font-semibold text-navy mb-3 mt-8">
              7.5 Ownership of Customer Data
            </h3>
            <p className={clauseText}>
              The Customer retains its rights and ownership in Customer Data,
              subject to the rights granted to e2e World under this
              Agreement and the applicable Data Processing Agreement.
            </p>
            <h3 className="text-base font-heading font-semibold text-navy mb-3 mt-8">
              7.6 No Resale or Sublicensing
            </h3>
            <p className={clauseText}>
              Unless expressly authorised in writing by e2e World, the
              Customer must not:
            </p>
            <ul className="pl-6 sm:pl-10 space-y-2 mb-4">
              <li className={listItemText}>
                <ClauseHeading num="a." /> sell, resell, rent, lease or
                otherwise commercialise access to IMCAM Hub;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="b." /> sublicense or grant rights to use
                IMCAM Hub to another organisation;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="c." /> makes IMCAM Hub available as a
                service to third parties for their own independent business
                purposes; or
              </li>
              <li className={listItemText}>
                <ClauseHeading num="d." /> permits another organisation to use
                the Customer&rsquo;s Subscription as though it were that
                organisation&rsquo;s own subscription.
              </li>
            </ul>
            <h3 className="text-base font-heading font-semibold text-navy mb-3 mt-8">
              7.7 Authorised Users
            </h3>
            <p className={clauseText}>
              The Customer may permit its Authorised Users to access IMCAM Hub
              only to the extent necessary for their role and in accordance with
              the Customer&rsquo;s Subscription.
            </p>
            <p className={clauseText}>
              The Customer remains responsible for managing its Authorised Users
              and ensuring that they comply with this Agreement.
            </p>
            <h3 className="text-base font-heading font-semibold text-navy mb-3 mt-8">
              7.8 Candidate and Business Access
            </h3>
            <p className={clauseText}>
              Where the Customer provides access to IMCAM Hub to a Candidate,
              Business, employee, worker, Client or other third party, that
              access does not transfer any ownership interest in IMCAM Hub to
              that person or organisation.
            </p>
            <p className={clauseText}>
              Such access is limited to the functionality and information made
              available to them through the relevant Portal and may be withdrawn
              or modified by the Customer or e2e World in accordance
              with this Agreement.
            </p>
            <h3 className="text-base font-heading font-semibold text-navy mb-3 mt-8">
              7.9 Licence Restrictions
            </h3>
            <p className={clauseText}>
              The Customer must not use the licence granted under this Agreement
              to:
            </p>
            <ul className="pl-6 sm:pl-10 space-y-2 mb-4">
              <li className={listItemText}>
                <ClauseHeading num="a." /> copy or reproduce IMCAM Hub except
                where expressly permitted by this Agreement or applicable law;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="b." /> modify, adapt, translate or create
                derivative works of the Software;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="c." /> reverse engineer, decompile,
                disassemble or otherwise attempt to obtain the source code of
                the Software, except to the extent that such restriction is
                prohibited by applicable law;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="d." /> access or use the Software for the
                purpose of developing a competing product or service;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="e." /> reproduce or commercially exploit
                the Software, Documentation or underlying functionality other
                than as expressly permitted under this Agreement;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="f." /> remove or alter proprietary notices,
                copyright notices, trademarks or other notices contained within
                the Software; or
              </li>
              <li className={listItemText}>
                <ClauseHeading num="g." /> circumvent or attempt to circumvent
                any technical, security or access-control measures used by e2e World.
              </li>
            </ul>
            <h3 className="text-base font-heading font-semibold text-navy mb-3 mt-8">
              7.10 Security and Access Controls
            </h3>
            <p className={clauseText}>
              The Customer must not attempt to obtain access to:
            </p>
            <ul className="pl-6 sm:pl-10 space-y-2 mb-4">
              <li className={listItemText}>
                <ClauseHeading num="a." /> areas of IMCAM Hub that are not
                authorised for its account or user role;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="b." /> another Customer&rsquo;s account or
                data;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="c." /> another Customer&rsquo;s Cases,
                Candidates, Clients, Businesses or documents; or
              </li>
              <li className={listItemText}>
                <ClauseHeading num="d." /> e2e World&rsquo;s internal
                administrative systems,
              </li>
              <li className={listItemText}>
                <ClauseHeading num="e." /> unless expressly authorised by e2e World.
              </li>
            </ul>
            <h3 className="text-base font-heading font-semibold text-navy mb-3 mt-8">
              7.11 Non-Transferability
            </h3>
            <p className={clauseText}>
              The Customer may not transfer, assign or otherwise dispose of its
              right to use IMCAM Hub to another organisation or entity without
              e2e World&rsquo;s prior written consent.
            </p>
            <h3 className="text-base font-heading font-semibold text-navy mb-3 mt-8">
              7.12 Suspension or Termination of the Licence
            </h3>
            <p className={clauseText}>
              The licence granted under this Section shall automatically cease
              when the Customer&rsquo;s right to use IMCAM Hub ends, including
              upon expiry or termination of the Subscription, subject to any
              rights the Customer may have under this Agreement to access or
              export its Customer Data.
            </p>
            <h3 className="text-base font-heading font-semibold text-navy mb-3 mt-8">
              7.13 Reservation of Rights
            </h3>
            <p className={clauseText}>
              All rights in and to IMCAM Hub and the Software that are not
              expressly granted to the Customer under this Agreement are
              reserved by e2e World and its licensors.
            </p>
            <h3 className="text-base font-heading font-semibold text-navy mb-3 mt-8">
              7.14 Improvements and Developments
            </h3>
            <p className={clauseText}>
              Any improvements, modifications, updates, developments,
              enhancements or new features incorporated into IMCAM Hub by e2e World shall remain the property of e2e World
              or its applicable licensors, unless expressly agreed otherwise in
              writing.
            </p>
          </section>

          {/* Section 8 */}
          <section id="section-8" className="mb-12 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-navy mb-6 leading-snug">
              8. SUBSCRIPTION MODEL
            </h2>
            <p className={clauseText}>
              <ClauseHeading num="8.1" /> IMCAM Hub is provided to the Customer
              on a subscription basis. The Customer does not purchase ownership
              of the Software and is granted access to IMCAM Hub only for the
              duration of its applicable Subscription.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="8.2" /> The Customer&rsquo;s Subscription
              shall be based on the subscription plan, package, modules, user
              allowances, functionality and other commercial terms agreed
              between the Customer and e2e World.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="8.3" /> The details of the Customer&rsquo;s
              Subscription, including where applicable:
            </p>
            <ul className="pl-6 sm:pl-10 space-y-2 mb-4">
              <li className={listItemText}>
                <ClauseHeading num="a." /> the Subscription plan or package;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="b." /> the Subscription Period;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="c." /> the Fees;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="d." /> the permitted number or type of
                Authorised Users;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="e." /> any additional features or modules;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="f." /> any applicable usage limits; and
              </li>
              <li className={listItemText}>
                <ClauseHeading num="g." /> any other applicable commercial
                terms,
              </li>
            </ul>
            <p className={clauseText}>
              shall be set out in the applicable Order Form, subscription
              confirmation, online purchasing process or other agreed
              documentation.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="8.4" /> Unless otherwise agreed in writing,
              access to IMCAM Hub is conditional upon the Customer maintaining a
              valid and paid Subscription.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="8.5" /> A Customer may only access and use
              the features and functionality included within its Subscription.
              Where a feature or functionality requires an additional
              subscription, module, user allowance or charge, the Customer must
              obtain the applicable upgrade or service before using that
              feature.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="8.6" /> e2e World may offer
              different Subscription plans or packages from time to time. The
              features, functionality, usage limits and Fees applicable to each
              plan may differ.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="8.7" /> Where the Customer wishes to increase
              its use of IMCAM Hub, including by adding additional users,
              modules, functionality or other chargeable services, e2e World may require the Customer to upgrade its Subscription or
              pay additional Fees.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="8.8" /> Where additional users, features or
              services are added during an existing Subscription Period, the
              applicable additional Fees may be charged from the date on which
              the additional services become available, subject to the
              applicable commercial terms.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="8.9" /> The Customer must not deliberately
              circumvent any Subscription limits, technical restrictions or
              access controls applicable to its Subscription.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="8.10" /> e2e World may monitor
              usage of IMCAM Hub for the purposes of administering the
              Customer&rsquo;s Subscription, maintaining security, preventing
              misuse and ensuring compliance with this Agreement.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="8.11" /> Where e2e World identifies
              that the Customer is materially exceeding the usage limits
              applicable to its Subscription, e2e World may contact
              the Customer to discuss an appropriate Subscription upgrade or
              additional Fees.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="8.12" /> Unless expressly agreed otherwise, a
              Subscription applies only to the Customer identified in the
              applicable Order Form or subscription account and may not be
              shared with or transferred to another organisation.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="8.13" /> The Customer is responsible for
              ensuring that its Subscription is appropriate for its actual use
              of IMCAM Hub and for notifying e2e World where its
              requirements change.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="8.14" /> e2e World may introduce
              new Subscription plans, packages or pricing structures from time
              to time. Any changes affecting an existing Customer&rsquo;s
              current Subscription shall be dealt with in accordance with the
              provisions of this Agreement relating to changes to Fees and
              Subscriptions.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="8.15" /> Nothing in this Agreement requires
              e2e World to provide every feature or functionality of
              IMCAM Hub to every Customer. The features and functionality
              available to the Customer shall be determined by the
              Customer&rsquo;s applicable Subscription and any additional
              services purchased by the Customer.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="8.16" /> The Customer&rsquo;s Subscription
              does not give the Customer any right to access, use or obtain the
              source code, underlying infrastructure, databases, systems or
              other technical components of IMCAM Hub except to the extent
              expressly permitted under this Agreement.
            </p>
          </section>

          {/* Section 9 */}
          <section id="section-9" className="mb-12 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-navy mb-6 leading-snug">
              9. PERMITTED USE
            </h2>
            <p className={clauseText}>
              <ClauseHeading num="9.1" /> Subject to this Agreement and the
              Customer&rsquo;s applicable Subscription, the Customer may use
              IMCAM Hub for its legitimate internal business and professional
              purposes in connection with the management and administration of
              UK immigration-related matters.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="9.2" /> The Customer may use IMCAM Hub to:
            </p>
            <ul className="pl-6 sm:pl-10 space-y-2 mb-4">
              <li className={listItemText}>
                <ClauseHeading num="a." /> create, manage and maintain Cases;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="b." /> manage information relating to
                Candidates, Clients, employees, workers and Businesses;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="c." /> assign Cases and tasks to authorised
                Caseworkers and other Authorised Users;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="d." /> collect information and documents
                from Candidates, Clients, employees, workers and Businesses;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="e." /> upload, store, access and manage
                Customer Data and documents;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="f." /> communicate with Candidates, Clients,
                employees, workers and Businesses through the communication
                functionality made available within IMCAM Hub;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="g." /> send and receive relevant
                notifications and reminders;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="h." /> obtain electronic signatures where
                the relevant functionality is available;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="i." /> monitor the progress and status of
                Cases;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="j." /> manage immigration-related deadlines,
                tasks and workflows;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="k." /> manage information relating to
                employees, workers and sponsorship matters where the relevant
                Business Portal functionality is available;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="l." /> generate or access reports and
                administrative information made available through the Software;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="m." /> manage Authorised Users and their
                access permissions;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="n." /> maintain records relating to
                immigration matters; and
              </li>
              <li className={listItemText}>
                <ClauseHeading num="o." /> use other functionality made
                available as part of the Customer&rsquo;s applicable
                Subscription.
              </li>
            </ul>
            <p className={clauseText}>
              <ClauseHeading num="9.3" /> The Customer may permit a Candidate
              to access the Candidate Portal for the purpose of providing,
              reviewing, uploading or signing information and documents relating
              to that Candidate&rsquo;s Case.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="9.4" /> The Customer may permit a Business or
              sponsor to access the Business Portal where such access is
              necessary or appropriate for the management of the Business&rsquo;s
              employees, workers, sponsorship or related immigration matters.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="9.5" /> The Customer may permit its Authorised
              Users to access and use IMCAM Hub according to their respective
              roles and permissions.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="9.6" /> The Customer may use information and
              documents stored within IMCAM Hub for the legitimate purposes for
              which that information was collected and in accordance with
              applicable law, the Customer&rsquo;s professional obligations and
              any applicable data protection requirements.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="9.7" /> The Customer may download or export
              Customer Data using the export or download functionality made
              available by IMCAM Hub, subject to any applicable technical
              limitations and the provisions of this Agreement.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="9.8" /> The Customer may use IMCAM Hub to
              assist with the preparation, organisation and management of
              immigration applications and related matters. However, the
              Customer remains responsible for reviewing and verifying
              information and documents before relying upon or submitting them.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="9.9" /> The Customer may use IMCAM Hub to
              support its internal workflows and processes, provided that such
              use complies with this Agreement and all applicable laws and
              regulations.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="9.10" /> The Customer must ensure that its
              use of IMCAM Hub is proportionate to the purposes for which access
              has been provided and that access to Personal Data and other
              confidential information is limited to persons who have a
              legitimate need to access it.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="9.11" /> The Customer may use IMCAM Hub only
              for lawful purposes and in a manner that does not infringe the
              rights of e2e World, another Customer, any Candidate,
              Client, Business, employee, worker or other person.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="9.12" /> The Customer may use IMCAM Hub on
              behalf of its Clients and Candidates where the Customer is
              authorised to provide the relevant immigration or related services
              and has the necessary authority to process and manage the relevant
              information.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="9.13" /> Where a Business uses the Business
              Portal, the Business may access and manage only the information
              and functionality made available to it through its authorised
              account and must not attempt to access information relating to
              other Customers, Businesses, Candidates or Cases.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="9.14" /> Where e2e World makes new
              features or functionality available to the Customer as part of
              its Subscription, the Customer may use those features in
              accordance with this Agreement and any specific terms applicable
              to those features.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="9.15" /> The Customer must use IMCAM Hub
              responsibly and in a manner that does not materially interfere
              with the operation, security, performance or availability of the
              Software for e2e World or other Customers.
            </p>
          </section>

          {/* Section 10 */}
          <section id="section-10" className="mb-12 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-navy mb-6 leading-snug">
              10. RESTRICTIONS ON USE
            </h2>
            <p className={clauseText}>
              <ClauseHeading num="10.1" /> The Customer must use IMCAM Hub only
              in accordance with this Agreement, its applicable Subscription
              and all applicable laws and regulations.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="10.2" /> The Customer must not, and must not
              permit any other person to:
            </p>
            <ul className="pl-6 sm:pl-10 space-y-2 mb-4">
              <li className={listItemText}>
                <ClauseHeading num="a." /> use IMCAM Hub for any unlawful,
                fraudulent, abusive or malicious purpose;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="b." /> use IMCAM Hub to infringe the rights
                of any person, including intellectual property, privacy,
                confidentiality or other legal rights;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="c." /> attempt to gain unauthorised access
                to IMCAM Hub, any Portal, another Customer&rsquo;s account or any
                systems, networks, databases or information connected to
                IMCAM Hub;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="d." /> access, view, modify, download or
                otherwise obtain another Customer&rsquo;s Customer Data, Cases,
                Candidates, Clients, Businesses or documents without proper
                authorisation;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="e." /> share login credentials between
                individuals where individual user accounts are required;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="f." /> permit a person to use another
                person&rsquo;s account or impersonate another user;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="g." /> circumvent, disable, interfere with
                or attempt to bypass any security, authentication, access-control
                or technical restrictions implemented by e2e World;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="h." /> introduce or transmit any virus,
                malware, ransomware, spyware, malicious code or other harmful
                software through or into IMCAM Hub;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="i." /> use IMCAM Hub to conduct or
                facilitate phishing, fraud, identity theft, harassment or other
                malicious activity;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="j." /> use IMCAM Hub to store or transmit
                content that is unlawful, defamatory, threatening, abusive,
                discriminatory, obscene or otherwise unlawful;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="k." /> use IMCAM Hub to send unsolicited
                bulk communications or spam in breach of applicable law;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="l." /> use automated systems, bots, scripts
                or other methods to access or interact with IMCAM Hub except
                where expressly permitted by e2e World;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="m." /> scrape, crawl, harvest or
                systematically extract information from IMCAM Hub except where
                expressly authorised;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="n." /> copy, reproduce, modify, adapt,
                translate or create derivative works of IMCAM Hub except as
                expressly permitted by this Agreement or applicable law;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="o." /> reverse engineer, decompile,
                disassemble or otherwise attempt to discover the source code,
                underlying algorithms or technical architecture of IMCAM Hub,
                except to the extent that such restriction is prohibited by
                applicable law;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="p." /> access or use IMCAM Hub for the
                purpose of developing, training, testing or improving a
                competing software product or service;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="q." /> reproduce, resell, lease, rent,
                sublicense, distribute or commercially exploit IMCAM Hub except
                as expressly permitted under this Agreement;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="r." /> use IMCAM Hub to provide services to
                unrelated third parties through the Customer&rsquo;s account in a
                manner that effectively resells or sublicenses the Software;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="s." /> remove, conceal or alter any
                copyright, trademark, proprietary or other notices contained in
                IMCAM Hub;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="t." /> attempt to obtain or use e2e World&rsquo;s source code, credentials, security keys, API
                keys or other confidential technical information without
                authorisation;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="u." /> interfere with or disrupt the
                operation, security, integrity or performance of IMCAM Hub or
                any systems connected to it;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="v." /> conduct or permit penetration
                testing, vulnerability scanning, load testing or other security
                testing of IMCAM Hub without e2e World&rsquo;s prior
                written consent;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="w." /> use IMCAM Hub in a way that could
                reasonably be expected to damage e2e World&rsquo;s
                systems, infrastructure, reputation or relationships with third
                parties;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="x." /> use IMCAM Hub to process information
                where the Customer does not have a lawful basis or appropriate
                authority to process that information;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="y." /> knowingly upload false, fraudulent,
                malicious or misleading information for the purpose of causing
                harm to another person or misusing the Software;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="z." /> use IMCAM Hub to facilitate or
                participate in illegal immigration activity, fraud or the
                creation or submission of fraudulent documents;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="aa." /> use IMCAM Hub to make automated
                immigration decisions or represent that e2e World or
                IMCAM Hub has independently determined that an individual
                qualifies for an immigration route;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="bb. ab." /> represent that IMCAM Hub is a
                government system, a system operated by UKVI or an official Home
                Office platform;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="cc. ac." /> represent that e2e World has provided immigration advice or made an immigration
                decision on behalf of the Customer unless e2e World
                has separately agreed to provide such services; or
              </li>
              <li className={listItemText}>
                <ClauseHeading num="dd. ad." /> otherwise use IMCAM Hub in a
                manner that materially conflicts with the purpose for which the
                Software is provided.
              </li>
            </ul>
            <p className={clauseText}>
              <ClauseHeading num="10.3" /> The Customer must not knowingly
              permit any Authorised User or other person accessing IMCAM Hub
              through the Customer&rsquo;s account to engage in any activity
              prohibited by this Section.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="10.4" /> The Customer must notify e2e World promptly if it becomes aware of:
            </p>
            <ul className="pl-6 sm:pl-10 space-y-2 mb-4">
              <li className={listItemText}>
                <ClauseHeading num="a." /> unauthorised access to its account;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="b." /> compromised login credentials;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="c." /> suspected security vulnerabilities;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="d." /> unauthorised access to Customer
                Data;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="e." /> misuse of IMCAM Hub; or
              </li>
              <li className={listItemText}>
                <ClauseHeading num="f." /> any other security incident that may
                affect IMCAM Hub or another Customer.
              </li>
            </ul>
            <p className={clauseText}>
              <ClauseHeading num="10.5" /> Nothing in this Section prevents the
              Customer from exercising any rights that cannot lawfully be
              excluded under applicable law.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="10.6" /> Where e2e World reasonably
              believes that the Customer or an Authorised User has breached this
              Section, e2e World may take appropriate protective
              measures in accordance with this Agreement, including restricting
              or suspending access where reasonably necessary to protect
              IMCAM Hub, Customer Data, other Customers or the security of the
              Software.
            </p>
          </section>

          {/* Section 11 */}
          <section id="section-11" className="mb-12 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-navy mb-6 leading-snug">
              11. SOFTWARE UPDATES AND CHANGES
            </h2>
            <p className={clauseText}>
              <ClauseHeading num="11.1" /> e2e World may from time to
              time develop, modify, update, improve, replace or otherwise change
              IMCAM Hub, including its features, functionality, user interface,
              technical architecture and underlying technology.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="11.2" /> Changes to IMCAM Hub may include:
            </p>
            <ul className="pl-6 sm:pl-10 space-y-2 mb-4">
              <li className={listItemText}>
                <ClauseHeading num="a." /> bug fixes and error corrections;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="b." /> security updates and improvements;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="c." /> performance and reliability
                improvements;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="d." /> changes to the user interface or
                user experience;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="e." /> changes to existing features;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="f." /> new features, modules or
                functionality;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="g." /> changes required to comply with
                applicable laws or regulatory requirements;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="h." /> changes required to maintain
                compatibility with third-party services or technologies; and
              </li>
              <li className={listItemText}>
                <ClauseHeading num="i." /> changes to the technical
                infrastructure used to operate the Software.
              </li>
            </ul>
            <p className={clauseText}>
              <ClauseHeading num="11.3" /> e2e World may deploy
              updates and changes without obtaining the Customer&rsquo;s prior
              consent where such changes:
            </p>
            <ul className="pl-6 sm:pl-10 space-y-2 mb-4">
              <li className={listItemText}>
                <ClauseHeading num="a." /> are reasonably necessary to maintain
                or improve the security, stability or performance of IMCAM Hub;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="b." /> are necessary to address technical
                issues or vulnerabilities;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="c." /> are required to comply with
                applicable law or regulatory requirements; or
              </li>
              <li className={listItemText}>
                <ClauseHeading num="d." /> do not materially reduce the core
                functionality of the Customer&rsquo;s Subscription.
              </li>
            </ul>
            <p className={clauseText}>
              <ClauseHeading num="11.4" /> e2e World may introduce
              new features or functionality from time to time. Such features may
              be made available to all Customers, selected Customers or
              Customers subscribing to particular plans or modules.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="11.5" /> Where a material change is
              reasonably expected to significantly reduce the core functionality
              of a Customer&rsquo;s existing Subscription, e2e World
              shall, where reasonably practicable, provide the Customer with
              reasonable advance notice.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="11.6" /> Where e2e World
              permanently removes a material feature that is expressly included
              in the Customer&rsquo;s paid Subscription and the removal
              materially reduces the core functionality of that Subscription,
              e2e World may, where appropriate:
            </p>
            <ul className="pl-6 sm:pl-10 space-y-2 mb-4">
              <li className={listItemText}>
                <ClauseHeading num="a." /> provide a substantially equivalent
                alternative feature;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="b." /> migrate the Customer to an
                alternative functionality or service;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="c." /> provide reasonable assistance in
                transitioning to an alternative solution; or
              </li>
              <li className={listItemText}>
                <ClauseHeading num="d." /> where appropriate, allow the
                Customer to terminate the affected Subscription in accordance
                with the applicable termination provisions.
              </li>
            </ul>
            <p className={clauseText}>
              <ClauseHeading num="11.7" /> Nothing in this Agreement requires
              e2e World to maintain any particular technology,
              infrastructure, third-party service, programming language, hosting
              provider or technical architecture for the operation of IMCAM Hub.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="11.8" /> e2e World may make changes
              to the underlying technology or infrastructure used to provide
              IMCAM Hub without notifying the Customer where those changes do not
              materially affect the Customer&rsquo;s use of the Software.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="11.9" /> The Customer acknowledges that
              software development and maintenance may occasionally require
              temporary unavailability of particular features or the Software
              as a whole. Such matters shall be dealt with in accordance with
              the applicable maintenance and availability provisions of this
              Agreement.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="11.10" /> e2e World may provide
              updates that require changes to the Customer&rsquo;s systems,
              devices, browsers, integrations or other technical environments.
              The Customer is responsible for maintaining systems and equipment
              reasonably necessary to access IMCAM Hub.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="11.11" /> The Customer must not attempt to
              prevent, disable or interfere with software updates, security
              updates or other technical changes implemented by e2e World.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="11.12" /> Where a change to IMCAM Hub is
              required because of a change in UK immigration law, government
              policy, Home Office or UKVI processes, regulatory requirements or
              other external circumstances, e2e World may make the
              necessary changes to the Software. Such changes do not constitute
              immigration advice or a guarantee that the Software will reflect
              every change immediately.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="11.13" /> Nothing in this Section limits any
              rights the Customer may have under applicable law or any express
              rights provided elsewhere in this Agreement.
            </p>
          </section>

          {/* Section 12 */}
          <section id="section-12" className="mb-4 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-navy mb-6 leading-snug">
              12. BETA, TRIAL AND DEMONSTRATION VERSIONS
            </h2>
            <p className={clauseText}>
              <ClauseHeading num="12.1" /> <span className="font-semibold text-navy">Free Trial</span>{" "}
              e2e World may, at its discretion, provide a Customer or
              prospective Customer with temporary access to IMCAM Hub on a free
              trial basis (&ldquo;Free Trial&rdquo;).
            </p>
            <p className={clauseText}>
              <ClauseHeading num="12.2" /> <span className="font-semibold text-navy">Trial Period</span>{" "}
              The duration of any Free Trial shall be determined by e2e World and may be specified in the relevant offer, registration
              process, Order Form or other communication provided to the
              Customer.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="12.3" /> <span className="font-semibold text-navy">Trial Features</span>{" "}
              The functionality, number of users, storage, access permissions
              and other features available during a Free Trial may be limited
              compared with a paid Subscription.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="12.4" /> <span className="font-semibold text-navy">No Obligation to Provide a Free Trial</span>{" "}
              e2e World is not required to provide a Free Trial to
              any particular Customer and may withdraw, limit or modify the
              availability of Free Trials at any time.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="12.5" /> <span className="font-semibold text-navy">Free Trial Data</span>{" "}
              Where a Customer enters Customer Data into IMCAM Hub during a Free
              Trial, that information shall be treated as Customer Data and
              handled in accordance with the applicable confidentiality and data
              protection provisions of this Agreement.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="12.6" /> <span className="font-semibold text-navy">End of Free Trial</span>
            </p>
            <p className={clauseText}>At the end of the Free Trial:</p>
            <ul className="pl-6 sm:pl-10 space-y-2 mb-4">
              <li className={listItemText}>
                <ClauseHeading num="a." /> the Customer may enter into a paid
                Subscription, subject to the applicable commercial terms;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="b." /> access may be suspended or
                terminated if the Customer does not enter into a paid
                Subscription; and
              </li>
              <li className={listItemText}>
                <ClauseHeading num="c." /> the Customer&rsquo;s data may be
                dealt with in accordance with the data retention and deletion
                provisions of this Agreement.
              </li>
            </ul>
            <p className={clauseText}>
              <ClauseHeading num="12.7" /> <span className="font-semibold text-navy">Conversion to Paid Subscription</span>
            </p>
            <p className={clauseText}>
              Where expressly agreed or clearly stated during the registration
              or trial process, a Free Trial may convert into a paid
              Subscription at the end of the trial period, subject to the
              applicable Subscription terms and Fees.
            </p>
            <p className={clauseText}>
              Where a Free Trial is not expressly stated to convert
              automatically, no paid Subscription shall arise solely because the
              Customer participated in the Free Trial.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="12.8" /> <span className="font-semibold text-navy">Demonstrations</span>
            </p>
            <p className={clauseText}>
              e2e World may provide demonstrations of IMCAM Hub to
              prospective Customers.
            </p>
            <p className={clauseText}>
              Demonstrations may be provided using:
            </p>
            <ul className="pl-6 sm:pl-10 space-y-2 mb-4">
              <li className={listItemText}>
                <ClauseHeading num="a." /> a demonstration environment;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="b." /> sample or fictional data;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="c." /> limited functionality; or
              </li>
              <li className={listItemText}>
                <ClauseHeading num="d." /> a live environment configured
                specifically for demonstration purposes.
              </li>
            </ul>
            <p className={clauseText}>
              <ClauseHeading num="12.9" /> <span className="font-semibold text-navy">Demonstration Accounts</span>{" "}
              Access provided solely for demonstration purposes must not be
              used as a substitute for a paid Subscription or for the
              Customer&rsquo;s ordinary business operations unless e2e World expressly permits such use.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="12.10" /> <span className="font-semibold text-navy">Beta or Pre-Release Features</span>{" "}
              e2e World may make certain features or functionality
              available on a beta, pilot, testing or pre-release basis
              (&ldquo;Beta Features&rdquo;).
            </p>
            <p className={clauseText}>
              <ClauseHeading num="12.11" /> <span className="font-semibold text-navy">Beta Features</span>{" "}
              Beta Features may:
            </p>
            <ul className="pl-6 sm:pl-10 space-y-2 mb-4">
              <li className={listItemText}>
                <ClauseHeading num="a." /> contain errors or defects;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="b." /> have limited functionality;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="c." /> be changed or withdrawn at any time;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="d." /> have limited availability or
                support; and
              </li>
              <li className={listItemText}>
                <ClauseHeading num="e." /> not yet have the same level of
                functionality, performance or reliability as fully released
                features.
              </li>
            </ul>
            <p className={clauseText}>
              <ClauseHeading num="12.12" /> <span className="font-semibold text-navy">Use of Beta Features</span>{" "}
              The Customer&rsquo;s use of Beta Features is voluntary. Unless
              otherwise expressly agreed in writing, Beta Features are provided
              for evaluation and testing purposes and are not guaranteed to
              remain available.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="12.13" /> <span className="font-semibold text-navy">No Reliance on Beta Features</span>{" "}
              The Customer should not rely on Beta Features as its sole means of
              carrying out critical business, immigration or regulatory
              activities.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="12.14" /> <span className="font-semibold text-navy">Free Trial and Beta Disclaimer</span>{" "}
              To the extent permitted by applicable law, Free Trial access and
              Beta Features are provided without any guarantee that they will be
              uninterrupted, error-free or suitable for the Customer&rsquo;s
              particular requirements.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="12.15" /> <span className="font-semibold text-navy">Misuse of Trial Access</span>{" "}
              The Customer must not:
            </p>
            <ul className="pl-6 sm:pl-10 space-y-2 mb-4">
              <li className={listItemText}>
                <ClauseHeading num="a." /> create multiple Free Trial accounts
                to avoid applicable Subscription restrictions;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="b." /> provide trial access to persons who
                are not authorised to use the trial;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="c." /> use trial access to conduct
                unauthorised security testing or attempt to compromise the
                Software;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="d." /> copy or reproduce the Software or
                its functionality; or
              </li>
              <li className={listItemText}>
                <ClauseHeading num="e." /> otherwise use trial access in breach
                of this Agreement.
              </li>
            </ul>
            <p className={clauseText}>
              <ClauseHeading num="12.16" /> <span className="font-semibold text-navy">End of Trial or Demonstration Access</span>{" "}
              e2e World may terminate or restrict Free Trial,
              demonstration or Beta access at any time where reasonably
              necessary for security, legal, technical or operational reasons.
            </p>
          </section>

          <PartHeading num="3" title="Users, Portals & Access" />

          {/* Section 13 */}
          <section id="section-13" className="mb-12 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-navy mb-6 leading-snug">
              13. USER TYPES AND ROLES
            </h2>
            <p className={clauseText}>
              <ClauseHeading num="13.1" /> IMCAM Hub provides role-based access
              to different categories of users according to their
              responsibilities and the purposes for which they are authorised to
              use the Software.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="13.2" /> Depending on the Customer&rsquo;s
              Subscription, configuration and use of IMCAM Hub, users may include
              Client/Admin Users, Caseworkers, Candidates, Business/Sponsor
              Users and Super Admin Users. e2e World may also make
              other user roles available where required for the operation or
              development of the Software.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="13.3" /> <span className="font-semibold text-navy">Client/Admin Users</span>{" "}
              A Client/Admin User is an individual authorised by the Customer to
              administer the Customer&rsquo;s account and, subject to the
              functionality and permissions available under the
              Customer&rsquo;s Subscription, may manage:
            </p>
            <ul className="pl-6 sm:pl-10 space-y-2 mb-4">
              <li className={listItemText}>
                <ClauseHeading num="a." /> the Customer&rsquo;s organisational
                account and profile;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="b." /> Authorised Users and their access;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="c." /> Cases, Candidates, Clients and
                Businesses;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="d." /> Caseworker assignments and
                workflows;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="e." /> documents, information and
                communications;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="f." /> permissions and access levels;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="g." /> reports and administrative
                information; and
              </li>
              <li className={listItemText}>
                <ClauseHeading num="h." /> other administrative functionality
                made available through IMCAM Hub.
              </li>
            </ul>
            <p className={clauseText}>
              <ClauseHeading num="13.4" /> <span className="font-semibold text-navy">Caseworkers</span>{" "}
              A Caseworker is an individual authorised by the Customer to manage
              or work on Cases through IMCAM Hub. A Caseworker&rsquo;s access
              shall be limited to the Cases, information, documents and
              functionality made available to that Caseworker according to the
              permissions assigned to them.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="13.5" /> <span className="font-semibold text-navy">Candidates</span>{" "}
              A Candidate is an individual whose immigration matter, application
              or related information is being managed through IMCAM Hub and who
              may be provided access to the Candidate Portal. A Candidate may
              use the functionality made available to provide, review, upload or
              sign information and documents, receive communications and carry
              out other activities relating to their Case.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="13.6" /> A Candidate does not become a
              Customer of e2e World solely because the Candidate is
              provided access to IMCAM Hub through a Customer.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="13.7" /> <span className="font-semibold text-navy">Business/Sponsor Users</span>{" "}
              A Business/Sponsor User is an individual authorised to access the
              Business/Sponsor Portal on behalf of a Business, employer, sponsor
              licence holder or other organisation connected with immigration or
              sponsorship matters managed through IMCAM Hub.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="13.8" /> A Business/Sponsor User&rsquo;s
              access shall be limited to the employees, workers, Candidates,
              Cases, documents, information and functionality that the user is
              authorised to access.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="13.9" /> <span className="font-semibold text-navy">Super Admin Users</span>{" "}
              A Super Admin User is an individual authorised by e2e World to access administrative functionality within IMCAM Hub
              for legitimate purposes connected with the administration,
              operation, maintenance, security and support of the Software.
              Super Admin access is further addressed in Section 18.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="13.10" /> The designation of a user type or
              role does not automatically entitle that user to access all
              information or functionality available within the relevant Portal.
              Actual access shall depend on the Customer&rsquo;s Subscription,
              account configuration and the permissions and access controls
              applied within IMCAM Hub.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="13.11" /> The designation of a user as a
              Client/Admin User, Caseworker, Candidate, Business/Sponsor User or
              other user type does not confirm that the individual holds any
              particular professional qualification, regulatory authorisation or
              legal authority, and does not of itself authorise that person to
              provide immigration or legal advice.
            </p>
          </section>

          {/* Section 14 */}
          <section id="section-14" className="mb-12 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-navy mb-6 leading-snug">
              14. CLIENT/ADMIN PORTAL
            </h2>
            <p className={clauseText}>
              <ClauseHeading num="14.1" /> The Client/Admin Portal is the part
              of IMCAM Hub made available to the Customer&rsquo;s authorised
              administrators and other permitted personnel for the management of
              the Customer&rsquo;s organisation, users, Cases and related
              information.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="14.2" /> Subject to the Customer&rsquo;s
              Subscription, configuration and assigned permissions, the
              Client/Admin Portal may enable authorised users to:
            </p>
            <ul className="pl-6 sm:pl-10 space-y-2 mb-4">
              <li className={listItemText}>
                <ClauseHeading num="a." /> create, view, update and manage
                Cases;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="b." /> create and manage records relating to
                Candidates, Clients, employees, workers and Businesses;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="c." /> add, invite, assign, manage, suspend
                or remove Authorised Users;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="d." /> assign Cases, tasks and
                responsibilities to Caseworkers or other permitted users;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="e." /> configure or manage user roles and
                permissions where such functionality is available;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="f." /> upload, access, organise and manage
                documents and information;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="g." /> manage communications, notifications,
                reminders, tasks and workflows;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="h." /> view case progress, status
                information and relevant dates;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="i." /> manage access provided to Candidates
                and Business/Sponsor Users;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="j." /> access reports, activity information
                and administrative records made available by the Software;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="k." /> manage relevant organisational or
                account settings; and
              </li>
              <li className={listItemText}>
                <ClauseHeading num="l." /> use other administrative
                functionality included within the Customer&rsquo;s Subscription.
              </li>
            </ul>
            <p className={clauseText}>
              <ClauseHeading num="14.3" /> The Customer is responsible for
              determining which individuals are authorised to use the
              Client/Admin Portal and for ensuring that administrative access is
              granted only to persons who reasonably require it.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="14.4" /> Client/Admin Users may have access to
              significant amounts of Customer Data and Personal Data. The
              Customer must therefore take reasonable care when assigning
              administrative permissions and must promptly review or remove such
              permissions where they are no longer required.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="14.5" /> Where the Client/Admin Portal permits
              a user to change permissions, assignments, account settings or
              other configuration, the Customer is responsible for reviewing
              those changes and ensuring that they are appropriate for the
              Customer&rsquo;s organisation and use of IMCAM Hub.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="14.6" /> e2e World is not
              responsible for an access decision, Case assignment or permission
              setting made by a Client/Admin User acting within the
              functionality made available to the Customer, except to the extent
              that responsibility cannot lawfully be excluded.
            </p>
          </section>

          {/* Section 15 */}
          <section id="section-15" className="mb-12 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-navy mb-6 leading-snug">
              15. CASEWORKER PORTAL
            </h2>
            <p className={clauseText}>
              <ClauseHeading num="15.1" /> The Caseworker Portal is the part of
              IMCAM Hub made available to Caseworkers and other authorised
              personnel for the management and administration of Cases assigned
              or otherwise made accessible to them.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="15.2" /> Subject to the Customer&rsquo;s
              Subscription and the permissions assigned to the relevant user,
              the Caseworker Portal may enable a Caseworker to:
            </p>
            <ul className="pl-6 sm:pl-10 space-y-2 mb-4">
              <li className={listItemText}>
                <ClauseHeading num="a." /> view and manage assigned Cases;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="b." /> view and update case information and
                status;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="c." /> collect, upload, review and manage
                documents and information;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="d." /> communicate with Candidates, Clients,
                Businesses and other permitted users through available
                communication functionality;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="e." /> create, assign, update or complete
                tasks and workflow activities;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="f." /> manage relevant dates, deadlines,
                reminders and notifications;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="g." /> request information, documents or
                electronic signatures where functionality permits;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="h." /> prepare and maintain records relating
                to immigration matters;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="i." /> access information provided by
                Candidates or Businesses where authorised;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="j." /> generate or access reports and
                case-related information made available to that user; and
              </li>
              <li className={listItemText}>
                <ClauseHeading num="k." /> use other case-management
                functionality made available under the Customer&rsquo;s
                Subscription and the user&rsquo;s permissions.
              </li>
            </ul>
            <p className={clauseText}>
              <ClauseHeading num="15.3" /> A Caseworker must access only those
              Cases and Customer Data that the Caseworker is authorised to
              access and must not attempt to obtain access to Cases, information
              or functionality outside the permissions assigned to them.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="15.4" /> The Customer is responsible for
              allocating Cases and permissions to Caseworkers and for ensuring
              that access remains appropriate to their role, responsibilities
              and authority.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="15.5" /> Use of the title or role
              &lsquo;Caseworker&rsquo; within IMCAM Hub is a software access
              designation only. It does not constitute confirmation by e2e World that the user is qualified, regulated or otherwise
              authorised to provide immigration advice or services.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="15.6" /> The Customer remains responsible for
              the professional review, supervision and regulatory compliance of
              persons carrying out immigration-related work through its account.
            </p>
          </section>

          {/* Section 16 */}
          <section id="section-16" className="mb-12 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-navy mb-6 leading-snug">
              16. CANDIDATE PORTAL
            </h2>
            <p className={clauseText}>
              <ClauseHeading num="16.1" /> The Candidate Portal is the part of
              IMCAM Hub through which a Candidate may participate in the
              management of their immigration matter where access has been
              provided by or on behalf of the Customer.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="16.2" /> Subject to the functionality made
              available and the permissions applied to the Candidate&rsquo;s
              account, the Candidate Portal may enable a Candidate to:
            </p>
            <ul className="pl-6 sm:pl-10 space-y-2 mb-4">
              <li className={listItemText}>
                <ClauseHeading num="a." /> provide personal, immigration,
                employment and other information relevant to their Case;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="b." /> review information relating to their
                Case where made available;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="c." /> upload, view or download documents;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="d." /> respond to requests for information
                or documents;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="e." /> provide electronic signatures where
                the relevant functionality is available;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="f." /> receive communications,
                notifications, reminders and requests;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="g." /> view information concerning the
                progress or status of their Case where made available; and
              </li>
              <li className={listItemText}>
                <ClauseHeading num="h." /> carry out other Case-related
                activities permitted through the Candidate Portal.
              </li>
            </ul>
            <p className={clauseText}>
              <ClauseHeading num="16.3" /> Candidate access is provided in
              connection with a Case managed through the Customer&rsquo;s
              account and does not create a separate Subscription or contractual
              relationship between the Candidate and e2e World solely
              by reason of that access.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="16.4" /> The Customer is responsible for
              deciding whether and when Candidate access should be provided and
              for determining, where the functionality permits, the information
              and functionality made available to the Candidate.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="16.5" /> A Candidate must use their account
              only for their own authorised immigration matter unless expressly
              authorised otherwise and must not access or attempt to access
              information relating to another person or Case.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="16.6" /> Information or documents provided
              through the Candidate Portal remain subject to review and
              verification by the Customer or other appropriately authorised
              person. The availability of information within IMCAM Hub does not
              mean that e2e World has verified its accuracy,
              authenticity, completeness or suitability for an immigration
              application.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="16.7" /> The Customer is responsible for
              ensuring that any access given to a Candidate is appropriate and
              lawful, including where the Candidate is permitted to view
              Personal Data, documents or communications relating to other
              persons.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="16.8" /> Where Candidate access is no longer
              required, the Customer should remove or restrict that access in
              accordance with its responsibilities under this Agreement.
            </p>
          </section>

          {/* Section 17 */}
          <section id="section-17" className="mb-12 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-navy mb-6 leading-snug">
              17. BUSINESS/SPONSOR PORTAL
            </h2>
            <p className={clauseText}>
              <ClauseHeading num="17.1" /> The Business/Sponsor Portal is the
              part of IMCAM Hub made available to authorised Businesses,
              employers, sponsor licence holders or other organisations involved
              in immigration, employment or sponsorship matters managed through
              the Software.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="17.2" /> Subject to the Customer&rsquo;s
              Subscription, configuration and the permissions applied to the
              relevant account, the Business/Sponsor Portal may enable
              authorised users to:
            </p>
            <ul className="pl-6 sm:pl-10 space-y-2 mb-4">
              <li className={listItemText}>
                <ClauseHeading num="a." /> add or manage information relating to
                employees, workers or prospective employees;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="b." /> view immigration Cases and related
                information made available to the Business;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="c." /> provide, upload, access or manage
                relevant information and documents;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="d." /> view relevant visa, immigration or
                sponsorship dates and reminders;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="e." /> respond to requests for information
                or documents;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="f." /> communicate with the Customer or
                relevant Caseworkers through available communication
                functionality;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="g." /> view case progress or status
                information made available to the Business;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="h." /> access relevant documents,
                correspondence or other information made available by the
                Customer;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="i." /> manage sponsorship-related
                information and activities where the relevant functionality is
                available; and
              </li>
              <li className={listItemText}>
                <ClauseHeading num="j." /> use other Business/Sponsor Portal
                functionality made available under the applicable Subscription.
              </li>
            </ul>
            <p className={clauseText}>
              <ClauseHeading num="17.3" /> A Business/Sponsor User may access
              only the employees, workers, Candidates, Cases and information
              made available to that Business and must not attempt to access
              information belonging to another Customer, Business or person
              without proper authority.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="17.4" /> The Customer is responsible for
              determining the scope of access provided to a Business/Sponsor
              User and, where applicable, for ensuring that the Business is
              appropriately authorised to access information relating to the
              relevant Candidates, employees or workers.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="17.5" /> Use of the Business/Sponsor Portal
              does not transfer to e2e World responsibility for the
              Business&rsquo;s sponsor licence duties, immigration compliance,
              employment obligations, record-keeping duties or other legal or
              regulatory responsibilities.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="17.6" /> Information, reminders, dates or
              records made available through the Business/Sponsor Portal are
              intended to assist administration and management. The Business and
              the Customer remain responsible for verifying information and
              taking any action required by law, regulation or applicable Home
              Office requirements.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="17.7" /> Where a Business receives immigration
              advice, legal advice or professional services in connection with
              a Case, responsibility for those services remains with the person
              or organisation providing them and does not arise merely from use
              of IMCAM Hub.
            </p>
          </section>

          {/* Section 18 */}
          <section id="section-18" className="mb-12 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-navy mb-6 leading-snug">
              18. SUPER ADMIN / e2e WORLD ACCESS
            </h2>
            <p className={clauseText}>
              <ClauseHeading num="18.1" /> e2e World may provide
              authorised personnel with Super Admin access to IMCAM Hub where
              such access is reasonably necessary for the administration,
              operation, maintenance, security and support of the Software.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="18.2" /> Subject to the technical design and
              controls implemented within IMCAM Hub, Super Admin functionality
              may be used for legitimate purposes including:
            </p>
            <ul className="pl-6 sm:pl-10 space-y-2 mb-4">
              <li className={listItemText}>
                <ClauseHeading num="a." /> creating, configuring and
                administering Customer accounts and Subscriptions;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="b." /> managing platform-level settings and
                functionality;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="c." /> providing technical support and
                troubleshooting;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="d." /> investigating faults, errors,
                incidents or suspected misuse;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="e." /> maintaining the security, integrity,
                availability and performance of IMCAM Hub;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="f." /> implementing updates, maintenance and
                technical changes;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="g." /> assisting with authorised account or
                access-management requests; and
              </li>
              <li className={listItemText}>
                <ClauseHeading num="h." /> performing other activities
                reasonably necessary to provide, protect and administer
                IMCAM Hub.
              </li>
            </ul>
            <p className={clauseText}>
              <ClauseHeading num="18.3" /> Super Admin access does not give e2e World personnel an unrestricted right to use Customer
              Data for unrelated purposes. Any access to Customer Data must be
              limited to legitimate purposes connected with the provision,
              support, security or administration of IMCAM Hub, or as otherwise
              permitted or required by the Agreement or applicable law.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="18.4" /> Where access to Customer Data is
              required for support or troubleshooting, e2e World shall
              take reasonable steps to limit access to the information
              reasonably necessary for the relevant purpose.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="18.5" /> e2e World shall apply
              appropriate organisational and technical controls to Super Admin
              access, which may include individual accounts, authentication
              controls, role-based permissions, access logging and periodic
              review, as appropriate to the Software and the risks involved.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="18.6" /> Personnel authorised to exercise
              Super Admin access shall be subject to appropriate confidentiality
              obligations.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="18.7" /> Super Admin access to Customer Data
              shall also be subject to the data protection, confidentiality and
              security provisions of this Agreement and any applicable Data
              Processing Agreement.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="18.8" /> e2e World may restrict,
              suspend or revoke Super Admin privileges granted to its personnel
              where such access is no longer required or where necessary for
              security or operational reasons.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="18.9" /> Nothing in this Section requires e2e World to access Customer Data routinely, and the
              existence of Super Admin functionality does not make e2e World responsible for reviewing, monitoring or verifying the
              Customer&rsquo;s Cases, documents, immigration work or user
              activity unless expressly agreed otherwise.
            </p>
          </section>

          {/* Section 19 */}
          <section id="section-19" className="mb-12 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-navy mb-6 leading-snug">
              19. USER ACCOUNTS AND CREDENTIALS
            </h2>
            <p className={clauseText}>
              <ClauseHeading num="19.1" /> Access to IMCAM Hub may require an
              individual user account. Where individual accounts are required,
              each user must use their own account and credentials.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="19.2" /> The Customer must ensure, so far as
              reasonably practicable, that account registration information for
              its Authorised Users is accurate and kept reasonably up to date.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="19.3" /> Users must keep passwords,
              authentication details and other account credentials confidential
              and must not disclose or share them with another person except
              where expressly permitted by e2e World.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="19.4" /> The Customer must not knowingly
              permit multiple individuals to use a single individual user
              account where IMCAM Hub requires separate user accounts.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="19.5" /> The Customer is responsible for
              taking reasonable steps to ensure that its Authorised Users:
            </p>
            <ul className="pl-6 sm:pl-10 space-y-2 mb-4">
              <li className={listItemText}>
                <ClauseHeading num="a." /> choose and maintain secure
                credentials in accordance with any requirements communicated
                through IMCAM Hub;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="b." /> do not share passwords or
                authentication details;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="c." /> do not leave accounts accessible to
                unauthorised persons;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="d." /> use any multi-factor or additional
                authentication measures required by e2e World;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="e." /> sign out of or otherwise secure
                accounts and devices where appropriate; and
              </li>
              <li className={listItemText}>
                <ClauseHeading num="f." /> promptly report suspected loss,
                compromise or unauthorised use of credentials.
              </li>
            </ul>
            <p className={clauseText}>
              <ClauseHeading num="19.6" /> The Customer must notify e2e World promptly if it becomes aware or reasonably suspects that
              an account or credential has been compromised or used without
              authorisation.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="19.7" /> e2e World may require a
              user to reset credentials, re-authenticate, use additional
              security measures or temporarily restrict access where reasonably
              necessary to protect the Software, Customer Data or other users.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="19.8" /> e2e World may disable or
              suspend a user account where it reasonably believes that the
              account is compromised, being misused, presents a security risk or
              is being used in breach of this Agreement.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="19.9" /> The Customer is responsible for
              ensuring that email addresses and other contact details used for
              account invitations, password resets and security communications
              are controlled by the intended user or otherwise appropriately
              authorised.
            </p>
          </section>

          {/* Section 20 */}
          <section id="section-20" className="mb-12 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-navy mb-6 leading-snug">
              20. USER PERMISSIONS AND ACCESS CONTROLS
            </h2>
            <p className={clauseText}>
              <ClauseHeading num="20.1" /> IMCAM Hub may use role-based
              permissions and other access controls to determine which Portals,
              Cases, information, documents, functions and administrative
              features a user may access.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="20.2" /> The Customer is responsible for
              assigning and maintaining appropriate permissions for its
              Authorised Users where such permissions are under the
              Customer&rsquo;s control.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="20.3" /> The Customer must apply the principle
              that users should be given only the access reasonably necessary
              for their role and responsibilities.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="20.4" /> Permissions may differ according to
              user type, Case assignment, organisational relationship,
              Subscription, configuration and other access rules implemented
              within IMCAM Hub.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="20.5" /> Where the Customer gives a user
              permission to access Personal Data, confidential information or
              documents, the Customer is responsible for ensuring that such
              access is appropriate, lawful and consistent with its own
              professional, contractual and data protection obligations.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="20.6" /> A user must not attempt to bypass,
              circumvent, alter or interfere with permissions or access controls
              in order to obtain access to information or functionality that has
              not been made available to that user.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="20.7" /> e2e World may implement
              platform-level access restrictions or security controls where
              reasonably necessary to protect IMCAM Hub, Customer Data, another
              Customer or the integrity of the Software.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="20.8" /> Where e2e World becomes
              aware of a material access-control issue affecting the
              Customer&rsquo;s account, e2e World may take reasonable
              protective action, including restricting access while the issue is
              investigated.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="20.9" /> The Customer should periodically
              review user permissions and must review them when there is a
              material change in a user&rsquo;s role, responsibilities,
              employment, engagement or need for access.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="20.10" /> Access controls are intended to
              reduce unauthorised access but do not remove the
              Customer&rsquo;s responsibility to manage its users, permissions,
              devices, credentials and internal security appropriately.
            </p>
          </section>

          {/* Section 21 */}
          <section id="section-21" className="mb-12 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-navy mb-6 leading-snug">
              21. ADDING, REMOVING AND MANAGING USERS
            </h2>
            <p className={clauseText}>
              <ClauseHeading num="21.1" /> Subject to the Customer&rsquo;s
              Subscription and the functionality made available within IMCAM Hub,
              authorised Client/Admin Users may add, invite, assign, manage,
              suspend or remove Authorised Users.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="21.2" /> Before creating or inviting a user,
              the Customer must ensure that:
            </p>
            <ul className="pl-6 sm:pl-10 space-y-2 mb-4">
              <li className={listItemText}>
                <ClauseHeading num="a." /> the person has a legitimate need to
                access IMCAM Hub;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="b." /> the Customer has authority to provide
                that person with access;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="c." /> the proposed role and permissions are
                appropriate;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="d." /> any Personal Data or confidential
                information to which the person may gain access can lawfully be
                made available to them; and
              </li>
              <li className={listItemText}>
                <ClauseHeading num="e." /> the access does not breach the
                Customer&rsquo;s Subscription or this Agreement.
              </li>
            </ul>
            <p className={clauseText}>
              <ClauseHeading num="21.3" /> The Customer is responsible for
              maintaining an appropriate process for reviewing its Authorised
              Users and removing or restricting access when it is no longer
              required.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="21.4" /> The Customer must remove or
              appropriately restrict a user&rsquo;s access without undue delay
              where the user:
            </p>
            <ul className="pl-6 sm:pl-10 space-y-2 mb-4">
              <li className={listItemText}>
                <ClauseHeading num="a." /> leaves the Customer&rsquo;s
                organisation or ceases to work on the relevant matters;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="b." /> no longer requires access for their
                role;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="c." /> is no longer authorised to act on
                behalf of the Customer;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="d." /> has had their responsibilities
                materially changed; or
              </li>
              <li className={listItemText}>
                <ClauseHeading num="e." /> presents a known or reasonably
                suspected security or confidentiality risk.
              </li>
            </ul>
            <p className={clauseText}>
              <ClauseHeading num="21.5" /> Where a Case is reassigned between
              users, the Customer is responsible for ensuring that permissions
              are updated as appropriate and that former users do not retain
              access that is no longer required.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="21.6" /> Where the Customer provides Candidate
              or Business/Sponsor Portal access, the Customer is responsible for
              determining when that access should begin, what it should include
              and when it should be restricted or removed.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="21.7" /> e2e World may assist with
              account or user-management changes where support is reasonably
              required, but such assistance does not transfer responsibility for
              the Customer&rsquo;s decisions concerning who should be authorised
              to access its Customer Data.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="21.8" /> e2e World may suspend,
              disable or remove a user account where permitted by this
              Agreement, including where required for security, legal,
              regulatory, technical or operational reasons.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="21.9" /> Removal or suspension of a
              user&rsquo;s access does not necessarily delete records of that
              user&rsquo;s previous activity, communications, Case work or other
              information where retention is necessary for audit, security,
              legal, contractual, data protection or legitimate record-keeping
              purposes.
            </p>
          </section>

          {/* Section 22 */}
          <section id="section-22" className="mb-12 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-navy mb-6 leading-snug">
              22. CUSTOMER RESPONSIBILITY FOR USER ACTIVITY
            </h2>
            <p className={clauseText}>
              <ClauseHeading num="22.1" /> The Customer is responsible for
              managing the persons to whom it provides or authorises access to
              IMCAM Hub and for taking reasonable steps to ensure that its
              Authorised Users comply with the provisions of this Agreement
              applicable to their use of the Software.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="22.2" /> Subject to applicable law and the
              other provisions of this Agreement, the Customer is responsible
              for activity carried out through accounts created, invited or
              authorised by the Customer where that activity is within the
              user&rsquo;s authorised access or results from the Customer&rsquo;s
              failure to take reasonable steps to manage or secure such access.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="22.3" /> The Customer is responsible for:
            </p>
            <ul className="pl-6 sm:pl-10 space-y-2 mb-4">
              <li className={listItemText}>
                <ClauseHeading num="a." /> deciding who should be given access
                to its account and Customer Data;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="b." /> assigning appropriate roles and
                permissions;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="c." /> maintaining appropriate internal
                authorisation procedures;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="d." /> ensuring users are informed of
                relevant security and confidentiality requirements;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="e." /> reviewing and updating user access
                when circumstances change;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="f." /> promptly removing access that is no
                longer required;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="g." /> reporting suspected unauthorised
                access or credential compromise; and
              </li>
              <li className={listItemText}>
                <ClauseHeading num="h." /> taking reasonable steps to
                investigate and address misuse by persons under its control.
              </li>
            </ul>
            <p className={clauseText}>
              <ClauseHeading num="22.4" /> The Customer must not knowingly allow
              a person whose access has been suspended or terminated to regain
              access through another user&rsquo;s account or credentials.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="22.5" /> The Customer remains responsible for
              decisions, instructions, Case actions, document management,
              communications and other activities carried out by its Authorised
              Users in the course of the Customer&rsquo;s use of IMCAM Hub,
              except to the extent that the relevant activity results from a
              fault, breach or unauthorised act for which e2e World is
              responsible under this Agreement or applicable law.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="22.6" /> The Customer must notify e2e World promptly if it becomes aware of material misuse of
              IMCAM Hub by an Authorised User or of circumstances that may
              materially affect the security or integrity of the
              Customer&rsquo;s account.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="22.7" /> Nothing in this Section makes the
              Customer responsible for unauthorised access caused solely by a
              security failure within IMCAM Hub for which e2e World is
              responsible under this Agreement, nor does it exclude or limit any
              liability that cannot lawfully be excluded or limited.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="22.8" /> The allocation of responsibility for
              user activity under this Section is subject to the data
              protection, confidentiality, security, suspension, termination and
              liability provisions elsewhere in this Agreement.
            </p>
          </section>

          <PartHeading num="4" title="Immigration-Specific Provisions" />

          {/* Section 23 */}
          <section id="section-23" className="mb-12 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-navy mb-6 leading-snug">
              23. NATURE AND PURPOSE OF IMCAM HUB
            </h2>
            <p className={clauseText}>
              <ClauseHeading num="23.1" /> IMCAM Hub is a technology and
              case-management platform designed to assist Customers with the
              administration, organisation and management of UK immigration,
              sponsorship and related matters.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="23.2" /> The Software may assist Customers and
              their Authorised Users with activities including the collection and
              organisation of information, management of Cases, documents and
              communications, allocation of tasks, monitoring of relevant dates
              and workflows, and other administrative activities made available
              under the Customer&rsquo;s Subscription.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="23.3" /> IMCAM Hub is intended to support, and
              not replace, the professional judgement, legal assessment,
              regulatory responsibilities, review or decision-making of the
              Customer or any appropriately authorised professional involved in a
              Case.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="23.4" /> The availability of a feature,
              workflow, template, field, reminder, status, document or other
              functionality within IMCAM Hub does not constitute confirmation that
              the feature or information is suitable, complete or legally
              sufficient for a particular immigration matter.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="23.5" /> Unless e2e World has
              expressly entered into a separate written agreement to provide
              professional services, the provision of IMCAM Hub itself does not
              constitute the provision of immigration advice, legal advice or
              regulated immigration services by e2e World through the
              Software.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="23.6" /> The Customer remains responsible for
              determining how IMCAM Hub is used within its organisation and for
              ensuring that its use of the Software is appropriate for the
              immigration and related activities undertaken by the Customer.
            </p>
          </section>

          {/* Section 24 */}
          <section id="section-24" className="mb-12 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-navy mb-6 leading-snug">
              24. NO GUARANTEE OF IMMIGRATION OUTCOME
            </h2>
            <p className={clauseText}>
              <ClauseHeading num="24.1" /> e2e World does not warrant
              or guarantee that use of IMCAM Hub will result in the grant,
              extension, variation, maintenance or other favourable outcome of
              any visa, immigration permission, sponsor licence, sponsorship
              matter or other immigration-related application or process.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="24.2" /> Immigration decisions are made by the
              Home Office, UKVI or other competent authority according to the
              applicable law, policy, evidence and circumstances of the relevant
              matter.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="24.3" /> No feature, status, workflow,
              reminder, template, document, calculation, report or other output
              generated, stored or displayed within IMCAM Hub shall be interpreted
              as a prediction or guarantee of an immigration outcome.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="24.4" /> The Customer must not represent to a
              Candidate, Client, Business or other person that use of IMCAM Hub
              guarantees or materially assures a particular immigration outcome.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="24.5" /> Nothing in this Section limits any
              obligation expressly undertaken by e2e World under this
              Agreement in relation to the operation of the Software.
            </p>
          </section>

          {/* Section 25 */}
          <section id="section-25" className="mb-12 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-navy mb-6 leading-snug">
              25. IMMIGRATION ADVICE AND PROFESSIONAL RESPONSIBILITY
            </h2>
            <p className={clauseText}>
              <ClauseHeading num="25.1" /> IMCAM Hub is software used to support
              immigration case management. The Software does not, by itself,
              provide immigration or legal advice and must not be treated as a
              substitute for advice or professional judgement from a person who
              is appropriately authorised where such authorisation is required.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="25.2" /> Where the Customer provides
              immigration advice or immigration services, the Customer is
              responsible for ensuring that such advice or services are provided
              by persons who are appropriately authorised, supervised and
              competent in accordance with applicable law and regulatory
              requirements.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="25.3" /> The Customer remains responsible for
              all professional assessments and decisions made in connection with
              its Cases, including:
            </p>
            <ul className="pl-6 sm:pl-10 space-y-2 mb-4">
              <li className={listItemText}>
                <ClauseHeading num="a." /> identifying the appropriate
                immigration route or process;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="b." /> assessing eligibility and relevant
                legal requirements;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="c." /> determining the information and
                evidence required;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="d." /> reviewing and interpreting
                information and documents;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="e." /> advising Candidates, Clients,
                Businesses or other persons;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="f." /> deciding whether and when an
                application or other submission should be made; and
              </li>
              <li className={listItemText}>
                <ClauseHeading num="g." /> reviewing the final contents of any
                application, representation, document or submission.
              </li>
            </ul>
            <p className={clauseText}>
              <ClauseHeading num="25.4" /> The presence of information,
              templates, workflows or other material within IMCAM Hub does not
              transfer professional responsibility for a Case to e2e World.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="25.5" /> Where e2e World separately
              provides immigration, legal or professional services outside the
              provision of IMCAM Hub, those services may be subject to separate
              terms and nothing in this Agreement is intended to alter the
              allocation of responsibility under those separate terms.
            </p>
          </section>

          {/* Section 26 */}
          <section id="section-26" className="mb-12 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-navy mb-6 leading-snug">
              26. CUSTOMER&rsquo;S REGULATORY RESPONSIBILITIES
            </h2>
            <p className={clauseText}>
              <ClauseHeading num="26.1" /> The Customer is responsible for
              identifying and complying with all legal, professional and
              regulatory requirements applicable to its activities and its use of
              IMCAM Hub.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="26.2" /> Where the Customer or any person
              acting through the Customer&rsquo;s account is required by law to
              hold a particular registration, authorisation, licence, practising
              status or other regulatory permission, the Customer must ensure
              that the relevant requirement is satisfied and maintained.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="26.3" /> The Customer is responsible for
              ensuring appropriate supervision of its personnel and for applying
              any professional standards, codes of conduct, record-keeping
              requirements, client-care obligations or other regulatory duties
              applicable to its activities.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="26.4" /> The Customer must not use, or permit
              another person to use, IMCAM Hub to carry out regulated immigration
              activities where the relevant person is not legally permitted to
              carry out those activities.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="26.5" /> e2e World may request
              reasonable information concerning the Customer&rsquo;s authority to
              undertake activities through IMCAM Hub where reasonably necessary
              for legal, regulatory, security or risk-management purposes.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="26.6" /> The availability of access to IMCAM Hub
              does not constitute verification, approval or endorsement by e2e World of the Customer&rsquo;s or any user&rsquo;s
              regulatory status.
            </p>
          </section>

          {/* Section 27 */}
          <section id="section-27" className="mb-12 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-navy mb-6 leading-snug">
              27. ACCURACY OF IMMIGRATION INFORMATION
            </h2>
            <p className={clauseText}>
              <ClauseHeading num="27.1" /> The Customer is responsible for
              ensuring that information entered into, uploaded to, recorded in or
              relied upon through IMCAM Hub is reviewed for accuracy, completeness
              and relevance as appropriate to the relevant Case.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="27.2" /> The Customer must take reasonable
              steps to identify and correct material errors or inconsistencies in
              information used in connection with an immigration matter.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="27.3" /> Where information or documents are
              provided by a Candidate, Client, Business, employee, worker or
              other third party, the Customer remains responsible for determining
              what verification or further enquiry is appropriate before relying
              on that material for professional or submission purposes.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="27.4" /> e2e World does not verify
              the truth, authenticity, completeness or legal sufficiency of
              Customer Data merely because that information is entered into or
              stored within IMCAM Hub.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="27.5" /> Any validation, required-field
              prompt, warning, workflow rule or similar technical control within
              IMCAM Hub is an administrative aid only and does not replace
              substantive review of the relevant information.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="27.6" /> The Customer must not knowingly use
              IMCAM Hub to create, maintain or submit false, fraudulent or
              materially misleading immigration information or documentation.
            </p>
          </section>

          {/* Section 28 */}
          <section id="section-28" className="mb-12 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-navy mb-6 leading-snug">
              28. CHANGES TO UK IMMIGRATION LAW AND POLICY
            </h2>
            <p className={clauseText}>
              <ClauseHeading num="28.1" /> UK immigration law, Immigration Rules,
              Home Office policy, guidance, fees, forms, procedures and
              operational requirements may change from time to time.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="28.2" /> e2e World may update
              IMCAM Hub in response to changes in immigration law, policy,
              guidance or government processes, but does not guarantee that every
              such change will be reflected in the Software immediately or by any
              particular date.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="28.3" /> The Customer is responsible for
              checking the law, Immigration Rules, official guidance, forms,
              fees, evidential requirements and procedures applicable at the time
              relevant action is taken.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="28.4" /> The Customer must not rely solely on a
              workflow, template, reminder, field, checklist, status or other
              content within IMCAM Hub as confirmation of the current legal or
              procedural requirements applicable to a Case.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="28.5" /> Where the Customer becomes aware that
              information or functionality within IMCAM Hub may no longer reflect
              a material legal or procedural requirement, the Customer should use
              appropriate professional judgement and may notify e2e World so that the matter can be reviewed.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="28.6" /> Updates made by e2e World to
              reflect immigration-law or policy changes do not constitute a
              guarantee of legal completeness and do not transfer responsibility
              for professional review to e2e World.
            </p>
          </section>

          {/* Section 29 */}
          <section id="section-29" className="mb-12 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-navy mb-6 leading-snug">
              29. HOME OFFICE / UKVI DISCLAIMER
            </h2>
            <p className={clauseText}>
              <ClauseHeading num="29.1" /> IMCAM Hub is an independent software
              platform operated by e2e World. It is not a Home Office
              or UKVI system and, unless expressly stated in relation to a
              specific authorised integration, is not affiliated with, endorsed
              by or operated on behalf of the Home Office or UKVI.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="29.2" /> References within IMCAM Hub to the Home
              Office, UKVI, immigration routes, sponsorship processes, forms,
              guidance or other government matters are provided only in
              connection with the Software&rsquo;s immigration case-management
              purpose.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="29.3" /> The Customer must not present IMCAM Hub
              to any person as an official government platform or imply that use
              of IMCAM Hub gives a Customer, Candidate, Client or Business
              preferential access to, or treatment by, the Home Office or UKVI.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="29.4" /> e2e World is not responsible
              for the availability, operation, content or decisions of Home
              Office or UKVI systems, websites or services, or for delays,
              outages or changes affecting those external systems.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="29.5" /> A status, label or progress indicator
              within IMCAM Hub is an internal case-management record unless
              expressly stated otherwise and should not be treated as an official
              Home Office or UKVI status or decision.
            </p>
          </section>

          {/* Section 30 */}
          <section id="section-30" className="mb-12 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-navy mb-6 leading-snug">
              30. NO AUTOMATIC IMMIGRATION DECISION-MAKING
            </h2>
            <p className={clauseText}>
              <ClauseHeading num="30.1" /> IMCAM Hub does not independently make
              immigration decisions on behalf of the Customer, a Candidate,
              Client, Business or any government authority.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="30.2" /> The Software does not automatically
              determine that a person is eligible or ineligible for a particular
              immigration route, visa, permission or sponsorship outcome.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="30.3" /> Any workflow, checklist, status,
              prompt, field, rule or other functionality that assists the
              Customer in organising a Case is an administrative tool and must
              not be treated as a substitute for professional assessment.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="30.4" /> The Customer is responsible for
              ensuring that decisions requiring legal, regulatory or professional
              judgement are made or reviewed by an appropriately authorised
              person where required.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="30.5" /> The Customer must not represent that
              IMCAM Hub has made an official, professional or government
              immigration decision concerning an individual.
            </p>
          </section>

          {/* Section 31 */}
          <section id="section-31" className="mb-12 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-navy mb-6 leading-snug">
              31. NO AUTOMATIC HOME OFFICE SUBMISSION
            </h2>
            <p className={clauseText}>
              <ClauseHeading num="31.1" /> Unless e2e World expressly
              introduces and identifies a specific authorised submission
              functionality in the future, IMCAM Hub does not automatically submit
              visa applications, sponsorship applications, representations,
              evidence or other material to the Home Office, UKVI or another
              government authority.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="31.2" /> Information or documents prepared,
              collected, stored, generated or organised within IMCAM Hub remain
              subject to review before any external submission.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="31.3" /> The Customer is responsible for
              ensuring that any information transferred from IMCAM Hub to a Home
              Office, UKVI or other external system is accurate, complete,
              current and appropriate for submission.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="31.4" /> The Customer is responsible for
              completing any required external submission process and for
              confirming that a submission has been successfully made and
              received by the relevant authority.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="31.5" /> A Case status, completed workflow,
              uploaded document or other activity within IMCAM Hub does not by
              itself establish that an application or document has been submitted
              to or received by the Home Office or UKVI.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="31.6" /> If authorised submission functionality
              is introduced in the future, its use may be subject to additional
              terms, technical requirements and human-review controls.
            </p>
          </section>

          {/* Section 32 */}
          <section id="section-32" className="mb-12 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-navy mb-6 leading-snug">
              32. HUMAN REVIEW AND VERIFICATION
            </h2>
            <p className={clauseText}>
              <ClauseHeading num="32.1" /> The Customer must ensure that
              appropriate human review is carried out before material
              information, documents, representations or applications managed
              through IMCAM Hub are relied upon for immigration, sponsorship,
              legal, regulatory or professional purposes.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="32.2" /> Human review should include, as
              appropriate to the relevant matter:
            </p>
            <ul className="pl-6 sm:pl-10 space-y-2 mb-4">
              <li className={listItemText}>
                <ClauseHeading num="a." /> checking material personal and
                immigration information;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="b." /> reviewing supporting documents and
                evidence;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="c." /> checking relevant dates, immigration
                history and sponsorship information;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="d." /> considering the applicable legal and
                procedural requirements;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="e." /> reviewing information provided by
                Candidates, Clients, Businesses or other persons;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="f." /> checking any application,
                representation or submission before it is finalised; and
              </li>
              <li className={listItemText}>
                <ClauseHeading num="g." /> confirming that the appropriate
                person has authorised the relevant action or submission.
              </li>
            </ul>
            <p className={clauseText}>
              <ClauseHeading num="32.3" /> Technical checks, automated prompts,
              required fields, reminders or other software controls do not
              remove the need for appropriate human review.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="32.4" /> The Customer is responsible for
              determining the nature and extent of review required for each Case,
              having regard to applicable law, professional obligations and the
              circumstances of the matter.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="32.5" /> Where a material discrepancy or
              uncertainty is identified, the Customer should resolve or
              appropriately address it before relying upon the affected
              information or making a submission.
            </p>
          </section>

          {/* Section 33 */}
          <section id="section-33" className="mb-12 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-navy mb-6 leading-snug">
              33. RESPONSIBILITY FOR APPLICATIONS AND SUBMISSIONS
            </h2>
            <p className={clauseText}>
              <ClauseHeading num="33.1" /> The Customer remains responsible for
              the preparation, review, approval and submission of immigration
              applications, sponsorship matters, representations and other
              external submissions managed with the assistance of IMCAM Hub.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="33.2" /> Before an application or submission is
              made, the Customer is responsible for ensuring, as appropriate,
              that:
            </p>
            <ul className="pl-6 sm:pl-10 space-y-2 mb-4">
              <li className={listItemText}>
                <ClauseHeading num="a." /> the correct applicant, immigration
                route or process has been identified;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="b." /> the information included is accurate,
                complete and current;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="c." /> supporting evidence has been
                appropriately reviewed;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="d." /> the relevant legal and procedural
                requirements have been considered;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="e." /> required declarations, consents,
                signatures and approvals have been obtained;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="f." /> applicable deadlines and submission
                requirements have been checked; and
              </li>
              <li className={listItemText}>
                <ClauseHeading num="g." /> the final application or submission
                has been reviewed and authorised by an appropriate person.
              </li>
            </ul>
            <p className={clauseText}>
              <ClauseHeading num="33.3" /> Where a Candidate, Client, Business or
              other person is responsible for providing information, documents,
              declarations or approvals, the Customer is responsible for managing
              that process to the extent required by the Customer&rsquo;s
              professional or contractual responsibilities.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="33.4" /> The Customer is responsible for
              confirming successful submission through the relevant Home Office,
              UKVI or other external system and for retaining appropriate
              evidence or records of submission where required.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="33.5" /> e2e World is not responsible
              merely by reason of providing IMCAM Hub for an error, omission,
              missed deadline, incorrect submission or adverse immigration
              outcome arising from information, documents, professional judgement
              or submission activity controlled by the Customer or its users.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="33.6" /> Clause 33.5 does not exclude
              responsibility to the extent that loss is caused by a breach of
              this Agreement by e2e World or by a matter for which
              liability cannot lawfully be excluded or limited.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="33.7" /> Nothing in this Section alters any
              separate written agreement under which e2e World has
              expressly agreed to provide professional immigration or other
              services independently of the IMCAM Hub Subscription.
            </p>
          </section>

          <PartHeading num="5" title="Customer Responsibilities" />

          {/* Section 34 */}
          <section id="section-34" className="mb-12 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-navy mb-6 leading-snug">
              34. CUSTOMER RESPONSIBILITIES
            </h2>
            <p className={clauseText}>
              <ClauseHeading num="34.1" /> The Customer is responsible for its
              use of IMCAM Hub and for managing its organisation, Authorised
              Users, Cases, Customer Data and activities carried out through the
              Customer&rsquo;s account in accordance with this Agreement.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="34.2" /> Without limiting any more specific
              obligation elsewhere in this Agreement, the Customer shall:
            </p>
            <ul className="pl-6 sm:pl-10 space-y-2 mb-4">
              <li className={listItemText}>
                <ClauseHeading num="a." /> use IMCAM Hub only for legitimate
                business and professional purposes permitted by this Agreement;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="b." /> comply with applicable laws,
                regulatory requirements and professional obligations relevant to
                its activities;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="c." /> provide e2e World with reasonable
                cooperation and information required for the provision,
                administration, security and support of IMCAM Hub;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="d." /> ensure that its Authorised Users use
                IMCAM Hub in accordance with this Agreement;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="e." /> manage user access, roles and
                permissions appropriately;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="f." /> take reasonable steps to protect
                accounts, credentials, devices and systems used to access
                IMCAM Hub;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="g." /> maintain appropriate internal
                procedures for the review, supervision and management of
                immigration-related work carried out using the Software;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="h." /> ensure that Customer Data is
                collected, entered, uploaded, used and shared lawfully;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="i." /> obtain and maintain any licences,
                registrations, permissions, consents or authorisations required
                for the Customer&rsquo;s activities and use of the Software;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="j." /> maintain systems, browsers, devices,
                internet connectivity and other technical resources reasonably
                necessary to access IMCAM Hub; and
              </li>
              <li className={listItemText}>
                <ClauseHeading num="k." /> notify e2e World promptly of material
                security incidents, unauthorised access or misuse affecting the
                Customer&rsquo;s account.
              </li>
            </ul>
            <p className={clauseText}>
              <ClauseHeading num="34.3" /> The Customer is responsible for
              determining whether IMCAM Hub and the functionality included in its
              Subscription are suitable for the Customer&rsquo;s intended business
              and professional use.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="34.4" /> Where the Customer delegates
              activities within IMCAM Hub to an Authorised User, Candidate,
              Business/Sponsor User or other permitted person, the Customer
              remains responsible for managing that person&rsquo;s access and for
              the responsibilities allocated to the Customer under this
              Agreement.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="34.5" /> The Customer shall provide information
              or cooperation reasonably requested by e2e World where necessary
              to investigate a technical, security, data protection, account or
              compliance issue affecting IMCAM Hub or the Customer&rsquo;s use of
              it.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="34.6" /> Nothing in this Section transfers to
              the Customer responsibility for matters that are expressly the
              responsibility of e2e World under this Agreement or applicable law.
            </p>
          </section>

          {/* Section 35 */}
          <section id="section-35" className="mb-12 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-navy mb-6 leading-snug">
              35. ACCURACY AND COMPLETENESS OF INFORMATION
            </h2>
            <p className={clauseText}>
              <ClauseHeading num="35.1" /> The Customer is responsible for the
              legality, reliability, integrity, accuracy and quality of Customer
              Data provided, entered, uploaded or maintained by or on behalf of
              the Customer, subject to the responsibilities of other persons
              under applicable law and this Agreement.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="35.2" /> The Customer must take reasonable
              steps to ensure that information used in connection with a Case is
              accurate, complete, current and relevant before it is relied upon
              for immigration, sponsorship, legal, regulatory or professional
              purposes.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="35.3" /> Where information is obtained from a
              Candidate, Client, employee, worker, Business or other third party,
              the Customer is responsible for determining what verification,
              clarification or supporting evidence is appropriate before relying
              on that information.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="35.4" /> The Customer must take reasonable
              steps to correct material inaccuracies or incomplete information
              that it becomes aware of within Customer Data where correction is
              appropriate and within its control.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="35.5" /> Any technical validation, mandatory
              field, automated prompt, warning, checklist or other functionality
              within IMCAM Hub is intended to assist administration only and does
              not confirm that information is factually correct, legally
              sufficient or complete for a particular immigration matter.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="35.6" /> The Customer must not knowingly enter,
              upload, maintain, use or submit false, fraudulent or materially
              misleading information or documents through IMCAM Hub.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="35.7" /> The Customer is responsible for
              maintaining appropriate records of the source, review or
              verification of information where required by law, regulation,
              professional obligations or the Customer&rsquo;s own procedures.
            </p>
          </section>

          {/* Section 36 */}
          <section id="section-36" className="mb-12 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-navy mb-6 leading-snug">
              36. CANDIDATE/EMPLOYEE RESPONSIBILITIES
            </h2>
            <p className={clauseText}>
              <ClauseHeading num="36.1" /> Where a Candidate, employee, worker or
              prospective employee is provided access to IMCAM Hub through the
              Customer&rsquo;s account, the Customer shall take reasonable steps
              to ensure that the person understands the requirements applicable
              to their use of the Candidate Portal.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="36.2" /> A Candidate or employee using IMCAM Hub
              should:
            </p>
            <ul className="pl-6 sm:pl-10 space-y-2 mb-4">
              <li className={listItemText}>
                <ClauseHeading num="a." /> provide information that is accurate
                and complete to the best of their knowledge;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="b." /> provide genuine and relevant documents
                and information requested in connection with their Case;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="c." /> review information presented to them
                and notify the Customer of material inaccuracies or changes;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="d." /> respond to reasonable requests for
                information, documents, declarations, approvals or signatures;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="e." /> keep their account credentials secure
                and not permit unauthorised persons to use their account;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="f." /> use the Candidate Portal only for
                authorised purposes relating to their Case; and
              </li>
              <li className={listItemText}>
                <ClauseHeading num="g." /> notify the Customer where information
                relevant to their immigration matter materially changes.
              </li>
            </ul>
            <p className={clauseText}>
              <ClauseHeading num="36.3" /> The Customer remains responsible for
              determining the extent to which information or documents supplied
              by a Candidate or employee require review, verification or further
              enquiry before being relied upon.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="36.4" /> A Candidate&rsquo;s or employee&rsquo;s
              use of IMCAM Hub does not make e2e World responsible for the
              accuracy, authenticity or completeness of information or documents
              supplied by that person.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="36.5" /> The Customer is responsible for
              communicating with the Candidate or employee regarding any
              consequences of failing to provide required information or
              documents, except where e2e World has separately agreed in writing
              to undertake a particular communication or service.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="36.6" /> Nothing in this Section creates a
              direct contractual obligation owed by a Candidate or employee to
              e2e World solely by reason of their access to the Customer&rsquo;s
              IMCAM Hub account, unless separate terms expressly apply to that
              user.
            </p>
          </section>

          {/* Section 37 */}
          <section id="section-37" className="mb-12 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-navy mb-6 leading-snug">
              37. BUSINESS/SPONSOR RESPONSIBILITIES
            </h2>
            <p className={clauseText}>
              <ClauseHeading num="37.1" /> Where a Business, employer or sponsor
              is provided access to IMCAM Hub, it remains responsible for its own
              immigration, sponsorship, employment, record-keeping and regulatory
              obligations.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="37.2" /> A Business/Sponsor User should provide
              and maintain accurate and current information relevant to the
              employees, workers, prospective employees, sponsorship matters and
              Cases to which it has authorised access.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="37.3" /> Where applicable, the Business or
              sponsor remains responsible for:
            </p>
            <ul className="pl-6 sm:pl-10 space-y-2 mb-4">
              <li className={listItemText}>
                <ClauseHeading num="a." /> the accuracy of information supplied
                concerning its organisation, sponsor licence, employees, workers
                and sponsorship matters;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="b." /> maintaining records and carrying out
                reporting or notification obligations required of it by law or
                applicable Home Office requirements;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="c." /> monitoring relevant immigration and
                sponsorship dates and taking required action within applicable
                timescales;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="d." /> ensuring that persons acting on its
                behalf are appropriately authorised;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="e." /> providing requested documents,
                information, confirmations and approvals;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="f." /> ensuring that it has authority to
                provide or access Personal Data and confidential information
                through IMCAM Hub; and
              </li>
              <li className={listItemText}>
                <ClauseHeading num="g." /> complying with its own employment,
                right-to-work, sponsorship and other legal or regulatory
                responsibilities.
              </li>
            </ul>
            <p className={clauseText}>
              <ClauseHeading num="37.4" /> Reminders, dates, statuses, reports or
              other information displayed within IMCAM Hub are administrative aids
              and do not transfer the Business&rsquo;s or sponsor&rsquo;s legal
              responsibilities to e2e World or the Customer.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="37.5" /> Where an immigration firm or other
              Customer manages matters for a Business or sponsor through IMCAM Hub,
              the allocation of professional responsibilities between that
              Customer and the Business remains governed by their own engagement
              or arrangements and applicable law.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="37.6" /> The Business must not use access
              provided through IMCAM Hub to view or obtain information relating to
              persons, Cases or organisations for which it has not been
              authorised.
            </p>
          </section>

          {/* Section 38 */}
          <section id="section-38" className="mb-12 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-navy mb-6 leading-snug">
              38. IMMIGRATION FIRM/ADVISER RESPONSIBILITIES
            </h2>
            <p className={clauseText}>
              <ClauseHeading num="38.1" /> Where the Customer is an immigration
              firm, immigration adviser or other organisation providing
              immigration advice or immigration services, the Customer remains
              responsible for the professional and regulatory conduct of those
              services.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="38.2" /> The Customer is responsible for
              ensuring that any person who provides regulated immigration advice
              or services through or with the assistance of IMCAM Hub is
              appropriately authorised, supervised and permitted to undertake the
              relevant work.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="38.3" /> Without limiting Part 4 of this
              Agreement, an immigration firm or adviser using IMCAM Hub remains
              responsible for:
            </p>
            <ul className="pl-6 sm:pl-10 space-y-2 mb-4">
              <li className={listItemText}>
                <ClauseHeading num="a." /> accepting and managing instructions in
                accordance with applicable professional requirements;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="b." /> assessing immigration matters and
                identifying appropriate routes or processes;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="c." /> providing advice and explanations to
                Clients, Candidates or Businesses where required;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="d." /> reviewing information, evidence and
                documents;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="e." /> supervising Caseworkers and other
                personnel where supervision is required;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="f." /> maintaining appropriate client-care,
                confidentiality and record-keeping arrangements;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="g." /> reviewing and approving applications,
                representations and other submissions;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="h." /> meeting applicable deadlines and
                procedural requirements; and
              </li>
              <li className={listItemText}>
                <ClauseHeading num="i." /> complying with any applicable
                regulatory code, professional standards or conditions of
                authorisation.
              </li>
            </ul>
            <p className={clauseText}>
              <ClauseHeading num="38.4" /> The Customer must not rely on the
              availability of a Caseworker role, workflow, template, checklist or
              other IMCAM Hub functionality as evidence that a user is
              professionally authorised or that a particular professional
              requirement has been satisfied.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="38.5" /> Where the Customer is not itself
              authorised to provide regulated immigration advice or services, it
              must not use IMCAM Hub as a means of carrying out activities that it
              is not legally permitted to undertake.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="38.6" /> Nothing in this Section represents
              that e2e World has verified or approved the professional competence
              or regulatory status of the Customer or its users unless e2e World
              expressly confirms otherwise in writing.
            </p>
          </section>

          {/* Section 39 */}
          <section id="section-39" className="mb-12 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-navy mb-6 leading-snug">
              39. OBTAINING CONSENTS AND AUTHORISATIONS
            </h2>
            <p className={clauseText}>
              <ClauseHeading num="39.1" /> The Customer is responsible for
              obtaining and maintaining all consents, permissions, notices,
              instructions and other authorisations reasonably required for its
              use of IMCAM Hub and for the collection, use, disclosure and
              processing of information through the Software.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="39.2" /> Without limiting the data protection
              provisions of this Agreement, the Customer must ensure that it has
              an appropriate lawful basis and any other required authority before
              providing Personal Data or confidential information to IMCAM Hub or
              making that information accessible to another user.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="39.3" /> Where the Customer provides access to
              information concerning a Candidate, Client, employee, worker or
              other individual to a Business, Caseworker, representative or other
              third party, the Customer is responsible for ensuring that the
              recipient is appropriately authorised to receive that information.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="39.4" /> Where an electronic signature,
              declaration, approval or authority is obtained through IMCAM Hub,
              the Customer is responsible for determining whether that method is
              appropriate and legally sufficient for the relevant purpose, unless
              this Agreement expressly states otherwise.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="39.5" /> The Customer must maintain any
              evidence of consent, authority, instruction or approval required by
              applicable law, professional obligations or the circumstances of
              the relevant matter.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="39.6" /> The Customer shall provide reasonable
              evidence of relevant authority or consent to e2e World where
              reasonably required to address a complaint, data protection
              request, security matter, legal requirement or dispute concerning
              access to or processing of Customer Data.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="39.7" /> The Customer must promptly review and,
              where appropriate, restrict access or processing if an authority or
              permission on which that access or processing depends is withdrawn,
              expires or otherwise ceases to apply.
            </p>
          </section>

          {/* Section 40 */}
          <section id="section-40" className="mb-12 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-navy mb-6 leading-snug">
              40. LAWFUL USE OF THE PLATFORM
            </h2>
            <p className={clauseText}>
              <ClauseHeading num="40.1" /> The Customer and its Authorised Users
              must use IMCAM Hub only for lawful purposes and in accordance with
              this Agreement.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="40.2" /> The Customer must not use, and must
              take reasonable steps not to permit IMCAM Hub to be used, in a
              manner that:
            </p>
            <ul className="pl-6 sm:pl-10 space-y-2 mb-4">
              <li className={listItemText}>
                <ClauseHeading num="a." /> breaches any applicable law,
                regulation, court order or legally binding requirement;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="b." /> infringes another person&rsquo;s
                privacy, confidentiality, intellectual property or other legal
                rights;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="c." /> facilitates immigration fraud, identity
                fraud, document fraud, deception or other unlawful activity;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="d." /> processes Personal Data without an
                appropriate lawful basis or authority;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="e." /> permits unauthorised access to
                confidential information, Personal Data, Cases or documents;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="f." /> misrepresents IMCAM Hub as a Home
                Office, UKVI or other government system;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="g." /> misrepresents a user&rsquo;s
                professional or regulatory status;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="h." /> circumvents security, access controls
                or Subscription restrictions; or
              </li>
              <li className={listItemText}>
                <ClauseHeading num="i." /> otherwise conflicts materially with
                the legitimate purpose for which IMCAM Hub is provided.
              </li>
            </ul>
            <p className={clauseText}>
              <ClauseHeading num="40.3" /> The Customer must take reasonable
              steps to prevent and address unlawful or unauthorised use by
              persons accessing IMCAM Hub through the Customer&rsquo;s account.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="40.4" /> Where the Customer becomes aware of
              suspected unlawful use, fraud, unauthorised access or other
              material misuse affecting IMCAM Hub, it must notify e2e World
              promptly where the matter may affect the Software, e2e World,
              another Customer or the security of Customer Data.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="40.5" /> e2e World may take reasonable
              protective action in accordance with this Agreement where it
              reasonably believes that IMCAM Hub is being used unlawfully or in a
              manner presenting a material legal, security or operational risk.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="40.6" /> Any suspension or restriction under
              clause 40.5 shall be subject to the applicable suspension
              provisions of this Agreement and shall not affect rights or
              obligations that cannot lawfully be excluded.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="40.7" /> Nothing in this Section requires the
              Customer to monitor individuals or communications beyond what is
              reasonably appropriate under applicable law, its professional
              obligations and its legitimate management of the Software.
            </p>
          </section>

          <PartHeading num="6" title="Case Management & Documents" />

          {/* Section 41 */}
          <section id="section-41" className="mb-12 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-navy mb-6 leading-snug">
              41. CASE CREATION AND MANAGEMENT
            </h2>
            <p className={clauseText}>
              <ClauseHeading num="41.1" /> Subject to the Customer&rsquo;s
              Subscription and assigned permissions, Authorised Users may create,
              maintain and manage Cases within IMCAM Hub for legitimate
              immigration, sponsorship and related administrative purposes.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="41.2" /> A Case may contain information and
              records relating to a Candidate, Client, employee, worker,
              Business, sponsor, immigration application, sponsorship matter or
              other activity managed by the Customer through IMCAM Hub.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="41.3" /> Case-management functionality may
              include, where available:
            </p>
            <ul className="pl-6 sm:pl-10 space-y-2 mb-4">
              <li className={listItemText}>
                <ClauseHeading num="a." /> creating and updating Case records;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="b." /> recording Case type, status, relevant
                dates and other Case information;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="c." /> assigning Cases to Caseworkers or
                other Authorised Users;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="d." /> collecting and managing information
                and documents;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="e." /> creating and managing tasks,
                workflows, reminders and deadlines;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="f." /> communicating with Candidates,
                Clients, Businesses and other permitted users;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="g." /> requesting information, documents,
                approvals or electronic signatures;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="h." /> recording notes, activities and Case
                progress; and
              </li>
              <li className={listItemText}>
                <ClauseHeading num="i." /> using other Case-management
                functionality included within the Customer&rsquo;s Subscription.
              </li>
            </ul>
            <p className={clauseText}>
              <ClauseHeading num="41.4" /> The Customer is responsible for
              deciding when a Case should be created, how it should be
              categorised and managed, which users should have access to it, and
              when it should be closed, archived or deleted, subject to this
              Agreement and applicable law.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="41.5" /> Case statuses, workflow stages,
              reminders and similar administrative indicators within IMCAM Hub
              are intended to support the Customer&rsquo;s internal management.
              They do not constitute an official Home Office or UKVI status or a
              professional determination by e2e World.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="41.6" /> The Customer remains responsible for
              the professional review, conduct and progression of each Case and
              for ensuring that required actions are completed within applicable
              timescales.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="41.7" /> e2e World does not undertake
              to monitor individual Cases for completeness, accuracy, deadlines
              or required professional action unless expressly agreed under a
              separate written service arrangement.
            </p>
          </section>

          {/* Section 42 */}
          <section id="section-42" className="mb-12 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-navy mb-6 leading-snug">
              42. DOCUMENT UPLOAD AND STORAGE
            </h2>
            <p className={clauseText}>
              <ClauseHeading num="42.1" /> IMCAM Hub may allow the Customer and
              permitted users to upload, store, organise, access and manage
              documents and other files relating to Cases and the
              Customer&rsquo;s use of the Software.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="42.2" /> Documents stored through IMCAM Hub may
              include, where appropriate, identity documents, immigration
              documents, application records, supporting evidence, employment or
              sponsorship records, correspondence, forms, declarations, signed
              documents and other materials relevant to a Case.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="42.3" /> The Customer must ensure that
              documents uploaded to IMCAM Hub are uploaded for a legitimate and
              lawful purpose and that the Customer has the necessary authority to
              store and process them.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="42.4" /> The Customer must not knowingly upload
              files that:
            </p>
            <ul className="pl-6 sm:pl-10 space-y-2 mb-4">
              <li className={listItemText}>
                <ClauseHeading num="a." /> contain malware, viruses or other
                harmful code;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="b." /> are unlawful to possess, use, disclose
                or process;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="c." /> infringe another person&rsquo;s
                intellectual property, confidentiality, privacy or other rights;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="d." /> are fraudulent, fabricated or
                materially misleading for the purpose of misuse of the Software
                or an immigration process; or
              </li>
              <li className={listItemText}>
                <ClauseHeading num="e." /> otherwise breach this Agreement.
              </li>
            </ul>
            <p className={clauseText}>
              <ClauseHeading num="42.5" /> e2e World may apply
              technical restrictions to file types, file sizes, storage volumes
              or other document functionality for security, performance or
              Subscription-management purposes.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="42.6" /> Where a file cannot be uploaded,
              opened, processed or displayed because of its format, size,
              corruption, security characteristics or another technical
              limitation, the Customer remains responsible for retaining any
              original document required for its professional, legal or business
              purposes.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="42.7" /> The Customer should not treat IMCAM Hub
              as the sole repository for any document where applicable law,
              professional obligations, business-continuity requirements or the
              circumstances of the Case require the Customer to maintain an
              additional or original record.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="42.8" /> The technical arrangements for hosting
              and storage may be provided by e2e World or its
              authorised service providers and shall be subject to the data
              protection, security, confidentiality and third-party service
              provisions of this Agreement.
            </p>
          </section>

          {/* Section 43 */}
          <section id="section-43" className="mb-12 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-navy mb-6 leading-snug">
              43. DOCUMENT ACCESS AND PERMISSIONS
            </h2>
            <p className={clauseText}>
              <ClauseHeading num="43.1" /> Access to documents within IMCAM Hub
              shall be governed by the Customer&rsquo;s Subscription, user role,
              Case assignment, account configuration and applicable access
              permissions.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="43.2" /> The Customer is responsible for
              determining which Authorised Users, Candidates, Business/Sponsor
              Users or other permitted persons may access particular documents
              where such permissions are under the Customer&rsquo;s control.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="43.3" /> The Customer must take reasonable
              steps to ensure that access to documents containing Personal Data,
              confidential information or sensitive immigration information is
              limited to persons with a legitimate need and appropriate authority
              to access them.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="43.4" /> Where the Customer makes a document
              available to a Candidate, Business/Sponsor User or other third
              party, the Customer is responsible for ensuring that such
              disclosure is lawful and appropriate.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="43.5" /> A user must not access, download,
              copy, alter, disclose or otherwise use a document outside the scope
              of that user&rsquo;s authority.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="43.6" /> e2e World may implement
              platform-level restrictions or controls to protect documents and
              Customer Data, including restrictions designed to prevent
              unauthorised cross-Customer access.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="43.7" /> Customer Data and documents belonging
              to one Customer must not be made accessible to another Customer
              through ordinary use of IMCAM Hub unless the relevant disclosure has
              been expressly and lawfully authorised.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="43.8" /> The Customer must promptly review and
              update document access where a user&rsquo;s role, Case assignment,
              employment, engagement or authority changes.
            </p>
          </section>

          {/* Section 44 */}
          <section id="section-44" className="mb-12 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-navy mb-6 leading-snug">
              44. DOCUMENT ACCURACY AND AUTHENTICITY
            </h2>
            <p className={clauseText}>
              <ClauseHeading num="44.1" /> The Customer is responsible for
              reviewing documents used in connection with its Cases and for
              determining what steps are appropriate to verify their accuracy,
              authenticity, completeness, currency and relevance.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="44.2" /> The fact that a document has been
              uploaded, stored, displayed, categorised, electronically signed or
              otherwise processed within IMCAM Hub does not mean that e2e World has verified or approved that document.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="44.3" /> Where documents are provided by
              Candidates, Clients, Businesses, employees, workers or other third
              parties, the Customer remains responsible for carrying out any
              checks or enquiries required by law, professional obligations or
              the circumstances of the Case.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="44.4" /> The Customer must not knowingly use
              IMCAM Hub to create, alter, store or facilitate the use of
              fraudulent, forged or materially misleading documents in connection
              with an immigration or sponsorship matter.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="44.5" /> Where the Customer becomes aware that
              a document is materially inaccurate, incomplete, outdated or
              potentially fraudulent, the Customer should take appropriate action
              before relying upon or submitting the document.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="44.6" /> Any document classification, label,
              checklist, prompt or technical validation provided by IMCAM Hub is
              an administrative aid and is not a certification of authenticity,
              evidential sufficiency or legal validity.
            </p>
          </section>

          {/* Section 45 */}
          <section id="section-45" className="mb-12 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-navy mb-6 leading-snug">
              45. ELECTRONIC SIGNATURES
            </h2>
            <p className={clauseText}>
              <ClauseHeading num="45.1" /> IMCAM Hub may provide functionality
              allowing documents, declarations, approvals or other records to be
              signed or acknowledged electronically.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="45.2" /> The Customer is responsible for
              deciding whether electronic signature functionality is appropriate
              for the particular document, transaction, declaration or purpose
              for which it is used.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="45.3" /> The Customer must ensure that the
              person requested to sign or approve a document is appropriately
              authorised to do so and that the Customer has provided any
              information or explanation required in connection with that
              signature or approval.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="45.4" /> Where electronic signature
              functionality records information concerning the signing process,
              such information may form part of the relevant Case or audit
              record.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="45.5" /> e2e World does not warrant
              that an electronic signature will satisfy every statutory,
              regulatory, evidential, professional or third-party requirement
              applicable to every document or jurisdiction.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="45.6" /> Where an original, witnessed,
              certified, wet-ink or other particular form of signature or
              execution is required, the Customer is responsible for identifying
              and complying with that requirement.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="45.7" /> The Customer must not use electronic
              signature functionality to impersonate another person, apply a
              signature without authority or otherwise create a false or
              misleading record of approval.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="45.8" /> Where electronic signature
              functionality is supplied through a Third-Party Service, its
              operation may also be subject to the provisions of this Agreement
              concerning Third-Party Services and integrations.
            </p>
          </section>

          {/* Section 46 */}
          <section id="section-46" className="mb-12 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-navy mb-6 leading-snug">
              46. RECORDS AND AUDIT TRAILS
            </h2>
            <p className={clauseText}>
              <ClauseHeading num="46.1" /> IMCAM Hub may create and retain system
              records or audit information concerning activities carried out
              within the Software.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="46.2" /> Depending on the functionality
              available, audit or activity records may include information
              concerning:
            </p>
            <ul className="pl-6 sm:pl-10 space-y-2 mb-4">
              <li className={listItemText}>
                <ClauseHeading num="a." /> user logins or account activity;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="b." /> creation, assignment or modification
                of Cases;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="c." /> document uploads, access or other
                document activity;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="d." /> changes to information or Case status;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="e." /> communications, tasks, workflows or
                approvals;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="f." /> electronic signature activity;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="g." /> user or permission changes; and
              </li>
              <li className={listItemText}>
                <ClauseHeading num="h." /> other system events relevant to
                administration, security or accountability.
              </li>
            </ul>
            <p className={clauseText}>
              <ClauseHeading num="46.3" /> Audit and activity records are
              intended to assist with administration, security, accountability
              and Case management. They do not necessarily constitute a complete
              evidential record of every action occurring outside IMCAM Hub.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="46.4" /> The Customer is responsible for
              maintaining any additional records required by law, regulation,
              professional obligations, contractual requirements or its own
              internal policies.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="46.5" /> e2e World may use relevant
              system logs and audit information for legitimate purposes including
              security monitoring, troubleshooting, investigating misuse,
              supporting Customers, maintaining the Software and demonstrating
              compliance with applicable obligations.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="46.6" /> Access to audit records may vary
              according to Subscription, user role and functionality. Nothing in
              this Agreement requires e2e World to make all internal
              technical or security logs available to the Customer.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="46.7" /> Retention of audit and activity
              records shall be subject to applicable data protection, security,
              retention and deletion provisions of this Agreement.
            </p>
          </section>

          {/* Section 47 */}
          <section id="section-47" className="mb-12 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-navy mb-6 leading-snug">
              47. DATA EXPORT
            </h2>
            <p className={clauseText}>
              <ClauseHeading num="47.1" /> Where export or download functionality
              is made available, the Customer may export or download Customer
              Data and documents in accordance with its Subscription, assigned
              permissions and the technical capabilities of IMCAM Hub.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="47.2" /> The format, structure, scope and
              availability of exported data may depend on the relevant feature,
              data type and technical configuration of the Software.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="47.3" /> The Customer is responsible for
              ensuring that any export or download is carried out by an
              appropriately authorised person and for a lawful purpose.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="47.4" /> Once Customer Data or documents are
              exported or downloaded from IMCAM Hub, the Customer is responsible
              for the security, storage, use, disclosure and disposal of the
              exported copy to the extent that those matters are within the
              Customer&rsquo;s control.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="47.5" /> e2e World may apply
              reasonable technical, security or usage controls to export
              functionality where necessary to protect the Software, Customer
              Data or other Customers.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="47.6" /> The Customer should carry out exports
              required for its own business-continuity, record-keeping or
              transition purposes within the period during which it has
              authorised access to the relevant data.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="47.7" /> Any rights to export or retrieve
              Customer Data following termination or expiry of the Subscription
              shall be governed by the termination, retention and deletion
              provisions of this Agreement.
            </p>
          </section>

          {/* Section 48 */}
          <section id="section-48" className="mb-12 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-navy mb-6 leading-snug">
              48. DOCUMENT AND DATA RETENTION
            </h2>
            <p className={clauseText}>
              <ClauseHeading num="48.1" /> Customer Data and documents may be
              retained within IMCAM Hub for the duration of the
              Customer&rsquo;s Subscription and for such additional periods as
              are permitted or required under this Agreement, the applicable Data
              Processing Agreement, e2e World&rsquo;s documented
              retention arrangements or applicable law.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="48.2" /> The Customer is responsible for
              determining the retention periods that apply to its own
              professional, immigration, employment, sponsorship, client and
              business records and for managing Customer Data accordingly where
              retention settings or deletion controls are available to it.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="48.3" /> e2e World may retain
              particular records for longer where reasonably necessary to:
            </p>
            <ul className="pl-6 sm:pl-10 space-y-2 mb-4">
              <li className={listItemText}>
                <ClauseHeading num="a." /> comply with applicable law or a
                binding legal requirement;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="b." /> establish, exercise or defend legal
                claims;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="c." /> maintain security, fraud-prevention or
                audit records;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="d." /> comply with applicable data
                protection obligations;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="e." /> complete an agreed post-termination
                data-return or deletion process; or
              </li>
              <li className={listItemText}>
                <ClauseHeading num="f." /> maintain backup or disaster-recovery
                systems in accordance with applicable retention cycles.
              </li>
            </ul>
            <p className={clauseText}>
              <ClauseHeading num="48.4" /> Retention of Personal Data shall be
              subject to the data protection provisions of this Agreement and any
              applicable Data Processing Agreement.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="48.5" /> Unless a specific retention period is
              expressly agreed, the existence of storage functionality within
              IMCAM Hub does not represent that Customer Data or documents will be
              retained indefinitely.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="48.6" /> Where e2e World introduces
              configurable retention functionality, the Customer is responsible
              for selecting and managing settings appropriate to its legal,
              regulatory and professional obligations.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="48.7" /> Any final operational retention
              periods, backup cycles or post-termination deletion periods adopted
              for IMCAM Hub may be documented in the applicable Data Processing
              Agreement, retention policy, Order Form or other contractual
              documentation.
            </p>
          </section>

          {/* Section 49 */}
          <section id="section-49" className="mb-12 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-navy mb-6 leading-snug">
              49. DELETION OF CASES AND DOCUMENTS
            </h2>
            <p className={clauseText}>
              <ClauseHeading num="49.1" /> Subject to the functionality made
              available within IMCAM Hub, authorised users may be able to delete,
              archive or otherwise remove Cases, documents or other Customer Data
              from active use.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="49.2" /> The Customer is responsible for
              ensuring that a person carrying out a deletion or archival action
              is appropriately authorised and that the action is consistent with
              the Customer&rsquo;s legal, regulatory, professional, contractual
              and record-keeping obligations.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="49.3" /> The Customer should consider whether
              information must be retained, exported or otherwise preserved
              before deleting a Case, document or record.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="49.4" /> Deletion from the active user
              interface may not result in immediate removal from all technical
              systems, backups, logs or disaster-recovery copies. Residual copies
              may remain for a limited period in accordance with applicable
              retention and backup processes.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="49.5" /> Where data remains in backup or
              security systems after deletion from active use, e2e World shall restrict further use of that data except where
              restoration, security, legal or compliance requirements make access
              necessary, subject to applicable law and the Data Processing
              Agreement.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="49.6" /> e2e World may delete
              Customer Data where permitted or required under this Agreement,
              including following termination or expiry of a Subscription,
              subject to any applicable data-return, retention, legal-hold or
              deletion obligations.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="49.7" /> Where deletion is required in response
              to a valid data protection request or legal obligation, the parties
              shall comply with their respective responsibilities under the data
              protection provisions of this Agreement and the applicable Data
              Processing Agreement.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="49.8" /> Deletion of a Case or document does
              not necessarily remove related audit, billing, security or system
              records where those records are lawfully retained for a separate
              legitimate purpose.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="49.9" /> The specific technical deletion
              process and applicable time periods may depend on the hosting,
              backup and storage arrangements used for IMCAM Hub and may be
              further specified in the Data Processing Agreement or relevant
              policy.
            </p>
          </section>

          <PartHeading num="7" title="Communications & Notifications" />

          {/* Section 50 */}
          <section id="section-50" className="mb-12 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-navy mb-6 leading-snug">
              50. EMAIL AND PLATFORM COMMUNICATIONS
            </h2>
            <p className={clauseText}>
              <ClauseHeading num="50.1" /> IMCAM Hub may provide functionality
              enabling the Customer and its Authorised Users to send, receive,
              record, manage or view communications relating to Cases,
              Candidates, Clients, employees, workers, Businesses and other
              matters managed through the Software.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="50.2" /> Depending on the Customer&rsquo;s
              Subscription, configuration and available functionality,
              communications may include:
            </p>
            <ul className="pl-6 sm:pl-10 space-y-2 mb-4">
              <li className={listItemText}>
                <ClauseHeading num="a." /> emails sent or received through or in
                connection with IMCAM Hub;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="b." /> messages or communications exchanged
                within a Portal;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="c." /> requests for information, documents,
                approvals or electronic signatures;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="d." /> Case-related updates and
                correspondence;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="e." /> notifications and reminders;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="f." /> communications between the Customer,
                Caseworkers, Candidates and Business/Sponsor Users; and
              </li>
              <li className={listItemText}>
                <ClauseHeading num="g." /> other communication functionality made
                available by e2e World from time to time.
              </li>
            </ul>
            <p className={clauseText}>
              <ClauseHeading num="50.3" /> The Customer is responsible for
              determining which communications should be sent, to whom they
              should be sent, and whether the content is accurate, appropriate,
              lawful and professionally suitable before sending, except where a
              communication is generated solely by e2e World for the
              administration, security or operation of IMCAM Hub.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="50.4" /> Where IMCAM Hub enables communications
              to be associated with or stored against a Case, the Customer is
              responsible for determining whether the communication forms part
              of the Customer&rsquo;s professional or business record and
              whether any additional record must be retained.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="50.5" /> The Customer must ensure that
              communications sent through IMCAM Hub do not contain unlawful,
              fraudulent, abusive, defamatory, discriminatory, misleading or
              otherwise prohibited content and do not infringe another
              person&rsquo;s privacy, confidentiality or other legal rights.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="50.6" /> The Customer must take reasonable
              care when selecting recipients and attaching or making available
              documents, particularly where communications contain Personal
              Data, special category data, confidential information or
              immigration-related material.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="50.7" /> The ability to send or receive a
              communication through IMCAM Hub does not mean that e2e World has reviewed, approved or verified the communication or
              any attachment.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="50.8" /> Where the Customer uses IMCAM Hub to
              communicate professional or immigration advice, the Customer
              remains responsible for that advice and for ensuring that it is
              provided by an appropriately authorised person where required.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="50.9" /> e2e World may send
              service-related communications directly to the Customer or
              relevant users where reasonably necessary for account
              administration, security, maintenance, support, changes to the
              Software or other matters concerning use of IMCAM Hub.
            </p>
          </section>

          {/* Section 51 */}
          <section id="section-51" className="mb-12 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-navy mb-6 leading-snug">
              51. NOTIFICATIONS AND REMINDERS
            </h2>
            <p className={clauseText}>
              <ClauseHeading num="51.1" /> IMCAM Hub may provide automated or
              user-configured notifications and reminders intended to assist
              with the administration and management of Cases and related
              activities.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="51.2" /> Notifications and reminders may
              relate to matters including:
            </p>
            <ul className="pl-6 sm:pl-10 space-y-2 mb-4">
              <li className={listItemText}>
                <ClauseHeading num="a." /> Case tasks and workflow activities;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="b." /> requests for information or
                documents;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="c." /> document or electronic signature
                activity;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="d." /> appointments or relevant Case dates;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="e." /> visa, immigration or sponsorship
                dates;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="f." /> deadlines recorded within the
                Software;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="g." /> communications or account activity;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="h." /> user invitations or access matters;
                and
              </li>
              <li className={listItemText}>
                <ClauseHeading num="i." /> other events or dates supported by
                the functionality of IMCAM Hub.
              </li>
            </ul>
            <p className={clauseText}>
              <ClauseHeading num="51.3" /> Notifications and reminders are
              administrative aids only. They do not replace the
              Customer&rsquo;s responsibility to identify, calculate, record,
              verify and monitor applicable legal, immigration, sponsorship,
              contractual, professional or other deadlines.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="51.4" /> The Customer must not rely solely on
              IMCAM Hub to ensure that a deadline, expiry date, reporting
              obligation, appointment or other time-sensitive action is
              identified or completed.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="51.5" /> The accuracy and usefulness of a
              notification or reminder may depend on the accuracy, completeness
              and currency of the information entered into IMCAM Hub and on the
              configuration selected by the Customer or its Authorised Users.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="51.6" /> The Customer is responsible for
              reviewing relevant dates and notification settings and for
              correcting information where it becomes aware that a date,
              recipient, reminder or other setting is inaccurate or no longer
              appropriate.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="51.7" /> e2e World does not
              guarantee that every notification or reminder will be delivered,
              received, read or acted upon by the intended recipient, including
              where delivery is affected by third-party systems, internet
              connectivity, recipient settings, spam filtering, incorrect
              contact details or other matters outside e2e World&rsquo;s reasonable control.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="51.8" /> Where a notification or reminder
              concerns a critical immigration, sponsorship, legal or regulatory
              deadline, the Customer should maintain appropriate independent
              diary, supervision or checking arrangements consistent with its
              professional and business obligations.
            </p>
          </section>

          {/* Section 52 */}
          <section id="section-52" className="mb-12 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-navy mb-6 leading-snug">
              52. CUSTOMER RESPONSIBILITY FOR COMMUNICATIONS
            </h2>
            <p className={clauseText}>
              <ClauseHeading num="52.1" /> The Customer is responsible for
              communications sent by or on behalf of the Customer through
              IMCAM Hub and for the actions of its Authorised Users in using
              communication functionality, subject to the allocation of
              responsibility elsewhere in this Agreement.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="52.2" /> The Customer must take reasonable
              steps to ensure that:
            </p>
            <ul className="pl-6 sm:pl-10 space-y-2 mb-4">
              <li className={listItemText}>
                <ClauseHeading num="a." /> recipient contact details are
                accurate and appropriately authorised for use;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="b." /> communications are sent only to
                intended and authorised recipients;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="c." /> the content and attachments are
                appropriate for the relevant recipient;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="d." /> confidential information and Personal
                Data are disclosed only where lawful and necessary;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="e." /> communications comply with applicable
                professional, regulatory, privacy, direct-marketing and
                electronic-communications requirements;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="f." /> users do not use IMCAM Hub for spam,
                phishing, harassment, fraud or other prohibited activity; and
              </li>
              <li className={listItemText}>
                <ClauseHeading num="g." /> material communications are reviewed
                or approved where the Customer&rsquo;s internal or professional
                procedures require such review.
              </li>
            </ul>
            <p className={clauseText}>
              <ClauseHeading num="52.3" /> Where a Candidate, Client, Business
              or other person provides an email address or other contact
              information, the Customer is responsible for determining whether
              that information may appropriately be used for the relevant
              communication.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="52.4" /> The Customer is responsible for
              ensuring that any communication representing legal, immigration or
              professional advice is accurate, appropriately reviewed and issued
              by a person authorised to provide that advice where required.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="52.5" /> The Customer should promptly address
              communications sent to an incorrect recipient or containing
              incorrect information and should take any steps required under
              applicable data protection, confidentiality, professional or legal
              obligations.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="52.6" /> e2e World is not
              responsible for the content of Customer communications or for an
              error in a recipient, attachment, instruction or message selected
              or supplied by the Customer or its users, except to the extent
              that the error results from a fault or breach for which e2e World is responsible.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="52.7" /> The Customer must not configure or
              use communication functionality in a manner designed to
              misrepresent the identity of a sender, impersonate another person
              or falsely suggest that a communication originates from the Home
              Office, UKVI or another government authority.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="52.8" /> Where the Customer permits Candidates
              or Business/Sponsor Users to communicate through IMCAM Hub, the
              Customer remains responsible for managing the scope of that access
              and for taking reasonable steps to address misuse that comes to
              its attention.
            </p>
          </section>

          {/* Section 53 */}
          <section id="section-53" className="mb-12 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-navy mb-6 leading-snug">
              53. EMAIL DELIVERY AND THIRD-PARTY COMMUNICATION SERVICES
            </h2>
            <p className={clauseText}>
              <ClauseHeading num="53.1" /> Email and other communication
              functionality within IMCAM Hub may depend on third-party email,
              hosting, telecommunications, authentication or communication
              service providers.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="53.2" /> The Customer acknowledges that
              delivery of an email or electronic communication may be affected
              by matters outside e2e World&rsquo;s reasonable control,
              including:
            </p>
            <ul className="pl-6 sm:pl-10 space-y-2 mb-4">
              <li className={listItemText}>
                <ClauseHeading num="a." /> recipient mail-server availability or
                configuration;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="b." /> spam, junk-mail or security filtering;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="c." /> incorrect, inactive or inaccessible
                recipient addresses;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="d." /> recipient mailbox limits or account
                restrictions;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="e." /> internet, network or telecommunications
                failures;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="f." /> third-party service outages, delays or
                restrictions;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="g." /> security or anti-abuse measures applied
                by service providers; and
              </li>
              <li className={listItemText}>
                <ClauseHeading num="h." /> actions or settings of the sender or
                recipient.
              </li>
            </ul>
            <p className={clauseText}>
              <ClauseHeading num="53.3" /> A message being shown within IMCAM Hub
              as sent, generated, queued or otherwise processed does not
              necessarily establish that the intended recipient has received,
              opened, read or acted upon the communication.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="53.4" /> Where confirmation of receipt is
              important for a legal, immigration, sponsorship, professional or
              time-sensitive matter, the Customer is responsible for determining
              whether additional confirmation or an alternative method of
              communication is required.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="53.5" /> e2e World may use reputable
              Third-Party Services to provide or support communication
              functionality and may change such providers from time to time in
              accordance with the provisions of this Agreement concerning
              Third-Party Services, data protection and changes to the Software.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="53.6" /> Use of a Third-Party Service may be
              subject to technical limits, acceptable-use requirements, security
              controls or other conditions imposed by the relevant provider. The
              Customer must not use IMCAM Hub in a manner that causes e2e World to breach such requirements.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="53.7" /> e2e World may temporarily
              restrict communication functionality where reasonably necessary to
              address suspected spam, fraud, security incidents, provider
              restrictions, excessive or abusive use, or other material risks to
              IMCAM Hub or its communication services.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="53.8" /> Where a third-party communication
              service experiences an outage, delay or failure, e2e World shall take such reasonable steps as are appropriate in
              the circumstances to restore or maintain the affected IMCAM Hub
              functionality, but does not guarantee uninterrupted operation of
              third-party networks or services.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="53.9" /> The Customer remains responsible for
              maintaining appropriate alternative communication and
              deadline-management arrangements where interruption or non-delivery
              of electronic communications could materially affect an immigration
              matter, legal obligation or business process.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="53.10" /> The processing of Personal Data by
              communication service providers shall be subject to the applicable
              data protection provisions of this Agreement and any applicable
              Data Processing Agreement.
            </p>
          </section>

          <PartHeading num="8" title="Data Protection & Privacy" />

          {/* Section 54 */}
          <section id="section-54" className="mb-12 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-navy mb-6 leading-snug">
              54. DATA PROTECTION
            </h2>
            <p className={clauseText}>
              <ClauseHeading num="54.1" /> Each party shall comply with the Data
              Protection Legislation applicable to it in connection with the
              provision and use of IMCAM Hub.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="54.2" /> The parties acknowledge that use of
              IMCAM Hub may involve the processing of Personal Data relating to
              Candidates, Clients, employees, workers, Business representatives,
              Authorised Users and other individuals connected with immigration,
              sponsorship and related matters.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="54.3" /> The Customer is responsible for
              ensuring that Personal Data entered into, uploaded to, disclosed
              through or otherwise processed using IMCAM Hub is collected and
              used lawfully and fairly and only for purposes for which the
              Customer has an appropriate legal basis and authority.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="54.4" /> e2e World shall process
              Personal Data in accordance with its obligations under applicable
              Data Protection Legislation, this Agreement and, where e2e World acts as a processor on behalf of the Customer, the
              applicable Data Processing Agreement.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="54.5" /> Nothing in this Agreement relieves
              either party of its own responsibilities under Data Protection
              Legislation or requires either party to act in a manner that would
              breach such legislation.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="54.6" /> The Customer must ensure that its
              Authorised Users are given appropriate access to Personal Data and
              that such access is limited in accordance with the
              Customer&rsquo;s responsibilities under Parts 3 and 5 of this
              Agreement.
            </p>
          </section>

          {/* Section 55 */}
          <section id="section-55" className="mb-12 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-navy mb-6 leading-snug">
              55. CONTROLLER AND PROCESSOR ROLES
            </h2>
            <p className={clauseText}>
              <ClauseHeading num="55.1" /> The parties acknowledge that their
              respective roles as controller, joint controller or processor
              depend on the particular Personal Data and the purposes and means
              for which that Personal Data is processed.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="55.2" /> To the extent that e2e World processes Customer Data containing Personal Data solely
              on the Customer&rsquo;s documented instructions for the purpose of
              providing IMCAM Hub, e2e World shall ordinarily act as
              processor and the Customer shall ordinarily act as controller,
              unless the circumstances require a different allocation under Data
              Protection Legislation.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="55.3" /> e2e World may act as an
              independent controller in respect of Personal Data that it
              determines the purposes and means of processing for its own
              legitimate business and legal activities, which may include:
            </p>
            <ul className="pl-6 sm:pl-10 space-y-2 mb-4">
              <li className={listItemText}>
                <ClauseHeading num="a." /> Customer account administration and
                relationship management;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="b." /> billing, payment and financial
                records;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="c." /> business contact information;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="d." /> service security, fraud prevention
                and abuse prevention where e2e World determines the
                relevant processing purposes;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="e." /> legal and regulatory compliance;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="f." /> establishing, exercising or defending
                legal claims; and
              </li>
              <li className={listItemText}>
                <ClauseHeading num="g." /> other processing for which e2e World independently determines the purposes and means.
              </li>
            </ul>
            <p className={clauseText}>
              <ClauseHeading num="55.4" /> The Customer shall act as controller
              in respect of Personal Data for which it determines the purposes
              and means of processing, including Personal Data processed in
              connection with its Cases, professional services, employment,
              sponsorship or other business activities, except where applicable
              law requires otherwise.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="55.5" /> The parties do not intend to become
              joint controllers merely because both parties process Personal
              Data in connection with IMCAM Hub. If a processing activity results
              in the parties jointly determining its purposes and means, the
              parties shall address their respective responsibilities as
              required by Data Protection Legislation.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="55.6" /> The detailed allocation of controller
              and processor responsibilities shall be set out or supplemented in
              the applicable Data Processing Agreement and may be updated to
              reflect the actual processing activities and technical operation
              of IMCAM Hub.
            </p>
          </section>

          {/* Section 56 */}
          <section id="section-56" className="mb-12 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-navy mb-6 leading-snug">
              56. UK GDPR AND DATA PROTECTION ACT 2018
            </h2>
            <p className={clauseText}>
              <ClauseHeading num="56.1" /> Where applicable, the parties shall
              comply with the UK GDPR, the Data Protection Act 2018 and other
              applicable United Kingdom data protection and privacy legislation
              forming part of the Data Protection Legislation.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="56.2" /> The Customer is responsible for
              identifying the lawful basis or bases applicable to its processing
              of Personal Data through IMCAM Hub and for satisfying any
              additional conditions required for special category or criminal
              offence data.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="56.3" /> Each party shall, to the extent
              applicable to its role, have appropriate measures and procedures
              designed to support compliance with the data protection
              principles, including lawfulness, fairness and transparency,
              purpose limitation, data minimisation, accuracy, storage
              limitation, integrity and confidentiality, and accountability.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="56.4" /> The Customer is responsible for
              providing privacy information to data subjects where the Customer
              is required to do so in its capacity as controller.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="56.5" /> e2e World shall provide
              privacy information for processing activities for which it acts as
              an independent controller where required by Data Protection
              Legislation.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="56.6" /> References in this Agreement to
              compliance with the UK GDPR or Data Protection Act 2018 shall
              include any amendment, replacement or successor legislation
              applicable to the relevant processing.
            </p>
          </section>

          {/* Section 57 */}
          <section id="section-57" className="mb-12 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-navy mb-6 leading-snug">
              57. PERSONAL DATA
            </h2>
            <p className={clauseText}>
              <ClauseHeading num="57.1" /> Personal Data processed through
              IMCAM Hub may include information required for immigration,
              sponsorship, employment, account-management and related purposes.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="57.2" /> Depending on the Customer&rsquo;s use
              of the Software, Personal Data may include:
            </p>
            <ul className="pl-6 sm:pl-10 space-y-2 mb-4">
              <li className={listItemText}>
                <ClauseHeading num="a." /> names, contact details and identity
                information;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="b." /> passport, nationality and immigration
                information;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="c." /> visa, permission and
                immigration-history information;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="d." /> employment, occupation, salary and
                sponsorship information;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="e." /> address and residence information;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="f." /> family and dependant information;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="g." /> education, qualification and
                professional information;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="h." /> travel and absence information;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="i." /> documents, correspondence and Case
                records;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="j." /> account, user and activity
                information; and
              </li>
              <li className={listItemText}>
                <ClauseHeading num="k." /> other Personal Data entered into or
                generated through the Customer&rsquo;s authorised use of
                IMCAM Hub.
              </li>
            </ul>
            <p className={clauseText}>
              <ClauseHeading num="57.3" /> The Customer must limit Personal Data
              entered into IMCAM Hub to information that is reasonably necessary
              for legitimate purposes connected with the Customer&rsquo;s use of
              the Software.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="57.4" /> The Customer must not use IMCAM Hub as
              a general repository for unrelated Personal Data that is not
              reasonably connected with the purposes for which the Software is
              provided.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="57.5" /> The categories of Personal Data
              actually processed, categories of data subjects and processing
              activities may be further specified in the Data Processing
              Agreement.
            </p>
          </section>

          {/* Section 58 */}
          <section id="section-58" className="mb-12 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-navy mb-6 leading-snug">
              58. SPECIAL CATEGORY DATA
            </h2>
            <p className={clauseText}>
              <ClauseHeading num="58.1" /> The parties acknowledge that
              immigration Cases may involve special category Personal Data
              within the meaning of Data Protection Legislation.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="58.2" /> Special category data processed
              through IMCAM Hub may, depending on the relevant Case and
              information supplied, include data revealing racial or ethnic
              origin, religious or philosophical beliefs, health information,
              biometric data used for identification or other special category
              data.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="58.3" /> The Customer is responsible for
              identifying and documenting an appropriate lawful basis and any
              applicable special-category processing condition before processing
              such data through IMCAM Hub.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="58.4" /> The Customer must ensure that access
              to special category data is limited to appropriately authorised
              persons and that the data is processed only to the extent
              reasonably necessary for the relevant purpose.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="58.5" /> e2e World shall apply the
              security and confidentiality measures required under this
              Agreement and the applicable Data Processing Agreement to special
              category data processed on the Customer&rsquo;s behalf.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="58.6" /> The Customer should avoid uploading
              special category data that is not reasonably necessary for the
              relevant Case or legitimate processing purpose.
            </p>
          </section>

          {/* Section 59 */}
          <section id="section-59" className="mb-12 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-navy mb-6 leading-snug">
              59. CRIMINAL OFFENCE DATA
            </h2>
            <p className={clauseText}>
              <ClauseHeading num="59.1" /> The parties acknowledge that some
              immigration matters may involve Personal Data relating to criminal
              convictions, offences, allegations, cautions, penalties or related
              security and character matters.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="59.2" /> The Customer is responsible for
              ensuring that any processing of criminal offence data through
              IMCAM Hub is lawful and satisfies the requirements of applicable
              Data Protection Legislation, including any requirement for
              appropriate legal authority or safeguards.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="59.3" /> The Customer must limit access to
              criminal offence data to persons who have a legitimate and
              authorised need to access it.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="59.4" /> e2e World shall not
              intentionally use criminal offence data processed on the
              Customer&rsquo;s behalf for its own unrelated purposes.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="59.5" /> The Customer should not collect or
              retain criminal offence data through IMCAM Hub beyond what is
              reasonably necessary for the relevant lawful purpose.
            </p>
          </section>

          {/* Section 60 */}
          <section id="section-60" className="mb-12 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-navy mb-6 leading-snug">
              60. CHILDREN&rsquo;S DATA
            </h2>
            <p className={clauseText}>
              <ClauseHeading num="60.1" /> IMCAM Hub may be used in connection
              with immigration Cases involving children, including dependant
              applications and family immigration matters.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="60.2" /> Where the Customer processes Personal
              Data relating to a child, the Customer is responsible for ensuring
              that the processing is lawful, fair, transparent and appropriate
              having regard to the child&rsquo;s interests and the nature of the
              relevant immigration matter.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="60.3" /> The Customer is responsible for
              determining whether consent, parental responsibility, authority or
              another lawful basis is required for the collection, use or
              disclosure of a child&rsquo;s Personal Data.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="60.4" /> The Customer must take reasonable care
              to limit access to children&rsquo;s Personal Data and to avoid
              collecting information that is unnecessary for the relevant
              purpose.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="60.5" /> Where Candidate Portal access is made
              available directly to a child, the Customer is responsible for
              determining whether that access is appropriate and for implementing
              any necessary parental, guardian, safeguarding or authorisation
              arrangements.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="60.6" /> Nothing in this Section permits
              processing of children&rsquo;s Personal Data in circumstances
              prohibited by applicable law.
            </p>
          </section>

          {/* Section 61 */}
          <section id="section-61" className="mb-12 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-navy mb-6 leading-snug">
              61. DATA PROCESSING INSTRUCTIONS
            </h2>
            <p className={clauseText}>
              <ClauseHeading num="61.1" /> Where e2e World acts as
              processor, it shall process Personal Data only on the documented
              instructions of the Customer, including as set out in this
              Agreement, the Data Processing Agreement, the Customer&rsquo;s use
              and configuration of IMCAM Hub, and other lawful written
              instructions agreed between the parties.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="61.2" /> The Customer instructs e2e World to process Personal Data as reasonably necessary to
              provide, operate, maintain, secure and support IMCAM Hub and to
              perform the services described in the Agreement.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="61.3" /> If e2e World is required by
              applicable law to process Personal Data otherwise than on the
              Customer&rsquo;s instructions, e2e World shall inform
              the Customer of that legal requirement before processing unless
              the law prohibits such notification.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="61.4" /> If e2e World reasonably
              believes that a Customer instruction infringes applicable Data
              Protection Legislation, e2e World may inform the
              Customer and, where appropriate, suspend the affected processing
              while the instruction is clarified or amended.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="61.5" /> The Customer is responsible for
              ensuring that its processing instructions are lawful and that it
              has all necessary rights, notices, lawful bases and authorisations
              to instruct e2e World to process the relevant Personal
              Data.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="61.6" /> e2e World is not required
              to determine the legal basis for processing undertaken on the
              Customer&rsquo;s behalf except to the extent required by Data
              Protection Legislation in its capacity as processor.
            </p>
          </section>

          {/* Section 62 */}
          <section id="section-62" className="mb-12 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-navy mb-6 leading-snug">
              62. DATA SECURITY
            </h2>
            <p className={clauseText}>
              <ClauseHeading num="62.1" /> Each party shall implement appropriate
              technical and organisational measures designed to protect Personal
              Data against accidental or unlawful destruction, loss, alteration,
              unauthorised disclosure of, or access to Personal Data, having
              regard to the nature, scope, context and purposes of processing
              and the risks to individuals.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="62.2" /> e2e World&rsquo;s measures
              may include, as appropriate to the technical design and risk
              profile of IMCAM Hub:
            </p>
            <ul className="pl-6 sm:pl-10 space-y-2 mb-4">
              <li className={listItemText}>
                <ClauseHeading num="a." /> access controls and role-based
                permissions;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="b." /> authentication and
                credential-management controls;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="c." /> measures designed to segregate
                Customer accounts and data;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="d." /> encryption or other appropriate
                protections for data in transit and, where appropriate, at rest;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="e." /> logging, monitoring and
                security-event management;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="f." /> vulnerability management, patching and
                security maintenance;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="g." /> backup, recovery and
                business-continuity measures;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="h." /> confidentiality obligations and access
                restrictions for authorised personnel; and
              </li>
              <li className={listItemText}>
                <ClauseHeading num="i." /> other measures appropriate to the
                risks presented by the processing.
              </li>
            </ul>
            <p className={clauseText}>
              <ClauseHeading num="62.3" /> The Customer is responsible for
              security matters within its control, including management of
              Authorised Users, credentials, devices, local systems, access
              permissions and the secure handling of data exported from
              IMCAM Hub.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="62.4" /> The Customer must notify e2e World promptly of known or suspected weaknesses, unauthorised
              access or security incidents that may affect IMCAM Hub or Personal
              Data processed through it.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="62.5" /> Specific technical and organisational
              measures may be described in the Data Processing Agreement,
              security schedule or other applicable documentation and may evolve
              as e2e World develops the Software and its
              infrastructure.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="62.6" /> Nothing in this Section constitutes a
              guarantee that security incidents can never occur.
            </p>
          </section>

          {/* Section 63 */}
          <section id="section-63" className="mb-12 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-navy mb-6 leading-snug">
              63. DATA BREACH AND SECURITY INCIDENTS
            </h2>
            <p className={clauseText}>
              <ClauseHeading num="63.1" /> Where e2e World becomes
              aware of a Personal Data Breach affecting Personal Data processed
              by e2e World as processor on behalf of the Customer, e2e World shall notify the Customer without undue delay in
              accordance with applicable Data Protection Legislation and the
              Data Processing Agreement.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="63.2" /> To the extent reasonably available, a
              notification under clause 63.1 shall provide information
              appropriate to assist the Customer in understanding the nature and
              potential impact of the Personal Data Breach and taking required
              action.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="63.3" /> e2e World may provide
              information in phases where all relevant details are not available
              at the same time.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="63.4" /> The Customer is responsible, in its
              capacity as controller where applicable, for determining whether
              notification to the Information Commissioner&rsquo;s Office,
              affected data subjects or another authority or person is required
              and for making such notification within applicable statutory
              timescales.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="63.5" /> The Customer must notify e2e World without undue delay if it becomes aware of a security
              incident or Personal Data Breach involving the Customer&rsquo;s
              account, Authorised Users or systems where the incident may affect
              IMCAM Hub, e2e World or Personal Data processed through
              the Software.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="63.6" /> The parties shall provide reasonable
              cooperation to each other in investigating and responding to a
              Personal Data Breach, taking into account their respective roles
              and the information available to them.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="63.7" /> Notification or cooperation in
              relation to a security incident does not constitute an admission of
              fault or liability by either party.
            </p>
          </section>

          {/* Section 64 */}
          <section id="section-64" className="mb-12 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-navy mb-6 leading-snug">
              64. DATA SUBJECT RIGHTS
            </h2>
            <p className={clauseText}>
              <ClauseHeading num="64.1" /> The Customer is responsible for
              responding to requests from data subjects in relation to Personal
              Data for which the Customer acts as controller.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="64.2" /> Where e2e World receives a
              request from a data subject relating primarily to Personal Data
              processed on behalf of the Customer, e2e World may refer
              the request to the Customer unless e2e World is legally
              required to respond directly.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="64.3" /> Taking into account the nature of the
              processing, e2e World shall provide reasonable assistance
              to the Customer, through appropriate technical and organisational
              measures where required by Data Protection Legislation, to support
              the Customer in responding to applicable data subject rights
              requests.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="64.4" /> Such requests may include, where
              applicable, rights of access, rectification, erasure, restriction,
              objection, data portability and rights relating to certain
              automated decision-making.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="64.5" /> The Customer is responsible for
              verifying the identity and authority of a person making a request
              and for determining whether a request is valid, subject to
              applicable law.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="64.6" /> Where e2e World acts as an
              independent controller for particular Personal Data, it shall be
              responsible for handling data subject requests relating to that
              processing in accordance with Data Protection Legislation.
            </p>
          </section>

          {/* Section 65 */}
          <section id="section-65" className="mb-12 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-navy mb-6 leading-snug">
              65. INTERNATIONAL DATA TRANSFERS
            </h2>
            <p className={clauseText}>
              <ClauseHeading num="65.1" /> Personal Data processed in connection
              with IMCAM Hub shall not be transferred internationally in breach of
              applicable Data Protection Legislation.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="65.2" /> Where e2e World, acting as
              processor, transfers Personal Data to a country or recipient
              outside the United Kingdom in circumstances requiring an
              international-transfer safeguard, e2e World shall ensure
              that an appropriate lawful transfer mechanism is in place.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="65.3" /> Such mechanisms may include an
              applicable adequacy regulation, the UK International Data Transfer
              Agreement, the UK Addendum to approved standard contractual
              clauses, or another lawful transfer mechanism recognised under
              applicable Data Protection Legislation.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="65.4" /> The Customer authorises international
              transfers undertaken in accordance with the applicable Data
              Processing Agreement and the lawful transfer safeguards identified
              there or otherwise notified in accordance with that agreement.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="65.5" /> The specific hosting locations,
              sub-processor locations and transfer arrangements applicable to
              IMCAM Hub shall be documented once determined and, where required,
              reflected in the Data Processing Agreement or relevant
              sub-processor information.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="65.6" /> The Customer is responsible for
              ensuring that international transfers independently initiated by
              the Customer, including exports or disclosures outside IMCAM Hub,
              comply with applicable Data Protection Legislation.
            </p>
          </section>

          {/* Section 66 */}
          <section id="section-66" className="mb-12 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-navy mb-6 leading-snug">
              66. SUB-PROCESSORS
            </h2>
            <p className={clauseText}>
              <ClauseHeading num="66.1" /> Where e2e World acts as
              processor, the Customer authorises e2e World to engage
              sub-processors to assist in providing, hosting, securing,
              supporting or operating IMCAM Hub, subject to the requirements of
              the applicable Data Processing Agreement.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="66.2" /> e2e World shall ensure that
              a sub-processor processing Personal Data on behalf of the Customer
              is subject to written data protection obligations that provide an
              appropriate level of protection consistent with e2e World&rsquo;s obligations as processor.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="66.3" /> e2e World shall remain
              responsible for the performance of its sub-processors to the extent
              required by applicable Data Protection Legislation and the Data
              Processing Agreement.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="66.4" /> The process for informing Customers of
              new or replacement sub-processors and any applicable right to
              object shall be set out in the Data Processing Agreement.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="66.5" /> The identity and location of relevant
              sub-processors may be maintained in a sub-processor list, Data
              Processing Agreement, privacy or security documentation, or another
              location notified to the Customer.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="66.6" /> Because the final hosting and
              supporting service-provider arrangements for IMCAM Hub may evolve,
              this Agreement does not identify a fixed list of sub-processors.
              The operative list shall be maintained in the applicable data
              protection documentation.
            </p>
          </section>

          {/* Section 67 */}
          <section id="section-67" className="mb-12 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-navy mb-6 leading-snug">
              67. DATA RETENTION AND DELETION
            </h2>
            <p className={clauseText}>
              <ClauseHeading num="67.1" /> Personal Data shall be retained only
              for as long as reasonably necessary for the purposes for which it
              is processed, subject to applicable legal, regulatory,
              contractual, security, backup and dispute-resolution requirements.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="67.2" /> Where e2e World acts as
              processor, retention and deletion of Customer Personal Data shall
              be governed by the Customer&rsquo;s documented instructions, the
              functionality of IMCAM Hub, this Agreement and the applicable Data
              Processing Agreement.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="67.3" /> Following expiry or termination of the
              Subscription, e2e World shall return or delete Personal
              Data processed on behalf of the Customer in accordance with the
              applicable Data Processing Agreement, subject to any legal
              requirement or permitted residual backup retention.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="67.4" /> Personal Data may remain temporarily
              in backups, logs or disaster-recovery systems after deletion from
              active systems where immediate deletion is not technically
              practicable, provided that such data remains protected and is not
              used for unrelated purposes.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="67.5" /> Where e2e World acts as
              independent controller, it may retain Personal Data for the periods
              reasonably necessary for its own lawful purposes, including account
              administration, financial records, security, legal compliance and
              the establishment, exercise or defence of legal claims.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="67.6" /> The Customer remains responsible for
              its own legal, professional and regulatory retention obligations
              and should export or preserve records where necessary before access
              to the relevant Customer Data ends.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="67.7" /> Specific operational retention and
              deletion periods shall be documented once finalised and may be set
              out in the Data Processing Agreement, retention schedule or other
              applicable documentation.
            </p>
          </section>

          {/* Section 68 */}
          <section id="section-68" className="mb-12 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-navy mb-6 leading-snug">
              68. DATA PROTECTION IMPACT ASSESSMENTS
            </h2>
            <p className={clauseText}>
              <ClauseHeading num="68.1" /> The Customer is responsible for
              determining whether its use of IMCAM Hub requires a data protection
              impact assessment or other risk assessment under applicable Data
              Protection Legislation.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="68.2" /> Where e2e World acts as
              processor and the Customer reasonably requires information to
              complete a data protection impact assessment concerning processing
              carried out through IMCAM Hub, e2e World shall provide
              reasonable assistance taking into account the nature of the
              processing and the information available to e2e World.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="68.3" /> Such assistance may include relevant
              information concerning the nature of the Software, processing
              activities, security measures, sub-processors and international
              transfers to the extent applicable and reasonably available.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="68.4" /> The Customer remains responsible for
              carrying out, documenting and reviewing its own data protection
              impact assessment and for determining whether consultation with
              the Information Commissioner&rsquo;s Office or another authority
              is required.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="68.5" /> Where e2e World identifies a
              material change to the processing it carries out as processor that
              may reasonably affect information previously provided for a data
              protection impact assessment, e2e World shall address
              such changes in accordance with the Data Processing Agreement and
              applicable law.
            </p>
          </section>

          {/* Section 69 */}
          <section id="section-69" className="mb-4 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-navy mb-6 leading-snug">
              69. DATA PROCESSING AGREEMENT
            </h2>
            <p className={clauseText}>
              <ClauseHeading num="69.1" /> Where e2e World processes
              Personal Data as processor on behalf of the Customer, the parties
              shall be subject to a Data Processing Agreement meeting the
              requirements of applicable Data Protection Legislation.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="69.2" /> The Data Processing Agreement shall
              form part of the contractual arrangements governing the
              Customer&rsquo;s use of IMCAM Hub and shall address matters
              including, as applicable:
            </p>
            <ul className="pl-6 sm:pl-10 space-y-2 mb-4">
              <li className={listItemText}>
                <ClauseHeading num="a." /> the subject matter and duration of
                processing;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="b." /> the nature and purposes of processing;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="c." /> the types of Personal Data and
                categories of data subjects;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="d." /> the Customer&rsquo;s documented
                instructions;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="e." /> confidentiality obligations;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="f." /> technical and organisational security
                measures;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="g." /> use of sub-processors;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="h." /> assistance with data subject rights;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="i." /> Personal Data Breach obligations;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="j." /> data protection impact assessments and
                regulatory consultation;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="k." /> international data transfers;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="l." /> return and deletion of Personal Data;
                and
              </li>
              <li className={listItemText}>
                <ClauseHeading num="m." /> audit, information and compliance
                obligations required by applicable Data Protection Legislation.
              </li>
            </ul>
            <p className={clauseText}>
              <ClauseHeading num="69.3" /> If there is a conflict between this
              Agreement and the Data Processing Agreement concerning the
              processing of Personal Data in circumstances where e2e World acts as processor, the Data Processing Agreement shall
              prevail to the extent of that conflict, consistently with the
              order-of-precedence provisions of this Agreement.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="69.4" /> The Data Processing Agreement may
              contain further technical and operational details that are not
              appropriate to fix in these Terms, including final hosting
              arrangements, sub-processors, processing locations, security
              measures, retention periods and deletion procedures.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="69.5" /> Where the relevant technical or
              operational arrangements have not yet been finalised, the parties
              acknowledge that the Data Processing Agreement must be completed
              and aligned with the production configuration of IMCAM Hub before
              Personal Data is processed under a live Customer Subscription to
              the extent required by applicable law.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="69.6" /> Nothing in the Data Processing
              Agreement shall reduce either party&rsquo;s obligations under Data
              Protection Legislation.
            </p>
          </section>

          <PartHeading num="9" title="Confidentiality & Security" />

          {/* Section 70 */}
          <section id="section-70" className="mb-12 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-navy mb-6 leading-snug">
              70. CONFIDENTIALITY
            </h2>
            <p className={clauseText}>
              <ClauseHeading num="70.1" /> Each party may receive or have access
              to Confidential Information belonging to the other party in
              connection with the Agreement, the provision or use of IMCAM Hub,
              technical support, implementation, account administration or
              related activities.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="70.2" /> Each party shall keep the other
              party&rsquo;s Confidential Information confidential and shall not
              disclose it to any third party except as permitted by this
              Agreement or with the other party&rsquo;s prior written consent.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="70.3" /> A receiving party may use
              Confidential Information only to the extent reasonably necessary
              to exercise its rights, perform its obligations or receive the
              benefit of the Agreement.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="70.4" /> A receiving party may disclose
              Confidential Information to its employees, officers, professional
              advisers, contractors and service providers who have a legitimate
              need to know the information for purposes connected with the
              Agreement, provided that such persons are subject to appropriate
              confidentiality obligations.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="70.5" /> The obligations in this Section do
              not apply to information that the receiving party can demonstrate:
            </p>
            <ul className="pl-6 sm:pl-10 space-y-2 mb-4">
              <li className={listItemText}>
                <ClauseHeading num="a." /> is or becomes publicly available
                other than through a breach of confidentiality;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="b." /> was lawfully known to the receiving
                party without restriction before disclosure;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="c." /> is lawfully received from a third
                party without an obligation of confidentiality;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="d." /> is independently developed without
                use of or reference to the disclosing party&rsquo;s Confidential
                Information; or
              </li>
              <li className={listItemText}>
                <ClauseHeading num="e." /> is approved for release by the
                disclosing party in writing.
              </li>
            </ul>
            <p className={clauseText}>
              <ClauseHeading num="70.6" /> A party may disclose Confidential
              Information where required by law, court order or a competent
              regulatory or governmental authority, provided that, where legally
              permitted and reasonably practicable, it gives the other party
              advance notice and limits the disclosure to what is required.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="70.7" /> Each party shall apply reasonable
              measures to protect the other party&rsquo;s Confidential
              Information against unauthorised access, use, alteration, loss or
              disclosure.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="70.8" /> The confidentiality obligations in
              this Section shall continue after termination or expiry of the
              Agreement for so long as the information remains confidential by
              its nature or under applicable law.
            </p>
          </section>

          {/* Section 71 */}
          <section id="section-71" className="mb-12 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-navy mb-6 leading-snug">
              71. CLIENT CONFIDENTIAL INFORMATION
            </h2>
            <p className={clauseText}>
              <ClauseHeading num="71.1" /> The parties acknowledge that Customer
              Data processed through IMCAM Hub may include highly confidential
              information concerning Candidates, Clients, employees, workers,
              Businesses, sponsors and immigration matters.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="71.2" /> Such information may include identity
              and passport information, immigration history, visa and sponsorship
              records, employment information, financial information, family
              information, correspondence, supporting evidence, legal or
              professional records and other information that is confidential by
              its nature or circumstances.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="71.3" /> e2e World shall treat
              Customer Data that is confidential in nature as Confidential
              Information and shall use it only as permitted under the Agreement,
              the applicable Data Processing Agreement and applicable law.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="71.4" /> The Customer is responsible for
              ensuring that its Authorised Users, Candidates, Business/Sponsor
              Users and other persons to whom it grants access understand and
              comply with appropriate confidentiality requirements.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="71.5" /> The Customer must configure and
              manage access so that confidential information is available only
              to persons who have a legitimate and authorised need to access it.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="71.6" /> Where the Customer discloses
              confidential information through IMCAM Hub to a Candidate, Client,
              Business, employee, worker or other third party, the Customer is
              responsible for determining that the disclosure is appropriate and
              authorised.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="71.7" /> Nothing in this Agreement gives e2e World ownership of Customer Confidential Information
              merely because that information is stored, transmitted or
              otherwise processed through IMCAM Hub.
            </p>
          </section>

          {/* Section 72 */}
          <section id="section-72" className="mb-12 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-navy mb-6 leading-snug">
              72. SEGREGATION OF CUSTOMER DATA
            </h2>
            <p className={clauseText}>
              <ClauseHeading num="72.1" /> IMCAM Hub shall be designed and
              operated with access controls intended to prevent one Customer
              from accessing another Customer&rsquo;s Customer Data through
              ordinary authorised use of the Software.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="72.2" /> Customer accounts, Cases, documents
              and related Customer Data shall be logically segregated through
              appropriate technical and access-control measures having regard to
              the architecture of IMCAM Hub.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="72.3" /> A Customer and its Authorised Users
              must not attempt to access, discover, retrieve, modify or
              otherwise interact with another Customer&rsquo;s Customer Data
              unless the relevant access has been expressly and lawfully
              authorised.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="72.4" /> Where information is intentionally
              shared between authorised parties through functionality provided
              by IMCAM Hub, such sharing shall not constitute a failure of
              segregation where it is consistent with the permissions and lawful
              instructions applicable to that information.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="72.5" /> e2e World shall take
              reasonable steps to investigate any suspected cross-Customer access
              or segregation failure that comes to its attention and shall take
              appropriate protective or remedial action.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="72.6" /> Any Personal Data Breach arising from
              unauthorised cross-Customer access shall be handled in accordance
              with the data breach provisions of the Agreement and the applicable
              Data Processing Agreement.
            </p>
          </section>

          {/* Section 73 */}
          <section id="section-73" className="mb-12 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-navy mb-6 leading-snug">
              73. ACCESS TO CUSTOMER SYSTEMS AND DATA BY e2e WORLD
            </h2>
            <p className={clauseText}>
              <ClauseHeading num="73.1" /> e2e World personnel may
              access Customer account information, Customer Data or relevant
              administrative functionality only where such access is reasonably
              necessary for legitimate purposes connected with the provision,
              administration, maintenance, support, security or protection of
              IMCAM Hub, or where otherwise authorised or required by law.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="73.2" /> Permitted purposes may include:
            </p>
            <ul className="pl-6 sm:pl-10 space-y-2 mb-4">
              <li className={listItemText}>
                <ClauseHeading num="a." /> setting up, configuring or
                administering Customer accounts;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="b." /> responding to an authorised support
                request;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="c." /> diagnosing or resolving technical
                faults;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="d." /> investigating security incidents,
                suspected misuse or service disruption;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="e." /> maintaining, securing, updating or
                improving the operation of IMCAM Hub;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="f." /> performing authorised data-management
                or migration activities;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="g." /> complying with applicable legal or
                regulatory requirements; and
              </li>
              <li className={listItemText}>
                <ClauseHeading num="h." /> other purposes expressly authorised
                by the Customer or permitted under the Agreement.
              </li>
            </ul>
            <p className={clauseText}>
              <ClauseHeading num="73.3" /> Where access to Customer Data is
              required, e2e World shall take reasonable steps to limit
              access to authorised personnel and to the information reasonably
              necessary for the relevant purpose.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="73.4" /> e2e World personnel with
              access to Customer Data shall be subject to appropriate
              confidentiality obligations and access controls.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="73.5" /> Access by e2e World to
              Customer Data does not create an obligation to routinely review,
              monitor or verify the Customer&rsquo;s Cases, documents,
              professional work or compliance activities.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="73.6" /> Where e2e World acts as
              processor, access to Personal Data shall also be governed by the
              Customer&rsquo;s documented instructions and the applicable Data
              Processing Agreement.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="73.7" /> The precise technical scope of Super
              Admin access may depend on the final production architecture of
              IMCAM Hub. e2e World shall maintain access arrangements
              consistent with the principles in this Section and Section 18.
            </p>
          </section>

          {/* Section 74 */}
          <section id="section-74" className="mb-12 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-navy mb-6 leading-snug">
              74. SECURITY MEASURES
            </h2>
            <p className={clauseText}>
              <ClauseHeading num="74.1" /> e2e World shall maintain
              appropriate technical and organisational measures designed to
              protect IMCAM Hub and Customer Data against unauthorised or unlawful
              access, use, disclosure, alteration, destruction or loss.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="74.2" /> Having regard to the nature of the
              Software, the information processed and the risks involved,
              security measures may include:
            </p>
            <ul className="pl-6 sm:pl-10 space-y-2 mb-4">
              <li className={listItemText}>
                <ClauseHeading num="a." /> individual user accounts and
                authentication controls;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="b." /> role-based access controls and
                permission management;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="c." /> logical segregation of Customer Data;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="d." /> appropriate encryption or equivalent
                protections for data in transit and, where appropriate, at rest;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="e." /> logging and monitoring of relevant
                system and security activity;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="f." /> secure software development,
                maintenance and change-management practices;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="g." /> vulnerability and patch management;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="h." /> malware and threat-protection
                measures;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="i." /> backup and recovery arrangements;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="j." /> controls over privileged and
                administrative access;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="k." /> confidentiality and security
                obligations for authorised personnel; and
              </li>
              <li className={listItemText}>
                <ClauseHeading num="l." /> incident-management and response
                procedures.
              </li>
            </ul>
            <p className={clauseText}>
              <ClauseHeading num="74.3" /> Security measures may evolve over time
              to address changes in technology, threats, legal requirements, the
              architecture of IMCAM Hub and industry practices.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="74.4" /> The Customer is responsible for
              security matters within its control, including its devices,
              networks, browsers, credentials, user administration, permissions
              and exported Customer Data.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="74.5" /> The Customer must not disable, bypass
              or interfere with security controls implemented within IMCAM Hub.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="74.6" /> Specific technical and organisational
              measures applicable to Personal Data may be described in the Data
              Processing Agreement or an associated security schedule once the
              production infrastructure and security architecture are finalised.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="74.7" /> No security system can eliminate all
              risk, and nothing in this Section constitutes a guarantee that
              IMCAM Hub will be immune from every attempted or successful
              security incident.
            </p>
          </section>

          {/* Section 75 */}
          <section id="section-75" className="mb-12 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-navy mb-6 leading-snug">
              75. ACCESS LOGGING AND MONITORING
            </h2>
            <p className={clauseText}>
              <ClauseHeading num="75.1" /> e2e World may maintain logs
              and monitoring systems relating to access to and use of IMCAM Hub
              for legitimate operational, security, support, audit and compliance
              purposes.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="75.2" /> Such records may include, where
              technically available and appropriate:
            </p>
            <ul className="pl-6 sm:pl-10 space-y-2 mb-4">
              <li className={listItemText}>
                <ClauseHeading num="a." /> authentication and login events;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="b." /> user and administrative account
                activity;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="c." /> changes to permissions or access
                rights;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="d." /> Case and document activity;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="e." /> security events and suspected
                unauthorised access;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="f." /> system errors, performance information
                and technical events; and
              </li>
              <li className={listItemText}>
                <ClauseHeading num="g." /> other activity reasonably necessary
                for security, troubleshooting, audit or service administration.
              </li>
            </ul>
            <p className={clauseText}>
              <ClauseHeading num="75.3" /> e2e World may monitor system
              activity to detect, investigate and respond to suspected misuse,
              fraud, security threats, technical faults or breaches of this
              Agreement.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="75.4" /> Monitoring under this Section does not
              create an obligation for e2e World to monitor the
              substantive contents of every Case, document, communication or
              action undertaken by a Customer or its users.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="75.5" /> The Customer is responsible for any
              monitoring, supervision or audit of its own personnel required by
              applicable law, professional obligations or its internal policies.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="75.6" /> Access logs and monitoring information
              shall be protected and retained in accordance with applicable
              security, data protection and retention requirements.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="75.7" /> The availability of Customer-facing
              audit information may depend on the Customer&rsquo;s Subscription
              and the functionality made available within IMCAM Hub.
            </p>
          </section>

          {/* Section 76 */}
          <section id="section-76" className="mb-12 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-navy mb-6 leading-snug">
              76. CYBERSECURITY
            </h2>
            <p className={clauseText}>
              <ClauseHeading num="76.1" /> Each party shall take reasonable
              measures within its control to reduce cybersecurity risks relevant
              to its use or provision of IMCAM Hub.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="76.2" /> e2e World may implement
              measures designed to identify, prevent, detect and respond to
              cybersecurity threats affecting the Software, its infrastructure or
              Customer Data.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="76.3" /> The Customer shall take reasonable
              cybersecurity precautions, including:
            </p>
            <ul className="pl-6 sm:pl-10 space-y-2 mb-4">
              <li className={listItemText}>
                <ClauseHeading num="a." /> protecting credentials and
                authentication methods;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="b." /> maintaining reasonable security on
                devices and networks used to access IMCAM Hub;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="c." /> keeping relevant operating systems,
                browsers and security software reasonably up to date;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="d." /> restricting access to authorised
                persons;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="e." /> being alert to phishing, social
                engineering and credential theft;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="f." /> promptly removing access for users who
                no longer require it; and
              </li>
              <li className={listItemText}>
                <ClauseHeading num="g." /> promptly reporting suspected
                compromise or malicious activity affecting IMCAM Hub.
              </li>
            </ul>
            <p className={clauseText}>
              <ClauseHeading num="76.4" /> The Customer must not introduce or
              knowingly permit malware, ransomware, malicious code or other
              harmful material to be transmitted through IMCAM Hub.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="76.5" /> Where e2e World reasonably
              identifies an immediate or material cybersecurity risk, it may take
              proportionate protective measures, including restricting affected
              functionality, credentials, integrations or accounts in accordance
              with the suspension and security provisions of this Agreement.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="76.6" /> The parties shall provide reasonable
              cooperation to each other where a cybersecurity incident affecting
              both parties requires coordinated investigation or remediation,
              subject to confidentiality, security and legal restrictions.
            </p>
          </section>

          {/* Section 77 */}
          <section id="section-77" className="mb-12 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-navy mb-6 leading-snug">
              77. BACKUPS AND DISASTER RECOVERY
            </h2>
            <p className={clauseText}>
              <ClauseHeading num="77.1" /> e2e World shall maintain
              backup and recovery arrangements appropriate to the production
              architecture and risk profile of IMCAM Hub.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="77.2" /> Backup arrangements may be used to
              support recovery from system failure, corruption, accidental loss,
              security incidents or other events affecting the availability or
              integrity of the Software or Customer Data.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="77.3" /> The frequency, retention period,
              storage location, redundancy and recovery procedures applicable to
              backups shall depend on the final hosting and infrastructure
              arrangements and may be documented in applicable security,
              service-level or data protection documentation.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="77.4" /> Backups are maintained primarily for
              service resilience and disaster-recovery purposes and should not be
              treated as a Customer-controlled archival service or as a substitute
              for the Customer maintaining records required for its own legal,
              regulatory, professional or business purposes.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="77.5" /> Restoration from backup may not
              reproduce every change made immediately before the relevant failure
              or incident, depending on the applicable recovery arrangements.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="77.6" /> Where Customer Data has been deleted
              from active systems, residual copies may remain within backups for
              a limited period in accordance with the applicable backup cycle,
              subject to the retention and deletion provisions of this Agreement
              and the Data Processing Agreement.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="77.7" /> e2e World shall periodically
              review its backup and recovery arrangements as appropriate to the
              operation and development of IMCAM Hub.
            </p>
          </section>

          {/* Section 78 */}
          <section id="section-78" className="mb-12 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-navy mb-6 leading-snug">
              78. BUSINESS CONTINUITY
            </h2>
            <p className={clauseText}>
              <ClauseHeading num="78.1" /> e2e World shall maintain
              reasonable arrangements intended to support continuity and recovery
              of IMCAM Hub following material operational or technical disruption.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="78.2" /> Business-continuity arrangements may
              address matters including:
            </p>
            <ul className="pl-6 sm:pl-10 space-y-2 mb-4">
              <li className={listItemText}>
                <ClauseHeading num="a." /> significant infrastructure or hosting
                failures;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="b." /> loss or corruption of system data;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="c." /> cybersecurity incidents;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="d." /> failure of material third-party
                services;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="e." /> loss of access to key technical
                resources; and
              </li>
              <li className={listItemText}>
                <ClauseHeading num="f." /> other events that materially affect
                the operation of IMCAM Hub.
              </li>
            </ul>
            <p className={clauseText}>
              <ClauseHeading num="78.3" /> The nature and extent of continuity
              arrangements shall be proportionate to the services provided and
              may evolve as IMCAM Hub, its infrastructure and its third-party
              dependencies develop.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="78.4" /> The Customer is responsible for
              maintaining its own reasonable business-continuity arrangements,
              including alternative procedures where temporary unavailability of
              IMCAM Hub could affect urgent immigration, sponsorship, legal,
              regulatory or business activities.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="78.5" /> The Customer should not rely on
              IMCAM Hub as its sole means of identifying or meeting critical
              deadlines where interruption of access could cause material harm.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="78.6" /> Any specific recovery objectives,
              guaranteed service levels or service credits shall apply only where
              expressly agreed in an applicable Service Level Agreement or Order
              Form.
            </p>
          </section>

          {/* Section 79 */}
          <section id="section-79" className="mb-4 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-navy mb-6 leading-snug">
              79. SECURITY VULNERABILITIES
            </h2>
            <p className={clauseText}>
              <ClauseHeading num="79.1" /> If the Customer or an Authorised User
              becomes aware of a suspected security vulnerability affecting
              IMCAM Hub, the Customer must notify e2e World promptly
              through an appropriate support or security reporting channel.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="79.2" /> A vulnerability report should, where
              reasonably possible, provide sufficient information to allow e2e World to understand and investigate the suspected issue
              without including unnecessary Personal Data or confidential
              information.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="79.3" /> The Customer and its users must not
              exploit, publicly disclose, sell, misuse or use a suspected
              vulnerability to obtain unauthorised access to IMCAM Hub, Customer
              Data, another Customer&rsquo;s account or e2e World&rsquo;s systems.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="79.4" /> The Customer must not carry out
              penetration testing, vulnerability scanning, load testing or other
              security testing against IMCAM Hub without e2e World&rsquo;s prior written authorisation.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="79.5" /> e2e World shall assess
              reported vulnerabilities and take remediation or other protective
              action that it reasonably considers appropriate having regard to
              the severity, exploitability and potential impact of the issue.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="79.6" /> e2e World may temporarily
              restrict functionality or access where reasonably necessary to
              investigate, contain or remediate a material vulnerability or
              security threat.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="79.7" /> Where a vulnerability results in a
              Personal Data Breach or other security incident, the applicable
              data breach, security, notification and cooperation provisions of
              this Agreement and the Data Processing Agreement shall apply.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="79.8" /> Nothing in this Section requires e2e World to disclose information that could reasonably
              compromise the security of IMCAM Hub, another Customer, a third-party
              service or e2e World&rsquo;s infrastructure.
            </p>
          </section>

          <PartHeading num="10" title="Intellectual Property" />

          {/* Section 80 */}
          <section id="section-80" className="mb-12 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-navy mb-6 leading-snug">
              80. OWNERSHIP OF IMCAM HUB
            </h2>
            <p className={clauseText}>
              <ClauseHeading num="80.1" /> As between e2e World and the
              Customer, e2e World owns, or has the right to use and
              license, all Intellectual Property Rights in and to IMCAM Hub,
              except for Customer Data, Customer-owned materials and Third-Party
              Services or third-party materials.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="80.2" /> The Customer&rsquo;s Subscription
              grants only the limited right to access and use IMCAM Hub in
              accordance with this Agreement. It does not transfer ownership of
              the Software or any Intellectual Property Rights in the Software to
              the Customer or any Authorised User.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="80.3" /> Ownership of IMCAM Hub includes, to the
              extent owned by or licensed to e2e World, the
              platform&rsquo;s software, source and object code, architecture,
              database structures, user interfaces, workflows, functionality,
              design elements, configuration framework and associated
              Documentation.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="80.4" /> All rights in IMCAM Hub not expressly
              granted to the Customer under this Agreement are reserved by e2e World and its licensors.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="80.5" /> The Customer must not remove, obscure
              or alter any copyright, trade mark, proprietary or other rights
              notice displayed within IMCAM Hub or accompanying Documentation,
              except where e2e World expressly permits this.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="80.6" /> Nothing in this Section affects the
              Customer&rsquo;s ownership of Customer Data or materials that the
              Customer owned independently of IMCAM Hub.
            </p>
          </section>

          {/* Section 81 */}
          <section id="section-81" className="mb-12 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-navy mb-6 leading-snug">
              81. e2e WORLD INTELLECTUAL PROPERTY
            </h2>
            <p className={clauseText}>
              <ClauseHeading num="81.1" /> e2e World retains all
              Intellectual Property Rights in materials created, developed or
              owned by e2e World in connection with IMCAM Hub, subject
              to any express written agreement to the contrary.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="81.2" /> Such Intellectual Property Rights may
              include rights in:
            </p>
            <ul className="pl-6 sm:pl-10 space-y-2 mb-4">
              <li className={listItemText}>
                <ClauseHeading num="a." /> the IMCAM Hub name, branding, logos and
                visual identity;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="b." /> software code, technical architecture
                and system design;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="c." /> platform layouts, interfaces and
                user-experience elements;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="d." /> workflows, processes and platform
                configurations developed by e2e World;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="e." /> Documentation, help materials and
                training materials created by e2e World;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="f." /> generic forms, templates, checklists
                and materials created by e2e World for use across the
                Software;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="g." /> updates, modifications, enhancements,
                fixes and new releases of IMCAM Hub; and
              </li>
              <li className={listItemText}>
                <ClauseHeading num="h." /> know-how, methods and technical
                materials used in developing, operating or supporting the
                Software.
              </li>
            </ul>
            <p className={clauseText}>
              <ClauseHeading num="81.3" /> Where e2e World develops a
              configuration, improvement, functionality or other material while
              providing IMCAM Hub to a Customer, e2e World shall retain
              ownership of the underlying Software and any generally applicable
              development unless the parties expressly agree otherwise in
              writing.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="81.4" /> The Customer acquires no ownership
              rights merely because it has requested, funded, tested or suggested
              a configuration, improvement or feature, unless a separate written
              agreement expressly assigns ownership.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="81.5" /> Nothing in this Agreement prevents e2e World from using its general knowledge, skills,
              experience, ideas and know-how in developing or providing IMCAM Hub
              or other services, provided that it does not thereby disclose or
              misuse the Customer&rsquo;s Confidential Information or Customer
              Data.
            </p>
          </section>

          {/* Section 82 */}
          <section id="section-82" className="mb-12 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-navy mb-6 leading-snug">
              82. CUSTOMER DATA OWNERSHIP
            </h2>
            <p className={clauseText}>
              <ClauseHeading num="82.1" /> As between the parties, the Customer
              retains all rights, title and interest it has in Customer Data.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="82.2" /> The Customer grants e2e World a non-exclusive right to host, copy, transmit, display,
              process, back up and otherwise use Customer Data only to the extent
              reasonably necessary to provide, operate, maintain, secure and
              support IMCAM Hub, to comply with the Customer&rsquo;s lawful
              instructions, and as otherwise permitted by this Agreement or
              applicable law.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="82.3" /> The right granted under clause 82.2
              does not transfer ownership of Customer Data to e2e World.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="82.4" /> The Customer is responsible for
              ensuring that it has the rights, permissions, lawful bases and
              authority necessary to provide Customer Data to e2e World
              and to permit its processing through IMCAM Hub.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="82.5" /> Where Customer Data includes material
              owned by a Candidate, Client, employee, Business or another third
              party, references to Customer ownership shall not operate to
              transfer that third party&rsquo;s ownership rights to the Customer.
              The Customer&rsquo;s rights and responsibilities shall depend on
              the authority under which it holds and processes the material.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="82.6" /> The processing, return, export,
              retention and deletion of Customer Data shall also be subject to
              the data protection, confidentiality, Case-management and
              termination provisions of this Agreement and the applicable Data
              Processing Agreement.
            </p>
          </section>

          {/* Section 83 */}
          <section id="section-83" className="mb-12 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-navy mb-6 leading-snug">
              83. CUSTOMER CONTENT AND DOCUMENTS
            </h2>
            <p className={clauseText}>
              <ClauseHeading num="83.1" /> The Customer and relevant third parties
              retain their existing Intellectual Property Rights in documents,
              correspondence, forms, representations, records, images and other
              content uploaded to or created independently of IMCAM Hub.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="83.2" /> The Customer grants e2e World the limited rights necessary to technically store,
              reproduce, transmit, display, process and make such content
              available through IMCAM Hub in accordance with the
              Customer&rsquo;s authorised use of the Software.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="83.3" /> The Customer warrants that, to the
              extent necessary for its use of IMCAM Hub, it has sufficient rights
              or authority to upload, store, use, share and instruct e2e World to process Customer Content and documents.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="83.4" /> The Customer must not upload or use
              content through IMCAM Hub in a manner that knowingly infringes
              another person&rsquo;s copyright, database right, trade mark,
              confidentiality, privacy or other proprietary right.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="83.5" /> e2e World does not acquire
              ownership of a Customer&rsquo;s client letters, Case notes,
              evidence, representations or other Customer-created materials
              merely because they are stored or managed through IMCAM Hub.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="83.6" /> Where a document combines Customer
              Content with an e2e World template or other e2e World material, each party retains its rights in the elements
              it owns, subject to the licence rights granted under this
              Agreement.
            </p>
          </section>

          {/* Section 84 */}
          <section id="section-84" className="mb-12 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-navy mb-6 leading-snug">
              84. TEMPLATES AND MATERIALS
            </h2>
            <p className={clauseText}>
              <ClauseHeading num="84.1" /> IMCAM Hub may make available templates,
              sample wording, checklists, workflows, forms, guidance notes,
              document structures or other materials to assist with Case
              administration.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="84.2" /> Unless expressly stated otherwise,
              templates and materials supplied by e2e World as part of
              IMCAM Hub are licensed to the Customer for its authorised internal
              business and professional use during the Subscription.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="84.3" /> The Customer may adapt permitted
              templates and materials for its own Cases and internal use, but may
              not sell, commercially redistribute, publish as a standalone
              product, sublicense or make them available as a competing template
              library or service without e2e World&rsquo;s written
              permission.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="84.4" /> The Customer remains responsible for
              reviewing any template or material before use and for determining
              whether it is current, accurate and suitable for the relevant Case,
              legal requirement and professional purpose.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="84.5" /> A template or material made available
              through IMCAM Hub does not constitute a guarantee that its use will
              satisfy Home Office, UKVI, legal, evidential, regulatory or
              professional requirements.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="84.6" /> Where the Customer uploads or creates
              its own templates or materials within IMCAM Hub, the Customer
              retains its rights in those materials, subject to the limited
              licence required for e2e World to provide the Software.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="84.7" /> Where third-party material is made
              available through IMCAM Hub, use of that material may be subject to
              the rights and restrictions of the relevant third-party owner.
            </p>
          </section>

          {/* Section 85 */}
          <section id="section-85" className="mb-12 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-navy mb-6 leading-snug">
              85. FEEDBACK AND SUGGESTIONS
            </h2>
            <p className={clauseText}>
              <ClauseHeading num="85.1" /> The Customer and its users may provide
              e2e World with comments, ideas, suggestions, requests or
              other feedback concerning IMCAM Hub.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="85.2" /> The Customer is not required to provide
              feedback and should not include Customer Data, client-confidential
              information or third-party confidential information in feedback
              unless reasonably necessary and appropriately authorised.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="85.3" /> To the extent the Customer voluntarily
              provides feedback that does not contain Customer-owned proprietary
              materials requiring separate protection, e2e World may
              use that feedback to evaluate, develop, improve, modify and operate
              IMCAM Hub without an obligation to pay compensation.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="85.4" /> Providing feedback does not transfer
              ownership of the Customer&rsquo;s pre-existing Intellectual
              Property Rights or Confidential Information to e2e World.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="85.5" /> If a proposed feature or improvement
              depends materially on Customer-owned intellectual property or
              confidential materials, the parties may agree separate terms before
              e2e World incorporates those materials into generally
              available Software.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="85.6" /> e2e World is not obliged to
              implement any suggestion, feature request or feedback provided by
              the Customer.
            </p>
          </section>

          {/* Section 86 */}
          <section id="section-86" className="mb-12 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-navy mb-6 leading-snug">
              86. RESTRICTIONS ON COPYING, REVERSE ENGINEERING AND SCRAPING
            </h2>
            <p className={clauseText}>
              <ClauseHeading num="86.1" /> Except to the extent expressly
              permitted by this Agreement or by applicable law that cannot
              lawfully be excluded, the Customer and its users must not:
            </p>
            <ul className="pl-6 sm:pl-10 space-y-2 mb-4">
              <li className={listItemText}>
                <ClauseHeading num="a." /> copy, reproduce or create derivative
                works from IMCAM Hub or substantial parts of the Software other
                than as technically necessary for permitted use;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="b." /> reverse engineer, decompile,
                disassemble or otherwise attempt to derive the source code,
                underlying structure, algorithms or non-public technical
                operation of IMCAM Hub;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="c." /> circumvent or attempt to circumvent
                technical protections, access controls or usage restrictions;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="d." /> use automated scripts, bots, crawlers,
                scraping tools or similar methods to extract data, content,
                templates, metadata or other material from IMCAM Hub except
                through functionality or APIs expressly authorised by e2e World;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="e." /> systematically download, harvest or
                reproduce e2e World content or platform data for the
                purpose of creating or enriching a competing product or service;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="f." /> frame, mirror or reproduce material
                portions of the Software on another platform without written
                permission;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="g." /> use IMCAM Hub, its non-public features
                or e2e World materials to train, develop or benchmark a
                competing software product without e2e World&rsquo;s written permission; or
              </li>
              <li className={listItemText}>
                <ClauseHeading num="h." /> assist or permit another person to
                undertake any prohibited activity described in this Section.
              </li>
            </ul>
            <p className={clauseText}>
              <ClauseHeading num="86.2" /> Nothing in this Section prevents the
              Customer from exporting or downloading its own Customer Data
              through functionality made available by IMCAM Hub in accordance with
              this Agreement.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="86.3" /> Nothing in this Section restricts any
              act that applicable law expressly permits notwithstanding
              contractual restriction, provided that the Customer complies with
              any lawful conditions applicable to that act.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="86.4" /> The Customer must not use technical
              information obtained through any legally permitted interoperability
              activity for a purpose other than the permitted objective or
              disclose it where such disclosure is not legally authorised.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="86.5" /> e2e World may take
              reasonable protective action where it detects suspected scraping,
              reverse engineering, automated extraction or other activity that
              presents a material security, intellectual-property or operational
              risk, subject to the suspension provisions of this Agreement.
            </p>
          </section>

          {/* Section 87 */}
          <section id="section-87" className="mb-4 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-navy mb-6 leading-snug">
              87. THIRD-PARTY INTELLECTUAL PROPERTY
            </h2>
            <p className={clauseText}>
              <ClauseHeading num="87.1" /> IMCAM Hub may incorporate, depend upon,
              link to or interoperate with software, services, libraries, content
              or other materials owned or licensed by third parties.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="87.2" /> Third-party materials remain the
              property of their respective owners and are not transferred to the
              Customer by this Agreement.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="87.3" /> Use of certain Third-Party Services or
              materials may be subject to separate licence terms,
              acceptable-use requirements, notices or other conditions imposed by
              the relevant third party.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="87.4" /> The Customer must comply with
              third-party terms that are lawfully applicable to its direct use of
              a Third-Party Service or material and that have been made available
              or otherwise notified to the Customer.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="87.5" /> e2e World shall not
              knowingly grant the Customer rights in third-party material beyond
              the rights that e2e World is authorised to grant.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="87.6" /> If e2e World becomes aware
              of a credible claim that a material element of IMCAM Hub infringes a
              third party&rsquo;s Intellectual Property Rights, e2e World may, as appropriate and subject to the liability and
              indemnity provisions of this Agreement:
            </p>
            <ul className="pl-6 sm:pl-10 space-y-2 mb-4">
              <li className={listItemText}>
                <ClauseHeading num="a." /> obtain the right for continued use of
                the affected element;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="b." /> modify or replace the affected element
                with a reasonably suitable alternative;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="c." /> restrict or discontinue the affected
                functionality where reasonably necessary; or
              </li>
              <li className={listItemText}>
                <ClauseHeading num="d." /> take another reasonable measure to
                address the claim.
              </li>
            </ul>
            <p className={clauseText}>
              <ClauseHeading num="87.7" /> Any specific intellectual-property
              indemnity provided by e2e World shall be governed by
              Section 128 and shall be subject to the conditions, exclusions and
              limitations stated there.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="87.8" /> The Customer remains responsible for
              third-party materials, content or integrations that it
              independently selects, uploads, connects or instructs e2e World to use where those materials are not supplied by e2e World.
            </p>
          </section>

          <PartHeading num="11" title="Third-Party Services & Integrations" />

          {/* Section 88 */}
          <section id="section-88" className="mb-12 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-navy mb-6 leading-snug">
              88. THIRD-PARTY SERVICES
            </h2>
            <p className={clauseText}>
              <ClauseHeading num="88.1" /> IMCAM Hub may rely on, connect with or
              make use of Third-Party Services in order to provide particular
              technical, operational or user-facing functionality.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="88.2" /> Third-Party Services may include,
              where applicable, services relating to hosting, cloud
              infrastructure, email delivery, electronic signatures,
              authentication, communications, data storage, monitoring,
              security, analytics, document processing, payment processing or
              other supporting technology.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="88.3" /> The identity and nature of
              Third-Party Services used with IMCAM Hub may change as the Software
              develops, provided that e2e World continues to comply
              with its obligations under this Agreement, applicable Data
              Protection Legislation and any applicable Data Processing
              Agreement.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="88.4" /> Where a Third-Party Service processes
              Personal Data on behalf of e2e World in its capacity as
              processor, the use of that provider shall also be subject to the
              sub-processor and international-transfer provisions of Part 8 and
              the applicable Data Processing Agreement.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="88.5" /> Third-Party Services remain separate
              services operated by their respective providers. Except where this
              Agreement expressly states otherwise, e2e World does not
              own or control the underlying systems, networks or services of
              those providers.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="88.6" /> e2e World shall take
              reasonable care in selecting material Third-Party Services used to
              provide IMCAM Hub, having regard to the function performed,
              security, reliability, data protection requirements and other
              matters reasonably relevant to the service.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="88.7" /> Nothing in this Section makes the
              Customer a direct party to e2e World&rsquo;s contracts
              with its infrastructure or service providers unless separate terms
              expressly provide otherwise.
            </p>
          </section>

          {/* Section 89 */}
          <section id="section-89" className="mb-12 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-navy mb-6 leading-snug">
              89. THIRD-PARTY INTEGRATIONS
            </h2>
            <p className={clauseText}>
              <ClauseHeading num="89.1" /> IMCAM Hub may from time to time permit
              the Customer to connect, enable or use integrations with
              third-party applications, platforms or services.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="89.2" /> An integration may allow information
              or functionality to pass between IMCAM Hub and a Third-Party
              Service, subject to the Customer&rsquo;s configuration, permissions
              and the technical capabilities of the relevant systems.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="89.3" /> Where the Customer chooses to enable
              an optional third-party integration, the Customer authorises e2e World to exchange the information reasonably necessary
              to operate that integration in accordance with the
              Customer&rsquo;s instructions and applicable law.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="89.4" /> Before enabling an integration, the
              Customer is responsible for determining whether:
            </p>
            <ul className="pl-6 sm:pl-10 space-y-2 mb-4">
              <li className={listItemText}>
                <ClauseHeading num="a." /> the Third-Party Service is suitable
                for the Customer&rsquo;s intended use;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="b." /> the Customer has authority to connect
                the relevant accounts or systems;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="c." /> the proposed transfer or disclosure
                of information is lawful and appropriate;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="d." /> any third-party terms, privacy
                information or additional charges are acceptable to the
                Customer; and
              </li>
              <li className={listItemText}>
                <ClauseHeading num="e." /> appropriate permissions and access
                controls have been configured.
              </li>
            </ul>
            <p className={clauseText}>
              <ClauseHeading num="89.5" /> e2e World may add, modify,
              suspend or discontinue an integration where reasonably necessary
              because of technical, security, legal, commercial or third-party
              changes.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="89.6" /> Where reasonably practicable, e2e World shall provide appropriate notice if it permanently
              discontinues a material integration that forms part of a paid
              IMCAM Hub feature, subject to urgent security, legal or third-party
              circumstances.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="89.7" /> The Customer is responsible for
              reviewing information transferred through an integration where
              that information is used for immigration, sponsorship, legal,
              regulatory or professional purposes.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="89.8" /> An integration with a third-party
              platform does not mean that the third party endorses IMCAM Hub or
              that e2e World endorses the third-party service unless
              expressly stated.
            </p>
          </section>

          {/* Section 90 */}
          <section id="section-90" className="mb-12 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-navy mb-6 leading-snug">
              90. APIs
            </h2>
            <p className={clauseText}>
              <ClauseHeading num="90.1" /> e2e World may make
              application programming interfaces or other technical interfaces
              available for authorised integration with IMCAM Hub.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="90.2" /> Access to an API may be subject to the
              Customer&rsquo;s Subscription, technical documentation,
              authentication requirements, usage limits, security controls and
              any additional API terms notified by e2e World.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="90.3" /> The Customer must use any API only for
              the authorised purpose and must not use it to:
            </p>
            <ul className="pl-6 sm:pl-10 space-y-2 mb-4">
              <li className={listItemText}>
                <ClauseHeading num="a." /> circumvent user, Subscription, security
                or access restrictions;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="b." /> obtain unauthorised access to Customer
                Data, another Customer&rsquo;s data or e2e World&rsquo;s systems;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="c." /> introduce malware or otherwise
                compromise the security or operation of IMCAM Hub;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="d." /> conduct excessive, abusive or
                disruptive automated requests;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="e." /> scrape or systematically extract e2e World proprietary content except as expressly
                authorised; or
              </li>
              <li className={listItemText}>
                <ClauseHeading num="f." /> use IMCAM Hub in a manner prohibited by
                this Agreement.
              </li>
            </ul>
            <p className={clauseText}>
              <ClauseHeading num="90.4" /> The Customer is responsible for
              safeguarding API keys, tokens, credentials and other
              authentication information issued to it and for promptly notifying
              e2e World of suspected compromise.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="90.5" /> e2e World may apply
              reasonable rate limits, technical restrictions or security controls
              to API use and may suspend API access where necessary to protect
              IMCAM Hub, Customer Data or other users.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="90.6" /> e2e World may update or
              replace an API as the Software develops. Where a material change is
              likely to affect a supported Customer integration, e2e World shall provide reasonable notice where practicable.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="90.7" /> Unless expressly agreed otherwise, e2e World is not responsible for software, scripts, connectors
              or integrations developed by or for the Customer using an API.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="90.8" /> The availability of API functionality
              does not authorise automated Home Office or UKVI submission. Any
              such functionality would require express implementation and
              authorisation in accordance with Section 31 and any applicable
              additional terms.
            </p>
          </section>

          {/* Section 91 */}
          <section id="section-91" className="mb-12 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-navy mb-6 leading-snug">
              91. THIRD-PARTY SERVICE AVAILABILITY
            </h2>
            <p className={clauseText}>
              <ClauseHeading num="91.1" /> The operation of some IMCAM Hub
              functionality may depend on the continuing availability and
              performance of Third-Party Services, internet connectivity,
              telecommunications networks and external systems.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="91.2" /> e2e World does not guarantee
              uninterrupted availability of a Third-Party Service or external
              system that is outside e2e World&rsquo;s reasonable
              control.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="91.3" /> A Third-Party Service provider may
              change, restrict, suspend or discontinue its service, interface,
              pricing, functionality or technical requirements. Such changes may
              affect related IMCAM Hub functionality.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="91.4" /> Where a material Third-Party Service
              used by e2e World becomes unavailable or materially
              changes, e2e World may, as reasonably appropriate:
            </p>
            <ul className="pl-6 sm:pl-10 space-y-2 mb-4">
              <li className={listItemText}>
                <ClauseHeading num="a." /> seek restoration of the affected
                service;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="b." /> use an alternative provider or
                technical solution;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="c." /> modify the affected IMCAM Hub
                functionality;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="d." /> temporarily restrict or suspend the
                affected feature; or
              </li>
              <li className={listItemText}>
                <ClauseHeading num="e." /> discontinue the affected integration
                or feature where continuation is no longer reasonably
                practicable.
              </li>
            </ul>
            <p className={clauseText}>
              <ClauseHeading num="91.5" /> e2e World shall take
              reasonable steps appropriate to the circumstances to manage
              material disruption to Third-Party Services on which core IMCAM Hub
              functionality depends.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="91.6" /> The Customer remains responsible for
              maintaining appropriate alternative procedures where interruption
              of a Third-Party Service could affect a critical immigration,
              sponsorship, legal, regulatory or business deadline.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="91.7" /> Any service-level commitments relating
              to availability of IMCAM Hub shall apply only to the extent
              expressly stated in an applicable Service Level Agreement and may
              contain appropriate exclusions for third-party failures or events
              outside e2e World&rsquo;s reasonable control.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="91.8" /> Nothing in this Section excludes or
              limits liability that cannot lawfully be excluded or limited.
            </p>
          </section>

          {/* Section 92 */}
          <section id="section-92" className="mb-4 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-navy mb-6 leading-snug">
              92. THIRD-PARTY TERMS AND CONDITIONS
            </h2>
            <p className={clauseText}>
              <ClauseHeading num="92.1" /> Certain optional Third-Party Services,
              integrations or features may require the Customer or an Authorised
              User to accept or comply with terms, policies or licence conditions
              imposed directly by the relevant third-party provider.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="92.2" /> Where third-party terms apply directly
              to the Customer, e2e World shall not be responsible for
              the Customer&rsquo;s compliance with those terms, and the Customer
              is responsible for reviewing them before enabling or using the
              relevant service.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="92.3" /> The Customer must not use a Third-Party
              Service through IMCAM Hub in a manner that causes e2e World
              to breach terms lawfully imposed on e2e World by the
              relevant provider.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="92.4" /> If a conflict arises between this
              Agreement and terms imposed directly between the Customer and a
              third-party provider, each set of terms shall govern the
              relationship to which it applies. This Agreement governs the
              relationship between e2e World and the Customer unless
              expressly stated otherwise.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="92.5" /> Where continued provision of a feature
              would cause e2e World to breach applicable third-party
              licence terms, legal requirements or security obligations, e2e World may modify, restrict or discontinue that feature as
              reasonably necessary.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="92.6" /> Third-party terms do not alter the
              Customer&rsquo;s ownership of Customer Data or e2e World&rsquo;s obligations concerning Customer Data under this
              Agreement and the Data Processing Agreement, except to the extent
              that the Customer independently instructs or authorises disclosure
              to a Third-Party Service.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="92.7" /> The Customer is responsible for any
              charges payable directly to a third-party provider for a service
              independently selected or contracted by the Customer, unless the
              applicable Order Form expressly states that such charges are
              included in the Fees payable to e2e World.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="92.8" /> Where a Third-Party Service is supplied
              as an integral component of IMCAM Hub rather than independently
              contracted by the Customer, the Customer&rsquo;s rights against e2e World remain subject to this Agreement, including the
              applicable warranties, service, liability and data protection
              provisions.
            </p>
          </section>

          <PartHeading num="12" title="Fees & Subscription" />

          {/* Section 93 */}
          <section id="section-93" className="mb-12 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-navy mb-6 leading-snug">
              93. SUBSCRIPTION FEES
            </h2>
            <p className={clauseText}>
              <ClauseHeading num="93.1" /> The Customer shall pay the Fees
              applicable to its Subscription in accordance with the Order Form,
              quotation, subscription confirmation or other commercial terms
              agreed between the parties.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="93.2" /> The Fees may depend on matters
              including the selected Subscription plan, modules, functionality,
              number or type of users, usage allowances, implementation
              requirements, support arrangements or other agreed commercial
              factors.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="93.3" /> Unless expressly stated otherwise, the
              Fees provide the Customer with access to IMCAM Hub for the
              applicable Subscription Period and do not transfer ownership of the
              Software or any e2e World Intellectual Property Rights.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="93.4" /> Additional functionality, users,
              modules, storage, implementation work, professional services,
              integrations or other services requested by the Customer may be
              subject to additional Fees where agreed or notified before the
              relevant charge is incurred.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="93.5" /> Where usage exceeds an allowance
              included within the Customer&rsquo;s Subscription, e2e World may require the Customer to upgrade its Subscription or
              pay applicable additional Fees, provided that the relevant charging
              basis has been agreed or made available to the Customer.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="93.6" /> Unless expressly included in the
              applicable commercial terms, Fees for IMCAM Hub do not include
              government fees, Home Office or UKVI charges, Immigration Health
              Surcharge payments, third-party professional fees or other costs
              incurred in connection with an immigration matter.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="93.7" /> The Customer is responsible for
              reviewing the commercial terms applicable to its Subscription
              before entering into or renewing the Subscription.
            </p>
          </section>

          {/* Section 94 */}
          <section id="section-94" className="mb-12 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-navy mb-6 leading-snug">
              94. MONTHLY BILLING
            </h2>
            <p className={clauseText}>
              <ClauseHeading num="94.1" /> Unless the applicable Order Form or
              other agreed commercial terms state otherwise, IMCAM Hub shall be
              supplied on a monthly subscription basis.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="94.2" /> The Customer shall be billed at the
              frequency and on the basis specified in the applicable Order Form,
              subscription confirmation, invoice or other agreed commercial
              documentation.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="94.3" /> Where monthly recurring billing
              applies, Fees shall become due for each billing period in
              accordance with the agreed payment terms until the Subscription is
              cancelled or terminated in accordance with this Agreement.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="94.4" /> The start of a billing period may be
              linked to the Subscription commencement date, activation date or
              another date agreed between the parties.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="94.5" /> Where the Customer changes its
              Subscription during a billing period, any adjustment, pro-rating,
              credit or additional charge shall be handled in accordance with the
              applicable commercial terms or as otherwise agreed between the
              parties.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="94.6" /> The Customer is responsible for
              ensuring that its billing and invoicing information remains
              accurate and current.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="94.7" /> Nothing in this Section requires e2e World to use a particular billing platform or payment
              provider. The applicable payment arrangements may be confirmed
              separately as the commercial and technical setup of IMCAM Hub is
              finalised.
            </p>
          </section>

          {/* Section 95 */}
          <section id="section-95" className="mb-12 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-navy mb-6 leading-snug">
              95. FREE TRIAL / DEMONSTRATION
            </h2>
            <p className={clauseText}>
              <ClauseHeading num="95.1" /> e2e World may offer a free
              trial, demonstration, evaluation period or other limited access to
              IMCAM Hub at its discretion.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="95.2" /> The duration, scope, user allowance,
              functionality, storage, support and other conditions of a free
              trial or demonstration may be specified at the time access is
              provided.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="95.3" /> Unless expressly agreed otherwise, no
              Subscription Fee is payable for a genuine free trial during the
              stated trial period.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="95.4" /> A free trial shall not automatically
              convert into a paid Subscription unless this has been expressly
              agreed or clearly disclosed to the Customer before the conversion
              takes effect.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="95.5" /> At the end of a free trial, the
              Customer may be required to select and pay for a Subscription in
              order to continue using IMCAM Hub.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="95.6" /> Where a demonstration is provided only
              for evaluation purposes, e2e World may use sample,
              fictional or demonstration data and may restrict the Customer from
              using the demonstration environment for live immigration Cases or
              production data.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="95.7" /> Customer Data processed during an
              authorised trial remains subject to the applicable confidentiality,
              security and data protection provisions of this Agreement.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="95.8" /> The provisions of Section 12 concerning
              beta, trial and demonstration versions continue to apply and are
              supplemented by this Section.
            </p>
          </section>

          {/* Section 96 */}
          <section id="section-96" className="mb-12 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-navy mb-6 leading-snug">
              96. PAYMENT
            </h2>
            <p className={clauseText}>
              <ClauseHeading num="96.1" /> The Customer shall pay invoices and
              other amounts due to e2e World in accordance with the
              payment method, due date and other payment terms stated in the
              applicable Order Form, invoice or agreed commercial documentation.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="96.2" /> Payment may be collected through a
              payment method or provider designated by e2e World from
              time to time. The Customer shall provide valid and accurate payment
              information where required.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="96.3" /> Where the Customer authorises recurring
              payment, the Customer authorises collection of amounts properly due
              under the Subscription in accordance with the agreed billing cycle
              until that authority or Subscription ends in accordance with this
              Agreement.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="96.4" /> The Customer must promptly notify e2e World of a material change to its billing contact,
              payment details or other information that may affect payment.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="96.5" /> The Customer shall not withhold,
              deduct, set off or reduce an amount properly due to e2e World except where the parties agree otherwise in writing or
              the Customer has a legal right to do so.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="96.6" /> If the Customer reasonably disputes an
              invoice, it should notify e2e World promptly, identifying
              the disputed amount and the basis of the dispute. The parties shall
              seek to resolve the disputed amount in good faith.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="96.7" /> A genuine invoice dispute does not
              relieve the Customer from paying any undisputed amount when due.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="96.8" /> Specific payment-provider arrangements
              may be introduced or changed without amendment to this Agreement,
              provided that any material change affecting the Customer&rsquo;s
              payment obligations is appropriately communicated.
            </p>
          </section>

          {/* Section 97 */}
          <section id="section-97" className="mb-12 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-navy mb-6 leading-snug">
              97. TAXES AND VAT
            </h2>
            <p className={clauseText}>
              <ClauseHeading num="97.1" /> Unless expressly stated otherwise,
              Fees are exclusive of value added tax (VAT) and any other
              applicable sales, consumption or similar tax.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="97.2" /> Where VAT or another applicable tax is
              chargeable, the Customer shall pay that tax in addition to the
              relevant Fees at the rate required by law.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="97.3" /> e2e World shall provide
              invoices or other tax documentation as required by applicable law.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="97.4" /> The Customer is responsible for any
              taxes, duties or charges imposed on the Customer in connection with
              its purchase or use of IMCAM Hub, except taxes imposed on e2e World&rsquo;s net income or taxes for which e2e World
              is legally responsible.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="97.5" /> If the Customer is legally required to
              make a deduction or withholding from a payment, the parties shall
              comply with applicable law and cooperate reasonably in relation to
              any required documentation.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="97.6" /> Any tax treatment stated in an Order
              Form or invoice is subject to applicable law and may be corrected
              where necessary to comply with legal requirements.
            </p>
          </section>

          {/* Section 98 */}
          <section id="section-98" className="mb-12 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-navy mb-6 leading-snug">
              98. FAILED OR LATE PAYMENTS
            </h2>
            <p className={clauseText}>
              <ClauseHeading num="98.1" /> If a payment fails, is declined, is
              reversed or remains unpaid after its due date, e2e World
              may notify the Customer and request that the Customer update its
              payment details or pay the outstanding amount.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="98.2" /> Where an undisputed amount remains
              overdue, e2e World may take reasonable steps to recover
              the amount and may, subject to reasonable notice where appropriate,
              restrict or suspend access to some or all of IMCAM Hub in accordance
              with the suspension provisions of this Agreement.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="98.3" /> e2e World shall not suspend
              access for a genuinely disputed amount while the parties are
              actively addressing the dispute in good faith, provided that the
              Customer has paid all undisputed amounts and the dispute is not
              being used to avoid payment.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="98.4" /> Where permitted by applicable law and
              stated in the applicable commercial terms or invoice, e2e World may charge interest on overdue undisputed amounts and
              recover reasonable costs of collection.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="98.5" /> Suspension for non-payment does not
              cancel amounts that accrued before suspension and does not prevent
              e2e World from exercising other rights available under
              this Agreement or applicable law.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="98.6" /> Before restricting access for
              non-payment, e2e World shall have regard to the nature of
              the Customer&rsquo;s use of IMCAM Hub and, where reasonably
              practicable, provide an opportunity to address the outstanding
              payment.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="98.7" /> The Customer remains responsible for
              maintaining appropriate records and contingency arrangements and
              should not rely on continued access to IMCAM Hub where Fees remain
              materially overdue.
            </p>
          </section>

          {/* Section 99 */}
          <section id="section-99" className="mb-12 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-navy mb-6 leading-snug">
              99. PRICE CHANGES
            </h2>
            <p className={clauseText}>
              <ClauseHeading num="99.1" /> e2e World may change
              Subscription prices from time to time to reflect changes in the
              Software, service costs, market conditions, legal or regulatory
              requirements, third-party costs or other legitimate commercial
              considerations.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="99.2" /> A price change shall not retrospectively
              alter Fees already properly charged for a completed billing period.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="99.3" /> Where a price change affects an
              existing recurring Subscription, e2e World shall give the
              Customer reasonable advance notice before the new price takes
              effect.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="99.4" /> Unless otherwise agreed, a notified
              price change may take effect from the next renewal or billing period
              occurring after the applicable notice period.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="99.5" /> If the Customer does not wish to
              continue at the revised price, it may cancel the Subscription in
              accordance with Section 101 before the revised price takes effect,
              subject to any minimum commitment expressly agreed in the
              applicable Order Form.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="99.6" /> Changes arising solely from VAT or
              another tax imposed or varied by law may take effect when legally
              required.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="99.7" /> A change in Fees for optional
              additional services, modules or usage requested by the Customer may
              take effect when the Customer orders or accepts the relevant
              addition.
            </p>
          </section>

          {/* Section 100 */}
          <section id="section-100" className="mb-12 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-navy mb-6 leading-snug">
              100. RENEWAL
            </h2>
            <p className={clauseText}>
              <ClauseHeading num="100.1" /> Unless the applicable Order Form
              states otherwise, a monthly Subscription shall continue on a
              rolling monthly basis until cancelled or terminated in accordance
              with this Agreement.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="100.2" /> Where a fixed minimum term, annual
              commitment or other renewal arrangement is agreed in an Order Form,
              that Order Form shall specify the applicable term and renewal
              basis.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="100.3" /> Continuation or renewal of a
              Subscription remains subject to payment of applicable Fees and
              continued compliance with this Agreement.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="100.4" /> e2e World may notify the
              Customer of changes to Fees, features, Subscription plans or
              contractual terms that will apply to a future renewal or billing
              period in accordance with this Agreement.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="100.5" /> Where the Customer continues to use
              IMCAM Hub after a renewal takes effect, such continued use shall be
              subject to the Agreement and the commercial terms applicable to the
              renewed Subscription.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="100.6" /> Nothing in this Section prevents
              either party from exercising a right to terminate or cancel that is
              available under this Agreement or an applicable Order Form.
            </p>
          </section>

          {/* Section 101 */}
          <section id="section-101" className="mb-4 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-navy mb-6 leading-snug">
              101. CANCELLATION
            </h2>
            <p className={clauseText}>
              <ClauseHeading num="101.1" /> The Customer may cancel its
              Subscription in accordance with the cancellation process, notice
              requirements and any minimum commitment stated in the applicable
              Order Form or other agreed commercial terms.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="101.2" /> Where the Subscription is a rolling
              monthly Subscription with no separately agreed minimum commitment,
              cancellation shall take effect in accordance with the applicable
              notice arrangements communicated to the Customer.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="101.3" /> Unless required by law or expressly
              agreed otherwise, cancellation does not entitle the Customer to a
              refund of Fees properly charged for a billing period that commenced
              before the effective cancellation date.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="101.4" /> If Fees have been paid in advance for
              a period extending beyond an effective termination arising from e2e World&rsquo;s material breach, any refund or credit shall
              be determined in accordance with the termination, liability and
              applicable commercial provisions of this Agreement.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="101.5" /> Cancellation of the Subscription does
              not automatically delete Customer Data on the cancellation date.
              Access, export, retention and deletion of Customer Data following
              cancellation shall be governed by Parts 6, 8 and 14 and the
              applicable Data Processing Agreement.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="101.6" /> The Customer should complete any
              necessary export or transition activity before its authorised
              access expires, subject to any post-termination retrieval period
              expressly provided under this Agreement or the applicable Order
              Form.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="101.7" /> Cancellation does not affect rights,
              obligations, liabilities or charges that accrued before the
              effective cancellation date.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="101.8" /> Where a Customer cancels an optional
              module or additional service rather than the entire Subscription,
              the remainder of the Subscription shall continue unless the parties
              agree otherwise.
            </p>
          </section>

          <PartHeading num="13" title="Service Availability & Support" />

          {/* Section 102 */}
          <section id="section-102" className="mb-12 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-navy mb-6 leading-snug">
              102. AVAILABILITY OF IMCAM HUB
            </h2>
            <p className={clauseText}>
              <ClauseHeading num="102.1" /> e2e World shall use
              reasonable care and skill in providing IMCAM Hub and shall use
              commercially reasonable efforts to make the Software available to
              the Customer during the Subscription Period, subject to this
              Agreement.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="102.2" /> The Customer acknowledges that a
              cloud-based software service may from time to time be unavailable,
              interrupted, degraded or subject to reduced functionality because
              of maintenance, updates, security measures, technical faults,
              Third-Party Services, internet or telecommunications failures,
              events outside e2e World&rsquo;s reasonable control, or
              other circumstances permitted by this Agreement.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="102.3" /> Unless a specific availability
              commitment is expressly stated in an applicable Service Level
              Agreement or Order Form, e2e World does not guarantee
              that IMCAM Hub will be available continuously, without interruption
              or error, or at any particular percentage availability level.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="102.4" /> Availability calculations, if
              introduced, may exclude periods of planned maintenance, emergency
              maintenance, Customer-caused issues, failures of Customer systems
              or connectivity, suspension permitted under this Agreement, force
              majeure events and other exclusions expressly identified in the
              applicable Service Level Agreement.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="102.5" /> e2e World may monitor the
              availability, performance and operation of IMCAM Hub for
              service-management, support, security and improvement purposes.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="102.6" /> The Customer is responsible for
              maintaining reasonable contingency arrangements where temporary
              unavailability of IMCAM Hub could affect urgent immigration,
              sponsorship, legal, regulatory or business activities.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="102.7" /> Nothing in this Section limits any
              service commitment expressly agreed in writing between the parties.
            </p>
          </section>

          {/* Section 103 */}
          <section id="section-103" className="mb-12 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-navy mb-6 leading-snug">
              103. MAINTENANCE
            </h2>
            <p className={clauseText}>
              <ClauseHeading num="103.1" /> e2e World may carry out
              maintenance, updates, repairs, patches, configuration changes and
              other technical work reasonably necessary to operate, secure,
              support or improve IMCAM Hub.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="103.2" /> Maintenance may be undertaken for
              purposes including:
            </p>
            <ul className="pl-6 sm:pl-10 space-y-2 mb-4">
              <li className={listItemText}>
                <ClauseHeading num="a." /> applying security updates or patches;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="b." /> correcting defects, faults or
                performance issues;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="c." /> updating infrastructure, databases,
                software components or dependencies;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="d." /> deploying new or modified
                functionality;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="e." /> maintaining compatibility with
                Third-Party Services;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="f." /> responding to legal, regulatory or
                immigration-process changes;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="g." /> improving resilience, capacity,
                performance or security; and
              </li>
              <li className={listItemText}>
                <ClauseHeading num="h." /> performing other work reasonably
                necessary for the continued operation of IMCAM Hub.
              </li>
            </ul>
            <p className={clauseText}>
              <ClauseHeading num="103.3" /> e2e World shall seek to
              manage maintenance in a manner intended to minimise unnecessary
              disruption to Customers, taking into account the urgency and nature
              of the work.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="103.4" /> Some maintenance may be carried out
              without interruption to Customer access, while other maintenance
              may require temporary restriction or unavailability of some or all
              functionality.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="103.5" /> The Customer is not entitled to
              prevent maintenance that e2e World reasonably considers
              necessary for security, legal compliance, stability or continued
              operation of the Software.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="103.6" /> Maintenance does not relieve e2e World of any specific service-level obligations expressly
              agreed in an applicable Service Level Agreement, subject to the
              exclusions and maintenance provisions stated there.
            </p>
          </section>

          {/* Section 104 */}
          <section id="section-104" className="mb-12 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-navy mb-6 leading-snug">
              104. PLANNED DOWNTIME
            </h2>
            <p className={clauseText}>
              <ClauseHeading num="104.1" /> Where reasonably practicable, e2e World shall provide advance notice of planned maintenance
              that is expected to cause material unavailability of IMCAM Hub.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="104.2" /> Notice of planned downtime may be
              provided through IMCAM Hub, by email, through an account
              administrator, through a service-status mechanism or by another
              reasonable communication method.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="104.3" /> e2e World may schedule
              planned maintenance at times intended to reduce disruption, but
              does not guarantee that maintenance will always occur outside the
              Customer&rsquo;s normal business hours.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="104.4" /> The duration stated in a
              planned-maintenance notice is an estimate unless expressly stated
              to be a binding service commitment.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="104.5" /> Where planned work is completed
              earlier than expected, e2e World may restore the affected
              service without further notice.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="104.6" /> Where planned downtime must be
              extended because of an unforeseen technical, security or
              operational issue, e2e World shall provide an update
              where reasonably practicable.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="104.7" /> The treatment of planned downtime for
              any formal availability calculation shall be determined by the
              applicable Service Level Agreement, if any.
            </p>
          </section>

          {/* Section 105 */}
          <section id="section-105" className="mb-12 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-navy mb-6 leading-snug">
              105. EMERGENCY MAINTENANCE
            </h2>
            <p className={clauseText}>
              <ClauseHeading num="105.1" /> e2e World may carry out
              emergency maintenance without advance notice where it reasonably
              considers immediate action necessary to protect IMCAM Hub, Customer
              Data, Customers, users, Third-Party Services or e2e World&rsquo;s systems, or to address an urgent legal, security
              or operational issue.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="105.2" /> Emergency maintenance may include
              action required to:
            </p>
            <ul className="pl-6 sm:pl-10 space-y-2 mb-4">
              <li className={listItemText}>
                <ClauseHeading num="a." /> contain or remediate a security
                incident or vulnerability;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="b." /> address an active or suspected
                cyberattack;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="c." /> prevent data loss, corruption or
                unauthorised access;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="d." /> respond to a critical software,
                infrastructure or Third-Party Service failure;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="e." /> comply with an urgent legal or
                regulatory requirement; or
              </li>
              <li className={listItemText}>
                <ClauseHeading num="f." /> prevent material damage to the
                stability, integrity or availability of IMCAM Hub.
              </li>
            </ul>
            <p className={clauseText}>
              <ClauseHeading num="105.3" /> Where emergency maintenance
              materially affects Customer access, e2e World shall
              provide information about the disruption and restoration of service
              as soon as reasonably practicable, subject to security, legal and
              operational considerations.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="105.4" /> e2e World may temporarily
              disable affected features, integrations, user access or other
              functionality where reasonably necessary to manage the relevant
              emergency.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="105.5" /> The treatment of emergency maintenance
              for service-level purposes shall be determined by the applicable
              Service Level Agreement, if any.
            </p>
          </section>

          {/* Section 106 */}
          <section id="section-106" className="mb-12 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-navy mb-6 leading-snug">
              106. TECHNICAL SUPPORT
            </h2>
            <p className={clauseText}>
              <ClauseHeading num="106.1" /> e2e World shall make
              technical support for IMCAM Hub available in accordance with the
              Customer&rsquo;s Subscription, Order Form and any applicable support
              or Service Level Agreement.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="106.2" /> Technical support may include
              reasonable assistance concerning:
            </p>
            <ul className="pl-6 sm:pl-10 space-y-2 mb-4">
              <li className={listItemText}>
                <ClauseHeading num="a." /> access to and use of IMCAM Hub
                functionality;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="b." /> account or user-access issues;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="c." /> technical errors or unexpected
                Software behaviour;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="d." /> document, communication or
                integration functionality;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="e." /> reported security concerns;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="f." /> service incidents or outages; and
              </li>
              <li className={listItemText}>
                <ClauseHeading num="g." /> other technical matters relating to
                the operation of IMCAM Hub.
              </li>
            </ul>
            <p className={clauseText}>
              <ClauseHeading num="106.3" /> Technical support does not, merely
              because it is provided through an immigration case-management
              platform, include immigration advice, legal advice, professional
              Case assessment or responsibility for progressing an immigration
              matter.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="106.4" /> The Customer should provide sufficient
              information to allow e2e World to investigate a support
              request, including relevant error information, steps leading to the
              issue and other reasonably necessary technical details, while
              avoiding unnecessary disclosure of Personal Data or confidential
              information.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="106.5" /> e2e World may prioritise
              support requests according to their severity, impact, security
              implications, number of affected users and other reasonable
              service-management considerations.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="106.6" /> Support hours, support channels,
              target response times and escalation arrangements may be specified
              in the Customer&rsquo;s Subscription, Order Form, support
              documentation or Service Level Agreement.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="106.7" /> Unless expressly agreed otherwise, a
              response-time target means the target time for e2e World
              to acknowledge or begin addressing a support request and does not
              guarantee resolution within that period.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="106.8" /> e2e World may require the
              Customer to cooperate with reasonable troubleshooting steps or
              provide appropriate access or information before an issue can be
              resolved.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="106.9" /> e2e World is not
              responsible for resolving issues caused solely by the
              Customer&rsquo;s unsupported hardware, network, browser, device,
              third-party software, unauthorised modification or failure to
              follow reasonable technical instructions, although e2e World may provide reasonable guidance where appropriate.
            </p>
          </section>

          {/* Section 107 */}
          <section id="section-107" className="mb-12 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-navy mb-6 leading-snug">
              107. SERVICE LEVELS / SLA
            </h2>
            <p className={clauseText}>
              <ClauseHeading num="107.1" /> Specific service levels shall apply
              only where the parties have expressly agreed a Service Level
              Agreement or where service-level commitments are expressly
              incorporated into an Order Form.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="107.2" /> A Service Level Agreement may address
              matters including:
            </p>
            <ul className="pl-6 sm:pl-10 space-y-2 mb-4">
              <li className={listItemText}>
                <ClauseHeading num="a." /> target service availability;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="b." /> support hours and communication
                channels;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="c." /> incident severity or priority
                classifications;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="d." /> target initial response times;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="e." /> target restoration or resolution
                times;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="f." /> maintenance windows;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="g." /> service monitoring and reporting;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="h." /> escalation procedures;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="i." /> availability exclusions; and
              </li>
              <li className={listItemText}>
                <ClauseHeading num="j." /> any agreed service-credit mechanism.
              </li>
            </ul>
            <p className={clauseText}>
              <ClauseHeading num="107.3" /> If no Service Level Agreement applies,
              e2e World&rsquo;s obligations concerning availability,
              maintenance and support shall be those stated in this Agreement and
              the applicable Subscription documentation.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="107.4" /> Any service level shall be measured in
              accordance with the methodology stated in the applicable Service
              Level Agreement. No service metric should be inferred from marketing
              material, demonstrations, historic performance or informal
              communications unless expressly incorporated into the Agreement.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="107.5" /> A Service Level Agreement may
              distinguish between issues that materially prevent use of core
              functionality and lower-severity issues that have a workaround or
              limited operational impact.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="107.6" /> The Customer must report service
              incidents through the designated support channel and provide
              reasonable cooperation where required for the incident to be
              assessed against an applicable service level.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="107.7" /> Where there is a conflict between this
              Part and a specifically agreed Service Level Agreement concerning
              service levels, the Service Level Agreement shall prevail to the
              extent of that conflict, consistently with the order-of-precedence
              provisions in Part 1.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="107.8" /> Service levels do not alter the
              Customer&rsquo;s responsibility for immigration, sponsorship, legal
              or regulatory deadlines or for maintaining reasonable contingency
              arrangements.
            </p>
          </section>

          {/* Section 108 */}
          <section id="section-108" className="mb-4 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-navy mb-6 leading-snug">
              108. SERVICE CREDITS, IF APPLICABLE
            </h2>
            <p className={clauseText}>
              <ClauseHeading num="108.1" /> Service credits shall apply only if
              they are expressly provided for in an applicable Service Level
              Agreement, Order Form or other written agreement between the
              parties.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="108.2" /> Where service credits apply, the
              relevant document shall specify the circumstances in which they
              arise, the method of calculation, any claim procedure, applicable
              limits and the form in which the credit will be applied.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="108.3" /> Unless expressly agreed otherwise, a
              service credit shall be applied against future Fees payable for
              IMCAM Hub and shall not constitute a cash payment.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="108.4" /> A Customer may be required to submit a
              service-credit claim within a specified period and provide
              reasonable information supporting the claim where this is stated in
              the applicable Service Level Agreement.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="108.5" /> Service credits may be excluded where
              the relevant service failure results from circumstances identified
              as exclusions in the applicable Service Level Agreement, which may
              include Customer-caused issues, authorised maintenance, Third-Party
              Service failures, force majeure events or suspension permitted under
              the Agreement.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="108.6" /> The availability of a service credit
              does not exclude any right or remedy that cannot lawfully be
              excluded. Any agreement that a service credit is the
              Customer&rsquo;s sole contractual remedy for a specified
              service-level failure must be expressly stated in the applicable
              Service Level Agreement.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="108.7" /> If no Service Level Agreement or other
              written service-credit arrangement has been agreed, no automatic
              service-credit entitlement arises under this Section.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="108.8" /> The parties may introduce or amend
              service-credit arrangements in future Order Forms or Service Level
              Agreements without altering the remainder of this Agreement, subject
              to the applicable order-of-precedence provisions.
            </p>
          </section>

          <PartHeading num="14" title="Suspension & Termination" />

          {/* Section 109 */}
          <section id="section-109" className="mb-12 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-navy mb-6 leading-snug">
              109. SUSPENSION OF ACCESS
            </h2>
            <p className={clauseText}>
              <ClauseHeading num="109.1" /> e2e World may suspend or
              restrict access to all or part of IMCAM Hub where it reasonably
              considers suspension necessary to protect the Software, Customer
              Data, other customers, users, e2e World, a Third-Party
              Service or the integrity or security of the service.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="109.2" /> Grounds for suspension may include:
            </p>
            <ul className="pl-6 sm:pl-10 space-y-2 mb-4">
              <li className={listItemText}>
                <ClauseHeading num="a." /> a material or repeated breach of this
                Agreement or an applicable Order Form;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="b." /> failure to pay undisputed Fees when
                due, subject to Section 113;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="c." /> suspected fraud, unlawful activity,
                misuse or unauthorised access;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="d." /> a material cybersecurity threat,
                vulnerability, malware incident or compromise of credentials;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="e." /> use of IMCAM Hub in a manner that
                materially threatens service stability, security or the rights of
                another person;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="f." /> a legal, regulatory, court or
                governmental requirement;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="g." /> loss of a permission, licence or
                authority required for the Customer&rsquo;s lawful use of the
                Software;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="h." /> a material breach of applicable data
                protection, confidentiality or intellectual-property obligations;
                or
              </li>
              <li className={listItemText}>
                <ClauseHeading num="i." /> an urgent technical or operational
                circumstance in which continued access would create a material
                risk.
              </li>
            </ul>
            <p className={clauseText}>
              <ClauseHeading num="109.3" /> Where reasonably practicable and
              appropriate, e2e World shall give the Customer notice of
              the proposed suspension and an opportunity to remedy the relevant
              issue before access is suspended.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="109.4" /> Advance notice may be omitted where
              immediate action is reasonably necessary for security, legal
              compliance, prevention of harm, protection of Personal Data or
              service integrity, or where notice would itself create a material
              risk.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="109.5" /> A suspension shall, where reasonably
              practicable, be limited to the affected account, user, functionality
              or activity rather than the entire Subscription.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="109.6" /> e2e World shall review a
              suspension and restore affected access within a reasonable period
              after the reason for suspension has been satisfactorily resolved,
              subject to any continuing legal, security or contractual
              restriction.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="109.7" /> Suspension does not by itself terminate
              the Agreement or cancel Fees that have properly accrued, except
              where the parties agree otherwise or applicable law requires.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="109.8" /> The Customer remains responsible for
              maintaining appropriate contingency arrangements for urgent
              immigration, sponsorship, legal, regulatory and business matters
              during a period of suspension.
            </p>
          </section>

          {/* Section 110 */}
          <section id="section-110" className="mb-12 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-navy mb-6 leading-snug">
              110. TERMINATION BY CUSTOMER
            </h2>
            <p className={clauseText}>
              <ClauseHeading num="110.1" /> The Customer may terminate or cancel
              its Subscription in accordance with Section 101, the applicable
              Order Form and any agreed minimum term or notice requirement.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="110.2" /> The Customer may terminate the
              Agreement for e2e World&rsquo;s material breach where the
              breach is incapable of remedy or, if capable of remedy, e2e World fails to remedy it within a reasonable period after
              receiving written notice describing the breach.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="110.3" /> Where the applicable Order Form
              specifies a particular cure period for breach, that period shall
              apply.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="110.4" /> The Customer may also exercise any
              termination right that cannot lawfully be excluded or that is
              expressly provided elsewhere in the Agreement.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="110.5" /> A termination notice must identify the
              Customer and the Subscription to be terminated and must be given
              through an authorised cancellation method or in accordance with the
              notices provisions of this Agreement.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="110.6" /> Termination does not remove the
              Customer&rsquo;s obligation to pay Fees and other amounts properly
              accrued before the effective termination date.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="110.7" /> Where the Customer terminates because
              of an established material breach by e2e World, treatment
              of prepaid Fees for a period after the effective termination date
              shall be determined in accordance with the Agreement, the applicable
              Order Form and applicable law.
            </p>
          </section>

          {/* Section 111 */}
          <section id="section-111" className="mb-12 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-navy mb-6 leading-snug">
              111. TERMINATION BY e2e WORLD
            </h2>
            <p className={clauseText}>
              <ClauseHeading num="111.1" /> e2e World may terminate the
              Agreement or an affected Subscription where a right to terminate
              arises under this Agreement, an applicable Order Form or applicable
              law.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="111.2" /> Without limiting other termination
              rights, e2e World may terminate where:
            </p>
            <ul className="pl-6 sm:pl-10 space-y-2 mb-4">
              <li className={listItemText}>
                <ClauseHeading num="a." /> the Customer commits a material breach
                that is incapable of remedy;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="b." /> the Customer fails to remedy a
                remediable material breach within the applicable cure period;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="c." /> undisputed Fees remain materially
                overdue after the process in Section 113;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="d." /> the Customer uses IMCAM Hub for
                unlawful, fraudulent or seriously abusive purposes;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="e." /> continued provision of the service
                would cause e2e World to breach applicable law or a
                binding regulatory, governmental or court requirement;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="f." /> the Customer no longer has a legal or
                contractual basis to use the Software in the manner for which it
                is being used;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="g." /> a material security risk cannot
                reasonably be addressed through a lesser restriction or
                suspension;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="h." /> the Customer becomes insolvent or
                subject to an insolvency event to the extent termination on that
                basis is permitted by applicable law; or
              </li>
              <li className={listItemText}>
                <ClauseHeading num="i." /> another express termination event
                stated in the Agreement occurs.
              </li>
            </ul>
            <p className={clauseText}>
              <ClauseHeading num="111.3" /> Where the reason for termination is
              capable of remedy and does not require immediate action, e2e World shall ordinarily provide notice and a reasonable
              opportunity to remedy the issue before termination.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="111.4" /> e2e World may terminate
              immediately where the breach or risk is sufficiently serious that
              continued provision of IMCAM Hub would expose e2e World,
              another customer, a data subject or the service to material legal,
              security or operational harm.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="111.5" /> Where e2e World decides to
              discontinue IMCAM Hub as a service for commercial reasons unrelated
              to Customer breach, it shall provide reasonable advance notice and
              reasonable transition arrangements having regard to the
              Customer&rsquo;s Subscription and applicable law.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="111.6" /> Termination by e2e World
              does not affect rights or liabilities that accrued before
              termination.
            </p>
          </section>

          {/* Section 112 */}
          <section id="section-112" className="mb-12 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-navy mb-6 leading-snug">
              112. TERMINATION FOR BREACH
            </h2>
            <p className={clauseText}>
              <ClauseHeading num="112.1" /> A party may terminate the Agreement
              for a material breach by the other party where the breach is
              incapable of remedy.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="112.2" /> Where a material breach is capable of
              remedy, the non-breaching party shall normally give written notice
              identifying the breach and requiring it to be remedied within a
              reasonable period or any cure period specified in the applicable
              Order Form.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="112.3" /> If the breach is not remedied within
              the applicable period, the non-breaching party may terminate the
              Agreement or, where appropriate, the affected part of the services
              by written notice.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="112.4" /> In determining whether a breach is
              material, relevant circumstances may include the nature, seriousness,
              duration and consequences of the breach, whether it is repeated, and
              whether it materially undermines the purpose of the Agreement.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="112.5" /> Examples of breaches that may be
              material, depending on the circumstances, include serious misuse of
              IMCAM Hub, unlawful processing of data, unauthorised access to
              another Customer&rsquo;s data, infringement of Intellectual Property
              Rights, serious confidentiality or security breaches, fraudulent
              activity and persistent failure to pay undisputed Fees.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="112.6" /> Termination for breach is without
              prejudice to any other right or remedy available to the terminating
              party.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="112.7" /> Nothing in this Section requires a
              party to allow a cure period where immediate termination is
              permitted by law or expressly justified under this Agreement because
              of serious legal, security or other material risk.
            </p>
          </section>

          {/* Section 113 */}
          <section id="section-113" className="mb-12 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-navy mb-6 leading-snug">
              113. TERMINATION FOR NON-PAYMENT
            </h2>
            <p className={clauseText}>
              <ClauseHeading num="113.1" /> If the Customer fails to pay an
              undisputed amount by its due date, e2e World may follow
              the failed or late payment process set out in Section 98.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="113.2" /> Where an undisputed amount remains
              materially overdue after notice and a reasonable opportunity to pay,
              e2e World may suspend access to IMCAM Hub and, if the
              non-payment continues, terminate the affected Subscription.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="113.3" /> Any notice of termination for
              non-payment shall identify the outstanding amount or invoices to
              which the termination relates and the date on which termination will
              take effect.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="113.4" /> e2e World shall not
              terminate solely because of an amount that is subject to a genuine,
              properly raised dispute while the parties are actively seeking to
              resolve that dispute in good faith, provided that the Customer pays
              all undisputed amounts when due.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="113.5" /> Termination for non-payment does not
              extinguish Fees, interest or other amounts properly accrued before
              termination.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="113.6" /> If the Customer pays the overdue amount
              before termination takes effect, e2e World may restore or
              continue access, subject to resolution of any other breach or risk
              that independently justifies suspension or termination.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="113.7" /> Any right to charge interest or
              recover reasonable collection costs shall be subject to Section 98
              and applicable law.
            </p>
          </section>

          {/* Section 114 */}
          <section id="section-114" className="mb-12 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-navy mb-6 leading-snug">
              114. EFFECT OF TERMINATION
            </h2>
            <p className={clauseText}>
              <ClauseHeading num="114.1" /> On the effective date of termination or
              expiry, the Customer&rsquo;s right to access and use IMCAM Hub under
              the terminated Subscription shall end, subject to any expressly
              agreed transition or data-retrieval arrangements.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="114.2" /> The Customer shall cease using e2e World Intellectual Property except to the extent that
              continued use is expressly permitted under a surviving provision or
              separate licence.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="114.3" /> Termination shall not affect:
            </p>
            <ul className="pl-6 sm:pl-10 space-y-2 mb-4">
              <li className={listItemText}>
                <ClauseHeading num="a." /> rights, remedies, obligations or
                liabilities that accrued before the effective termination date;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="b." /> amounts properly due and payable before
                or as a consequence of termination;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="c." /> the operation of provisions intended to
                survive termination; or
              </li>
              <li className={listItemText}>
                <ClauseHeading num="d." /> any right or remedy available under
                applicable law.
              </li>
            </ul>
            <p className={clauseText}>
              <ClauseHeading num="114.4" /> Where reasonably practicable, the
              Customer should complete necessary Case handover, document export
              and business-continuity arrangements before access ends.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="114.5" /> Termination of IMCAM Hub does not itself
              terminate any separate professional-services, immigration-advice or
              other agreement between the parties unless that separate agreement
              expressly provides otherwise.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="114.6" /> The Customer remains responsible for
              immigration applications, sponsorship duties, legal or regulatory
              deadlines and professional obligations after termination of the
              Software Subscription.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="114.7" /> e2e World may disable user
              accounts, integrations, API credentials and other access mechanisms
              associated with the terminated Subscription.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="114.8" /> Where only a module, user allocation or
              part of the services is terminated, the remainder of the Agreement
              and Subscription shall continue to the extent applicable.
            </p>
          </section>

          {/* Section 115 */}
          <section id="section-115" className="mb-12 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-navy mb-6 leading-snug">
              115. CUSTOMER DATA FOLLOWING TERMINATION
            </h2>
            <p className={clauseText}>
              <ClauseHeading num="115.1" /> Customer Data following termination
              shall be handled in accordance with Parts 6, 8 and 9, the applicable
              Data Processing Agreement and any specific data-export or transition
              terms stated in the Order Form.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="115.2" /> Where functionality is available and
              the Customer remains entitled to access the relevant data, the
              Customer should export Customer Data required for its legal,
              regulatory, professional or business purposes before the end of the
              applicable access period.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="115.3" /> e2e World may provide a
              limited post-termination period for data retrieval where expressly
              stated in the applicable Subscription, Order Form, Data Processing
              Agreement or other written terms. No particular retrieval period is
              guaranteed unless expressly agreed.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="115.4" /> After the applicable retrieval or
              retention period, e2e World may delete or anonymise
              Customer Data in accordance with the Data Processing Agreement,
              applicable retention arrangements and Data Protection Legislation.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="115.5" /> Deletion from active systems may not
              immediately remove residual copies from backups, logs or
              disaster-recovery systems. Such residual data shall remain protected
              and shall be handled in accordance with the retention and deletion
              provisions of the Agreement.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="115.6" /> e2e World may retain
              information where and for so long as retention is required or
              permitted by applicable law, including for security, financial
              records, legal compliance or the establishment, exercise or defence
              of legal claims.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="115.7" /> Where e2e World acts as
              processor, return or deletion of Personal Data shall be subject to
              the Customer&rsquo;s lawful instructions and the applicable Data
              Processing Agreement.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="115.8" /> The Customer is responsible for
              ensuring that it does not lose records it is required to retain
              merely because its Subscription ends.
            </p>
          </section>

          {/* Section 116 */}
          <section id="section-116" className="mb-4 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-navy mb-6 leading-snug">
              116. SURVIVAL OF TERMS
            </h2>
            <p className={clauseText}>
              <ClauseHeading num="116.1" /> Any provision that expressly or by its
              nature is intended to continue after termination or expiry shall
              survive.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="116.2" /> Without limitation, provisions
              concerning the following shall survive to the extent necessary to
              give them effect:
            </p>
            <ul className="pl-6 sm:pl-10 space-y-2 mb-4">
              <li className={listItemText}>
                <ClauseHeading num="a." /> accrued Fees and payment obligations;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="b." /> confidentiality;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="c." /> data protection, retention and
                deletion;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="d." /> ownership and Intellectual Property
                Rights;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="e." /> restrictions relating to misuse of e2e World Intellectual Property;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="f." /> Customer Data and post-termination data
                handling;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="g." /> warranties and disclaimers to the
                extent relevant to events occurring before termination;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="h." /> limitations and exclusions of
                liability;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="i." /> indemnities in respect of matters
                arising before or in connection with termination;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="j." /> dispute resolution, governing law and
                jurisdiction; and
              </li>
              <li className={listItemText}>
                <ClauseHeading num="k." /> any other provision which is stated or
                clearly intended to survive.
              </li>
            </ul>
            <p className={clauseText}>
              <ClauseHeading num="116.3" /> Survival of a provision does not extend
              an obligation beyond the period reasonably necessary or beyond any
              period specified by applicable law or the relevant contractual
              provision.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="116.4" /> Termination or expiry does not revive
              any right that had already expired or been validly waived before
              termination.
            </p>
          </section>

          <PartHeading num="15" title="Warranties & Disclaimers" />

          {/* Section 117 */}
          <section id="section-117" className="mb-12 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-navy mb-6 leading-snug">
              117. E2E WORLD WARRANTIES
            </h2>
            <p className={clauseText}>
              <ClauseHeading num="117.1" /> e2e World warrants that it
              shall provide IMCAM Hub with reasonable care and skill and
              substantially in accordance with the applicable Agreement, subject
              to the limitations, exclusions and dependencies stated in the
              Agreement.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="117.2" /> e2e World warrants that it
              has, or shall maintain, the rights and authority necessary to grant
              the Customer the licence to use IMCAM Hub in accordance with this
              Agreement.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="117.3" /> e2e World shall use
              reasonable efforts to maintain appropriate technical and
              organisational measures for the security of IMCAM Hub and Customer
              Data in accordance with Parts 8 and 9 and the applicable Data
              Processing Agreement.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="117.4" /> e2e World shall use
              reasonable efforts to correct reproducible material defects in
              IMCAM Hub that cause the Software to fail materially to perform in
              accordance with its applicable Documentation, subject to the
              Customer providing sufficient information and reasonable
              cooperation to investigate the issue.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="117.5" /> The warranty in clause 117.4 does not
              apply to an issue caused by:
            </p>
            <ul className="pl-6 sm:pl-10 space-y-2 mb-4">
              <li className={listItemText}>
                <ClauseHeading num="a." /> the Customer&rsquo;s or an Authorised
                User&rsquo;s misuse of IMCAM Hub or breach of the Agreement;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="b." /> unsupported or incompatible Customer
                systems, devices, browsers, networks or software;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="c." /> unauthorised modification of
                IMCAM Hub;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="d." /> a Third-Party Service or integration
                outside e2e World&rsquo;s reasonable control, except to
                the extent e2e World is responsible under the
                Agreement;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="e." /> Customer Data, instructions or
                configurations supplied by or on behalf of the Customer; or
              </li>
              <li className={listItemText}>
                <ClauseHeading num="f." /> events outside e2e World&rsquo;s reasonable control.
              </li>
            </ul>
            <p className={clauseText}>
              <ClauseHeading num="117.6" /> Where e2e World cannot
              reasonably correct a material defect covered by an express warranty,
              the parties shall consider an appropriate remedy in accordance with
              the Agreement, which may include a workaround, replacement
              functionality, service adjustment or, where sufficiently serious,
              termination of the affected service.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="117.7" /> Any additional warranty applies only
              if expressly stated in an Order Form, Service Level Agreement or
              other written agreement signed or accepted by authorised
              representatives of the parties.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="117.8" /> Nothing in this Part excludes any
              warranty, term or obligation that cannot lawfully be excluded.
            </p>
          </section>

          {/* Section 118 */}
          <section id="section-118" className="mb-12 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-navy mb-6 leading-snug">
              118. CUSTOMER WARRANTIES
            </h2>
            <p className={clauseText}>
              <ClauseHeading num="118.1" /> The Customer warrants that it has
              authority to enter into the Agreement and to use IMCAM Hub for the
              purposes for which it subscribes.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="118.2" /> The Customer warrants that its use of
              IMCAM Hub, and the use made by persons to whom it grants access,
              shall comply with applicable law and the Agreement.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="118.3" /> The Customer warrants that, to the
              extent necessary for its use of IMCAM Hub, it has or shall obtain
              the rights, permissions, lawful bases, notices, consents and
              authorisations required to:
            </p>
            <ul className="pl-6 sm:pl-10 space-y-2 mb-4">
              <li className={listItemText}>
                <ClauseHeading num="a." /> collect and process Customer Data;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="b." /> upload and store documents and other
                Customer Content;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="c." /> permit e2e World to process
                Customer Data as required to provide IMCAM Hub;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="d." /> grant access to Candidates,
                Businesses, employees, Caseworkers and other Authorised Users;
                and
              </li>
              <li className={listItemText}>
                <ClauseHeading num="e." /> send or facilitate communications and
                requests through the Software.
              </li>
            </ul>
            <p className={clauseText}>
              <ClauseHeading num="118.4" /> The Customer warrants that it shall
              not knowingly submit fraudulent, fabricated, unlawfully obtained or
              infringing material through IMCAM Hub.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="118.5" /> Where the Customer provides
              immigration, legal or regulated professional services, the Customer
              warrants that it is responsible for maintaining any authorisation,
              supervision, permissions or professional arrangements required for
              those services.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="118.6" /> Where the Customer is a Business or
              sponsor, it remains responsible for its own sponsorship,
              employment, record-keeping, reporting and other regulatory
              obligations.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="118.7" /> The Customer does not warrant that
              information supplied by a Candidate or other third party will
              always be accurate merely because it is received through IMCAM Hub,
              but the Customer remains responsible for the review and
              verification obligations allocated to it under the Agreement.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="118.8" /> A breach of a Customer warranty shall
              be dealt with in accordance with the applicable suspension,
              termination, liability and indemnity provisions of the Agreement
              and shall not create liability beyond that permitted by applicable
              law and the agreed contractual allocation of risk.
            </p>
          </section>

          {/* Section 119 */}
          <section id="section-119" className="mb-12 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-navy mb-6 leading-snug">
              119. SOFTWARE DISCLAIMER
            </h2>
            <p className={clauseText}>
              <ClauseHeading num="119.1" /> Except for the express warranties
              stated in the Agreement and to the extent permitted by applicable
              law, IMCAM Hub is provided as a business software service and no
              additional warranty or representation is given that is not
              expressly stated in the Agreement.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="119.2" /> e2e World does not warrant
              that IMCAM Hub will:
            </p>
            <ul className="pl-6 sm:pl-10 space-y-2 mb-4">
              <li className={listItemText}>
                <ClauseHeading num="a." /> be entirely free from defects, errors
                or interruptions;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="b." /> operate without dependence on internet
                connectivity, Customer systems or Third-Party Services;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="c." /> meet every Customer-specific process,
                workflow or technical requirement unless expressly agreed;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="d." /> be compatible with every device,
                browser, application or third-party system;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="e." /> prevent every security incident or
                unauthorised act; or
              </li>
              <li className={listItemText}>
                <ClauseHeading num="f." /> produce a particular business,
                professional, regulatory or immigration result.
              </li>
            </ul>
            <p className={clauseText}>
              <ClauseHeading num="119.3" /> The Customer is responsible for
              determining whether IMCAM Hub is suitable for its business and
              professional requirements before relying on it for a particular
              workflow or purpose.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="119.4" /> Descriptions, demonstrations,
              screenshots, roadmaps, promotional material and statements about
              proposed or future functionality are for information or evaluation
              unless expressly incorporated into the Agreement.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="119.5" /> Beta, trial, demonstration and
              pre-release functionality remains subject to the additional
              limitations in Section 12.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="119.6" /> Nothing in this Software Disclaimer
              limits e2e World&rsquo;s obligation to exercise reasonable
              care and skill or excludes liability that cannot lawfully be
              excluded.
            </p>
          </section>

          {/* Section 120 */}
          <section id="section-120" className="mb-12 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-navy mb-6 leading-snug">
              120. ACCURACY DISCLAIMER
            </h2>
            <p className={clauseText}>
              <ClauseHeading num="120.1" /> IMCAM Hub may organise, display,
              calculate, populate, reproduce, transmit or otherwise process
              information supplied by the Customer, its users, Candidates,
              Businesses, third parties or configured data sources.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="120.2" /> Unless expressly agreed as a separate
              service, e2e World does not independently verify the
              truth, authenticity, completeness, legal sufficiency or continuing
              accuracy of Customer Data, documents or Case information merely
              because they are entered into or processed by IMCAM Hub.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="120.3" /> The Customer must review and verify
              information before relying on it for an immigration application,
              sponsorship decision, legal or professional advice, regulatory
              report, deadline, communication or other material purpose.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="120.4" /> Where IMCAM Hub performs a
              calculation, pre-populates a field, generates a reminder, presents
              a workflow, produces a report or displays information derived from
              Customer Data, the output depends on the accuracy, completeness,
              configuration and currency of the underlying information.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="120.5" /> Information, templates, workflow
              content or administrative materials within IMCAM Hub may require
              updating because of changes in law, Home Office or UKVI practice,
              forms, guidance, fees or other external requirements.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="120.6" /> e2e World may update such
              content from time to time but does not warrant that every external
              change will be reflected immediately or before it takes effect.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="120.7" /> The Customer remains responsible for
              checking current authoritative requirements where accuracy is
              material to a Case or professional decision.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="120.8" /> Nothing in this Section excludes
              responsibility for an error caused by e2e World&rsquo;s
              breach of an express contractual obligation to the extent liability
              for that breach is not otherwise lawfully limited under the
              Agreement.
            </p>
          </section>

          {/* Section 121 */}
          <section id="section-121" className="mb-12 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-navy mb-6 leading-snug">
              121. IMMIGRATION OUTCOME DISCLAIMER
            </h2>
            <p className={clauseText}>
              <ClauseHeading num="121.1" /> IMCAM Hub is an immigration
              case-management and administrative technology platform. Use of the
              Software does not guarantee the grant, extension, variation,
              continuation or other favourable outcome of any visa, immigration
              permission, sponsor licence or related application or process.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="121.2" /> Immigration and sponsorship decisions
              are made by the Home Office, UKVI or other competent authorities
              applying the law, rules, policy, evidence and circumstances
              relevant to the matter.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="121.3" /> A Case status, workflow stage,
              checklist, reminder, document indicator, template, report or other
              feature within IMCAM Hub is an internal software function and does
              not constitute an official Home Office or UKVI decision,
              confirmation or assurance.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="121.4" /> IMCAM Hub does not independently
              determine whether a person is eligible or ineligible for an
              immigration route and does not automatically make immigration
              decisions.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="121.5" /> The Customer remains responsible for
              professional judgement, Case strategy, eligibility assessment,
              advice, evidence, forms, representations, deadlines, review and
              submission as allocated under Part 4.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="121.6" /> e2e World is not
              responsible merely by providing IMCAM Hub for a refusal, rejection,
              delay, curtailment, cancellation, sponsor action or other
              immigration outcome caused by the decision of a competent
              authority, Customer or third-party error, inaccurate or incomplete
              information, missed requirements, or matters outside e2e World&rsquo;s reasonable control.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="121.7" /> Clause 121.6 does not exclude
              liability to the extent that a loss is caused by e2e World&rsquo;s own breach of the Agreement and such liability
              cannot or has not been validly excluded or limited under Part 16.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="121.8" /> Any immigration or legal
              professional services separately supplied by e2e World,
              if applicable, are distinct from the provision of IMCAM Hub and
              shall be governed by the terms applicable to those professional
              services.
            </p>
          </section>

          {/* Section 122 */}
          <section id="section-122" className="mb-12 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-navy mb-6 leading-snug">
              122. THIRD-PARTY SERVICES DISCLAIMER
            </h2>
            <p className={clauseText}>
              <ClauseHeading num="122.1" /> IMCAM Hub may depend on or integrate
              with Third-Party Services as described in Part 11.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="122.2" /> Except to the extent expressly
              assumed under the Agreement, e2e World does not warrant
              the uninterrupted operation, continuing availability, accuracy or
              functionality of a Third-Party Service that is outside e2e World&rsquo;s reasonable control.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="122.3" /> A third-party provider may change,
              suspend, restrict or discontinue its service, technical interface,
              terms or functionality, which may affect an associated IMCAM Hub
              feature.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="122.4" /> Where the Customer independently
              selects, contracts with, configures or connects a Third-Party
              Service, the Customer is responsible for evaluating that service
              and complying with any terms that apply directly between the
              Customer and the provider.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="122.5" /> e2e World is not
              responsible for third-party content, advice, representations or
              decisions merely because the content or service can be accessed,
              transmitted or integrated through IMCAM Hub.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="122.6" /> Where a Third-Party Service used by
              e2e World is material to the operation of IMCAM Hub, e2e World&rsquo;s responsibilities for selecting, managing
              and responding to disruption of that service remain subject to
              Parts 8, 9, 11 and 13.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="122.7" /> Nothing in this Section excludes or
              limits e2e World&rsquo;s liability for its own acts or
              omissions to the extent such liability cannot lawfully be excluded
              or is expressly assumed under the Agreement.
            </p>
          </section>

          {/* Section 123 */}
          <section id="section-123" className="mb-4 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-navy mb-6 leading-snug">
              123. AVAILABILITY DISCLAIMER
            </h2>
            <p className={clauseText}>
              <ClauseHeading num="123.1" /> IMCAM Hub is provided as a cloud-based
              service and may experience planned or unplanned periods of
              unavailability, reduced performance or restricted functionality.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="123.2" /> Unless an applicable Service Level
              Agreement expressly states otherwise, e2e World does not
              warrant continuous or uninterrupted availability or a specific
              percentage uptime.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="123.3" /> Availability may be affected by
              matters including:
            </p>
            <ul className="pl-6 sm:pl-10 space-y-2 mb-4">
              <li className={listItemText}>
                <ClauseHeading num="a." /> planned or emergency maintenance;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="b." /> security incidents, vulnerabilities or
                protective measures;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="c." /> Third-Party Service, hosting, internet
                or telecommunications failures;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="d." /> Customer systems, devices, networks,
                integrations or configuration;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="e." /> software defects or infrastructure
                failures;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="f." /> legal, regulatory or governmental
                requirements; and
              </li>
              <li className={listItemText}>
                <ClauseHeading num="g." /> force majeure events or other
                circumstances outside e2e World&rsquo;s reasonable
                control.
              </li>
            </ul>
            <p className={clauseText}>
              <ClauseHeading num="123.4" /> e2e World shall continue
              to be subject to the service, maintenance and support obligations
              expressly stated in Part 13 and any applicable Service Level
              Agreement.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="123.5" /> The Customer must maintain reasonable
              contingency arrangements for urgent immigration, sponsorship,
              legal, regulatory and business activities and should not rely on
              uninterrupted access to IMCAM Hub as the sole means of meeting a
              critical deadline.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="123.6" /> Any service credits, availability
              remedies or specific service commitments apply only where expressly
              agreed in an applicable Service Level Agreement or Order Form.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="123.7" /> This Availability Disclaimer does not
              permit e2e World to disregard an express service
              commitment and does not exclude any liability that cannot lawfully
              be excluded.
            </p>
          </section>

          <PartHeading num="16" title="Liability & Indemnities" />

          {/* Section 124 */}
          <section id="section-124" className="mb-12 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-navy mb-6 leading-snug">
              124. LIMITATION OF LIABILITY
            </h2>
            <p className={clauseText}>
              <ClauseHeading num="124.1" /> This Part sets out the parties&rsquo;
              agreed allocation of financial risk arising out of or in connection
              with the Agreement and applies to liability in contract, tort
              (including negligence), breach of statutory duty, misrepresentation,
              restitution or otherwise, except to the extent that applicable law
              does not permit the relevant liability to be excluded or limited.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="124.2" /> Each party shall take reasonable steps
              to mitigate losses that it suffers or may suffer arising from a
              breach of the Agreement.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="124.3" /> e2e World shall not be
              liable merely because IMCAM Hub is used in connection with an
              immigration, sponsorship, employment, legal or professional matter.
              Liability shall depend on whether e2e World has breached
              an obligation owed under the Agreement or applicable law and whether
              that breach caused the relevant recoverable loss.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="124.4" /> The limitations and exclusions in this
              Part shall be interpreted together with the responsibilities
              allocated elsewhere in the Agreement, including the Customer&rsquo;s
              responsibility for professional judgement, verification, deadlines,
              applications, submissions, user administration, Customer Data and
              lawful use.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="124.5" /> Nothing in this Part limits a
              party&rsquo;s obligation to pay Fees or other sums properly due under
              the Agreement.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="124.6" /> Where a specific Order Form or other
              written agreement expressly provides a different liability
              allocation for a particular service, that specific allocation shall
              apply to that service in accordance with the order-of-precedence
              provisions in Part 1.
            </p>
          </section>

          {/* Section 125 */}
          <section id="section-125" className="mb-12 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-navy mb-6 leading-snug">
              125. EXCLUDED LOSSES
            </h2>
            <p className={clauseText}>
              <ClauseHeading num="125.1" /> Subject to Section 132 and to the
              extent permitted by applicable law, neither party shall be liable to
              the other for losses that are indirect or consequential where such
              losses fall within a category that may lawfully be excluded under
              the circumstances.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="125.2" /> Subject to Section 132, e2e World shall not be liable for loss of profit, revenue,
              anticipated savings, business opportunity, goodwill or reputation to
              the extent that such loss is indirect or consequential, or to the
              extent that the Agreement expressly and lawfully excludes that
              category of loss.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="125.3" /> e2e World shall not be
              liable for loss arising from:
            </p>
            <ul className="pl-6 sm:pl-10 space-y-2 mb-4">
              <li className={listItemText}>
                <ClauseHeading num="a." /> inaccurate, incomplete, misleading,
                fraudulent or outdated Customer Data or documents supplied by the
                Customer, an Authorised User, Candidate, Business or other third
                party;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="b." /> the Customer&rsquo;s failure to review,
                verify or act upon information, documents, reminders,
                communications or outputs as required under the Agreement;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="c." /> a missed immigration, sponsorship,
                legal, regulatory or professional deadline that e2e World was not expressly contracted to manage;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="d." /> a Home Office, UKVI or other competent
                authority decision, delay or change in law, policy, guidance,
                fees or procedure, except to the extent the loss was caused by
                e2e World&rsquo;s breach of an express obligation;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="e." /> the Customer&rsquo;s professional
                advice, Case strategy, eligibility assessment, representations or
                submission decisions;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="f." /> unauthorised use resulting from the
                Customer&rsquo;s failure to protect credentials, devices or access
                permissions, except to the extent caused by e2e World&rsquo;s breach;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="g." /> Customer-selected Third-Party Services,
                integrations or systems outside e2e World&rsquo;s
                reasonable control; or
              </li>
              <li className={listItemText}>
                <ClauseHeading num="h." /> the Customer&rsquo;s failure to maintain
                reasonable backup, export, diary, communication or
                business-continuity arrangements where the Agreement places that
                responsibility on the Customer.
              </li>
            </ul>
            <p className={clauseText}>
              <ClauseHeading num="125.4" /> Clause 125.3 does not exclude liability
              to the extent that the relevant loss was caused or materially
              contributed to by e2e World&rsquo;s own breach and is
              otherwise recoverable under the Agreement and applicable law.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="125.5" /> Nothing in this Section excludes
              recovery of direct losses that cannot lawfully be excluded or that
              are expressly recoverable under another provision of the Agreement.
            </p>
          </section>

          {/* Section 126 */}
          <section id="section-126" className="mb-12 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-navy mb-6 leading-snug">
              126. LIABILITY CAP
            </h2>
            <p className={clauseText}>
              <ClauseHeading num="126.1" /> Subject to Section 132, the parties
              intend that e2e World&rsquo;s aggregate liability arising
              out of or in connection with the Agreement shall be subject to a
              financial cap.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="126.2" /> The amount and basis of the general
              liability cap should be stated in the applicable Order Form or final
              commercial terms. Unless and until a specific cap has been expressly
              agreed, no numerical cap shall be inferred from this draft Section.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="126.3" /> The parties may agree that the general
              liability cap is calculated by reference to Fees paid or payable
              during a specified period, a fixed monetary amount, or another
              commercially appropriate measure.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="126.4" /> The parties may also agree separate or
              higher caps for specified categories of liability, including data
              protection, confidentiality or intellectual-property matters, where
              commercially and legally appropriate.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="126.5" /> Any liability cap shall state whether
              it applies per claim, per event, per Contract Year, per Subscription
              Period or in aggregate, and whether related claims are treated as a
              single claim.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="126.6" /> No liability cap shall apply to a
              category of liability to the extent that applicable law prohibits
              limitation of that liability.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="126.7" /> The final liability cap should be
              completed before the Agreement is used for live Customer contracting
              so that the parties&rsquo; intended financial risk allocation is
              clear.
            </p>
          </section>

          {/* Section 127 */}
          <section id="section-127" className="mb-12 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-navy mb-6 leading-snug">
              127. CUSTOMER INDEMNITY
            </h2>
            <p className={clauseText}>
              <ClauseHeading num="127.1" /> Subject to the remainder of this
              Section and applicable law, the Customer shall indemnify e2e World against third-party claims, losses, damages, liabilities,
              costs and reasonable legal expenses to the extent arising from:
            </p>
            <ul className="pl-6 sm:pl-10 space-y-2 mb-4">
              <li className={listItemText}>
                <ClauseHeading num="a." /> Customer Data or Customer Content that
                infringes a third party&rsquo;s Intellectual Property Rights,
                confidentiality rights or other proprietary rights;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="b." /> the Customer&rsquo;s unlawful
                collection, use, disclosure or processing of Personal Data where
                e2e World has processed that data in accordance with the
                Customer&rsquo;s lawful documented instructions;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="c." /> the Customer&rsquo;s fraudulent,
                unlawful or deliberately unauthorised use of IMCAM Hub;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="d." /> a material breach by the Customer of
                Section 39 concerning required consents and authorisations; or
              </li>
              <li className={listItemText}>
                <ClauseHeading num="e." /> a third-party claim arising from
                professional immigration or legal advice given by the Customer or
                its personnel, except to the extent caused by e2e World&rsquo;s own breach or separate professional services.
              </li>
            </ul>
            <p className={clauseText}>
              <ClauseHeading num="127.2" /> An indemnity under this Section shall
              apply only to the extent the relevant claim is attributable to the
              Customer&rsquo;s act, omission or breach and shall not apply to the
              extent the claim was caused by e2e World&rsquo;s breach,
              negligence, wilful misconduct or unlawful processing.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="127.3" /> e2e World shall notify the
              Customer reasonably promptly of a claim for which it seeks
              indemnification, provide reasonable information and cooperation, and
              take reasonable steps to mitigate its loss.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="127.4" /> Where appropriate, the Customer may
              control the defence and settlement of an indemnified third-party
              claim, provided that it keeps e2e World reasonably
              informed and does not admit liability on behalf of e2e World or agree a settlement imposing non-monetary obligations on
              e2e World without e2e World&rsquo;s prior written
              consent, not to be unreasonably withheld or delayed.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="127.5" /> e2e World may participate in
              the defence with its own advisers at its own cost, except where
              separate representation is reasonably required because of a conflict
              of interest or the Customer fails to conduct the defence
              appropriately.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="127.6" /> This Section does not require the
              Customer to indemnify e2e World for losses that are
              remote, unreasonable or not recoverable under applicable law.
            </p>
          </section>

          {/* Section 128 */}
          <section id="section-128" className="mb-12 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-navy mb-6 leading-snug">
              128. INTELLECTUAL PROPERTY INDEMNITY
            </h2>
            <p className={clauseText}>
              <ClauseHeading num="128.1" /> Subject to this Section, Part 10, the
              applicable liability cap and Section 132, e2e World shall
              defend or settle a third-party claim alleging that the Customer&rsquo;s
              authorised use of IMCAM Hub in the United Kingdom infringes that
              third party&rsquo;s Intellectual Property Rights, and shall indemnify
              the Customer against damages and reasonable costs finally awarded or
              agreed in settlement of that claim.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="128.2" /> The indemnity in clause 128.1 does not
              apply to the extent a claim arises from:
            </p>
            <ul className="pl-6 sm:pl-10 space-y-2 mb-4">
              <li className={listItemText}>
                <ClauseHeading num="a." /> Customer Data, Customer Content or
                materials not supplied by e2e World;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="b." /> the Customer&rsquo;s modification of
                IMCAM Hub or combination with an item not supplied or approved by
                e2e World, where the claim would not otherwise have
                arisen;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="c." /> use of IMCAM Hub outside the scope of
                the Agreement or after e2e World has notified the
                Customer to stop the allegedly infringing use and provided a
                reasonable alternative;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="d." /> a Third-Party Service or third-party
                material subject to separate terms, except to the extent e2e World has expressly assumed responsibility for it; or
              </li>
              <li className={listItemText}>
                <ClauseHeading num="e." /> compliance by e2e World with
                a design, instruction or specification supplied by the Customer.
              </li>
            </ul>
            <p className={clauseText}>
              <ClauseHeading num="128.3" /> The Customer must notify e2e World reasonably promptly of an infringement claim, provide
              reasonable cooperation and, where appropriate, allow e2e World to control the defence and settlement, provided that e2e World does not agree a settlement that admits wrongdoing
              by the Customer or imposes material non-monetary obligations on the
              Customer without its prior written consent.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="128.4" /> If IMCAM Hub becomes, or e2e World reasonably believes it is likely to become, subject to an
              infringement claim, e2e World may:
            </p>
            <ul className="pl-6 sm:pl-10 space-y-2 mb-4">
              <li className={listItemText}>
                <ClauseHeading num="a." /> obtain the right for the Customer to
                continue using the affected functionality;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="b." /> modify or replace the affected
                functionality so that it is no longer infringing while retaining
                materially equivalent functionality where reasonably practicable;
                or
              </li>
              <li className={listItemText}>
                <ClauseHeading num="c." /> if neither option is reasonably
                available, terminate the affected service and provide an
                appropriate refund or credit for prepaid Fees relating to the
                unused terminated period.
              </li>
            </ul>
            <p className={clauseText}>
              <ClauseHeading num="128.5" /> This Section states the contractual
              remedy specifically applicable to third-party Intellectual Property
              Rights infringement claims concerning IMCAM Hub, subject always to
              rights and liabilities that cannot lawfully be excluded.
            </p>
          </section>

          {/* Section 129 */}
          <section id="section-129" className="mb-12 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-navy mb-6 leading-snug">
              129. DATA PROTECTION LIABILITY
            </h2>
            <p className={clauseText}>
              <ClauseHeading num="129.1" /> Each party shall be responsible for its
              own compliance with Data Protection Legislation and for losses,
              claims, regulatory consequences and liabilities arising from its own
              breach to the extent allocated by applicable law and the Agreement.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="129.2" /> Where e2e World acts as
              processor, its responsibilities for processing Customer Personal
              Data shall be governed by Part 8 and the applicable Data Processing
              Agreement.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="129.3" /> Where the Customer acts as controller,
              it remains responsible for matters including lawful basis,
              transparency, data minimisation, accuracy, authorised disclosure,
              data subject decisions and the lawfulness of its instructions to e2e World.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="129.4" /> Neither party shall be required to
              indemnify the other for a data protection claim to the extent that
              the claim results from the other party&rsquo;s own breach of Data
              Protection Legislation, unlawful instruction, negligence or failure
              to comply with the Agreement.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="129.5" /> The parties may agree a separate
              liability cap or allocation for data protection liability in the
              applicable Order Form or Data Processing Agreement. If no separate
              cap is agreed, the general liability provisions shall apply to the
              extent permitted by law.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="129.6" /> Nothing in this Agreement restricts the
              rights of data subjects or the powers of the Information
              Commissioner&rsquo;s Office or another competent authority where such
              rights or powers cannot lawfully be restricted by contract.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="129.7" /> A contractual allocation of
              responsibility between the parties does not alter any statutory
              allocation of liability that applies directly under Data Protection
              Legislation.
            </p>
          </section>

          {/* Section 130 */}
          <section id="section-130" className="mb-12 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-navy mb-6 leading-snug">
              130. PROFESSIONAL/IMMIGRATION ADVICE LIABILITY
            </h2>
            <p className={clauseText}>
              <ClauseHeading num="130.1" /> The provision of IMCAM Hub as software
              does not make e2e World responsible for immigration or
              legal advice provided by the Customer, its Caseworkers, advisers,
              employees, contractors or other users.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="130.2" /> The Customer remains responsible for
              professional judgement, immigration strategy, eligibility
              assessment, advice, representations, evidential decisions, forms,
              deadlines and submissions as set out in Part 4.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="130.3" /> e2e World shall not be liable
              for a professional or immigration outcome merely because IMCAM Hub
              was used to create, manage, store, communicate or organise the
              relevant Case.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="130.4" /> Where e2e World separately
              agrees to provide immigration, legal or other professional services,
              liability for those services shall be determined under the separate
              engagement terms applicable to those services and shall not be
              treated as liability arising merely from the SaaS Subscription.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="130.5" /> Nothing in this Section excludes
              liability for an act or omission of e2e World in providing
              separate professional services where such liability properly arises
              under the applicable engagement and cannot lawfully be excluded.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="130.6" /> The Customer must not represent to a
              Candidate, Client, Business or other person that e2e World
              has approved, verified or taken professional responsibility for a
              Case merely because the Case is managed through IMCAM Hub.
            </p>
          </section>

          {/* Section 131 */}
          <section id="section-131" className="mb-12 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-navy mb-6 leading-snug">
              131. FRAUD AND MISREPRESENTATION
            </h2>
            <p className={clauseText}>
              <ClauseHeading num="131.1" /> Nothing in the Agreement excludes or
              limits either party&rsquo;s liability for fraud or fraudulent
              misrepresentation.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="131.2" /> Neither party shall knowingly make a
              fraudulent statement or conceal a material fact with the intention
              of inducing the other party to enter into or continue the Agreement.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="131.3" /> Subject to clause 131.1 and Section
              132, liability for an innocent or negligent misrepresentation may be
              limited or excluded only to the extent permitted by applicable law
              and the express terms of the Agreement.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="131.4" /> The Customer must not use IMCAM Hub to
              create, facilitate, conceal or submit fraudulent immigration
              documents, false evidence, dishonest representations or other
              unlawful material.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="131.5" /> Where e2e World reasonably
              suspects fraudulent use of IMCAM Hub, it may take proportionate
              protective action in accordance with the suspension, termination,
              security and lawful-use provisions of the Agreement.
            </p>
          </section>

          {/* Section 132 */}
          <section id="section-132" className="mb-4 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-navy mb-6 leading-snug">
              132. LIABILITIES THAT CANNOT BE EXCLUDED
            </h2>
            <p className={clauseText}>
              <ClauseHeading num="132.1" /> Nothing in the Agreement excludes or
              limits liability for death or personal injury caused by negligence
              where such liability cannot lawfully be excluded or limited.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="132.2" /> Nothing in the Agreement excludes or
              limits liability for fraud or fraudulent misrepresentation.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="132.3" /> Nothing in the Agreement excludes or
              limits any liability that applicable law provides cannot be excluded
              or limited by contract.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="132.4" /> Any exclusion, limitation, indemnity or
              liability cap in the Agreement shall be interpreted and applied only
              to the maximum extent permitted by applicable law.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="132.5" /> If a particular exclusion or limitation
              is found unenforceable, that finding shall not automatically
              invalidate the remainder of this Part or the Agreement. The affected
              provision shall be treated in accordance with the severability
              provisions of the Agreement.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="132.6" /> The parties acknowledge that the Fees
              and other commercial terms may be agreed in reliance on the
              allocation of risk in this Part, including any final liability cap
              inserted into the applicable Order Form or final Agreement.
            </p>
          </section>

          <PartHeading num="17" title="Regulatory & Legal Compliance" />

          {/* Section 133 */}
          <section id="section-133" className="mb-12 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-navy mb-6 leading-snug">
              133. COMPLIANCE WITH LAWS
            </h2>
            <p className={clauseText}>
              <ClauseHeading num="133.1" /> Each party shall comply with the laws
              and regulations applicable to it in connection with entering into,
              performing and exercising its rights under the Agreement.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="133.2" /> The Customer shall use IMCAM Hub only
              for lawful purposes and in accordance with the legal and regulatory
              requirements applicable to its business, professional activities,
              employment activities, sponsorship activities and processing of
              information.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="133.3" /> The Customer is responsible for
              determining which laws, regulatory requirements, professional rules
              and internal compliance obligations apply to its particular use of
              IMCAM Hub.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="133.4" /> e2e World shall not be
              responsible for the Customer&rsquo;s compliance obligations merely
              because IMCAM Hub provides functionality that assists the Customer
              in managing information, documents, Cases, users, communications,
              reminders or records.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="133.5" /> Where a change in applicable law
              materially affects the lawful provision or operation of IMCAM Hub,
              e2e World may make reasonable changes to the Software, its
              procedures or the Agreement in accordance with Part 18.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="133.6" /> Neither party is required by the
              Agreement to perform an act that would cause it to breach applicable
              law. Where a contractual instruction or requirement conflicts with
              applicable law, the affected party shall, where legally permitted,
              notify the other party and the parties shall seek a lawful
              alternative.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="133.7" /> The Customer shall ensure that its
              Authorised Users do not use IMCAM Hub to facilitate fraud, deception,
              unlawful discrimination, exploitation, unauthorised access,
              infringement of rights or other unlawful activity.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="133.8" /> Nothing in this Section transfers a
              statutory or regulatory responsibility from the party on whom the
              law places that responsibility.
            </p>
          </section>

          {/* Section 134 */}
          <section id="section-134" className="mb-12 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-navy mb-6 leading-snug">
              134. IMMIGRATION REGULATORY COMPLIANCE
            </h2>
            <p className={clauseText}>
              <ClauseHeading num="134.1" /> The Customer remains responsible for
              compliance with the immigration and sponsorship laws, rules,
              guidance, duties and procedures applicable to its activities.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="134.2" /> Where the Customer provides immigration
              advice or immigration services, the Customer is responsible for
              ensuring that those services are provided only by persons who are
              lawfully entitled to provide them and within the scope of any
              applicable authorisation, exemption, supervision or professional
              arrangements.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="134.3" /> Where the Customer is a sponsor or
              employer, it remains responsible for its own sponsor licence duties,
              right-to-work obligations, reporting, record-keeping, monitoring and
              other immigration-related employer responsibilities.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="134.4" /> IMCAM Hub may assist with administrative
              organisation, reminders, records, documents, communications and
              workflows, but such functionality does not transfer the
              Customer&rsquo;s immigration or sponsorship obligations to e2e World.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="134.5" /> The Customer must independently verify
              current immigration requirements, including applicable Immigration
              Rules, Home Office or UKVI guidance, evidential requirements, forms,
              fees, reporting obligations and deadlines where relevant to a Case.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="134.6" /> The Customer must not use IMCAM Hub to
              prepare, facilitate, conceal or submit information or documents that
              it knows to be false, fraudulent or materially misleading.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="134.7" /> Where the Customer becomes aware that
              information held in a Case is materially inaccurate or misleading,
              it is responsible for taking appropriate professional and legal
              steps in relation to that information.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="134.8" /> Nothing in this Agreement represents
              that e2e World, merely by supplying IMCAM Hub, assumes the
              Customer&rsquo;s regulatory status or acts as the Customer&rsquo;s
              immigration adviser, legal representative, sponsor or employer.
            </p>
          </section>

          {/* Section 135 */}
          <section id="section-135" className="mb-12 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-navy mb-6 leading-snug">
              135. PROFESSIONAL REGULATORY COMPLIANCE
            </h2>
            <p className={clauseText}>
              <ClauseHeading num="135.1" /> Where the Customer or any of its
              personnel carries on regulated legal, immigration or other
              professional activity, the Customer is responsible for identifying
              and complying with the professional and regulatory requirements
              applicable to that activity.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="135.2" /> Such responsibilities may include,
              where applicable, requirements concerning authorisation, competence,
              supervision, client care, conflicts of interest, confidentiality,
              record keeping, complaints, professional indemnity arrangements,
              undertakings and handling of client information.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="135.3" /> A user designation within IMCAM Hub,
              including a Caseworker, Admin or other role, is a software access
              designation only and does not represent or certify that the
              individual holds any professional qualification, authorisation or
              regulatory status.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="135.4" /> The Customer is responsible for
              determining which users may perform regulated or professionally
              restricted work and for configuring access and supervision
              accordingly.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="135.5" /> e2e World does not, merely
              by providing the Software, supervise the Customer&rsquo;s
              professional work or verify the professional status, competence or
              authority of every Authorised User.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="135.6" /> If the Customer&rsquo;s professional or
              regulatory status changes in a manner that materially affects its
              lawful use of IMCAM Hub, the Customer shall take appropriate action
              and notify e2e World where the change affects the
              contractual or lawful basis on which the service is provided.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="135.7" /> e2e World may request
              reasonable evidence of a Customer&rsquo;s authority or status where
              this is reasonably necessary for legal, security, contractual or
              compliance purposes, without assuming responsibility for the
              Customer&rsquo;s continuing professional compliance.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="135.8" /> No regulator of e2e World or
              the Customer shall be identified or implied by this Agreement unless
              that regulatory status has been expressly confirmed and is
              applicable to the relevant activity.
            </p>
          </section>

          {/* Section 136 */}
          <section id="section-136" className="mb-12 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-navy mb-6 leading-snug">
              136. DATA PROTECTION COMPLIANCE
            </h2>
            <p className={clauseText}>
              <ClauseHeading num="136.1" /> Each party shall comply with its
              obligations under applicable Data Protection Legislation in
              accordance with Part 8 and the applicable Data Processing Agreement.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="136.2" /> The Customer is responsible for
              ensuring that its use of IMCAM Hub has an appropriate lawful basis
              and that required privacy information, permissions, safeguards and
              governance arrangements are in place.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="136.3" /> Where e2e World acts as
              processor, it shall process Personal Data in accordance with the
              Customer&rsquo;s lawful documented instructions and the applicable
              Data Processing Agreement.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="136.4" /> Where e2e World acts as
              independent controller, it shall be responsible for the processing
              activities for which it determines the purposes and means, as
              described in Part 8 and applicable privacy information.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="136.5" /> The Customer must not instruct e2e World to process Personal Data in a manner that the
              Customer knows or ought reasonably to know would breach Data
              Protection Legislation.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="136.6" /> The parties shall provide the
              cooperation required under Part 8 in relation to data subject
              rights, Personal Data Breaches, data protection impact assessments,
              international transfers and other applicable compliance matters.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="136.7" /> This Section supplements rather than
              replaces the detailed data protection provisions in Part 8 and the
              Data Processing Agreement.
            </p>
          </section>

          {/* Section 137 */}
          <section id="section-137" className="mb-12 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-navy mb-6 leading-snug">
              137. ANTI-BRIBERY AND CORRUPTION
            </h2>
            <p className={clauseText}>
              <ClauseHeading num="137.1" /> Each party shall comply with
              applicable anti-bribery and anti-corruption laws in connection with
              the Agreement.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="137.2" /> Neither party shall offer, promise,
              give, request, agree to receive or accept a bribe or other improper
              financial or non-financial advantage in connection with IMCAM Hub or
              the parties&rsquo; business relationship.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="137.3" /> The Customer must not use IMCAM Hub to
              facilitate, record, conceal or support bribery, corruption, improper
              payments or other unlawful conduct.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="137.4" /> Each party shall maintain policies,
              procedures or controls appropriate to the nature and risk profile of
              its business where required by applicable law.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="137.5" /> A party that becomes aware of credible
              evidence of bribery or corruption materially connected with the
              Agreement shall take appropriate action in accordance with
              applicable law and may notify the other party where lawful and
              relevant.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="137.6" /> A serious breach of this Section may
              constitute a material breach for the purposes of the suspension and
              termination provisions of the Agreement.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="137.7" /> Nothing in this Section requires a
              party to make a disclosure that is prohibited by law or that would
              improperly prejudice a lawful investigation.
            </p>
          </section>

          {/* Section 138 */}
          <section id="section-138" className="mb-12 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-navy mb-6 leading-snug">
              138. MODERN SLAVERY, WHERE APPROPRIATE
            </h2>
            <p className={clauseText}>
              <ClauseHeading num="138.1" /> Each party shall comply with
              applicable laws concerning modern slavery, human trafficking, forced
              labour and related exploitation to the extent those laws apply to
              its activities.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="138.2" /> The Customer must not knowingly use
              IMCAM Hub to facilitate or conceal conduct involving modern slavery,
              human trafficking, forced labour or unlawful exploitation.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="138.3" /> Where the nature and scale of a
              party&rsquo;s business requires particular modern-slavery policies,
              statements, due-diligence measures or supply-chain controls under
              applicable law, that party shall remain responsible for those
              obligations.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="138.4" /> e2e World&rsquo;s provision
              of software used to manage employees, workers or Candidates does not
              make e2e World responsible for the Customer&rsquo;s
              employment practices, recruitment arrangements, supply chain or
              treatment of individuals.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="138.5" /> Where credible information indicates
              that IMCAM Hub is being materially misused in connection with conduct
              prohibited by this Section, e2e World may take
              proportionate protective action, including restriction or suspension
              of affected access, subject to applicable law and Part 14.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="138.6" /> This Section applies only to the
              extent relevant to the parties and their activities and does not
              represent that a particular statutory reporting threshold or
              obligation necessarily applies to either party.
            </p>
          </section>

          {/* Section 139 */}
          <section id="section-139" className="mb-12 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-navy mb-6 leading-snug">
              139. SANCTIONS AND EXPORT CONTROLS, WHERE RELEVANT
            </h2>
            <p className={clauseText}>
              <ClauseHeading num="139.1" /> Each party shall comply with sanctions,
              trade restrictions and export-control laws applicable to its
              provision, receipt or use of IMCAM Hub.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="139.2" /> The Customer must not knowingly use
              IMCAM Hub in a manner that would cause e2e World to breach
              an applicable sanctions or export-control restriction.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="139.3" /> Where required by applicable law, e2e World may restrict access to IMCAM Hub, particular
              functionality, jurisdictions, users or transactions where continued
              provision would create a material sanctions or export-control risk.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="139.4" /> The Customer is responsible for
              conducting any sanctions screening or compliance assessment required
              for its own Clients, Candidates, employees, counterparties,
              transactions or professional activities.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="139.5" /> e2e World does not assume
              responsibility for determining whether a Customer&rsquo;s
              immigration, employment or commercial relationship with a particular
              person is lawful merely because that person&rsquo;s information can
              be entered into IMCAM Hub.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="139.6" /> Where a party is legally prohibited
              from providing information about a sanctions-related restriction,
              investigation or action, nothing in the Agreement requires that
              party to make the prohibited disclosure.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="139.7" /> This Section applies only to the
              extent that sanctions or export-control laws are relevant to the
              particular service, technology, jurisdiction, party or transaction.
            </p>
          </section>

          {/* Section 140 */}
          <section id="section-140" className="mb-4 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-navy mb-6 leading-snug">
              140. REGULATORY INVESTIGATIONS AND COOPERATION
            </h2>
            <p className={clauseText}>
              <ClauseHeading num="140.1" /> Each party shall be responsible for
              responding to regulatory, governmental or law-enforcement enquiries
              that relate to its own activities, responsibilities and legal
              obligations.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="140.2" /> Where a competent authority lawfully
              requires information or cooperation relating to IMCAM Hub, e2e World may provide information to the extent legally required or
              permitted, subject to applicable confidentiality, data protection
              and legal restrictions.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="140.3" /> Where legally permitted and reasonably
              practicable, e2e World shall notify the Customer before
              disclosing Customer Confidential Information or Customer Data in
              response to a compulsory request, unless the request relates to e2e World&rsquo;s own independent processing or notification
              is prohibited.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="140.4" /> Where an investigation or enquiry
              relates primarily to the Customer&rsquo;s immigration, sponsorship,
              employment, professional or regulatory activities, the Customer shall
              remain responsible for the substantive response and for obtaining
              its own legal or professional advice where appropriate.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="140.5" /> Where e2e World acts as
              processor, it shall provide reasonable assistance required by
              applicable Data Protection Legislation and the Data Processing
              Agreement in relation to a competent data protection authority.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="140.6" /> The Customer shall provide reasonable
              cooperation where an investigation concerns suspected misuse of
              IMCAM Hub, a security incident, unlawful Customer activity or another
              matter for which information within the Customer&rsquo;s control is
              reasonably required.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="140.7" /> Neither party is required to disclose
              legally privileged material, another person&rsquo;s Confidential
              Information without lawful authority, security-sensitive information
              beyond what is legally required, or information whose disclosure is
              prohibited by law.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="140.8" /> Each party shall bear its own ordinary
              costs of responding to an investigation concerning its own
              compliance. Where one party requests substantial assistance
              concerning a matter attributable primarily to that party, any
              reasonable additional costs shall be dealt with as agreed between
              the parties, except where applicable law requires assistance without
              charge.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="140.9" /> A regulatory enquiry, request for
              information or investigation does not by itself establish that
              either party has breached the Agreement or applicable law.
            </p>
          </section>

          <PartHeading num="18" title="Changes to IMCAM Hub & Agreement" />

          {/* Section 141 */}
          <section id="section-141" className="mb-12 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-navy mb-6 leading-snug">
              141. CHANGES TO THE SOFTWARE
            </h2>
            <p className={clauseText}>
              <ClauseHeading num="141.1" /> e2e World may update,
              modify, improve, replace or otherwise develop IMCAM Hub from time to
              time in order to maintain, secure, support or improve the Software
              and the services provided through it.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="141.2" /> Changes may include modifications to:
            </p>
            <ul className="pl-6 sm:pl-10 space-y-2 mb-4">
              <li className={listItemText}>
                <ClauseHeading num="a." /> the technical architecture,
                infrastructure or hosting arrangements;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="b." /> user interfaces, layouts and
                navigation;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="c." /> workflows, processes and
                administrative functionality;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="d." /> security, authentication and
                access-control measures;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="e." /> performance, capacity, reliability
                and resilience;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="f." /> integrations, APIs and Third-Party
                Services;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="g." /> document, communication, notification
                and reporting functionality;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="h." /> technical dependencies and software
                components; and
              </li>
              <li className={listItemText}>
                <ClauseHeading num="i." /> other aspects of IMCAM Hub reasonably
                connected with its operation or development.
              </li>
            </ul>
            <p className={clauseText}>
              <ClauseHeading num="141.3" /> e2e World may implement
              changes without prior Customer approval where the change does not
              materially reduce the Customer&rsquo;s contracted core functionality
              or where the change is reasonably necessary for security, legal
              compliance, technical stability, maintenance or protection of the
              service.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="141.4" /> The Customer acknowledges that a SaaS
              platform is expected to evolve and that the appearance, technical
              implementation and detailed operation of IMCAM Hub may therefore
              change during a Subscription Period.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="141.5" /> e2e World shall not be
              required to maintain a particular technical architecture, software
              component, hosting provider, interface design or internal method of
              delivering functionality unless this has been expressly agreed in
              writing.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="141.6" /> Changes under this Section remain
              subject to any specific commitments contained in an applicable Order
              Form, Service Level Agreement, Data Processing Agreement or other
              document having priority under Part 1.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="141.7" /> This Section supplements Section 11.
              Section 11 governs the general right to update and develop the
              Software, while this Part addresses how material changes and related
              contractual changes are managed.
            </p>
          </section>

          {/* Section 142 */}
          <section id="section-142" className="mb-12 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-navy mb-6 leading-snug">
              142. CHANGES TO FEATURES
            </h2>
            <p className={clauseText}>
              <ClauseHeading num="142.1" /> e2e World may add, enhance,
              modify, replace, reorganise or discontinue individual features of
              IMCAM Hub as the Software develops.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="142.2" /> A feature may be changed because of
              customer feedback, technical development, security requirements,
              legal or regulatory changes, third-party dependencies, usage
              patterns, product strategy or other legitimate operational or
              commercial reasons.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="142.3" /> New functionality may be introduced as
              part of an existing Subscription or may be made available only
              through a different plan, module, usage allowance or additional paid
              service.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="142.4" /> Where e2e World proposes
              permanently to remove or materially reduce a feature that forms a
              significant part of the core paid functionality expressly included
              in the Customer&rsquo;s Subscription, e2e World shall,
              where reasonably practicable:
            </p>
            <ul className="pl-6 sm:pl-10 space-y-2 mb-4">
              <li className={listItemText}>
                <ClauseHeading num="a." /> give reasonable advance notice;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="b." /> consider whether materially equivalent
                functionality or a reasonable alternative can be provided;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="c." /> provide reasonable information about
                the effect of the change; and
              </li>
              <li className={listItemText}>
                <ClauseHeading num="d." /> where the change materially undermines
                the contracted service and no reasonable alternative is available,
                consider an appropriate transition, commercial adjustment or
                termination right having regard to the circumstances.
              </li>
            </ul>
            <p className={clauseText}>
              <ClauseHeading num="142.5" /> Clause 142.4 does not require advance
              notice where urgent removal or restriction is reasonably necessary
              because of security, law, regulatory requirements, infringement
              concerns or a Third-Party Service event outside e2e World&rsquo;s reasonable control.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="142.6" /> The Customer is responsible for
              reviewing material feature-change notices and adapting its internal
              procedures where reasonably necessary.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="142.7" /> A roadmap, proposed feature,
              demonstration or statement concerning future development does not
              create a binding obligation to deliver that feature unless it is
              expressly incorporated into the Agreement.
            </p>
          </section>

          {/* Section 143 */}
          <section id="section-143" className="mb-12 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-navy mb-6 leading-snug">
              143. CHANGES TO IMMIGRATION CONTENT
            </h2>
            <p className={clauseText}>
              <ClauseHeading num="143.1" /> IMCAM Hub may contain or support
              workflows, templates, checklists, reminders, administrative
              information, document structures or other content connected with
              United Kingdom immigration and sponsorship processes.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="143.2" /> Immigration law, the Immigration
              Rules, Home Office and UKVI policy, guidance, forms, fees,
              evidential requirements, sponsorship procedures and operational
              practices may change at short notice.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="143.3" /> e2e World may update,
              replace, withdraw or amend immigration-related content within
              IMCAM Hub in response to such changes or where it otherwise considers
              an update appropriate.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="143.4" /> e2e World does not warrant
              that every external immigration change will be identified or
              reflected within IMCAM Hub immediately, simultaneously with
              publication or before the change takes legal or operational effect.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="143.5" /> The Customer remains responsible for
              checking current authoritative law, rules, guidance, forms, fees,
              requirements and deadlines before relying on immigration-related
              content for a Case.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="143.6" /> A change to a workflow, checklist,
              template, reminder or other immigration-related feature does not
              itself constitute immigration or legal advice and does not determine
              the correct course of action for an individual Case.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="143.7" /> Where a material change in immigration
              requirements makes existing Software content inaccurate or
              unsuitable, e2e World may disable or restrict the affected
              content while it is reviewed or updated.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="143.8" /> Historical Case records need not be
              retrospectively altered merely because immigration law, policy,
              guidance or Software content subsequently changes, unless alteration
              is required by law or necessary to correct a Software error.
            </p>
          </section>

          {/* Section 144 */}
          <section id="section-144" className="mb-12 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-navy mb-6 leading-snug">
              144. CHANGES TO THESE TERMS
            </h2>
            <p className={clauseText}>
              <ClauseHeading num="144.1" /> e2e World may amend these
              Terms from time to time where reasonably necessary to reflect
              changes in IMCAM Hub, applicable law, regulatory requirements,
              security practices, Third-Party Services, commercial arrangements or
              the way in which the service is provided.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="144.2" /> e2e World may make
              non-material changes, corrections or clarifications that do not
              materially reduce the Customer&rsquo;s contractual rights without
              requiring the Customer to enter into a new agreement.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="144.3" /> Where a proposed change materially
              affects the Customer&rsquo;s rights or obligations under an existing
              Subscription, e2e World shall provide reasonable notice in
              accordance with Section 145 before the change takes effect, unless
              an earlier change is reasonably required by law, regulation, security
              or another urgent circumstance.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="144.4" /> A material change shall not
              retrospectively alter rights or liabilities that accrued before the
              effective date of the change unless the parties expressly agree
              otherwise or applicable law requires it.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="144.5" /> Where a material contractual change is
              not required by law or an urgent security matter and materially
              disadvantages the Customer during an existing committed Subscription
              Period, the notice may identify any applicable right to terminate
              the affected Subscription before the change takes effect.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="144.6" /> Continued use of IMCAM Hub after the
              effective date of properly notified amended Terms may constitute
              acceptance of those Terms where this is lawful and the Customer has
              been clearly informed of the change and its effective date.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="144.7" /> Where applicable law, the nature of
              the amendment or an agreed contracting process requires express
              acceptance, e2e World may require the Customer to accept
              the updated Terms electronically or in writing before continued use.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="144.8" /> Changes to an Order Form, Data
              Processing Agreement, Service Level Agreement or other separately
              agreed document shall be made in accordance with the amendment
              provisions applicable to that document and the order-of-precedence
              provisions in Part 1.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="144.9" /> The version of the Terms applicable at
              a particular time may be identified by an effective date or version
              date maintained by e2e World.
            </p>
          </section>

          {/* Section 145 */}
          <section id="section-145" className="mb-4 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-navy mb-6 leading-snug">
              145. NOTIFICATION OF MATERIAL CHANGES
            </h2>
            <p className={clauseText}>
              <ClauseHeading num="145.1" /> Where this Agreement requires notice of
              a material change, e2e World shall provide notice by a
              reasonable method designed to bring the change to the attention of
              the Customer.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="145.2" /> Notice may be given by:
            </p>
            <ul className="pl-6 sm:pl-10 space-y-2 mb-4">
              <li className={listItemText}>
                <ClauseHeading num="a." /> email to the Customer&rsquo;s
                registered or nominated administrative contact;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="b." /> a prominent notice within IMCAM Hub;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="c." /> an account or subscription
                notification;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="d." /> a service-status or support
                communication where appropriate; or
              </li>
              <li className={listItemText}>
                <ClauseHeading num="e." /> another method permitted by the notices
                provisions of this Agreement.
              </li>
            </ul>
            <p className={clauseText}>
              <ClauseHeading num="145.3" /> A material-change notice should, where
              reasonably practicable, identify the nature of the change, the
              intended effective date and any action reasonably required from the
              Customer.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="145.4" /> The amount of advance notice shall
              depend on the nature and impact of the change. e2e World
              shall seek to provide reasonable advance notice where practicable
              but may implement a change more quickly where necessary for law,
              regulation, security, prevention of harm, technical integrity or
              circumstances outside its reasonable control.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="145.5" /> The Customer is responsible for
              maintaining current administrative contact details and for ensuring
              that appropriate personnel review notices relating to the
              Subscription.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="145.6" /> Failure by the Customer to read a
              notice that has been properly sent or made available does not
              prevent the change from taking effect, provided that e2e World has complied with the notice requirements applicable under
              the Agreement and law.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="145.7" /> Where a material change gives the
              Customer an express cancellation or termination right, the relevant
              notice shall identify or refer to that right and any reasonable
              period within which it must be exercised.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="145.8" /> Nothing in this Section permits e2e World to avoid a requirement for specific consent,
              agreement or notice where applicable law or another binding
              provision of the Agreement requires it.
            </p>
          </section>

          <PartHeading num="19" title="General Contractual Provisions" />

          {/* Section 146 */}
          <section id="section-146" className="mb-12 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-navy mb-6 leading-snug">
              146. FORCE MAJEURE
            </h2>
            <p className={clauseText}>
              <ClauseHeading num="146.1" /> Neither party shall be in breach of
              the Agreement, nor liable for delay in performing or failure to
              perform an obligation under the Agreement, to the extent that the
              delay or failure results from an event, circumstance or cause beyond
              that party&rsquo;s reasonable control.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="146.2" /> A force majeure event may include,
              where beyond the affected party&rsquo;s reasonable control:
            </p>
            <ul className="pl-6 sm:pl-10 space-y-2 mb-4">
              <li className={listItemText}>
                <ClauseHeading num="a." /> natural disaster, flood, fire,
                earthquake, severe weather or other physical emergency;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="b." /> epidemic, pandemic or public-health
                emergency;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="c." /> war, armed conflict, terrorism, civil
                unrest, riot or governmental action;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="d." /> failure or material disruption of
                electricity, telecommunications, internet or public
                infrastructure;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="e." /> widespread cyberattack or malicious
                activity that could not reasonably have been prevented by
                compliance with the affected party&rsquo;s contractual security
                obligations;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="f." /> material failure of a Third-Party
                Service or infrastructure provider where the affected party has
                taken reasonable steps to manage the dependency;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="g." /> industrial dispute not limited solely
                to the affected party&rsquo;s own workforce;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="h." /> legal, regulatory, governmental or
                court action preventing performance; or
              </li>
              <li className={listItemText}>
                <ClauseHeading num="i." /> another event outside the affected
                party&rsquo;s reasonable control that materially prevents
                performance.
              </li>
            </ul>
            <p className={clauseText}>
              <ClauseHeading num="146.3" /> The affected party shall use
              reasonable efforts to mitigate the effect of the force majeure event
              and resume performance as soon as reasonably practicable.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="146.4" /> Where reasonably practicable, the
              affected party shall notify the other party of a material force
              majeure event, its expected effect on performance and any significant
              change in those circumstances.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="146.5" /> A force majeure event does not excuse
              the Customer from paying Fees that became due for services properly
              provided before the event.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="146.6" /> A party may not rely on force majeure
              to the extent that the relevant delay or failure was caused by its
              own breach, negligence or failure to take reasonable precautions that
              were required under the Agreement.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="146.7" /> If a force majeure event continues for
              a prolonged period and materially prevents the principal purpose of
              the affected service, either party may exercise any termination right
              expressly provided in the applicable Order Form or otherwise agreed
              between the parties. In the absence of a specific period, the parties
              shall discuss reasonable continuity or termination arrangements in
              good faith.
            </p>
          </section>

          {/* Section 147 */}
          <section id="section-147" className="mb-12 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-navy mb-6 leading-snug">
              147. NOTICES
            </h2>
            <p className={clauseText}>
              <ClauseHeading num="147.1" /> A formal notice under the Agreement
              shall be given in writing and sent to the contact details or
              notification channel specified in the applicable Order Form, account
              records or other agreed contractual documentation.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="147.2" /> Formal notices may be delivered by
              email, prepaid post, recognised courier or another method expressly
              agreed between the parties.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="147.3" /> Operational communications, support
              messages, service-status updates, maintenance notices, billing
              communications and in-platform notifications are not required to
              follow the formal notice procedure unless the Agreement expressly
              states that formal notice is required.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="147.4" /> A notice sent by email shall be
              treated as received when it is successfully transmitted to the
              designated email address without an automated delivery-failure
              notification, provided that a notice sent outside normal business
              hours may be treated as received on the next Business Day where this
              is relevant to a contractual time period.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="147.5" /> A notice sent by prepaid post or
              courier shall be treated as received in accordance with the delivery
              evidence and applicable law, unless actual earlier receipt is
              established.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="147.6" /> Each party is responsible for keeping
              its contractual and administrative contact details current and shall
              notify the other party of a material change to those details.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="147.7" /> This Section does not apply to the
              service of court proceedings or other documents in legal proceedings
              where applicable procedural rules require a different method.
            </p>
          </section>

          {/* Section 148 */}
          <section id="section-148" className="mb-12 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-navy mb-6 leading-snug">
              148. ASSIGNMENT
            </h2>
            <p className={clauseText}>
              <ClauseHeading num="148.1" /> The Customer shall not assign,
              transfer, novate, charge or otherwise dispose of the Agreement or a
              material right under it without e2e World&rsquo;s prior
              written consent, such consent not to be unreasonably withheld or
              delayed where the proposed transfer does not materially increase e2e World&rsquo;s legal, security, credit or operational risk.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="148.2" /> e2e World may assign,
              transfer or novate the Agreement to an Affiliate, successor or
              purchaser of the business or assets to which IMCAM Hub relates,
              provided that the transfer does not materially reduce the
              Customer&rsquo;s contractual rights and the recipient assumes the
              relevant obligations.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="148.3" /> Where applicable law or the nature of
              a transfer requires the Customer&rsquo;s consent to a novation or
              other transfer, the parties shall cooperate reasonably to document
              the transfer.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="148.4" /> Any purported assignment or transfer
              made in breach of this Section shall have no contractual effect to
              the extent permitted by applicable law.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="148.5" /> An assignment or transfer does not
              release liabilities that accrued before the effective transfer unless
              the parties expressly agree otherwise.
            </p>
          </section>

          {/* Section 149 */}
          <section id="section-149" className="mb-12 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-navy mb-6 leading-snug">
              149. SUBCONTRACTING
            </h2>
            <p className={clauseText}>
              <ClauseHeading num="149.1" /> e2e World may use
              subcontractors and service providers to perform parts of its
              obligations under the Agreement, including technical, hosting,
              support, communications, security and other operational functions.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="149.2" /> Use of a subcontractor does not
              relieve e2e World of responsibility for obligations that
              the Agreement places on e2e World, except to the extent the
              Agreement expressly allocates risk for independent Third-Party
              Services.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="149.3" /> Where a subcontractor processes
              Personal Data on behalf of e2e World as a processor, the
              appointment and use of that subcontractor shall be governed by Part 8
              and the applicable Data Processing Agreement.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="149.4" /> e2e World shall ensure that
              subcontractors are subject to contractual obligations appropriate to
              the services they perform, including confidentiality and security
              obligations where relevant.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="149.5" /> The Customer may use its own
              contractors in connection with IMCAM Hub, but remains responsible for
              their authorised use of the Software and compliance with the Agreement
              as if they were its other Authorised Users.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="149.6" /> Nothing in this Section permits either
              party to subcontract a responsibility that applicable law requires
              that party to perform personally or through a specifically authorised
              person.
            </p>
          </section>

          {/* Section 150 */}
          <section id="section-150" className="mb-12 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-navy mb-6 leading-snug">
              150. CHANGE OF CONTROL
            </h2>
            <p className={clauseText}>
              <ClauseHeading num="150.1" /> A change in ownership or control of
              either party does not automatically terminate the Agreement.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="150.2" /> Where a change of control materially
              affects the identity, legal status, security risk, regulatory
              position or ability of a party to perform the Agreement, that party
              shall provide reasonable information to the other party where legally
              permitted and materially relevant.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="150.3" /> e2e World may transfer the
              Agreement as part of a merger, reorganisation, sale of business or
              similar transaction in accordance with Section 148.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="150.4" /> Where the Customer undergoes a change
              of control, e2e World may reasonably review the
              Customer&rsquo;s account, billing, access, data-protection and
              security arrangements to ensure that continued provision of IMCAM Hub
              remains lawful and operationally appropriate.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="150.5" /> A change of control shall not permit
              either party to access, disclose or transfer Customer Data contrary
              to the Agreement or Data Protection Legislation.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="150.6" /> Any specific termination right arising
              from a change of control must be expressly stated in an Order Form or
              other written agreement; no automatic termination right is created by
              this Section alone.
            </p>
          </section>

          {/* Section 151 */}
          <section id="section-151" className="mb-12 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-navy mb-6 leading-snug">
              151. ENTIRE AGREEMENT
            </h2>
            <p className={clauseText}>
              <ClauseHeading num="151.1" /> The Agreement constitutes the entire
              agreement between the parties concerning the Customer&rsquo;s
              Subscription to and use of IMCAM Hub and supersedes previous
              discussions, correspondence, proposals, representations and
              understandings relating to the same subject matter.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="151.2" /> The documents forming the Agreement
              and their order of precedence are determined in accordance with Part
              1.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="151.3" /> Each party acknowledges that, in
              entering into the Agreement, it does not rely on a statement,
              representation, assurance or warranty that is not expressly set out
              in the Agreement, except that nothing in this Section excludes
              liability for fraud or fraudulent misrepresentation.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="151.4" /> Marketing material, demonstrations,
              presentations, roadmaps and informal communications do not form part
              of the Agreement unless expressly incorporated into an Order Form or
              other binding contractual document.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="151.5" /> Nothing in this Section prevents the
              parties from entering into separate agreements for professional
              services, implementation, consultancy or other services, which shall
              be governed by their own terms.
            </p>
          </section>

          {/* Section 152 */}
          <section id="section-152" className="mb-12 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-navy mb-6 leading-snug">
              152. VARIATION
            </h2>
            <p className={clauseText}>
              <ClauseHeading num="152.1" /> Except where the Agreement expressly
              permits e2e World to make a change under Part 18 or another
              specified provision, a variation of the Agreement shall be effective
              only if agreed by authorised representatives of the parties in
              writing or through an agreed electronic contracting process.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="152.2" /> A variation may be documented through
              an amended Order Form, written amendment, electronic acceptance,
              updated Subscription confirmation or another method that clearly
              records the parties&rsquo; agreement.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="152.3" /> An oral statement or informal
              communication shall not vary the Agreement unless subsequently
              recorded and accepted through an authorised contractual process.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="152.4" /> A change to operational procedures,
              support contacts, technical instructions or other administrative
              matters that does not alter the parties&rsquo; substantive
              contractual rights need not be treated as a formal variation.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="152.5" /> Where a variation affects Personal
              Data processing, the parties shall also make any corresponding
              amendment required to the Data Processing Agreement or other data
              protection documentation.
            </p>
          </section>

          {/* Section 153 */}
          <section id="section-153" className="mb-12 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-navy mb-6 leading-snug">
              153. WAIVER
            </h2>
            <p className={clauseText}>
              <ClauseHeading num="153.1" /> A failure or delay by a party to
              exercise a right or remedy under the Agreement does not constitute a
              waiver of that or any other right or remedy.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="153.2" /> A single or partial exercise of a
              right or remedy does not prevent any further exercise of that right
              or remedy or the exercise of another right or remedy.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="153.3" /> A waiver is effective only to the
              extent expressly given and shall not be treated as a continuing
              waiver unless it expressly states otherwise.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="153.4" /> Acceptance of late payment, delayed
              performance or another departure from the Agreement on one occasion
              does not require a party to accept the same departure on a later
              occasion.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="153.5" /> The rights and remedies provided by
              the Agreement are cumulative with rights and remedies provided by law
              except where the Agreement expressly states otherwise and such
              restriction is lawful.
            </p>
          </section>

          {/* Section 154 */}
          <section id="section-154" className="mb-12 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-navy mb-6 leading-snug">
              154. SEVERABILITY
            </h2>
            <p className={clauseText}>
              <ClauseHeading num="154.1" /> If a provision or part of a provision
              of the Agreement is found by a court or competent authority to be
              invalid, illegal or unenforceable, the remaining provisions shall
              continue in full force to the extent legally possible.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="154.2" /> Where an invalid, illegal or
              unenforceable provision could become valid and enforceable by
              deleting or modifying part of it, the provision shall be treated as
              modified to the minimum extent necessary to give effect, so far as
              lawful, to the parties&rsquo; original commercial intention.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="154.3" /> If such modification cannot reasonably
              preserve the intended effect, the parties shall seek in good faith to
              replace the affected provision with a lawful provision that most
              closely reflects the original purpose.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="154.4" /> The invalidity or unenforceability of
              a provision in one jurisdiction does not necessarily affect its
              validity or enforceability in another jurisdiction.
            </p>
          </section>

          {/* Section 155 */}
          <section id="section-155" className="mb-12 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-navy mb-6 leading-snug">
              155. NO PARTNERSHIP OR AGENCY
            </h2>
            <p className={clauseText}>
              <ClauseHeading num="155.1" /> Nothing in the Agreement creates a
              partnership, joint venture or fiduciary relationship between e2e World and the Customer.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="155.2" /> Neither party has authority to bind
              the other, enter into a contract on the other&rsquo;s behalf, incur
              liability for the other or make a representation as the
              other&rsquo;s agent unless expressly authorised in writing.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="155.3" /> The Customer&rsquo;s use of IMCAM Hub
              to communicate with Candidates, Clients, Businesses, employees or
              other persons does not make e2e World a party to the
              Customer&rsquo;s relationship with those persons.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="155.4" /> The availability of a Candidate
              Portal, Business Portal or other user-facing functionality does not
              make e2e World the employer, sponsor, immigration
              representative, legal representative or professional adviser of the
              relevant user merely by virtue of providing the Software.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="155.5" /> Any separate agency, representation or
              professional-services relationship must be created by an express
              separate agreement and shall not be inferred from the SaaS
              Subscription.
            </p>
          </section>

          {/* Section 156 */}
          <section id="section-156" className="mb-12 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-navy mb-6 leading-snug">
              156. THIRD-PARTY RIGHTS
            </h2>
            <p className={clauseText}>
              <ClauseHeading num="156.1" /> Except where the Agreement expressly
              states otherwise, a person who is not a party to the Agreement shall
              have no right to enforce a term of the Agreement under the Contracts
              (Rights of Third Parties) Act 1999.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="156.2" /> An Authorised User, Candidate,
              employee, Caseworker, Business user, Client or other person given
              access to IMCAM Hub does not become a party to the Agreement merely
              because the Agreement contains provisions concerning that
              person&rsquo;s use or data.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="156.3" /> The parties may vary, terminate,
              rescind or settle the Agreement without the consent of a third party
              unless an express provision grants that third party an enforceable
              right and requires its consent.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="156.4" /> Nothing in this Section affects any
              right or remedy a third party may have independently of the Contracts
              (Rights of Third Parties) Act 1999.
            </p>
          </section>

          {/* Section 157 */}
          <section id="section-157" className="mb-12 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-navy mb-6 leading-snug">
              157. RELATIONSHIP BETWEEN THE PARTIES
            </h2>
            <p className={clauseText}>
              <ClauseHeading num="157.1" /> e2e World supplies IMCAM Hub
              to the Customer as an independent contracting party.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="157.2" /> The Customer retains control of its
              business, professional services, personnel, Clients, Candidates,
              employees, Cases, sponsorship activities and decisions made using
              information managed through IMCAM Hub.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="157.3" /> Except where a separate written
              agreement expressly provides otherwise, e2e World does not
              manage the Customer&rsquo;s immigration practice, supervise its
              Caseworkers, act as its employer, make its professional decisions or
              assume responsibility for its Clients or Candidates.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="157.4" /> The Customer determines which
              Authorised Users may access its account and the purposes for which
              the Customer uses the Software, subject to the Agreement.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="157.5" /> The parties&rsquo; respective roles in
              relation to Personal Data are determined by Part 8, the Data
              Processing Agreement and the actual purposes and means of the relevant
              processing, rather than by this general relationship clause.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="157.6" /> Nothing in the Agreement creates
              exclusivity unless an Order Form or separate written agreement
              expressly provides otherwise.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="157.7" /> Each party is responsible for its own
              personnel, taxes, insurance, licences, regulatory obligations and
              business expenses except where the Agreement expressly allocates a
              particular responsibility differently.
            </p>
          </section>

          {/* Section 158 */}
          <section id="section-158" className="mb-4 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-navy mb-6 leading-snug">
              158. FURTHER ASSURANCE
            </h2>
            <p className={clauseText}>
              <ClauseHeading num="158.1" /> Each party shall, at the reasonable
              request of the other, execute documents and take reasonable steps
              that are necessary to give practical effect to the Agreement and the
              rights and obligations expressly created by it.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="158.2" /> A request under this Section must be
              consistent with the Agreement and applicable law and must not require
              a party to accept a material new obligation that was not contemplated
              by the Agreement.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="158.3" /> Further assurance may include
              reasonable cooperation to document an agreed assignment or novation,
              implement a required data protection arrangement, confirm an
              authorised contractual change or complete another administrative step
              necessary to give effect to an existing obligation.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="158.4" /> Unless the need for additional action
              results from a party&rsquo;s breach, each party shall ordinarily bear
              its own internal costs of providing routine further assurance.
              Material external costs shall be dealt with as agreed between the
              parties.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="158.5" /> Nothing in this Section requires a
              party to disclose legally privileged information, breach
              confidentiality owed to another person, compromise security or
              perform an unlawful act.
            </p>
          </section>

          <PartHeading num="20" title="Governing Law & Disputes" />

          {/* Section 159 */}
          <section id="section-159" className="mb-12 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-navy mb-6 leading-snug">
              159. COMPLAINTS
            </h2>
            <p className={clauseText}>
              <ClauseHeading num="159.1" /> If the Customer is dissatisfied with
              IMCAM Hub or with e2e World&rsquo;s performance of the
              Agreement, the Customer should raise the matter with e2e World as soon as reasonably practicable so that the issue can be
              reviewed and, where appropriate, addressed.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="159.2" /> A complaint should contain sufficient
              information to allow e2e World to understand and
              investigate the matter, including, where relevant:
            </p>
            <ul className="pl-6 sm:pl-10 space-y-2 mb-4">
              <li className={listItemText}>
                <ClauseHeading num="a." /> the Customer&rsquo;s name and relevant
                account or Subscription details;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="b." /> a clear description of the issue;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="c." /> the relevant date or period;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="d." /> the affected functionality, Case, user
                or service, where appropriate;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="e." /> any relevant supporting information;
                and
              </li>
              <li className={listItemText}>
                <ClauseHeading num="f." /> the outcome or resolution sought by
                the Customer.
              </li>
            </ul>
            <p className={clauseText}>
              <ClauseHeading num="159.3" /> The Customer should avoid including
              unnecessary Personal Data, special category data or confidential
              immigration information in a complaint where the issue can be
              investigated without it.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="159.4" /> e2e World shall acknowledge
              and investigate complaints within a reasonable period, taking into
              account the nature, seriousness and complexity of the matter.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="159.5" /> e2e World may request
              further information or reasonable cooperation from the Customer where
              necessary to investigate or resolve a complaint.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="159.6" /> A technical support request, service
              incident or security report may be handled through the applicable
              support or security process rather than the general complaints
              process where that is the more appropriate route.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="159.7" /> A complaint concerning separate
              immigration, legal or other professional services provided under a
              separate engagement shall be dealt with under the complaints
              procedure applicable to those professional services and not solely
              under this SaaS Agreement.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="159.8" /> Nothing in this Section requires e2e World to identify itself as subject to a particular
              professional regulator or external complaints scheme unless that
              status and scheme are applicable to the relevant service.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="159.9" /> Making a complaint does not suspend
              the Customer&rsquo;s obligation to pay undisputed Fees or comply with
              the Agreement while the complaint is being considered.
            </p>
          </section>

          {/* Section 160 */}
          <section id="section-160" className="mb-12 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-navy mb-6 leading-snug">
              160. DISPUTE RESOLUTION
            </h2>
            <p className={clauseText}>
              <ClauseHeading num="160.1" /> The parties shall seek to resolve a
              dispute arising out of or in connection with the Agreement in good
              faith and, where appropriate, without commencing formal court
              proceedings unnecessarily.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="160.2" /> A party raising a material contractual
              dispute should provide written notice summarising the nature of the
              dispute, the relevant facts and the resolution sought.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="160.3" /> Following receipt of a dispute notice,
              appropriate representatives of the parties shall use reasonable
              efforts to discuss the matter and seek a practical resolution.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="160.4" /> If the dispute is not resolved through
              the initial discussions, either party may request that it be
              escalated to a director, senior manager or other authorised senior
              representative of each party.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="160.5" /> The parties may agree to use mediation
              or another form of alternative dispute resolution where they consider
              it appropriate. Unless otherwise agreed, neither party is obliged to
              accept a particular mediator or settlement proposal.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="160.6" /> Nothing in this Section prevents
              either party from:
            </p>
            <ul className="pl-6 sm:pl-10 space-y-2 mb-4">
              <li className={listItemText}>
                <ClauseHeading num="a." /> seeking urgent interim, injunctive or
                protective relief from a court;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="b." /> taking action where necessary to
                protect Confidential Information, Intellectual Property Rights,
                Personal Data, systems or security;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="c." /> pursuing recovery of an undisputed
                debt;
              </li>
              <li className={listItemText}>
                <ClauseHeading num="d." /> complying with a statutory, regulatory
                or court deadline; or
              </li>
              <li className={listItemText}>
                <ClauseHeading num="e." /> commencing proceedings where delay
                would materially prejudice its legal rights.
              </li>
            </ul>
            <p className={clauseText}>
              <ClauseHeading num="160.7" /> Discussions and settlement
              communications made as part of a genuine attempt to resolve a dispute
              shall be treated in accordance with applicable legal principles
              concerning without-prejudice communications where those principles
              apply.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="160.8" /> Unless the parties agree otherwise,
              each party shall bear its own costs of informal dispute resolution or
              escalation. Costs of mediation or another jointly appointed neutral
              may be shared as agreed.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="160.9" /> If the dispute cannot be resolved,
              either party may pursue the remedies available under the Agreement
              and the courts having jurisdiction under Section 162.
            </p>
          </section>

          {/* Section 161 */}
          <section id="section-161" className="mb-12 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-navy mb-6 leading-snug">
              161. GOVERNING LAW
            </h2>
            <p className={clauseText}>
              <ClauseHeading num="161.1" /> The Agreement and any dispute or claim
              arising out of or in connection with it, its subject matter or
              formation, including non-contractual disputes or claims, shall be
              governed by and construed in accordance with the law of England and
              Wales.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="161.2" /> The governing law stated in clause
              161.1 applies to the contractual relationship between e2e World and the Customer, subject to any mandatory law that applies
              irrespective of the parties&rsquo; contractual choice of law.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="161.3" /> The application of the United Nations
              Convention on Contracts for the International Sale of Goods is
              excluded to the extent that it might otherwise apply.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="161.4" /> Where a separate agreement for
              professional, consultancy, implementation or other services contains
              its own governing-law provision, that provision shall govern that
              separate agreement unless the parties expressly agree otherwise.
            </p>
          </section>

          {/* Section 162 */}
          <section id="section-162" className="mb-4 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-navy mb-6 leading-snug">
              162. JURISDICTION
            </h2>
            <p className={clauseText}>
              <ClauseHeading num="162.1" /> Subject to Section 160 and any
              mandatory rule of law, the courts of England and Wales shall have
              exclusive jurisdiction to settle any dispute or claim arising out of
              or in connection with the Agreement, its subject matter or formation,
              including non-contractual disputes or claims.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="162.2" /> Nothing in clause 162.1 prevents a
              party from seeking urgent interim or protective relief in another
              court of competent jurisdiction where such relief is reasonably
              necessary to protect its rights, assets, Confidential Information,
              Intellectual Property Rights, Personal Data or systems.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="162.3" /> Nothing in this Section limits the
              jurisdiction, investigatory powers or enforcement powers of a
              regulator, supervisory authority, governmental body or other competent
              authority where those powers arise under applicable law.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="162.4" /> The parties acknowledge that the
              Agreement is intended primarily for business customers and that this
              jurisdiction clause forms part of the agreed B2B contractual
              framework.
            </p>
            <p className={clauseText}>
              <ClauseHeading num="162.5" /> Where a mandatory law gives a party a
              right to bring proceedings in another forum that cannot validly be
              excluded by contract, this Section shall operate subject to that
              mandatory right.
            </p>
          </section>
        </div>
      </section>
    </div>
  );
}