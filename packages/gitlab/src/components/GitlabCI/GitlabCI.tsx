import { Content, Page } from '@backstage/core-components';
import { Grid } from '@material-ui/core';
import React from 'react';
import {
    PeopleCard,
    IssuesTable,
    LanguagesCard,
    MergeRequestsTable,
    MergeRequestStats,
    PipelinesTable,
    ReleasesCard,
} from '../widgets';

export const GitlabCI = () => (
    <Page themeId="tool">
        <Content>
            <Grid container spacing={6} direction="row" alignItems="stretch">
                <Grid item sm={12} md={3} lg={3}>
                    <PeopleCard />
                </Grid>
                <Grid item sm={12} md={3} lg={3}>
                    <LanguagesCard />
                </Grid>
                <Grid item sm={12} md={3} lg={3}>
                    <MergeRequestStats />
                </Grid>
                <Grid item sm={12} md={3} lg={3}>
                    <ReleasesCard />
                </Grid>
                <Grid item md={12}>
                    <PipelinesTable />
                </Grid>
                <Grid item md={12}>
                    <MergeRequestsTable />
                </Grid>
                <Grid item md={12}>
                    <IssuesTable />
                </Grid>
            </Grid>
        </Content>
    </Page>
);
