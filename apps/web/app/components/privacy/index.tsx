import React from "react";
import { ContainerLayout, Header, Text } from "@seampass/ui";

const Privacy = () => {
  return (
    <section>
      <ContainerLayout>
        <div className="max-w-4xl mx-auto">
          <Header
            size="xl"
            weight="bold"
            variant="primary-100"
            alignment="center"
            className="mb-4"
          >
            Privacy Policy
          </Header>

          <div className="bg-white rounded-lg shadow-sm p-8 space-y-8">
            {/* Last Updated */}
            <div className="text-center">
              <Text size="sm" variant="secondary" className="italic">
                Last updated: {new Date().toLocaleDateString()}
              </Text>
            </div>

            {/* Introduction */}
            <div>
              <Header size="lg" weight="semibold" className="mb-2">
                Introduction
              </Header>
              <Text size="md" className="mb-2">
                SeamPass is committed to protecting your privacy. This Privacy
                Policy explains how our password generator extension and web
                application handle your information.
              </Text>
            </div>

            {/* Data Collection */}
            <div>
              <Header size="lg" weight="semibold" className="mb-2">
                Data Collection
              </Header>
              <Text size="md" className="mb-2">
                SeamPass collects minimal, anonymous usage analytics to improve
                our services:
              </Text>
              <ul className="list-disc pl-6 space-y-2 mb-2">
                <li>
                  <Text size="md">
                    Extension usage events (popup opens, password generation)
                  </Text>
                </li>
                <li>
                  <Text size="md">
                    Password type preferences (random vs memorable)
                  </Text>
                </li>
                <li>
                  <Text size="md">
                    Anonymous password strength analysis results
                  </Text>
                </li>
                <li>
                  <Text size="md">Feature usage statistics</Text>
                </li>
              </ul>
            </div>

            {/* What We Don't Collect */}
            <div>
              <Header size="lg" weight="semibold" className="mb-2">
                What We Don't Collect
              </Header>
              <Text size="md" className="mb-2">
                SeamPass is designed with privacy in mind. We do NOT collect:
              </Text>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <Text size="md">Generated passwords</Text>
                </li>
                <li>
                  <Text size="md">
                    Personal information (name, email, etc.)
                  </Text>
                </li>
                <li>
                  <Text size="md">Browsing history or website data</Text>
                </li>
                <li>
                  <Text size="md">Any personally identifiable information</Text>
                </li>
              </ul>
            </div>

            {/* Local Processing */}
            <div>
              <Header size="lg" weight="semibold" className="mb-2">
                Local Processing
              </Header>
              <Text size="md" className="mb-2">
                All password generation happens locally in your browser or
                extension. Passwords are never transmitted to our servers or
                stored anywhere except your local clipboard when you copy them.
              </Text>
            </div>

            {/* Analytics */}
            <div>
              <Header size="lg" weight="semibold" className="mb-2">
                Analytics
              </Header>
              <Text size="md" className="mb-2">
                We use Google Analytics to understand how our application is
                used. This helps us:
              </Text>
              <ul className="list-disc pl-6 space-y-2 mb-2">
                <li>
                  <Text size="md">Improve user experience</Text>
                </li>
                <li>
                  <Text size="md">Identify popular features</Text>
                </li>
                <li>
                  <Text size="md">Fix bugs and issues</Text>
                </li>
              </ul>
              <Text size="md">
                All analytics data is anonymized and aggregated. No individual
                user activity can be identified.
              </Text>
            </div>

            {/* Data Security */}
            <div>
              <Header size="lg" weight="semibold" className="mb-2">
                Data Security
              </Header>
              <Text size="md">
                We implement appropriate security measures to protect any
                information we collect. However, since we don't store passwords
                or personal data, your most sensitive information never leaves
                your device.
              </Text>
            </div>

            {/* Third Parties */}
            <div>
              <Header size="lg" weight="semibold" className="mb-2">
                Third-Party Services
              </Header>
              <Text size="md" className="mb-2">
                SeamPass uses the following third-party services:
              </Text>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <Text size="md">Google Analytics - for usage analytics</Text>
                </li>
                <li>
                  <Text size="md">Vercel - for web hosting</Text>
                </li>
                <li>
                  <Text size="md">
                    Chrome Web Store - for extension distribution
                  </Text>
                </li>
              </ul>
            </div>

            {/* User Rights */}
            <div>
              <Header size="lg" weight="semibold" className="mb-2">
                Your Rights
              </Header>
              <Text size="md" className="mb-2">
                Since we don't collect personal information, there's no personal
                data to request, modify, or delete. You can:
              </Text>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <Text size="md">
                    Disable analytics by blocking Google Analytics
                  </Text>
                </li>
                <li>
                  <Text size="md">Uninstall the extension at any time</Text>
                </li>
                <li>
                  <Text size="md">
                    Use the web version without any tracking
                  </Text>
                </li>
              </ul>
            </div>

            {/* Changes */}
            <div>
              <Header size="lg" weight="semibold" className="mb-2">
                Changes to This Policy
              </Header>
              <Text size="md">
                We may update this Privacy Policy from time to time. Changes
                will be posted on this page with an updated date.
              </Text>
            </div>

            {/* Contact */}
            <div>
              <Header size="lg" weight="semibold" className="mb-2">
                Contact Us
              </Header>
              <Text size="md">
                If you have any questions about this Privacy Policy, please
                contact us through our GitHub repository or website.
              </Text>
            </div>
          </div>
        </div>
      </ContainerLayout>
    </section>
  );
};

export default Privacy;
