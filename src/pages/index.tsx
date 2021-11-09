import { BasicGrid, Center, Container, Stack, Text } from '@gsandf/ui';
import { Definition, Term } from 'components/index';
import { Radar } from 'components/Radar';
import React from 'react';
import BasicLayout from '../templates/Basic';

export default function Home(): JSX.Element {
  return (
    <BasicLayout title="GS&F Tech Radar">
      <Center>
        <Radar />
      </Center>

      <Container $px={4}>
        <BasicGrid columns={[1, , 2]} spacing={4}>
          <Stack gap={4}>
            <Text as="h2">Rings</Text>

            <Stack>
              <Term>Adopt</Term>
              <Definition>
                We’ve embraced these items as a team. We use them freely on new
                projects. They represent the lowest risk items for our team.
                They have been used by multiple people on multiple projects.
              </Definition>
            </Stack>

            <Stack>
              <Term>Trial</Term>
              <Definition>
                We think these items are worth pursuing. We think these items
                should be tried on a project that can carry the additional risk.
                They may have been used by a couple people on at least one
                project showing benefits (and outlined limitations).
              </Definition>
            </Stack>

            <Stack>
              <Term>Assess</Term>
              <Definition>
                We think these items may be worth understanding more. These
                should only be used in a project if there is a clear acceptance
                of risk and some understanding of how to correct if things don’t
                go as planned. It’s likely these have not been used or used very
                little, but a couple members have interest in.
              </Definition>
            </Stack>

            <Stack>
              <Term>Hold</Term>
              <Definition>
                We currently do not recommend these for new projects. This may
                be because it doesn’t align with our goals, no team members are
                interested in supporting it, or we simply think it needs to
                mature more before using seriously.
              </Definition>
            </Stack>
          </Stack>

          <Stack gap={4}>
            <Text as="h2">Quadrants</Text>

            <Stack>
              <Term>Datastores</Term>
              <Definition>Databases, file storage, etc.</Definition>
            </Stack>

            <Stack>
              <Term>Languages & Frameworks</Term>
              <Definition>
                Programming languages, frameworks, heavily used libraries, etc.
              </Definition>
            </Stack>

            <Stack>
              <Term>Tools</Term>
              <Definition>Things that connect the others together.</Definition>
            </Stack>

            <Stack>
              <Term>Platforms</Term>
              <Definition>
                Hosting platforms, 3rd party services, CMSs, etc.
              </Definition>
            </Stack>
          </Stack>
        </BasicGrid>
      </Container>
    </BasicLayout>
  );
}
