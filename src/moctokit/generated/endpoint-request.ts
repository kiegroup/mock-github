import { RequestMocker } from "../request/request-mocker";
import endpoints from "./endpoint-details";
const endpointToMethod = (baseUrl: string) => ({
  actions: {
    addCustomLabelsToSelfHostedRunnerForOrg:
      new RequestMocker<"/orgs/{org}/actions/runners/{runner_id}/labels", "post">(baseUrl, endpoints["actions"]["addCustomLabelsToSelfHostedRunnerForOrg"]).request,
    addCustomLabelsToSelfHostedRunnerForRepo:
      new RequestMocker<"/repos/{owner}/{repo}/actions/runners/{runner_id}/labels", "post">(baseUrl, endpoints["actions"]["addCustomLabelsToSelfHostedRunnerForRepo"]).request,
    addSelectedRepoToOrgSecret:
      new RequestMocker<"/orgs/{org}/actions/secrets/{secret_name}/repositories/{repository_id}", "put">(baseUrl, endpoints["actions"]["addSelectedRepoToOrgSecret"]).request,
    approveWorkflowRun:
      new RequestMocker<"/repos/{owner}/{repo}/actions/runs/{run_id}/approve", "post">(baseUrl, endpoints["actions"]["approveWorkflowRun"]).request,
    cancelWorkflowRun:
      new RequestMocker<"/repos/{owner}/{repo}/actions/runs/{run_id}/cancel", "post">(baseUrl, endpoints["actions"]["cancelWorkflowRun"]).request,
    createOrUpdateEnvironmentSecret:
      new RequestMocker<"/repositories/{repository_id}/environments/{environment_name}/secrets/{secret_name}", "put">(baseUrl, endpoints["actions"]["createOrUpdateEnvironmentSecret"]).request,
    createOrUpdateOrgSecret:
      new RequestMocker<"/orgs/{org}/actions/secrets/{secret_name}", "put">(baseUrl, endpoints["actions"]["createOrUpdateOrgSecret"]).request,
    createOrUpdateRepoSecret:
      new RequestMocker<"/repos/{owner}/{repo}/actions/secrets/{secret_name}", "put">(baseUrl, endpoints["actions"]["createOrUpdateRepoSecret"]).request,
    createRegistrationTokenForOrg:
      new RequestMocker<"/orgs/{org}/actions/runners/registration-token", "post">(baseUrl, endpoints["actions"]["createRegistrationTokenForOrg"]).request,
    createRegistrationTokenForRepo:
      new RequestMocker<"/repos/{owner}/{repo}/actions/runners/registration-token", "post">(baseUrl, endpoints["actions"]["createRegistrationTokenForRepo"]).request,
    createRemoveTokenForOrg:
      new RequestMocker<"/orgs/{org}/actions/runners/remove-token", "post">(baseUrl, endpoints["actions"]["createRemoveTokenForOrg"]).request,
    createRemoveTokenForRepo:
      new RequestMocker<"/repos/{owner}/{repo}/actions/runners/remove-token", "post">(baseUrl, endpoints["actions"]["createRemoveTokenForRepo"]).request,
    createWorkflowDispatch:
      new RequestMocker<"/repos/{owner}/{repo}/actions/workflows/{workflow_id}/dispatches", "post">(baseUrl, endpoints["actions"]["createWorkflowDispatch"]).request,
    deleteActionsCacheById:
      new RequestMocker<"/repos/{owner}/{repo}/actions/caches/{cache_id}", "delete">(baseUrl, endpoints["actions"]["deleteActionsCacheById"]).request,
    deleteActionsCacheByKey:
      new RequestMocker<"/repos/{owner}/{repo}/actions/caches", "delete">(baseUrl, endpoints["actions"]["deleteActionsCacheByKey"]).request,
    deleteArtifact:
      new RequestMocker<"/repos/{owner}/{repo}/actions/artifacts/{artifact_id}", "delete">(baseUrl, endpoints["actions"]["deleteArtifact"]).request,
    deleteEnvironmentSecret:
      new RequestMocker<"/repositories/{repository_id}/environments/{environment_name}/secrets/{secret_name}", "delete">(baseUrl, endpoints["actions"]["deleteEnvironmentSecret"]).request,
    deleteOrgSecret:
      new RequestMocker<"/orgs/{org}/actions/secrets/{secret_name}", "delete">(baseUrl, endpoints["actions"]["deleteOrgSecret"]).request,
    deleteRepoSecret:
      new RequestMocker<"/repos/{owner}/{repo}/actions/secrets/{secret_name}", "delete">(baseUrl, endpoints["actions"]["deleteRepoSecret"]).request,
    deleteSelfHostedRunnerFromOrg:
      new RequestMocker<"/orgs/{org}/actions/runners/{runner_id}", "delete">(baseUrl, endpoints["actions"]["deleteSelfHostedRunnerFromOrg"]).request,
    deleteSelfHostedRunnerFromRepo:
      new RequestMocker<"/repos/{owner}/{repo}/actions/runners/{runner_id}", "delete">(baseUrl, endpoints["actions"]["deleteSelfHostedRunnerFromRepo"]).request,
    deleteWorkflowRun:
      new RequestMocker<"/repos/{owner}/{repo}/actions/runs/{run_id}", "delete">(baseUrl, endpoints["actions"]["deleteWorkflowRun"]).request,
    deleteWorkflowRunLogs:
      new RequestMocker<"/repos/{owner}/{repo}/actions/runs/{run_id}/logs", "delete">(baseUrl, endpoints["actions"]["deleteWorkflowRunLogs"]).request,
    disableSelectedRepositoryGithubActionsOrganization:
      new RequestMocker<"/orgs/{org}/actions/permissions/repositories/{repository_id}", "delete">(baseUrl, endpoints["actions"]["disableSelectedRepositoryGithubActionsOrganization"]).request,
    disableWorkflow:
      new RequestMocker<"/repos/{owner}/{repo}/actions/workflows/{workflow_id}/disable", "put">(baseUrl, endpoints["actions"]["disableWorkflow"]).request,
    downloadArtifact:
      new RequestMocker<"/repos/{owner}/{repo}/actions/artifacts/{artifact_id}/{archive_format}", "get">(baseUrl, endpoints["actions"]["downloadArtifact"]).request,
    downloadJobLogsForWorkflowRun:
      new RequestMocker<"/repos/{owner}/{repo}/actions/jobs/{job_id}/logs", "get">(baseUrl, endpoints["actions"]["downloadJobLogsForWorkflowRun"]).request,
    downloadWorkflowRunAttemptLogs:
      new RequestMocker<"/repos/{owner}/{repo}/actions/runs/{run_id}/attempts/{attempt_number}/logs", "get">(baseUrl, endpoints["actions"]["downloadWorkflowRunAttemptLogs"]).request,
    downloadWorkflowRunLogs:
      new RequestMocker<"/repos/{owner}/{repo}/actions/runs/{run_id}/logs", "get">(baseUrl, endpoints["actions"]["downloadWorkflowRunLogs"]).request,
    enableSelectedRepositoryGithubActionsOrganization:
      new RequestMocker<"/orgs/{org}/actions/permissions/repositories/{repository_id}", "put">(baseUrl, endpoints["actions"]["enableSelectedRepositoryGithubActionsOrganization"]).request,
    enableWorkflow:
      new RequestMocker<"/repos/{owner}/{repo}/actions/workflows/{workflow_id}/enable", "put">(baseUrl, endpoints["actions"]["enableWorkflow"]).request,
    getActionsCacheList:
      new RequestMocker<"/repos/{owner}/{repo}/actions/caches", "get">(baseUrl, endpoints["actions"]["getActionsCacheList"]).request,
    getActionsCacheUsage:
      new RequestMocker<"/repos/{owner}/{repo}/actions/cache/usage", "get">(baseUrl, endpoints["actions"]["getActionsCacheUsage"]).request,
    getActionsCacheUsageByRepoForOrg:
      new RequestMocker<"/orgs/{org}/actions/cache/usage-by-repository", "get">(baseUrl, endpoints["actions"]["getActionsCacheUsageByRepoForOrg"]).request,
    getActionsCacheUsageForEnterprise:
      new RequestMocker<"/enterprises/{enterprise}/actions/cache/usage", "get">(baseUrl, endpoints["actions"]["getActionsCacheUsageForEnterprise"]).request,
    getActionsCacheUsageForOrg:
      new RequestMocker<"/orgs/{org}/actions/cache/usage", "get">(baseUrl, endpoints["actions"]["getActionsCacheUsageForOrg"]).request,
    getAllowedActionsOrganization:
      new RequestMocker<"/orgs/{org}/actions/permissions/selected-actions", "get">(baseUrl, endpoints["actions"]["getAllowedActionsOrganization"]).request,
    getAllowedActionsRepository:
      new RequestMocker<"/repos/{owner}/{repo}/actions/permissions/selected-actions", "get">(baseUrl, endpoints["actions"]["getAllowedActionsRepository"]).request,
    getArtifact:
      new RequestMocker<"/repos/{owner}/{repo}/actions/artifacts/{artifact_id}", "get">(baseUrl, endpoints["actions"]["getArtifact"]).request,
    getEnvironmentPublicKey:
      new RequestMocker<"/repositories/{repository_id}/environments/{environment_name}/secrets/public-key", "get">(baseUrl, endpoints["actions"]["getEnvironmentPublicKey"]).request,
    getEnvironmentSecret:
      new RequestMocker<"/repositories/{repository_id}/environments/{environment_name}/secrets/{secret_name}", "get">(baseUrl, endpoints["actions"]["getEnvironmentSecret"]).request,
    getGithubActionsDefaultWorkflowPermissionsEnterprise:
      new RequestMocker<"/enterprises/{enterprise}/actions/permissions/workflow", "get">(baseUrl, endpoints["actions"]["getGithubActionsDefaultWorkflowPermissionsEnterprise"]).request,
    getGithubActionsDefaultWorkflowPermissionsOrganization:
      new RequestMocker<"/orgs/{org}/actions/permissions/workflow", "get">(baseUrl, endpoints["actions"]["getGithubActionsDefaultWorkflowPermissionsOrganization"]).request,
    getGithubActionsDefaultWorkflowPermissionsRepository:
      new RequestMocker<"/repos/{owner}/{repo}/actions/permissions/workflow", "get">(baseUrl, endpoints["actions"]["getGithubActionsDefaultWorkflowPermissionsRepository"]).request,
    getGithubActionsPermissionsOrganization:
      new RequestMocker<"/orgs/{org}/actions/permissions", "get">(baseUrl, endpoints["actions"]["getGithubActionsPermissionsOrganization"]).request,
    getGithubActionsPermissionsRepository:
      new RequestMocker<"/repos/{owner}/{repo}/actions/permissions", "get">(baseUrl, endpoints["actions"]["getGithubActionsPermissionsRepository"]).request,
    getJobForWorkflowRun:
      new RequestMocker<"/repos/{owner}/{repo}/actions/jobs/{job_id}", "get">(baseUrl, endpoints["actions"]["getJobForWorkflowRun"]).request,
    getOrgPublicKey:
      new RequestMocker<"/orgs/{org}/actions/secrets/public-key", "get">(baseUrl, endpoints["actions"]["getOrgPublicKey"]).request,
    getOrgSecret:
      new RequestMocker<"/orgs/{org}/actions/secrets/{secret_name}", "get">(baseUrl, endpoints["actions"]["getOrgSecret"]).request,
    getPendingDeploymentsForRun:
      new RequestMocker<"/repos/{owner}/{repo}/actions/runs/{run_id}/pending_deployments", "get">(baseUrl, endpoints["actions"]["getPendingDeploymentsForRun"]).request,
    getRepoPermissions:
      new RequestMocker<"/repos/{owner}/{repo}/actions/permissions", "get">(baseUrl, endpoints["actions"]["getRepoPermissions"]).request,
    getRepoPublicKey:
      new RequestMocker<"/repos/{owner}/{repo}/actions/secrets/public-key", "get">(baseUrl, endpoints["actions"]["getRepoPublicKey"]).request,
    getRepoSecret:
      new RequestMocker<"/repos/{owner}/{repo}/actions/secrets/{secret_name}", "get">(baseUrl, endpoints["actions"]["getRepoSecret"]).request,
    getReviewsForRun:
      new RequestMocker<"/repos/{owner}/{repo}/actions/runs/{run_id}/approvals", "get">(baseUrl, endpoints["actions"]["getReviewsForRun"]).request,
    getSelfHostedRunnerForOrg:
      new RequestMocker<"/orgs/{org}/actions/runners/{runner_id}", "get">(baseUrl, endpoints["actions"]["getSelfHostedRunnerForOrg"]).request,
    getSelfHostedRunnerForRepo:
      new RequestMocker<"/repos/{owner}/{repo}/actions/runners/{runner_id}", "get">(baseUrl, endpoints["actions"]["getSelfHostedRunnerForRepo"]).request,
    getWorkflow:
      new RequestMocker<"/repos/{owner}/{repo}/actions/workflows/{workflow_id}", "get">(baseUrl, endpoints["actions"]["getWorkflow"]).request,
    getWorkflowAccessToRepository:
      new RequestMocker<"/repos/{owner}/{repo}/actions/permissions/access", "get">(baseUrl, endpoints["actions"]["getWorkflowAccessToRepository"]).request,
    getWorkflowRun:
      new RequestMocker<"/repos/{owner}/{repo}/actions/runs/{run_id}", "get">(baseUrl, endpoints["actions"]["getWorkflowRun"]).request,
    getWorkflowRunAttempt:
      new RequestMocker<"/repos/{owner}/{repo}/actions/runs/{run_id}/attempts/{attempt_number}", "get">(baseUrl, endpoints["actions"]["getWorkflowRunAttempt"]).request,
    getWorkflowRunUsage:
      new RequestMocker<"/repos/{owner}/{repo}/actions/runs/{run_id}/timing", "get">(baseUrl, endpoints["actions"]["getWorkflowRunUsage"]).request,
    getWorkflowUsage:
      new RequestMocker<"/repos/{owner}/{repo}/actions/workflows/{workflow_id}/timing", "get">(baseUrl, endpoints["actions"]["getWorkflowUsage"]).request,
    listArtifactsForRepo:
      new RequestMocker<"/repos/{owner}/{repo}/actions/artifacts", "get">(baseUrl, endpoints["actions"]["listArtifactsForRepo"]).request,
    listEnvironmentSecrets:
      new RequestMocker<"/repositories/{repository_id}/environments/{environment_name}/secrets", "get">(baseUrl, endpoints["actions"]["listEnvironmentSecrets"]).request,
    listJobsForWorkflowRun:
      new RequestMocker<"/repos/{owner}/{repo}/actions/runs/{run_id}/jobs", "get">(baseUrl, endpoints["actions"]["listJobsForWorkflowRun"]).request,
    listJobsForWorkflowRunAttempt:
      new RequestMocker<"/repos/{owner}/{repo}/actions/runs/{run_id}/attempts/{attempt_number}/jobs", "get">(baseUrl, endpoints["actions"]["listJobsForWorkflowRunAttempt"]).request,
    listLabelsForSelfHostedRunnerForOrg:
      new RequestMocker<"/orgs/{org}/actions/runners/{runner_id}/labels", "get">(baseUrl, endpoints["actions"]["listLabelsForSelfHostedRunnerForOrg"]).request,
    listLabelsForSelfHostedRunnerForRepo:
      new RequestMocker<"/repos/{owner}/{repo}/actions/runners/{runner_id}/labels", "get">(baseUrl, endpoints["actions"]["listLabelsForSelfHostedRunnerForRepo"]).request,
    listOrgSecrets:
      new RequestMocker<"/orgs/{org}/actions/secrets", "get">(baseUrl, endpoints["actions"]["listOrgSecrets"]).request,
    listRepoSecrets:
      new RequestMocker<"/repos/{owner}/{repo}/actions/secrets", "get">(baseUrl, endpoints["actions"]["listRepoSecrets"]).request,
    listRepoWorkflows:
      new RequestMocker<"/repos/{owner}/{repo}/actions/workflows", "get">(baseUrl, endpoints["actions"]["listRepoWorkflows"]).request,
    listRunnerApplicationsForOrg:
      new RequestMocker<"/orgs/{org}/actions/runners/downloads", "get">(baseUrl, endpoints["actions"]["listRunnerApplicationsForOrg"]).request,
    listRunnerApplicationsForRepo:
      new RequestMocker<"/repos/{owner}/{repo}/actions/runners/downloads", "get">(baseUrl, endpoints["actions"]["listRunnerApplicationsForRepo"]).request,
    listSelectedReposForOrgSecret:
      new RequestMocker<"/orgs/{org}/actions/secrets/{secret_name}/repositories", "get">(baseUrl, endpoints["actions"]["listSelectedReposForOrgSecret"]).request,
    listSelectedRepositoriesEnabledGithubActionsOrganization:
      new RequestMocker<"/orgs/{org}/actions/permissions/repositories", "get">(baseUrl, endpoints["actions"]["listSelectedRepositoriesEnabledGithubActionsOrganization"]).request,
    listSelfHostedRunnersForOrg:
      new RequestMocker<"/orgs/{org}/actions/runners", "get">(baseUrl, endpoints["actions"]["listSelfHostedRunnersForOrg"]).request,
    listSelfHostedRunnersForRepo:
      new RequestMocker<"/repos/{owner}/{repo}/actions/runners", "get">(baseUrl, endpoints["actions"]["listSelfHostedRunnersForRepo"]).request,
    listWorkflowRunArtifacts:
      new RequestMocker<"/repos/{owner}/{repo}/actions/runs/{run_id}/artifacts", "get">(baseUrl, endpoints["actions"]["listWorkflowRunArtifacts"]).request,
    listWorkflowRuns:
      new RequestMocker<"/repos/{owner}/{repo}/actions/workflows/{workflow_id}/runs", "get">(baseUrl, endpoints["actions"]["listWorkflowRuns"]).request,
    listWorkflowRunsForRepo:
      new RequestMocker<"/repos/{owner}/{repo}/actions/runs", "get">(baseUrl, endpoints["actions"]["listWorkflowRunsForRepo"]).request,
    reRunJobForWorkflowRun:
      new RequestMocker<"/repos/{owner}/{repo}/actions/jobs/{job_id}/rerun", "post">(baseUrl, endpoints["actions"]["reRunJobForWorkflowRun"]).request,
    reRunWorkflow:
      new RequestMocker<"/repos/{owner}/{repo}/actions/runs/{run_id}/rerun", "post">(baseUrl, endpoints["actions"]["reRunWorkflow"]).request,
    reRunWorkflowFailedJobs:
      new RequestMocker<"/repos/{owner}/{repo}/actions/runs/{run_id}/rerun-failed-jobs", "post">(baseUrl, endpoints["actions"]["reRunWorkflowFailedJobs"]).request,
    removeAllCustomLabelsFromSelfHostedRunnerForOrg:
      new RequestMocker<"/orgs/{org}/actions/runners/{runner_id}/labels", "delete">(baseUrl, endpoints["actions"]["removeAllCustomLabelsFromSelfHostedRunnerForOrg"]).request,
    removeAllCustomLabelsFromSelfHostedRunnerForRepo:
      new RequestMocker<"/repos/{owner}/{repo}/actions/runners/{runner_id}/labels", "delete">(baseUrl, endpoints["actions"]["removeAllCustomLabelsFromSelfHostedRunnerForRepo"]).request,
    removeCustomLabelFromSelfHostedRunnerForOrg:
      new RequestMocker<"/orgs/{org}/actions/runners/{runner_id}/labels/{name}", "delete">(baseUrl, endpoints["actions"]["removeCustomLabelFromSelfHostedRunnerForOrg"]).request,
    removeCustomLabelFromSelfHostedRunnerForRepo:
      new RequestMocker<"/repos/{owner}/{repo}/actions/runners/{runner_id}/labels/{name}", "delete">(baseUrl, endpoints["actions"]["removeCustomLabelFromSelfHostedRunnerForRepo"]).request,
    removeSelectedRepoFromOrgSecret:
      new RequestMocker<"/orgs/{org}/actions/secrets/{secret_name}/repositories/{repository_id}", "delete">(baseUrl, endpoints["actions"]["removeSelectedRepoFromOrgSecret"]).request,
    reviewPendingDeploymentsForRun:
      new RequestMocker<"/repos/{owner}/{repo}/actions/runs/{run_id}/pending_deployments", "post">(baseUrl, endpoints["actions"]["reviewPendingDeploymentsForRun"]).request,
    setAllowedActionsOrganization:
      new RequestMocker<"/orgs/{org}/actions/permissions/selected-actions", "put">(baseUrl, endpoints["actions"]["setAllowedActionsOrganization"]).request,
    setAllowedActionsRepository:
      new RequestMocker<"/repos/{owner}/{repo}/actions/permissions/selected-actions", "put">(baseUrl, endpoints["actions"]["setAllowedActionsRepository"]).request,
    setCustomLabelsForSelfHostedRunnerForOrg:
      new RequestMocker<"/orgs/{org}/actions/runners/{runner_id}/labels", "put">(baseUrl, endpoints["actions"]["setCustomLabelsForSelfHostedRunnerForOrg"]).request,
    setCustomLabelsForSelfHostedRunnerForRepo:
      new RequestMocker<"/repos/{owner}/{repo}/actions/runners/{runner_id}/labels", "put">(baseUrl, endpoints["actions"]["setCustomLabelsForSelfHostedRunnerForRepo"]).request,
    setGithubActionsDefaultWorkflowPermissionsEnterprise:
      new RequestMocker<"/enterprises/{enterprise}/actions/permissions/workflow", "put">(baseUrl, endpoints["actions"]["setGithubActionsDefaultWorkflowPermissionsEnterprise"]).request,
    setGithubActionsDefaultWorkflowPermissionsOrganization:
      new RequestMocker<"/orgs/{org}/actions/permissions/workflow", "put">(baseUrl, endpoints["actions"]["setGithubActionsDefaultWorkflowPermissionsOrganization"]).request,
    setGithubActionsDefaultWorkflowPermissionsRepository:
      new RequestMocker<"/repos/{owner}/{repo}/actions/permissions/workflow", "put">(baseUrl, endpoints["actions"]["setGithubActionsDefaultWorkflowPermissionsRepository"]).request,
    setGithubActionsPermissionsOrganization:
      new RequestMocker<"/orgs/{org}/actions/permissions", "put">(baseUrl, endpoints["actions"]["setGithubActionsPermissionsOrganization"]).request,
    setGithubActionsPermissionsRepository:
      new RequestMocker<"/repos/{owner}/{repo}/actions/permissions", "put">(baseUrl, endpoints["actions"]["setGithubActionsPermissionsRepository"]).request,
    setSelectedReposForOrgSecret:
      new RequestMocker<"/orgs/{org}/actions/secrets/{secret_name}/repositories", "put">(baseUrl, endpoints["actions"]["setSelectedReposForOrgSecret"]).request,
    setSelectedRepositoriesEnabledGithubActionsOrganization:
      new RequestMocker<"/orgs/{org}/actions/permissions/repositories", "put">(baseUrl, endpoints["actions"]["setSelectedRepositoriesEnabledGithubActionsOrganization"]).request,
    setWorkflowAccessToRepository:
      new RequestMocker<"/repos/{owner}/{repo}/actions/permissions/access", "put">(baseUrl, endpoints["actions"]["setWorkflowAccessToRepository"]).request,
  },
  activity: {
    checkRepoIsStarredByAuthenticatedUser:
      new RequestMocker<"/user/starred/{owner}/{repo}", "get">(baseUrl, endpoints["activity"]["checkRepoIsStarredByAuthenticatedUser"]).request,
    deleteRepoSubscription:
      new RequestMocker<"/repos/{owner}/{repo}/subscription", "delete">(baseUrl, endpoints["activity"]["deleteRepoSubscription"]).request,
    deleteThreadSubscription:
      new RequestMocker<"/notifications/threads/{thread_id}/subscription", "delete">(baseUrl, endpoints["activity"]["deleteThreadSubscription"]).request,
    getFeeds:
      new RequestMocker<"/feeds", "get">(baseUrl, endpoints["activity"]["getFeeds"]).request,
    getRepoSubscription:
      new RequestMocker<"/repos/{owner}/{repo}/subscription", "get">(baseUrl, endpoints["activity"]["getRepoSubscription"]).request,
    getThread:
      new RequestMocker<"/notifications/threads/{thread_id}", "get">(baseUrl, endpoints["activity"]["getThread"]).request,
    getThreadSubscriptionForAuthenticatedUser:
      new RequestMocker<"/notifications/threads/{thread_id}/subscription", "get">(baseUrl, endpoints["activity"]["getThreadSubscriptionForAuthenticatedUser"]).request,
    listEventsForAuthenticatedUser:
      new RequestMocker<"/users/{username}/events", "get">(baseUrl, endpoints["activity"]["listEventsForAuthenticatedUser"]).request,
    listNotificationsForAuthenticatedUser:
      new RequestMocker<"/notifications", "get">(baseUrl, endpoints["activity"]["listNotificationsForAuthenticatedUser"]).request,
    listOrgEventsForAuthenticatedUser:
      new RequestMocker<"/users/{username}/events/orgs/{org}", "get">(baseUrl, endpoints["activity"]["listOrgEventsForAuthenticatedUser"]).request,
    listPublicEvents:
      new RequestMocker<"/events", "get">(baseUrl, endpoints["activity"]["listPublicEvents"]).request,
    listPublicEventsForRepoNetwork:
      new RequestMocker<"/networks/{owner}/{repo}/events", "get">(baseUrl, endpoints["activity"]["listPublicEventsForRepoNetwork"]).request,
    listPublicEventsForUser:
      new RequestMocker<"/users/{username}/events/public", "get">(baseUrl, endpoints["activity"]["listPublicEventsForUser"]).request,
    listPublicOrgEvents:
      new RequestMocker<"/orgs/{org}/events", "get">(baseUrl, endpoints["activity"]["listPublicOrgEvents"]).request,
    listReceivedEventsForUser:
      new RequestMocker<"/users/{username}/received_events", "get">(baseUrl, endpoints["activity"]["listReceivedEventsForUser"]).request,
    listReceivedPublicEventsForUser:
      new RequestMocker<"/users/{username}/received_events/public", "get">(baseUrl, endpoints["activity"]["listReceivedPublicEventsForUser"]).request,
    listRepoEvents:
      new RequestMocker<"/repos/{owner}/{repo}/events", "get">(baseUrl, endpoints["activity"]["listRepoEvents"]).request,
    listRepoNotificationsForAuthenticatedUser:
      new RequestMocker<"/repos/{owner}/{repo}/notifications", "get">(baseUrl, endpoints["activity"]["listRepoNotificationsForAuthenticatedUser"]).request,
    listReposStarredByAuthenticatedUser:
      new RequestMocker<"/user/starred", "get">(baseUrl, endpoints["activity"]["listReposStarredByAuthenticatedUser"]).request,
    listReposStarredByUser:
      new RequestMocker<"/users/{username}/starred", "get">(baseUrl, endpoints["activity"]["listReposStarredByUser"]).request,
    listReposWatchedByUser:
      new RequestMocker<"/users/{username}/subscriptions", "get">(baseUrl, endpoints["activity"]["listReposWatchedByUser"]).request,
    listStargazersForRepo:
      new RequestMocker<"/repos/{owner}/{repo}/stargazers", "get">(baseUrl, endpoints["activity"]["listStargazersForRepo"]).request,
    listWatchedReposForAuthenticatedUser:
      new RequestMocker<"/user/subscriptions", "get">(baseUrl, endpoints["activity"]["listWatchedReposForAuthenticatedUser"]).request,
    listWatchersForRepo:
      new RequestMocker<"/repos/{owner}/{repo}/subscribers", "get">(baseUrl, endpoints["activity"]["listWatchersForRepo"]).request,
    markNotificationsAsRead:
      new RequestMocker<"/notifications", "put">(baseUrl, endpoints["activity"]["markNotificationsAsRead"]).request,
    markRepoNotificationsAsRead:
      new RequestMocker<"/repos/{owner}/{repo}/notifications", "put">(baseUrl, endpoints["activity"]["markRepoNotificationsAsRead"]).request,
    markThreadAsRead:
      new RequestMocker<"/notifications/threads/{thread_id}", "patch">(baseUrl, endpoints["activity"]["markThreadAsRead"]).request,
    setRepoSubscription:
      new RequestMocker<"/repos/{owner}/{repo}/subscription", "put">(baseUrl, endpoints["activity"]["setRepoSubscription"]).request,
    setThreadSubscription:
      new RequestMocker<"/notifications/threads/{thread_id}/subscription", "put">(baseUrl, endpoints["activity"]["setThreadSubscription"]).request,
    starRepoForAuthenticatedUser:
      new RequestMocker<"/user/starred/{owner}/{repo}", "put">(baseUrl, endpoints["activity"]["starRepoForAuthenticatedUser"]).request,
    unstarRepoForAuthenticatedUser:
      new RequestMocker<"/user/starred/{owner}/{repo}", "delete">(baseUrl, endpoints["activity"]["unstarRepoForAuthenticatedUser"]).request,
  },
  apps: {
    addRepoToInstallation:
      new RequestMocker<"/user/installations/{installation_id}/repositories/{repository_id}", "put">(baseUrl, endpoints["apps"]["addRepoToInstallation"]).request,
    addRepoToInstallationForAuthenticatedUser:
      new RequestMocker<"/user/installations/{installation_id}/repositories/{repository_id}", "put">(baseUrl, endpoints["apps"]["addRepoToInstallationForAuthenticatedUser"]).request,
    checkToken:
      new RequestMocker<"/applications/{client_id}/token", "post">(baseUrl, endpoints["apps"]["checkToken"]).request,
    createFromManifest:
      new RequestMocker<"/app-manifests/{code}/conversions", "post">(baseUrl, endpoints["apps"]["createFromManifest"]).request,
    createInstallationAccessToken:
      new RequestMocker<"/app/installations/{installation_id}/access_tokens", "post">(baseUrl, endpoints["apps"]["createInstallationAccessToken"]).request,
    deleteAuthorization:
      new RequestMocker<"/applications/{client_id}/grant", "delete">(baseUrl, endpoints["apps"]["deleteAuthorization"]).request,
    deleteInstallation:
      new RequestMocker<"/app/installations/{installation_id}", "delete">(baseUrl, endpoints["apps"]["deleteInstallation"]).request,
    deleteToken:
      new RequestMocker<"/applications/{client_id}/token", "delete">(baseUrl, endpoints["apps"]["deleteToken"]).request,
    getAuthenticated:
      new RequestMocker<"/app", "get">(baseUrl, endpoints["apps"]["getAuthenticated"]).request,
    getBySlug:
      new RequestMocker<"/apps/{app_slug}", "get">(baseUrl, endpoints["apps"]["getBySlug"]).request,
    getInstallation:
      new RequestMocker<"/app/installations/{installation_id}", "get">(baseUrl, endpoints["apps"]["getInstallation"]).request,
    getOrgInstallation:
      new RequestMocker<"/orgs/{org}/installation", "get">(baseUrl, endpoints["apps"]["getOrgInstallation"]).request,
    getRepoInstallation:
      new RequestMocker<"/repos/{owner}/{repo}/installation", "get">(baseUrl, endpoints["apps"]["getRepoInstallation"]).request,
    getSubscriptionPlanForAccount:
      new RequestMocker<"/marketplace_listing/accounts/{account_id}", "get">(baseUrl, endpoints["apps"]["getSubscriptionPlanForAccount"]).request,
    getSubscriptionPlanForAccountStubbed:
      new RequestMocker<"/marketplace_listing/stubbed/accounts/{account_id}", "get">(baseUrl, endpoints["apps"]["getSubscriptionPlanForAccountStubbed"]).request,
    getUserInstallation:
      new RequestMocker<"/users/{username}/installation", "get">(baseUrl, endpoints["apps"]["getUserInstallation"]).request,
    getWebhookConfigForApp:
      new RequestMocker<"/app/hook/config", "get">(baseUrl, endpoints["apps"]["getWebhookConfigForApp"]).request,
    getWebhookDelivery:
      new RequestMocker<"/app/hook/deliveries/{delivery_id}", "get">(baseUrl, endpoints["apps"]["getWebhookDelivery"]).request,
    listAccountsForPlan:
      new RequestMocker<"/marketplace_listing/plans/{plan_id}/accounts", "get">(baseUrl, endpoints["apps"]["listAccountsForPlan"]).request,
    listAccountsForPlanStubbed:
      new RequestMocker<"/marketplace_listing/stubbed/plans/{plan_id}/accounts", "get">(baseUrl, endpoints["apps"]["listAccountsForPlanStubbed"]).request,
    listInstallationReposForAuthenticatedUser:
      new RequestMocker<"/user/installations/{installation_id}/repositories", "get">(baseUrl, endpoints["apps"]["listInstallationReposForAuthenticatedUser"]).request,
    listInstallations:
      new RequestMocker<"/app/installations", "get">(baseUrl, endpoints["apps"]["listInstallations"]).request,
    listInstallationsForAuthenticatedUser:
      new RequestMocker<"/user/installations", "get">(baseUrl, endpoints["apps"]["listInstallationsForAuthenticatedUser"]).request,
    listPlans:
      new RequestMocker<"/marketplace_listing/plans", "get">(baseUrl, endpoints["apps"]["listPlans"]).request,
    listPlansStubbed:
      new RequestMocker<"/marketplace_listing/stubbed/plans", "get">(baseUrl, endpoints["apps"]["listPlansStubbed"]).request,
    listReposAccessibleToInstallation:
      new RequestMocker<"/installation/repositories", "get">(baseUrl, endpoints["apps"]["listReposAccessibleToInstallation"]).request,
    listSubscriptionsForAuthenticatedUser:
      new RequestMocker<"/user/marketplace_purchases", "get">(baseUrl, endpoints["apps"]["listSubscriptionsForAuthenticatedUser"]).request,
    listSubscriptionsForAuthenticatedUserStubbed:
      new RequestMocker<"/user/marketplace_purchases/stubbed", "get">(baseUrl, endpoints["apps"]["listSubscriptionsForAuthenticatedUserStubbed"]).request,
    listWebhookDeliveries:
      new RequestMocker<"/app/hook/deliveries", "get">(baseUrl, endpoints["apps"]["listWebhookDeliveries"]).request,
    redeliverWebhookDelivery:
      new RequestMocker<"/app/hook/deliveries/{delivery_id}/attempts", "post">(baseUrl, endpoints["apps"]["redeliverWebhookDelivery"]).request,
    removeRepoFromInstallation:
      new RequestMocker<"/user/installations/{installation_id}/repositories/{repository_id}", "delete">(baseUrl, endpoints["apps"]["removeRepoFromInstallation"]).request,
    removeRepoFromInstallationForAuthenticatedUser:
      new RequestMocker<"/user/installations/{installation_id}/repositories/{repository_id}", "delete">(baseUrl, endpoints["apps"]["removeRepoFromInstallationForAuthenticatedUser"]).request,
    resetToken:
      new RequestMocker<"/applications/{client_id}/token", "patch">(baseUrl, endpoints["apps"]["resetToken"]).request,
    revokeInstallationAccessToken:
      new RequestMocker<"/installation/token", "delete">(baseUrl, endpoints["apps"]["revokeInstallationAccessToken"]).request,
    scopeToken:
      new RequestMocker<"/applications/{client_id}/token/scoped", "post">(baseUrl, endpoints["apps"]["scopeToken"]).request,
    suspendInstallation:
      new RequestMocker<"/app/installations/{installation_id}/suspended", "put">(baseUrl, endpoints["apps"]["suspendInstallation"]).request,
    unsuspendInstallation:
      new RequestMocker<"/app/installations/{installation_id}/suspended", "delete">(baseUrl, endpoints["apps"]["unsuspendInstallation"]).request,
    updateWebhookConfigForApp:
      new RequestMocker<"/app/hook/config", "patch">(baseUrl, endpoints["apps"]["updateWebhookConfigForApp"]).request,
  },
  billing: {
    getGithubActionsBillingOrg:
      new RequestMocker<"/orgs/{org}/settings/billing/actions", "get">(baseUrl, endpoints["billing"]["getGithubActionsBillingOrg"]).request,
    getGithubActionsBillingUser:
      new RequestMocker<"/users/{username}/settings/billing/actions", "get">(baseUrl, endpoints["billing"]["getGithubActionsBillingUser"]).request,
    getGithubAdvancedSecurityBillingGhe:
      new RequestMocker<"/enterprises/{enterprise}/settings/billing/advanced-security", "get">(baseUrl, endpoints["billing"]["getGithubAdvancedSecurityBillingGhe"]).request,
    getGithubAdvancedSecurityBillingOrg:
      new RequestMocker<"/orgs/{org}/settings/billing/advanced-security", "get">(baseUrl, endpoints["billing"]["getGithubAdvancedSecurityBillingOrg"]).request,
    getGithubPackagesBillingOrg:
      new RequestMocker<"/orgs/{org}/settings/billing/packages", "get">(baseUrl, endpoints["billing"]["getGithubPackagesBillingOrg"]).request,
    getGithubPackagesBillingUser:
      new RequestMocker<"/users/{username}/settings/billing/packages", "get">(baseUrl, endpoints["billing"]["getGithubPackagesBillingUser"]).request,
    getSharedStorageBillingOrg:
      new RequestMocker<"/orgs/{org}/settings/billing/shared-storage", "get">(baseUrl, endpoints["billing"]["getSharedStorageBillingOrg"]).request,
    getSharedStorageBillingUser:
      new RequestMocker<"/users/{username}/settings/billing/shared-storage", "get">(baseUrl, endpoints["billing"]["getSharedStorageBillingUser"]).request,
  },
  checks: {
    create:
      new RequestMocker<"/repos/{owner}/{repo}/check-runs", "post">(baseUrl, endpoints["checks"]["create"]).request,
    createSuite:
      new RequestMocker<"/repos/{owner}/{repo}/check-suites", "post">(baseUrl, endpoints["checks"]["createSuite"]).request,
    get: new RequestMocker<"/repos/{owner}/{repo}/check-runs/{check_run_id}", "get">(baseUrl, endpoints["checks"]["get"]).request,
    getSuite:
      new RequestMocker<"/repos/{owner}/{repo}/check-suites/{check_suite_id}", "get">(baseUrl, endpoints["checks"]["getSuite"]).request,
    listAnnotations:
      new RequestMocker<"/repos/{owner}/{repo}/check-runs/{check_run_id}/annotations", "get">(baseUrl, endpoints["checks"]["listAnnotations"]).request,
    listForRef:
      new RequestMocker<"/repos/{owner}/{repo}/commits/{ref}/check-runs", "get">(baseUrl, endpoints["checks"]["listForRef"]).request,
    listForSuite:
      new RequestMocker<"/repos/{owner}/{repo}/check-suites/{check_suite_id}/check-runs", "get">(baseUrl, endpoints["checks"]["listForSuite"]).request,
    listSuitesForRef:
      new RequestMocker<"/repos/{owner}/{repo}/commits/{ref}/check-suites", "get">(baseUrl, endpoints["checks"]["listSuitesForRef"]).request,
    rerequestRun:
      new RequestMocker<"/repos/{owner}/{repo}/check-runs/{check_run_id}/rerequest", "post">(baseUrl, endpoints["checks"]["rerequestRun"]).request,
    rerequestSuite:
      new RequestMocker<"/repos/{owner}/{repo}/check-suites/{check_suite_id}/rerequest", "post">(baseUrl, endpoints["checks"]["rerequestSuite"]).request,
    setSuitesPreferences:
      new RequestMocker<"/repos/{owner}/{repo}/check-suites/preferences", "patch">(baseUrl, endpoints["checks"]["setSuitesPreferences"]).request,
    update:
      new RequestMocker<"/repos/{owner}/{repo}/check-runs/{check_run_id}", "patch">(baseUrl, endpoints["checks"]["update"]).request,
  },
  codeScanning: {
    deleteAnalysis:
      new RequestMocker<"/repos/{owner}/{repo}/code-scanning/analyses/{analysis_id}", "delete">(baseUrl, endpoints["codeScanning"]["deleteAnalysis"]).request,
    getAlert:
      new RequestMocker<"/repos/{owner}/{repo}/code-scanning/alerts/{alert_number}", "get">(baseUrl, endpoints["codeScanning"]["getAlert"]).request,
    getAnalysis:
      new RequestMocker<"/repos/{owner}/{repo}/code-scanning/analyses/{analysis_id}", "get">(baseUrl, endpoints["codeScanning"]["getAnalysis"]).request,
    getSarif:
      new RequestMocker<"/repos/{owner}/{repo}/code-scanning/sarifs/{sarif_id}", "get">(baseUrl, endpoints["codeScanning"]["getSarif"]).request,
    listAlertInstances:
      new RequestMocker<"/repos/{owner}/{repo}/code-scanning/alerts/{alert_number}/instances", "get">(baseUrl, endpoints["codeScanning"]["listAlertInstances"]).request,
    listAlertsForEnterprise:
      new RequestMocker<"/enterprises/{enterprise}/code-scanning/alerts", "get">(baseUrl, endpoints["codeScanning"]["listAlertsForEnterprise"]).request,
    listAlertsForOrg:
      new RequestMocker<"/orgs/{org}/code-scanning/alerts", "get">(baseUrl, endpoints["codeScanning"]["listAlertsForOrg"]).request,
    listAlertsForRepo:
      new RequestMocker<"/repos/{owner}/{repo}/code-scanning/alerts", "get">(baseUrl, endpoints["codeScanning"]["listAlertsForRepo"]).request,
    listAlertsInstances:
      new RequestMocker<"/repos/{owner}/{repo}/code-scanning/alerts/{alert_number}/instances", "get">(baseUrl, endpoints["codeScanning"]["listAlertsInstances"]).request,
    listRecentAnalyses:
      new RequestMocker<"/repos/{owner}/{repo}/code-scanning/analyses", "get">(baseUrl, endpoints["codeScanning"]["listRecentAnalyses"]).request,
    updateAlert:
      new RequestMocker<"/repos/{owner}/{repo}/code-scanning/alerts/{alert_number}", "patch">(baseUrl, endpoints["codeScanning"]["updateAlert"]).request,
    uploadSarif:
      new RequestMocker<"/repos/{owner}/{repo}/code-scanning/sarifs", "post">(baseUrl, endpoints["codeScanning"]["uploadSarif"]).request,
  },
  codesOfConduct: {
    getAllCodesOfConduct:
      new RequestMocker<"/codes_of_conduct", "get">(baseUrl, endpoints["codesOfConduct"]["getAllCodesOfConduct"]).request,
    getConductCode:
      new RequestMocker<"/codes_of_conduct/{key}", "get">(baseUrl, endpoints["codesOfConduct"]["getConductCode"]).request,
  },
  codespaces: {
    addRepositoryForSecretForAuthenticatedUser:
      new RequestMocker<"/user/codespaces/secrets/{secret_name}/repositories/{repository_id}", "put">(baseUrl, endpoints["codespaces"]["addRepositoryForSecretForAuthenticatedUser"]).request,
    codespaceMachinesForAuthenticatedUser:
      new RequestMocker<"/user/codespaces/{codespace_name}/machines", "get">(baseUrl, endpoints["codespaces"]["codespaceMachinesForAuthenticatedUser"]).request,
    createForAuthenticatedUser:
      new RequestMocker<"/user/codespaces", "post">(baseUrl, endpoints["codespaces"]["createForAuthenticatedUser"]).request,
    createOrUpdateRepoSecret:
      new RequestMocker<"/repos/{owner}/{repo}/codespaces/secrets/{secret_name}", "put">(baseUrl, endpoints["codespaces"]["createOrUpdateRepoSecret"]).request,
    createOrUpdateSecretForAuthenticatedUser:
      new RequestMocker<"/user/codespaces/secrets/{secret_name}", "put">(baseUrl, endpoints["codespaces"]["createOrUpdateSecretForAuthenticatedUser"]).request,
    createWithPrForAuthenticatedUser:
      new RequestMocker<"/repos/{owner}/{repo}/pulls/{pull_number}/codespaces", "post">(baseUrl, endpoints["codespaces"]["createWithPrForAuthenticatedUser"]).request,
    createWithRepoForAuthenticatedUser:
      new RequestMocker<"/repos/{owner}/{repo}/codespaces", "post">(baseUrl, endpoints["codespaces"]["createWithRepoForAuthenticatedUser"]).request,
    deleteForAuthenticatedUser:
      new RequestMocker<"/user/codespaces/{codespace_name}", "delete">(baseUrl, endpoints["codespaces"]["deleteForAuthenticatedUser"]).request,
    deleteFromOrganization:
      new RequestMocker<"/orgs/{org}/members/{username}/codespaces/{codespace_name}", "delete">(baseUrl, endpoints["codespaces"]["deleteFromOrganization"]).request,
    deleteRepoSecret:
      new RequestMocker<"/repos/{owner}/{repo}/codespaces/secrets/{secret_name}", "delete">(baseUrl, endpoints["codespaces"]["deleteRepoSecret"]).request,
    deleteSecretForAuthenticatedUser:
      new RequestMocker<"/user/codespaces/secrets/{secret_name}", "delete">(baseUrl, endpoints["codespaces"]["deleteSecretForAuthenticatedUser"]).request,
    exportForAuthenticatedUser:
      new RequestMocker<"/user/codespaces/{codespace_name}/exports", "post">(baseUrl, endpoints["codespaces"]["exportForAuthenticatedUser"]).request,
    getExportDetailsForAuthenticatedUser:
      new RequestMocker<"/user/codespaces/{codespace_name}/exports/{export_id}", "get">(baseUrl, endpoints["codespaces"]["getExportDetailsForAuthenticatedUser"]).request,
    getForAuthenticatedUser:
      new RequestMocker<"/user/codespaces/{codespace_name}", "get">(baseUrl, endpoints["codespaces"]["getForAuthenticatedUser"]).request,
    getPublicKeyForAuthenticatedUser:
      new RequestMocker<"/user/codespaces/secrets/public-key", "get">(baseUrl, endpoints["codespaces"]["getPublicKeyForAuthenticatedUser"]).request,
    getRepoPublicKey:
      new RequestMocker<"/repos/{owner}/{repo}/codespaces/secrets/public-key", "get">(baseUrl, endpoints["codespaces"]["getRepoPublicKey"]).request,
    getRepoSecret:
      new RequestMocker<"/repos/{owner}/{repo}/codespaces/secrets/{secret_name}", "get">(baseUrl, endpoints["codespaces"]["getRepoSecret"]).request,
    getSecretForAuthenticatedUser:
      new RequestMocker<"/user/codespaces/secrets/{secret_name}", "get">(baseUrl, endpoints["codespaces"]["getSecretForAuthenticatedUser"]).request,
    listDevcontainersInRepositoryForAuthenticatedUser:
      new RequestMocker<"/repos/{owner}/{repo}/codespaces/devcontainers", "get">(baseUrl, endpoints["codespaces"]["listDevcontainersInRepositoryForAuthenticatedUser"]).request,
    listForAuthenticatedUser:
      new RequestMocker<"/user/codespaces", "get">(baseUrl, endpoints["codespaces"]["listForAuthenticatedUser"]).request,
    listInOrganization:
      new RequestMocker<"/orgs/{org}/codespaces", "get">(baseUrl, endpoints["codespaces"]["listInOrganization"]).request,
    listInRepositoryForAuthenticatedUser:
      new RequestMocker<"/repos/{owner}/{repo}/codespaces", "get">(baseUrl, endpoints["codespaces"]["listInRepositoryForAuthenticatedUser"]).request,
    listRepoSecrets:
      new RequestMocker<"/repos/{owner}/{repo}/codespaces/secrets", "get">(baseUrl, endpoints["codespaces"]["listRepoSecrets"]).request,
    listRepositoriesForSecretForAuthenticatedUser:
      new RequestMocker<"/user/codespaces/secrets/{secret_name}/repositories", "get">(baseUrl, endpoints["codespaces"]["listRepositoriesForSecretForAuthenticatedUser"]).request,
    listSecretsForAuthenticatedUser:
      new RequestMocker<"/user/codespaces/secrets", "get">(baseUrl, endpoints["codespaces"]["listSecretsForAuthenticatedUser"]).request,
    preFlightWithRepoForAuthenticatedUser:
      new RequestMocker<"/repos/{owner}/{repo}/codespaces/new", "get">(baseUrl, endpoints["codespaces"]["preFlightWithRepoForAuthenticatedUser"]).request,
    removeRepositoryForSecretForAuthenticatedUser:
      new RequestMocker<"/user/codespaces/secrets/{secret_name}/repositories/{repository_id}", "delete">(baseUrl, endpoints["codespaces"]["removeRepositoryForSecretForAuthenticatedUser"]).request,
    repoMachinesForAuthenticatedUser:
      new RequestMocker<"/repos/{owner}/{repo}/codespaces/machines", "get">(baseUrl, endpoints["codespaces"]["repoMachinesForAuthenticatedUser"]).request,
    setRepositoriesForSecretForAuthenticatedUser:
      new RequestMocker<"/user/codespaces/secrets/{secret_name}/repositories", "put">(baseUrl, endpoints["codespaces"]["setRepositoriesForSecretForAuthenticatedUser"]).request,
    startForAuthenticatedUser:
      new RequestMocker<"/user/codespaces/{codespace_name}/start", "post">(baseUrl, endpoints["codespaces"]["startForAuthenticatedUser"]).request,
    stopForAuthenticatedUser:
      new RequestMocker<"/user/codespaces/{codespace_name}/stop", "post">(baseUrl, endpoints["codespaces"]["stopForAuthenticatedUser"]).request,
    stopInOrganization:
      new RequestMocker<"/orgs/{org}/members/{username}/codespaces/{codespace_name}/stop", "post">(baseUrl, endpoints["codespaces"]["stopInOrganization"]).request,
    updateForAuthenticatedUser:
      new RequestMocker<"/user/codespaces/{codespace_name}", "patch">(baseUrl, endpoints["codespaces"]["updateForAuthenticatedUser"]).request,
  },
  dependabot: {
    addSelectedRepoToOrgSecret:
      new RequestMocker<"/orgs/{org}/dependabot/secrets/{secret_name}/repositories/{repository_id}", "put">(baseUrl, endpoints["dependabot"]["addSelectedRepoToOrgSecret"]).request,
    createOrUpdateOrgSecret:
      new RequestMocker<"/orgs/{org}/dependabot/secrets/{secret_name}", "put">(baseUrl, endpoints["dependabot"]["createOrUpdateOrgSecret"]).request,
    createOrUpdateRepoSecret:
      new RequestMocker<"/repos/{owner}/{repo}/dependabot/secrets/{secret_name}", "put">(baseUrl, endpoints["dependabot"]["createOrUpdateRepoSecret"]).request,
    deleteOrgSecret:
      new RequestMocker<"/orgs/{org}/dependabot/secrets/{secret_name}", "delete">(baseUrl, endpoints["dependabot"]["deleteOrgSecret"]).request,
    deleteRepoSecret:
      new RequestMocker<"/repos/{owner}/{repo}/dependabot/secrets/{secret_name}", "delete">(baseUrl, endpoints["dependabot"]["deleteRepoSecret"]).request,
    getOrgPublicKey:
      new RequestMocker<"/orgs/{org}/dependabot/secrets/public-key", "get">(baseUrl, endpoints["dependabot"]["getOrgPublicKey"]).request,
    getOrgSecret:
      new RequestMocker<"/orgs/{org}/dependabot/secrets/{secret_name}", "get">(baseUrl, endpoints["dependabot"]["getOrgSecret"]).request,
    getRepoPublicKey:
      new RequestMocker<"/repos/{owner}/{repo}/dependabot/secrets/public-key", "get">(baseUrl, endpoints["dependabot"]["getRepoPublicKey"]).request,
    getRepoSecret:
      new RequestMocker<"/repos/{owner}/{repo}/dependabot/secrets/{secret_name}", "get">(baseUrl, endpoints["dependabot"]["getRepoSecret"]).request,
    listOrgSecrets:
      new RequestMocker<"/orgs/{org}/dependabot/secrets", "get">(baseUrl, endpoints["dependabot"]["listOrgSecrets"]).request,
    listRepoSecrets:
      new RequestMocker<"/repos/{owner}/{repo}/dependabot/secrets", "get">(baseUrl, endpoints["dependabot"]["listRepoSecrets"]).request,
    listSelectedReposForOrgSecret:
      new RequestMocker<"/orgs/{org}/dependabot/secrets/{secret_name}/repositories", "get">(baseUrl, endpoints["dependabot"]["listSelectedReposForOrgSecret"]).request,
    removeSelectedRepoFromOrgSecret:
      new RequestMocker<"/orgs/{org}/dependabot/secrets/{secret_name}/repositories/{repository_id}", "delete">(baseUrl, endpoints["dependabot"]["removeSelectedRepoFromOrgSecret"]).request,
    setSelectedReposForOrgSecret:
      new RequestMocker<"/orgs/{org}/dependabot/secrets/{secret_name}/repositories", "put">(baseUrl, endpoints["dependabot"]["setSelectedReposForOrgSecret"]).request,
  },
  dependencyGraph: {
    createRepositorySnapshot:
      new RequestMocker<"/repos/{owner}/{repo}/dependency-graph/snapshots", "post">(baseUrl, endpoints["dependencyGraph"]["createRepositorySnapshot"]).request,
    diffRange:
      new RequestMocker<"/repos/{owner}/{repo}/dependency-graph/compare/{basehead}", "get">(baseUrl, endpoints["dependencyGraph"]["diffRange"]).request,
  },
  emojis: {
    get: new RequestMocker<"/emojis", "get">(baseUrl, endpoints["emojis"]["get"]).request,
  },
  enterpriseAdmin: {
    addCustomLabelsToSelfHostedRunnerForEnterprise:
      new RequestMocker<"/enterprises/{enterprise}/actions/runners/{runner_id}/labels", "post">(baseUrl, endpoints["enterpriseAdmin"]["addCustomLabelsToSelfHostedRunnerForEnterprise"]).request,
    disableSelectedOrganizationGithubActionsEnterprise:
      new RequestMocker<"/enterprises/{enterprise}/actions/permissions/organizations/{org_id}", "delete">(baseUrl, endpoints["enterpriseAdmin"]["disableSelectedOrganizationGithubActionsEnterprise"]).request,
    enableSelectedOrganizationGithubActionsEnterprise:
      new RequestMocker<"/enterprises/{enterprise}/actions/permissions/organizations/{org_id}", "put">(baseUrl, endpoints["enterpriseAdmin"]["enableSelectedOrganizationGithubActionsEnterprise"]).request,
    getAllowedActionsEnterprise:
      new RequestMocker<"/enterprises/{enterprise}/actions/permissions/selected-actions", "get">(baseUrl, endpoints["enterpriseAdmin"]["getAllowedActionsEnterprise"]).request,
    getGithubActionsPermissionsEnterprise:
      new RequestMocker<"/enterprises/{enterprise}/actions/permissions", "get">(baseUrl, endpoints["enterpriseAdmin"]["getGithubActionsPermissionsEnterprise"]).request,
    getServerStatistics:
      new RequestMocker<"/enterprise-installation/{enterprise_or_org}/server-statistics", "get">(baseUrl, endpoints["enterpriseAdmin"]["getServerStatistics"]).request,
    listLabelsForSelfHostedRunnerForEnterprise:
      new RequestMocker<"/enterprises/{enterprise}/actions/runners/{runner_id}/labels", "get">(baseUrl, endpoints["enterpriseAdmin"]["listLabelsForSelfHostedRunnerForEnterprise"]).request,
    listSelectedOrganizationsEnabledGithubActionsEnterprise:
      new RequestMocker<"/enterprises/{enterprise}/actions/permissions/organizations", "get">(baseUrl, endpoints["enterpriseAdmin"]["listSelectedOrganizationsEnabledGithubActionsEnterprise"]).request,
    removeAllCustomLabelsFromSelfHostedRunnerForEnterprise:
      new RequestMocker<"/enterprises/{enterprise}/actions/runners/{runner_id}/labels", "delete">(baseUrl, endpoints["enterpriseAdmin"]["removeAllCustomLabelsFromSelfHostedRunnerForEnterprise"]).request,
    removeCustomLabelFromSelfHostedRunnerForEnterprise:
      new RequestMocker<"/enterprises/{enterprise}/actions/runners/{runner_id}/labels/{name}", "delete">(baseUrl, endpoints["enterpriseAdmin"]["removeCustomLabelFromSelfHostedRunnerForEnterprise"]).request,
    setAllowedActionsEnterprise:
      new RequestMocker<"/enterprises/{enterprise}/actions/permissions/selected-actions", "put">(baseUrl, endpoints["enterpriseAdmin"]["setAllowedActionsEnterprise"]).request,
    setCustomLabelsForSelfHostedRunnerForEnterprise:
      new RequestMocker<"/enterprises/{enterprise}/actions/runners/{runner_id}/labels", "put">(baseUrl, endpoints["enterpriseAdmin"]["setCustomLabelsForSelfHostedRunnerForEnterprise"]).request,
    setGithubActionsPermissionsEnterprise:
      new RequestMocker<"/enterprises/{enterprise}/actions/permissions", "put">(baseUrl, endpoints["enterpriseAdmin"]["setGithubActionsPermissionsEnterprise"]).request,
    setSelectedOrganizationsEnabledGithubActionsEnterprise:
      new RequestMocker<"/enterprises/{enterprise}/actions/permissions/organizations", "put">(baseUrl, endpoints["enterpriseAdmin"]["setSelectedOrganizationsEnabledGithubActionsEnterprise"]).request,
  },
  gists: {
    checkIsStarred:
      new RequestMocker<"/gists/{gist_id}/star", "get">(baseUrl, endpoints["gists"]["checkIsStarred"]).request,
    create:
      new RequestMocker<"/gists", "post">(baseUrl, endpoints["gists"]["create"]).request,
    createComment:
      new RequestMocker<"/gists/{gist_id}/comments", "post">(baseUrl, endpoints["gists"]["createComment"]).request,
    delete:
      new RequestMocker<"/gists/{gist_id}", "delete">(baseUrl, endpoints["gists"]["delete"]).request,
    deleteComment:
      new RequestMocker<"/gists/{gist_id}/comments/{comment_id}", "delete">(baseUrl, endpoints["gists"]["deleteComment"]).request,
    fork: new RequestMocker<"/gists/{gist_id}/forks", "post">(baseUrl, endpoints["gists"]["fork"]).request,
    get: new RequestMocker<"/gists/{gist_id}", "get">(baseUrl, endpoints["gists"]["get"]).request,
    getComment:
      new RequestMocker<"/gists/{gist_id}/comments/{comment_id}", "get">(baseUrl, endpoints["gists"]["getComment"]).request,
    getRevision:
      new RequestMocker<"/gists/{gist_id}/{sha}", "get">(baseUrl, endpoints["gists"]["getRevision"]).request,
    list: new RequestMocker<"/gists", "get">(baseUrl, endpoints["gists"]["list"]).request,
    listComments:
      new RequestMocker<"/gists/{gist_id}/comments", "get">(baseUrl, endpoints["gists"]["listComments"]).request,
    listCommits:
      new RequestMocker<"/gists/{gist_id}/commits", "get">(baseUrl, endpoints["gists"]["listCommits"]).request,
    listForUser:
      new RequestMocker<"/users/{username}/gists", "get">(baseUrl, endpoints["gists"]["listForUser"]).request,
    listForks:
      new RequestMocker<"/gists/{gist_id}/forks", "get">(baseUrl, endpoints["gists"]["listForks"]).request,
    listPublic:
      new RequestMocker<"/gists/public", "get">(baseUrl, endpoints["gists"]["listPublic"]).request,
    listStarred:
      new RequestMocker<"/gists/starred", "get">(baseUrl, endpoints["gists"]["listStarred"]).request,
    star: new RequestMocker<"/gists/{gist_id}/star", "put">(baseUrl, endpoints["gists"]["star"]).request,
    unstar:
      new RequestMocker<"/gists/{gist_id}/star", "delete">(baseUrl, endpoints["gists"]["unstar"]).request,
    update:
      new RequestMocker<"/gists/{gist_id}", "patch">(baseUrl, endpoints["gists"]["update"]).request,
    updateComment:
      new RequestMocker<"/gists/{gist_id}/comments/{comment_id}", "patch">(baseUrl, endpoints["gists"]["updateComment"]).request,
  },
  git: {
    createBlob:
      new RequestMocker<"/repos/{owner}/{repo}/git/blobs", "post">(baseUrl, endpoints["git"]["createBlob"]).request,
    createCommit:
      new RequestMocker<"/repos/{owner}/{repo}/git/commits", "post">(baseUrl, endpoints["git"]["createCommit"]).request,
    createRef:
      new RequestMocker<"/repos/{owner}/{repo}/git/refs", "post">(baseUrl, endpoints["git"]["createRef"]).request,
    createTag:
      new RequestMocker<"/repos/{owner}/{repo}/git/tags", "post">(baseUrl, endpoints["git"]["createTag"]).request,
    createTree:
      new RequestMocker<"/repos/{owner}/{repo}/git/trees", "post">(baseUrl, endpoints["git"]["createTree"]).request,
    deleteRef:
      new RequestMocker<"/repos/{owner}/{repo}/git/refs/{ref}", "delete">(baseUrl, endpoints["git"]["deleteRef"]).request,
    getBlob:
      new RequestMocker<"/repos/{owner}/{repo}/git/blobs/{file_sha}", "get">(baseUrl, endpoints["git"]["getBlob"]).request,
    getCommit:
      new RequestMocker<"/repos/{owner}/{repo}/git/commits/{commit_sha}", "get">(baseUrl, endpoints["git"]["getCommit"]).request,
    getRef:
      new RequestMocker<"/repos/{owner}/{repo}/git/ref/{ref}", "get">(baseUrl, endpoints["git"]["getRef"]).request,
    getTag:
      new RequestMocker<"/repos/{owner}/{repo}/git/tags/{tag_sha}", "get">(baseUrl, endpoints["git"]["getTag"]).request,
    getTree:
      new RequestMocker<"/repos/{owner}/{repo}/git/trees/{tree_sha}", "get">(baseUrl, endpoints["git"]["getTree"]).request,
    listMatchingRefs:
      new RequestMocker<"/repos/{owner}/{repo}/git/matching-refs/{ref}", "get">(baseUrl, endpoints["git"]["listMatchingRefs"]).request,
    updateRef:
      new RequestMocker<"/repos/{owner}/{repo}/git/refs/{ref}", "patch">(baseUrl, endpoints["git"]["updateRef"]).request,
  },
  gitignore: {
    getAllTemplates:
      new RequestMocker<"/gitignore/templates", "get">(baseUrl, endpoints["gitignore"]["getAllTemplates"]).request,
    getTemplate:
      new RequestMocker<"/gitignore/templates/{name}", "get">(baseUrl, endpoints["gitignore"]["getTemplate"]).request,
  },
  interactions: {
    getRestrictionsForAuthenticatedUser:
      new RequestMocker<"/user/interaction-limits", "get">(baseUrl, endpoints["interactions"]["getRestrictionsForAuthenticatedUser"]).request,
    getRestrictionsForOrg:
      new RequestMocker<"/orgs/{org}/interaction-limits", "get">(baseUrl, endpoints["interactions"]["getRestrictionsForOrg"]).request,
    getRestrictionsForRepo:
      new RequestMocker<"/repos/{owner}/{repo}/interaction-limits", "get">(baseUrl, endpoints["interactions"]["getRestrictionsForRepo"]).request,
    getRestrictionsForYourPublicRepos:
      new RequestMocker<"/user/interaction-limits", "get">(baseUrl, endpoints["interactions"]["getRestrictionsForYourPublicRepos"]).request,
    removeRestrictionsForAuthenticatedUser:
      new RequestMocker<"/user/interaction-limits", "delete">(baseUrl, endpoints["interactions"]["removeRestrictionsForAuthenticatedUser"]).request,
    removeRestrictionsForOrg:
      new RequestMocker<"/orgs/{org}/interaction-limits", "delete">(baseUrl, endpoints["interactions"]["removeRestrictionsForOrg"]).request,
    removeRestrictionsForRepo:
      new RequestMocker<"/repos/{owner}/{repo}/interaction-limits", "delete">(baseUrl, endpoints["interactions"]["removeRestrictionsForRepo"]).request,
    removeRestrictionsForYourPublicRepos:
      new RequestMocker<"/user/interaction-limits", "delete">(baseUrl, endpoints["interactions"]["removeRestrictionsForYourPublicRepos"]).request,
    setRestrictionsForAuthenticatedUser:
      new RequestMocker<"/user/interaction-limits", "put">(baseUrl, endpoints["interactions"]["setRestrictionsForAuthenticatedUser"]).request,
    setRestrictionsForOrg:
      new RequestMocker<"/orgs/{org}/interaction-limits", "put">(baseUrl, endpoints["interactions"]["setRestrictionsForOrg"]).request,
    setRestrictionsForRepo:
      new RequestMocker<"/repos/{owner}/{repo}/interaction-limits", "put">(baseUrl, endpoints["interactions"]["setRestrictionsForRepo"]).request,
    setRestrictionsForYourPublicRepos:
      new RequestMocker<"/user/interaction-limits", "put">(baseUrl, endpoints["interactions"]["setRestrictionsForYourPublicRepos"]).request,
  },
  issues: {
    addAssignees:
      new RequestMocker<"/repos/{owner}/{repo}/issues/{issue_number}/assignees", "post">(baseUrl, endpoints["issues"]["addAssignees"]).request,
    addLabels:
      new RequestMocker<"/repos/{owner}/{repo}/issues/{issue_number}/labels", "post">(baseUrl, endpoints["issues"]["addLabels"]).request,
    checkUserCanBeAssigned:
      new RequestMocker<"/repos/{owner}/{repo}/assignees/{assignee}", "get">(baseUrl, endpoints["issues"]["checkUserCanBeAssigned"]).request,
    create:
      new RequestMocker<"/repos/{owner}/{repo}/issues", "post">(baseUrl, endpoints["issues"]["create"]).request,
    createComment:
      new RequestMocker<"/repos/{owner}/{repo}/issues/{issue_number}/comments", "post">(baseUrl, endpoints["issues"]["createComment"]).request,
    createLabel:
      new RequestMocker<"/repos/{owner}/{repo}/labels", "post">(baseUrl, endpoints["issues"]["createLabel"]).request,
    createMilestone:
      new RequestMocker<"/repos/{owner}/{repo}/milestones", "post">(baseUrl, endpoints["issues"]["createMilestone"]).request,
    deleteComment:
      new RequestMocker<"/repos/{owner}/{repo}/issues/comments/{comment_id}", "delete">(baseUrl, endpoints["issues"]["deleteComment"]).request,
    deleteLabel:
      new RequestMocker<"/repos/{owner}/{repo}/labels/{name}", "delete">(baseUrl, endpoints["issues"]["deleteLabel"]).request,
    deleteMilestone:
      new RequestMocker<"/repos/{owner}/{repo}/milestones/{milestone_number}", "delete">(baseUrl, endpoints["issues"]["deleteMilestone"]).request,
    get: new RequestMocker<"/repos/{owner}/{repo}/issues/{issue_number}", "get">(baseUrl, endpoints["issues"]["get"]).request,
    getComment:
      new RequestMocker<"/repos/{owner}/{repo}/issues/comments/{comment_id}", "get">(baseUrl, endpoints["issues"]["getComment"]).request,
    getEvent:
      new RequestMocker<"/repos/{owner}/{repo}/issues/events/{event_id}", "get">(baseUrl, endpoints["issues"]["getEvent"]).request,
    getLabel:
      new RequestMocker<"/repos/{owner}/{repo}/labels/{name}", "get">(baseUrl, endpoints["issues"]["getLabel"]).request,
    getMilestone:
      new RequestMocker<"/repos/{owner}/{repo}/milestones/{milestone_number}", "get">(baseUrl, endpoints["issues"]["getMilestone"]).request,
    list: new RequestMocker<"/issues", "get">(baseUrl, endpoints["issues"]["list"]).request,
    listAssignees:
      new RequestMocker<"/repos/{owner}/{repo}/assignees", "get">(baseUrl, endpoints["issues"]["listAssignees"]).request,
    listComments:
      new RequestMocker<"/repos/{owner}/{repo}/issues/{issue_number}/comments", "get">(baseUrl, endpoints["issues"]["listComments"]).request,
    listCommentsForRepo:
      new RequestMocker<"/repos/{owner}/{repo}/issues/comments", "get">(baseUrl, endpoints["issues"]["listCommentsForRepo"]).request,
    listEvents:
      new RequestMocker<"/repos/{owner}/{repo}/issues/{issue_number}/events", "get">(baseUrl, endpoints["issues"]["listEvents"]).request,
    listEventsForRepo:
      new RequestMocker<"/repos/{owner}/{repo}/issues/events", "get">(baseUrl, endpoints["issues"]["listEventsForRepo"]).request,
    listEventsForTimeline:
      new RequestMocker<"/repos/{owner}/{repo}/issues/{issue_number}/timeline", "get">(baseUrl, endpoints["issues"]["listEventsForTimeline"]).request,
    listForAuthenticatedUser:
      new RequestMocker<"/user/issues", "get">(baseUrl, endpoints["issues"]["listForAuthenticatedUser"]).request,
    listForOrg:
      new RequestMocker<"/orgs/{org}/issues", "get">(baseUrl, endpoints["issues"]["listForOrg"]).request,
    listForRepo:
      new RequestMocker<"/repos/{owner}/{repo}/issues", "get">(baseUrl, endpoints["issues"]["listForRepo"]).request,
    listLabelsForMilestone:
      new RequestMocker<"/repos/{owner}/{repo}/milestones/{milestone_number}/labels", "get">(baseUrl, endpoints["issues"]["listLabelsForMilestone"]).request,
    listLabelsForRepo:
      new RequestMocker<"/repos/{owner}/{repo}/labels", "get">(baseUrl, endpoints["issues"]["listLabelsForRepo"]).request,
    listLabelsOnIssue:
      new RequestMocker<"/repos/{owner}/{repo}/issues/{issue_number}/labels", "get">(baseUrl, endpoints["issues"]["listLabelsOnIssue"]).request,
    listMilestones:
      new RequestMocker<"/repos/{owner}/{repo}/milestones", "get">(baseUrl, endpoints["issues"]["listMilestones"]).request,
    lock: new RequestMocker<"/repos/{owner}/{repo}/issues/{issue_number}/lock", "put">(baseUrl, endpoints["issues"]["lock"]).request,
    removeAllLabels:
      new RequestMocker<"/repos/{owner}/{repo}/issues/{issue_number}/labels", "delete">(baseUrl, endpoints["issues"]["removeAllLabels"]).request,
    removeAssignees:
      new RequestMocker<"/repos/{owner}/{repo}/issues/{issue_number}/assignees", "delete">(baseUrl, endpoints["issues"]["removeAssignees"]).request,
    removeLabel:
      new RequestMocker<"/repos/{owner}/{repo}/issues/{issue_number}/labels/{name}", "delete">(baseUrl, endpoints["issues"]["removeLabel"]).request,
    setLabels:
      new RequestMocker<"/repos/{owner}/{repo}/issues/{issue_number}/labels", "put">(baseUrl, endpoints["issues"]["setLabels"]).request,
    unlock:
      new RequestMocker<"/repos/{owner}/{repo}/issues/{issue_number}/lock", "delete">(baseUrl, endpoints["issues"]["unlock"]).request,
    update:
      new RequestMocker<"/repos/{owner}/{repo}/issues/{issue_number}", "patch">(baseUrl, endpoints["issues"]["update"]).request,
    updateComment:
      new RequestMocker<"/repos/{owner}/{repo}/issues/comments/{comment_id}", "patch">(baseUrl, endpoints["issues"]["updateComment"]).request,
    updateLabel:
      new RequestMocker<"/repos/{owner}/{repo}/labels/{name}", "patch">(baseUrl, endpoints["issues"]["updateLabel"]).request,
    updateMilestone:
      new RequestMocker<"/repos/{owner}/{repo}/milestones/{milestone_number}", "patch">(baseUrl, endpoints["issues"]["updateMilestone"]).request,
  },
  licenses: {
    get: new RequestMocker<"/licenses/{license}", "get">(baseUrl, endpoints["licenses"]["get"]).request,
    getAllCommonlyUsed:
      new RequestMocker<"/licenses", "get">(baseUrl, endpoints["licenses"]["getAllCommonlyUsed"]).request,
    getForRepo:
      new RequestMocker<"/repos/{owner}/{repo}/license", "get">(baseUrl, endpoints["licenses"]["getForRepo"]).request,
  },
  markdown: {
    render:
      new RequestMocker<"/markdown", "post">(baseUrl, endpoints["markdown"]["render"]).request,
    renderRaw:
      new RequestMocker<"/markdown/raw", "post">(baseUrl, endpoints["markdown"]["renderRaw"]).request,
  },
  meta: {
    get: new RequestMocker<"/meta", "get">(baseUrl, endpoints["meta"]["get"]).request,
    getOctocat:
      new RequestMocker<"/octocat", "get">(baseUrl, endpoints["meta"]["getOctocat"]).request,
    getZen:
      new RequestMocker<"/zen", "get">(baseUrl, endpoints["meta"]["getZen"]).request,
    root: new RequestMocker<"/", "get">(baseUrl, endpoints["meta"]["root"]).request,
  },
  migrations: {
    cancelImport:
      new RequestMocker<"/repos/{owner}/{repo}/import", "delete">(baseUrl, endpoints["migrations"]["cancelImport"]).request,
    deleteArchiveForAuthenticatedUser:
      new RequestMocker<"/user/migrations/{migration_id}/archive", "delete">(baseUrl, endpoints["migrations"]["deleteArchiveForAuthenticatedUser"]).request,
    deleteArchiveForOrg:
      new RequestMocker<"/orgs/{org}/migrations/{migration_id}/archive", "delete">(baseUrl, endpoints["migrations"]["deleteArchiveForOrg"]).request,
    downloadArchiveForOrg:
      new RequestMocker<"/orgs/{org}/migrations/{migration_id}/archive", "get">(baseUrl, endpoints["migrations"]["downloadArchiveForOrg"]).request,
    getArchiveForAuthenticatedUser:
      new RequestMocker<"/user/migrations/{migration_id}/archive", "get">(baseUrl, endpoints["migrations"]["getArchiveForAuthenticatedUser"]).request,
    getCommitAuthors:
      new RequestMocker<"/repos/{owner}/{repo}/import/authors", "get">(baseUrl, endpoints["migrations"]["getCommitAuthors"]).request,
    getImportStatus:
      new RequestMocker<"/repos/{owner}/{repo}/import", "get">(baseUrl, endpoints["migrations"]["getImportStatus"]).request,
    getLargeFiles:
      new RequestMocker<"/repos/{owner}/{repo}/import/large_files", "get">(baseUrl, endpoints["migrations"]["getLargeFiles"]).request,
    getStatusForAuthenticatedUser:
      new RequestMocker<"/user/migrations/{migration_id}", "get">(baseUrl, endpoints["migrations"]["getStatusForAuthenticatedUser"]).request,
    getStatusForOrg:
      new RequestMocker<"/orgs/{org}/migrations/{migration_id}", "get">(baseUrl, endpoints["migrations"]["getStatusForOrg"]).request,
    listForAuthenticatedUser:
      new RequestMocker<"/user/migrations", "get">(baseUrl, endpoints["migrations"]["listForAuthenticatedUser"]).request,
    listForOrg:
      new RequestMocker<"/orgs/{org}/migrations", "get">(baseUrl, endpoints["migrations"]["listForOrg"]).request,
    listReposForAuthenticatedUser:
      new RequestMocker<"/user/migrations/{migration_id}/repositories", "get">(baseUrl, endpoints["migrations"]["listReposForAuthenticatedUser"]).request,
    listReposForOrg:
      new RequestMocker<"/orgs/{org}/migrations/{migration_id}/repositories", "get">(baseUrl, endpoints["migrations"]["listReposForOrg"]).request,
    listReposForUser:
      new RequestMocker<"/user/migrations/{migration_id}/repositories", "get">(baseUrl, endpoints["migrations"]["listReposForUser"]).request,
    mapCommitAuthor:
      new RequestMocker<"/repos/{owner}/{repo}/import/authors/{author_id}", "patch">(baseUrl, endpoints["migrations"]["mapCommitAuthor"]).request,
    setLfsPreference:
      new RequestMocker<"/repos/{owner}/{repo}/import/lfs", "patch">(baseUrl, endpoints["migrations"]["setLfsPreference"]).request,
    startForAuthenticatedUser:
      new RequestMocker<"/user/migrations", "post">(baseUrl, endpoints["migrations"]["startForAuthenticatedUser"]).request,
    startForOrg:
      new RequestMocker<"/orgs/{org}/migrations", "post">(baseUrl, endpoints["migrations"]["startForOrg"]).request,
    startImport:
      new RequestMocker<"/repos/{owner}/{repo}/import", "put">(baseUrl, endpoints["migrations"]["startImport"]).request,
    unlockRepoForAuthenticatedUser:
      new RequestMocker<"/user/migrations/{migration_id}/repos/{repo_name}/lock", "delete">(baseUrl, endpoints["migrations"]["unlockRepoForAuthenticatedUser"]).request,
    unlockRepoForOrg:
      new RequestMocker<"/orgs/{org}/migrations/{migration_id}/repos/{repo_name}/lock", "delete">(baseUrl, endpoints["migrations"]["unlockRepoForOrg"]).request,
    updateImport:
      new RequestMocker<"/repos/{owner}/{repo}/import", "patch">(baseUrl, endpoints["migrations"]["updateImport"]).request,
  },
  orgs: {
    addSecurityManagerTeam:
      new RequestMocker<"/orgs/{org}/security-managers/teams/{team_slug}", "put">(baseUrl, endpoints["orgs"]["addSecurityManagerTeam"]).request,
    blockUser:
      new RequestMocker<"/orgs/{org}/blocks/{username}", "put">(baseUrl, endpoints["orgs"]["blockUser"]).request,
    cancelInvitation:
      new RequestMocker<"/orgs/{org}/invitations/{invitation_id}", "delete">(baseUrl, endpoints["orgs"]["cancelInvitation"]).request,
    checkBlockedUser:
      new RequestMocker<"/orgs/{org}/blocks/{username}", "get">(baseUrl, endpoints["orgs"]["checkBlockedUser"]).request,
    checkMembershipForUser:
      new RequestMocker<"/orgs/{org}/members/{username}", "get">(baseUrl, endpoints["orgs"]["checkMembershipForUser"]).request,
    checkPublicMembershipForUser:
      new RequestMocker<"/orgs/{org}/public_members/{username}", "get">(baseUrl, endpoints["orgs"]["checkPublicMembershipForUser"]).request,
    convertMemberToOutsideCollaborator:
      new RequestMocker<"/orgs/{org}/outside_collaborators/{username}", "put">(baseUrl, endpoints["orgs"]["convertMemberToOutsideCollaborator"]).request,
    createCustomRole:
      new RequestMocker<"/orgs/{org}/custom_roles", "post">(baseUrl, endpoints["orgs"]["createCustomRole"]).request,
    createInvitation:
      new RequestMocker<"/orgs/{org}/invitations", "post">(baseUrl, endpoints["orgs"]["createInvitation"]).request,
    createWebhook:
      new RequestMocker<"/orgs/{org}/hooks", "post">(baseUrl, endpoints["orgs"]["createWebhook"]).request,
    deleteCustomRole:
      new RequestMocker<"/orgs/{org}/custom_roles/{role_id}", "delete">(baseUrl, endpoints["orgs"]["deleteCustomRole"]).request,
    deleteWebhook:
      new RequestMocker<"/orgs/{org}/hooks/{hook_id}", "delete">(baseUrl, endpoints["orgs"]["deleteWebhook"]).request,
    enableOrDisableSecurityProductOnAllOrgRepos:
      new RequestMocker<"/orgs/{org}/{security_product}/{enablement}", "post">(baseUrl, endpoints["orgs"]["enableOrDisableSecurityProductOnAllOrgRepos"]).request,
    get: new RequestMocker<"/orgs/{org}", "get">(baseUrl, endpoints["orgs"]["get"]).request,
    getMembershipForAuthenticatedUser:
      new RequestMocker<"/user/memberships/orgs/{org}", "get">(baseUrl, endpoints["orgs"]["getMembershipForAuthenticatedUser"]).request,
    getMembershipForUser:
      new RequestMocker<"/orgs/{org}/memberships/{username}", "get">(baseUrl, endpoints["orgs"]["getMembershipForUser"]).request,
    getWebhook:
      new RequestMocker<"/orgs/{org}/hooks/{hook_id}", "get">(baseUrl, endpoints["orgs"]["getWebhook"]).request,
    getWebhookConfigForOrg:
      new RequestMocker<"/orgs/{org}/hooks/{hook_id}/config", "get">(baseUrl, endpoints["orgs"]["getWebhookConfigForOrg"]).request,
    getWebhookDelivery:
      new RequestMocker<"/orgs/{org}/hooks/{hook_id}/deliveries/{delivery_id}", "get">(baseUrl, endpoints["orgs"]["getWebhookDelivery"]).request,
    list: new RequestMocker<"/organizations", "get">(baseUrl, endpoints["orgs"]["list"]).request,
    listAppInstallations:
      new RequestMocker<"/orgs/{org}/installations", "get">(baseUrl, endpoints["orgs"]["listAppInstallations"]).request,
    listBlockedUsers:
      new RequestMocker<"/orgs/{org}/blocks", "get">(baseUrl, endpoints["orgs"]["listBlockedUsers"]).request,
    listCustomRoles:
      new RequestMocker<"/organizations/{organization_id}/custom_roles", "get">(baseUrl, endpoints["orgs"]["listCustomRoles"]).request,
    listFailedInvitations:
      new RequestMocker<"/orgs/{org}/failed_invitations", "get">(baseUrl, endpoints["orgs"]["listFailedInvitations"]).request,
    listFineGrainedPermissions:
      new RequestMocker<"/orgs/{org}/fine_grained_permissions", "get">(baseUrl, endpoints["orgs"]["listFineGrainedPermissions"]).request,
    listForAuthenticatedUser:
      new RequestMocker<"/user/orgs", "get">(baseUrl, endpoints["orgs"]["listForAuthenticatedUser"]).request,
    listForUser:
      new RequestMocker<"/users/{username}/orgs", "get">(baseUrl, endpoints["orgs"]["listForUser"]).request,
    listInvitationTeams:
      new RequestMocker<"/orgs/{org}/invitations/{invitation_id}/teams", "get">(baseUrl, endpoints["orgs"]["listInvitationTeams"]).request,
    listMembers:
      new RequestMocker<"/orgs/{org}/members", "get">(baseUrl, endpoints["orgs"]["listMembers"]).request,
    listMembershipsForAuthenticatedUser:
      new RequestMocker<"/user/memberships/orgs", "get">(baseUrl, endpoints["orgs"]["listMembershipsForAuthenticatedUser"]).request,
    listOutsideCollaborators:
      new RequestMocker<"/orgs/{org}/outside_collaborators", "get">(baseUrl, endpoints["orgs"]["listOutsideCollaborators"]).request,
    listPendingInvitations:
      new RequestMocker<"/orgs/{org}/invitations", "get">(baseUrl, endpoints["orgs"]["listPendingInvitations"]).request,
    listPublicMembers:
      new RequestMocker<"/orgs/{org}/public_members", "get">(baseUrl, endpoints["orgs"]["listPublicMembers"]).request,
    listSecurityManagerTeams:
      new RequestMocker<"/orgs/{org}/security-managers", "get">(baseUrl, endpoints["orgs"]["listSecurityManagerTeams"]).request,
    listWebhookDeliveries:
      new RequestMocker<"/orgs/{org}/hooks/{hook_id}/deliveries", "get">(baseUrl, endpoints["orgs"]["listWebhookDeliveries"]).request,
    listWebhooks:
      new RequestMocker<"/orgs/{org}/hooks", "get">(baseUrl, endpoints["orgs"]["listWebhooks"]).request,
    pingWebhook:
      new RequestMocker<"/orgs/{org}/hooks/{hook_id}/pings", "post">(baseUrl, endpoints["orgs"]["pingWebhook"]).request,
    redeliverWebhookDelivery:
      new RequestMocker<"/orgs/{org}/hooks/{hook_id}/deliveries/{delivery_id}/attempts", "post">(baseUrl, endpoints["orgs"]["redeliverWebhookDelivery"]).request,
    removeMember:
      new RequestMocker<"/orgs/{org}/members/{username}", "delete">(baseUrl, endpoints["orgs"]["removeMember"]).request,
    removeMembershipForUser:
      new RequestMocker<"/orgs/{org}/memberships/{username}", "delete">(baseUrl, endpoints["orgs"]["removeMembershipForUser"]).request,
    removeOutsideCollaborator:
      new RequestMocker<"/orgs/{org}/outside_collaborators/{username}", "delete">(baseUrl, endpoints["orgs"]["removeOutsideCollaborator"]).request,
    removePublicMembershipForAuthenticatedUser:
      new RequestMocker<"/orgs/{org}/public_members/{username}", "delete">(baseUrl, endpoints["orgs"]["removePublicMembershipForAuthenticatedUser"]).request,
    removeSecurityManagerTeam:
      new RequestMocker<"/orgs/{org}/security-managers/teams/{team_slug}", "delete">(baseUrl, endpoints["orgs"]["removeSecurityManagerTeam"]).request,
    setMembershipForUser:
      new RequestMocker<"/orgs/{org}/memberships/{username}", "put">(baseUrl, endpoints["orgs"]["setMembershipForUser"]).request,
    setPublicMembershipForAuthenticatedUser:
      new RequestMocker<"/orgs/{org}/public_members/{username}", "put">(baseUrl, endpoints["orgs"]["setPublicMembershipForAuthenticatedUser"]).request,
    unblockUser:
      new RequestMocker<"/orgs/{org}/blocks/{username}", "delete">(baseUrl, endpoints["orgs"]["unblockUser"]).request,
    update:
      new RequestMocker<"/orgs/{org}", "patch">(baseUrl, endpoints["orgs"]["update"]).request,
    updateCustomRole:
      new RequestMocker<"/orgs/{org}/custom_roles/{role_id}", "patch">(baseUrl, endpoints["orgs"]["updateCustomRole"]).request,
    updateMembershipForAuthenticatedUser:
      new RequestMocker<"/user/memberships/orgs/{org}", "patch">(baseUrl, endpoints["orgs"]["updateMembershipForAuthenticatedUser"]).request,
    updateWebhook:
      new RequestMocker<"/orgs/{org}/hooks/{hook_id}", "patch">(baseUrl, endpoints["orgs"]["updateWebhook"]).request,
    updateWebhookConfigForOrg:
      new RequestMocker<"/orgs/{org}/hooks/{hook_id}/config", "patch">(baseUrl, endpoints["orgs"]["updateWebhookConfigForOrg"]).request,
  },
  packages: {
    deletePackageForAuthenticatedUser:
      new RequestMocker<"/user/packages/{package_type}/{package_name}", "delete">(baseUrl, endpoints["packages"]["deletePackageForAuthenticatedUser"]).request,
    deletePackageForOrg:
      new RequestMocker<"/orgs/{org}/packages/{package_type}/{package_name}", "delete">(baseUrl, endpoints["packages"]["deletePackageForOrg"]).request,
    deletePackageForUser:
      new RequestMocker<"/users/{username}/packages/{package_type}/{package_name}", "delete">(baseUrl, endpoints["packages"]["deletePackageForUser"]).request,
    deletePackageVersionForAuthenticatedUser:
      new RequestMocker<"/user/packages/{package_type}/{package_name}/versions/{package_version_id}", "delete">(baseUrl, endpoints["packages"]["deletePackageVersionForAuthenticatedUser"]).request,
    deletePackageVersionForOrg:
      new RequestMocker<"/orgs/{org}/packages/{package_type}/{package_name}/versions/{package_version_id}", "delete">(baseUrl, endpoints["packages"]["deletePackageVersionForOrg"]).request,
    deletePackageVersionForUser:
      new RequestMocker<"/users/{username}/packages/{package_type}/{package_name}/versions/{package_version_id}", "delete">(baseUrl, endpoints["packages"]["deletePackageVersionForUser"]).request,
    getAllPackageVersionsForAPackageOwnedByAnOrg:
      new RequestMocker<"/orgs/{org}/packages/{package_type}/{package_name}/versions", "get">(baseUrl, endpoints["packages"]["getAllPackageVersionsForAPackageOwnedByAnOrg"]).request,
    getAllPackageVersionsForAPackageOwnedByTheAuthenticatedUser:
      new RequestMocker<"/user/packages/{package_type}/{package_name}/versions", "get">(baseUrl, endpoints["packages"]["getAllPackageVersionsForAPackageOwnedByTheAuthenticatedUser"]).request,
    getAllPackageVersionsForPackageOwnedByAuthenticatedUser:
      new RequestMocker<"/user/packages/{package_type}/{package_name}/versions", "get">(baseUrl, endpoints["packages"]["getAllPackageVersionsForPackageOwnedByAuthenticatedUser"]).request,
    getAllPackageVersionsForPackageOwnedByOrg:
      new RequestMocker<"/orgs/{org}/packages/{package_type}/{package_name}/versions", "get">(baseUrl, endpoints["packages"]["getAllPackageVersionsForPackageOwnedByOrg"]).request,
    getAllPackageVersionsForPackageOwnedByUser:
      new RequestMocker<"/users/{username}/packages/{package_type}/{package_name}/versions", "get">(baseUrl, endpoints["packages"]["getAllPackageVersionsForPackageOwnedByUser"]).request,
    getPackageForAuthenticatedUser:
      new RequestMocker<"/user/packages/{package_type}/{package_name}", "get">(baseUrl, endpoints["packages"]["getPackageForAuthenticatedUser"]).request,
    getPackageForOrganization:
      new RequestMocker<"/orgs/{org}/packages/{package_type}/{package_name}", "get">(baseUrl, endpoints["packages"]["getPackageForOrganization"]).request,
    getPackageForUser:
      new RequestMocker<"/users/{username}/packages/{package_type}/{package_name}", "get">(baseUrl, endpoints["packages"]["getPackageForUser"]).request,
    getPackageVersionForAuthenticatedUser:
      new RequestMocker<"/user/packages/{package_type}/{package_name}/versions/{package_version_id}", "get">(baseUrl, endpoints["packages"]["getPackageVersionForAuthenticatedUser"]).request,
    getPackageVersionForOrganization:
      new RequestMocker<"/orgs/{org}/packages/{package_type}/{package_name}/versions/{package_version_id}", "get">(baseUrl, endpoints["packages"]["getPackageVersionForOrganization"]).request,
    getPackageVersionForUser:
      new RequestMocker<"/users/{username}/packages/{package_type}/{package_name}/versions/{package_version_id}", "get">(baseUrl, endpoints["packages"]["getPackageVersionForUser"]).request,
    listPackagesForAuthenticatedUser:
      new RequestMocker<"/user/packages", "get">(baseUrl, endpoints["packages"]["listPackagesForAuthenticatedUser"]).request,
    listPackagesForOrganization:
      new RequestMocker<"/orgs/{org}/packages", "get">(baseUrl, endpoints["packages"]["listPackagesForOrganization"]).request,
    listPackagesForUser:
      new RequestMocker<"/users/{username}/packages", "get">(baseUrl, endpoints["packages"]["listPackagesForUser"]).request,
    restorePackageForAuthenticatedUser:
      new RequestMocker<"/user/packages/{package_type}/{package_name}/restore", "post">(baseUrl, endpoints["packages"]["restorePackageForAuthenticatedUser"]).request,
    restorePackageForOrg:
      new RequestMocker<"/orgs/{org}/packages/{package_type}/{package_name}/restore", "post">(baseUrl, endpoints["packages"]["restorePackageForOrg"]).request,
    restorePackageForUser:
      new RequestMocker<"/users/{username}/packages/{package_type}/{package_name}/restore", "post">(baseUrl, endpoints["packages"]["restorePackageForUser"]).request,
    restorePackageVersionForAuthenticatedUser:
      new RequestMocker<"/user/packages/{package_type}/{package_name}/versions/{package_version_id}/restore", "post">(baseUrl, endpoints["packages"]["restorePackageVersionForAuthenticatedUser"]).request,
    restorePackageVersionForOrg:
      new RequestMocker<"/orgs/{org}/packages/{package_type}/{package_name}/versions/{package_version_id}/restore", "post">(baseUrl, endpoints["packages"]["restorePackageVersionForOrg"]).request,
    restorePackageVersionForUser:
      new RequestMocker<"/users/{username}/packages/{package_type}/{package_name}/versions/{package_version_id}/restore", "post">(baseUrl, endpoints["packages"]["restorePackageVersionForUser"]).request,
  },
  projects: {
    addCollaborator:
      new RequestMocker<"/projects/{project_id}/collaborators/{username}", "put">(baseUrl, endpoints["projects"]["addCollaborator"]).request,
    createCard:
      new RequestMocker<"/projects/columns/{column_id}/cards", "post">(baseUrl, endpoints["projects"]["createCard"]).request,
    createColumn:
      new RequestMocker<"/projects/{project_id}/columns", "post">(baseUrl, endpoints["projects"]["createColumn"]).request,
    createForAuthenticatedUser:
      new RequestMocker<"/user/projects", "post">(baseUrl, endpoints["projects"]["createForAuthenticatedUser"]).request,
    createForOrg:
      new RequestMocker<"/orgs/{org}/projects", "post">(baseUrl, endpoints["projects"]["createForOrg"]).request,
    createForRepo:
      new RequestMocker<"/repos/{owner}/{repo}/projects", "post">(baseUrl, endpoints["projects"]["createForRepo"]).request,
    delete:
      new RequestMocker<"/projects/{project_id}", "delete">(baseUrl, endpoints["projects"]["delete"]).request,
    deleteCard:
      new RequestMocker<"/projects/columns/cards/{card_id}", "delete">(baseUrl, endpoints["projects"]["deleteCard"]).request,
    deleteColumn:
      new RequestMocker<"/projects/columns/{column_id}", "delete">(baseUrl, endpoints["projects"]["deleteColumn"]).request,
    get: new RequestMocker<"/projects/{project_id}", "get">(baseUrl, endpoints["projects"]["get"]).request,
    getCard:
      new RequestMocker<"/projects/columns/cards/{card_id}", "get">(baseUrl, endpoints["projects"]["getCard"]).request,
    getColumn:
      new RequestMocker<"/projects/columns/{column_id}", "get">(baseUrl, endpoints["projects"]["getColumn"]).request,
    getPermissionForUser:
      new RequestMocker<"/projects/{project_id}/collaborators/{username}/permission", "get">(baseUrl, endpoints["projects"]["getPermissionForUser"]).request,
    listCards:
      new RequestMocker<"/projects/columns/{column_id}/cards", "get">(baseUrl, endpoints["projects"]["listCards"]).request,
    listCollaborators:
      new RequestMocker<"/projects/{project_id}/collaborators", "get">(baseUrl, endpoints["projects"]["listCollaborators"]).request,
    listColumns:
      new RequestMocker<"/projects/{project_id}/columns", "get">(baseUrl, endpoints["projects"]["listColumns"]).request,
    listForOrg:
      new RequestMocker<"/orgs/{org}/projects", "get">(baseUrl, endpoints["projects"]["listForOrg"]).request,
    listForRepo:
      new RequestMocker<"/repos/{owner}/{repo}/projects", "get">(baseUrl, endpoints["projects"]["listForRepo"]).request,
    listForUser:
      new RequestMocker<"/users/{username}/projects", "get">(baseUrl, endpoints["projects"]["listForUser"]).request,
    moveCard:
      new RequestMocker<"/projects/columns/cards/{card_id}/moves", "post">(baseUrl, endpoints["projects"]["moveCard"]).request,
    moveColumn:
      new RequestMocker<"/projects/columns/{column_id}/moves", "post">(baseUrl, endpoints["projects"]["moveColumn"]).request,
    removeCollaborator:
      new RequestMocker<"/projects/{project_id}/collaborators/{username}", "delete">(baseUrl, endpoints["projects"]["removeCollaborator"]).request,
    update:
      new RequestMocker<"/projects/{project_id}", "patch">(baseUrl, endpoints["projects"]["update"]).request,
    updateCard:
      new RequestMocker<"/projects/columns/cards/{card_id}", "patch">(baseUrl, endpoints["projects"]["updateCard"]).request,
    updateColumn:
      new RequestMocker<"/projects/columns/{column_id}", "patch">(baseUrl, endpoints["projects"]["updateColumn"]).request,
  },
  pulls: {
    checkIfMerged:
      new RequestMocker<"/repos/{owner}/{repo}/pulls/{pull_number}/merge", "get">(baseUrl, endpoints["pulls"]["checkIfMerged"]).request,
    create:
      new RequestMocker<"/repos/{owner}/{repo}/pulls", "post">(baseUrl, endpoints["pulls"]["create"]).request,
    createReplyForReviewComment:
      new RequestMocker<"/repos/{owner}/{repo}/pulls/{pull_number}/comments/{comment_id}/replies", "post">(baseUrl, endpoints["pulls"]["createReplyForReviewComment"]).request,
    createReview:
      new RequestMocker<"/repos/{owner}/{repo}/pulls/{pull_number}/reviews", "post">(baseUrl, endpoints["pulls"]["createReview"]).request,
    createReviewComment:
      new RequestMocker<"/repos/{owner}/{repo}/pulls/{pull_number}/comments", "post">(baseUrl, endpoints["pulls"]["createReviewComment"]).request,
    deletePendingReview:
      new RequestMocker<"/repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}", "delete">(baseUrl, endpoints["pulls"]["deletePendingReview"]).request,
    deleteReviewComment:
      new RequestMocker<"/repos/{owner}/{repo}/pulls/comments/{comment_id}", "delete">(baseUrl, endpoints["pulls"]["deleteReviewComment"]).request,
    dismissReview:
      new RequestMocker<"/repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/dismissals", "put">(baseUrl, endpoints["pulls"]["dismissReview"]).request,
    get: new RequestMocker<"/repos/{owner}/{repo}/pulls/{pull_number}", "get">(baseUrl, endpoints["pulls"]["get"]).request,
    getReview:
      new RequestMocker<"/repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}", "get">(baseUrl, endpoints["pulls"]["getReview"]).request,
    getReviewComment:
      new RequestMocker<"/repos/{owner}/{repo}/pulls/comments/{comment_id}", "get">(baseUrl, endpoints["pulls"]["getReviewComment"]).request,
    list: new RequestMocker<"/repos/{owner}/{repo}/pulls", "get">(baseUrl, endpoints["pulls"]["list"]).request,
    listCommentsForReview:
      new RequestMocker<"/repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/comments", "get">(baseUrl, endpoints["pulls"]["listCommentsForReview"]).request,
    listCommits:
      new RequestMocker<"/repos/{owner}/{repo}/pulls/{pull_number}/commits", "get">(baseUrl, endpoints["pulls"]["listCommits"]).request,
    listFiles:
      new RequestMocker<"/repos/{owner}/{repo}/pulls/{pull_number}/files", "get">(baseUrl, endpoints["pulls"]["listFiles"]).request,
    listRequestedReviewers:
      new RequestMocker<"/repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers", "get">(baseUrl, endpoints["pulls"]["listRequestedReviewers"]).request,
    listReviewComments:
      new RequestMocker<"/repos/{owner}/{repo}/pulls/{pull_number}/comments", "get">(baseUrl, endpoints["pulls"]["listReviewComments"]).request,
    listReviewCommentsForRepo:
      new RequestMocker<"/repos/{owner}/{repo}/pulls/comments", "get">(baseUrl, endpoints["pulls"]["listReviewCommentsForRepo"]).request,
    listReviews:
      new RequestMocker<"/repos/{owner}/{repo}/pulls/{pull_number}/reviews", "get">(baseUrl, endpoints["pulls"]["listReviews"]).request,
    merge:
      new RequestMocker<"/repos/{owner}/{repo}/pulls/{pull_number}/merge", "put">(baseUrl, endpoints["pulls"]["merge"]).request,
    removeRequestedReviewers:
      new RequestMocker<"/repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers", "delete">(baseUrl, endpoints["pulls"]["removeRequestedReviewers"]).request,
    requestReviewers:
      new RequestMocker<"/repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers", "post">(baseUrl, endpoints["pulls"]["requestReviewers"]).request,
    submitReview:
      new RequestMocker<"/repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/events", "post">(baseUrl, endpoints["pulls"]["submitReview"]).request,
    update:
      new RequestMocker<"/repos/{owner}/{repo}/pulls/{pull_number}", "patch">(baseUrl, endpoints["pulls"]["update"]).request,
    updateBranch:
      new RequestMocker<"/repos/{owner}/{repo}/pulls/{pull_number}/update-branch", "put">(baseUrl, endpoints["pulls"]["updateBranch"]).request,
    updateReview:
      new RequestMocker<"/repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}", "put">(baseUrl, endpoints["pulls"]["updateReview"]).request,
    updateReviewComment:
      new RequestMocker<"/repos/{owner}/{repo}/pulls/comments/{comment_id}", "patch">(baseUrl, endpoints["pulls"]["updateReviewComment"]).request,
  },
  rateLimit: {
    get: new RequestMocker<"/rate_limit", "get">(baseUrl, endpoints["rateLimit"]["get"]).request,
  },
  reactions: {
    createForCommitComment:
      new RequestMocker<"/repos/{owner}/{repo}/comments/{comment_id}/reactions", "post">(baseUrl, endpoints["reactions"]["createForCommitComment"]).request,
    createForIssue:
      new RequestMocker<"/repos/{owner}/{repo}/issues/{issue_number}/reactions", "post">(baseUrl, endpoints["reactions"]["createForIssue"]).request,
    createForIssueComment:
      new RequestMocker<"/repos/{owner}/{repo}/issues/comments/{comment_id}/reactions", "post">(baseUrl, endpoints["reactions"]["createForIssueComment"]).request,
    createForPullRequestReviewComment:
      new RequestMocker<"/repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions", "post">(baseUrl, endpoints["reactions"]["createForPullRequestReviewComment"]).request,
    createForRelease:
      new RequestMocker<"/repos/{owner}/{repo}/releases/{release_id}/reactions", "post">(baseUrl, endpoints["reactions"]["createForRelease"]).request,
    createForTeamDiscussionCommentInOrg:
      new RequestMocker<"/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions", "post">(baseUrl, endpoints["reactions"]["createForTeamDiscussionCommentInOrg"]).request,
    createForTeamDiscussionInOrg:
      new RequestMocker<"/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions", "post">(baseUrl, endpoints["reactions"]["createForTeamDiscussionInOrg"]).request,
    deleteForCommitComment:
      new RequestMocker<"/repos/{owner}/{repo}/comments/{comment_id}/reactions/{reaction_id}", "delete">(baseUrl, endpoints["reactions"]["deleteForCommitComment"]).request,
    deleteForIssue:
      new RequestMocker<"/repos/{owner}/{repo}/issues/{issue_number}/reactions/{reaction_id}", "delete">(baseUrl, endpoints["reactions"]["deleteForIssue"]).request,
    deleteForIssueComment:
      new RequestMocker<"/repos/{owner}/{repo}/issues/comments/{comment_id}/reactions/{reaction_id}", "delete">(baseUrl, endpoints["reactions"]["deleteForIssueComment"]).request,
    deleteForPullRequestComment:
      new RequestMocker<"/repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions/{reaction_id}", "delete">(baseUrl, endpoints["reactions"]["deleteForPullRequestComment"]).request,
    deleteForRelease:
      new RequestMocker<"/repos/{owner}/{repo}/releases/{release_id}/reactions/{reaction_id}", "delete">(baseUrl, endpoints["reactions"]["deleteForRelease"]).request,
    deleteForTeamDiscussion:
      new RequestMocker<"/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions/{reaction_id}", "delete">(baseUrl, endpoints["reactions"]["deleteForTeamDiscussion"]).request,
    deleteForTeamDiscussionComment:
      new RequestMocker<"/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions/{reaction_id}", "delete">(baseUrl, endpoints["reactions"]["deleteForTeamDiscussionComment"]).request,
    listForCommitComment:
      new RequestMocker<"/repos/{owner}/{repo}/comments/{comment_id}/reactions", "get">(baseUrl, endpoints["reactions"]["listForCommitComment"]).request,
    listForIssue:
      new RequestMocker<"/repos/{owner}/{repo}/issues/{issue_number}/reactions", "get">(baseUrl, endpoints["reactions"]["listForIssue"]).request,
    listForIssueComment:
      new RequestMocker<"/repos/{owner}/{repo}/issues/comments/{comment_id}/reactions", "get">(baseUrl, endpoints["reactions"]["listForIssueComment"]).request,
    listForPullRequestReviewComment:
      new RequestMocker<"/repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions", "get">(baseUrl, endpoints["reactions"]["listForPullRequestReviewComment"]).request,
    listForRelease:
      new RequestMocker<"/repos/{owner}/{repo}/releases/{release_id}/reactions", "get">(baseUrl, endpoints["reactions"]["listForRelease"]).request,
    listForTeamDiscussionCommentInOrg:
      new RequestMocker<"/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions", "get">(baseUrl, endpoints["reactions"]["listForTeamDiscussionCommentInOrg"]).request,
    listForTeamDiscussionInOrg:
      new RequestMocker<"/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions", "get">(baseUrl, endpoints["reactions"]["listForTeamDiscussionInOrg"]).request,
  },
  repos: {
    acceptInvitation:
      new RequestMocker<"/user/repository_invitations/{invitation_id}", "patch">(baseUrl, endpoints["repos"]["acceptInvitation"]).request,
    acceptInvitationForAuthenticatedUser:
      new RequestMocker<"/user/repository_invitations/{invitation_id}", "patch">(baseUrl, endpoints["repos"]["acceptInvitationForAuthenticatedUser"]).request,
    addAppAccessRestrictions:
      new RequestMocker<"/repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps", "post">(baseUrl, endpoints["repos"]["addAppAccessRestrictions"]).request,
    addCollaborator:
      new RequestMocker<"/repos/{owner}/{repo}/collaborators/{username}", "put">(baseUrl, endpoints["repos"]["addCollaborator"]).request,
    addStatusCheckContexts:
      new RequestMocker<"/repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts", "post">(baseUrl, endpoints["repos"]["addStatusCheckContexts"]).request,
    addTeamAccessRestrictions:
      new RequestMocker<"/repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams", "post">(baseUrl, endpoints["repos"]["addTeamAccessRestrictions"]).request,
    addUserAccessRestrictions:
      new RequestMocker<"/repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users", "post">(baseUrl, endpoints["repos"]["addUserAccessRestrictions"]).request,
    checkCollaborator:
      new RequestMocker<"/repos/{owner}/{repo}/collaborators/{username}", "get">(baseUrl, endpoints["repos"]["checkCollaborator"]).request,
    checkVulnerabilityAlerts:
      new RequestMocker<"/repos/{owner}/{repo}/vulnerability-alerts", "get">(baseUrl, endpoints["repos"]["checkVulnerabilityAlerts"]).request,
    codeownersErrors:
      new RequestMocker<"/repos/{owner}/{repo}/codeowners/errors", "get">(baseUrl, endpoints["repos"]["codeownersErrors"]).request,
    compareCommits:
      new RequestMocker<"/repos/{owner}/{repo}/compare/{base}...{head}", "get">(baseUrl, endpoints["repos"]["compareCommits"]).request,
    compareCommitsWithBasehead:
      new RequestMocker<"/repos/{owner}/{repo}/compare/{basehead}", "get">(baseUrl, endpoints["repos"]["compareCommitsWithBasehead"]).request,
    createAutolink:
      new RequestMocker<"/repos/{owner}/{repo}/autolinks", "post">(baseUrl, endpoints["repos"]["createAutolink"]).request,
    createCommitComment:
      new RequestMocker<"/repos/{owner}/{repo}/commits/{commit_sha}/comments", "post">(baseUrl, endpoints["repos"]["createCommitComment"]).request,
    createCommitSignatureProtection:
      new RequestMocker<"/repos/{owner}/{repo}/branches/{branch}/protection/required_signatures", "post">(baseUrl, endpoints["repos"]["createCommitSignatureProtection"]).request,
    createCommitStatus:
      new RequestMocker<"/repos/{owner}/{repo}/statuses/{sha}", "post">(baseUrl, endpoints["repos"]["createCommitStatus"]).request,
    createDeployKey:
      new RequestMocker<"/repos/{owner}/{repo}/keys", "post">(baseUrl, endpoints["repos"]["createDeployKey"]).request,
    createDeployment:
      new RequestMocker<"/repos/{owner}/{repo}/deployments", "post">(baseUrl, endpoints["repos"]["createDeployment"]).request,
    createDeploymentBranchPolicy:
      new RequestMocker<"/repos/{owner}/{repo}/environments/{environment_name}/deployment-branch-policies", "post">(baseUrl, endpoints["repos"]["createDeploymentBranchPolicy"]).request,
    createDeploymentStatus:
      new RequestMocker<"/repos/{owner}/{repo}/deployments/{deployment_id}/statuses", "post">(baseUrl, endpoints["repos"]["createDeploymentStatus"]).request,
    createDispatchEvent:
      new RequestMocker<"/repos/{owner}/{repo}/dispatches", "post">(baseUrl, endpoints["repos"]["createDispatchEvent"]).request,
    createForAuthenticatedUser:
      new RequestMocker<"/user/repos", "post">(baseUrl, endpoints["repos"]["createForAuthenticatedUser"]).request,
    createFork:
      new RequestMocker<"/repos/{owner}/{repo}/forks", "post">(baseUrl, endpoints["repos"]["createFork"]).request,
    createInOrg:
      new RequestMocker<"/orgs/{org}/repos", "post">(baseUrl, endpoints["repos"]["createInOrg"]).request,
    createOrUpdateEnvironment:
      new RequestMocker<"/repos/{owner}/{repo}/environments/{environment_name}", "put">(baseUrl, endpoints["repos"]["createOrUpdateEnvironment"]).request,
    createOrUpdateFileContents:
      new RequestMocker<"/repos/{owner}/{repo}/contents/{path}", "put">(baseUrl, endpoints["repos"]["createOrUpdateFileContents"]).request,
    createPagesDeployment:
      new RequestMocker<"/repos/{owner}/{repo}/pages/deployment", "post">(baseUrl, endpoints["repos"]["createPagesDeployment"]).request,
    createPagesSite:
      new RequestMocker<"/repos/{owner}/{repo}/pages", "post">(baseUrl, endpoints["repos"]["createPagesSite"]).request,
    createRelease:
      new RequestMocker<"/repos/{owner}/{repo}/releases", "post">(baseUrl, endpoints["repos"]["createRelease"]).request,
    createTagProtection:
      new RequestMocker<"/repos/{owner}/{repo}/tags/protection", "post">(baseUrl, endpoints["repos"]["createTagProtection"]).request,
    createUsingTemplate:
      new RequestMocker<"/repos/{template_owner}/{template_repo}/generate", "post">(baseUrl, endpoints["repos"]["createUsingTemplate"]).request,
    createWebhook:
      new RequestMocker<"/repos/{owner}/{repo}/hooks", "post">(baseUrl, endpoints["repos"]["createWebhook"]).request,
    declineInvitation:
      new RequestMocker<"/user/repository_invitations/{invitation_id}", "delete">(baseUrl, endpoints["repos"]["declineInvitation"]).request,
    declineInvitationForAuthenticatedUser:
      new RequestMocker<"/user/repository_invitations/{invitation_id}", "delete">(baseUrl, endpoints["repos"]["declineInvitationForAuthenticatedUser"]).request,
    delete:
      new RequestMocker<"/repos/{owner}/{repo}", "delete">(baseUrl, endpoints["repos"]["delete"]).request,
    deleteAccessRestrictions:
      new RequestMocker<"/repos/{owner}/{repo}/branches/{branch}/protection/restrictions", "delete">(baseUrl, endpoints["repos"]["deleteAccessRestrictions"]).request,
    deleteAdminBranchProtection:
      new RequestMocker<"/repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins", "delete">(baseUrl, endpoints["repos"]["deleteAdminBranchProtection"]).request,
    deleteAnEnvironment:
      new RequestMocker<"/repos/{owner}/{repo}/environments/{environment_name}", "delete">(baseUrl, endpoints["repos"]["deleteAnEnvironment"]).request,
    deleteAutolink:
      new RequestMocker<"/repos/{owner}/{repo}/autolinks/{autolink_id}", "delete">(baseUrl, endpoints["repos"]["deleteAutolink"]).request,
    deleteBranchProtection:
      new RequestMocker<"/repos/{owner}/{repo}/branches/{branch}/protection", "delete">(baseUrl, endpoints["repos"]["deleteBranchProtection"]).request,
    deleteCommitComment:
      new RequestMocker<"/repos/{owner}/{repo}/comments/{comment_id}", "delete">(baseUrl, endpoints["repos"]["deleteCommitComment"]).request,
    deleteCommitSignatureProtection:
      new RequestMocker<"/repos/{owner}/{repo}/branches/{branch}/protection/required_signatures", "delete">(baseUrl, endpoints["repos"]["deleteCommitSignatureProtection"]).request,
    deleteDeployKey:
      new RequestMocker<"/repos/{owner}/{repo}/keys/{key_id}", "delete">(baseUrl, endpoints["repos"]["deleteDeployKey"]).request,
    deleteDeployment:
      new RequestMocker<"/repos/{owner}/{repo}/deployments/{deployment_id}", "delete">(baseUrl, endpoints["repos"]["deleteDeployment"]).request,
    deleteDeploymentBranchPolicy:
      new RequestMocker<"/repos/{owner}/{repo}/environments/{environment_name}/deployment-branch-policies/{branch_policy_id}", "delete">(baseUrl, endpoints["repos"]["deleteDeploymentBranchPolicy"]).request,
    deleteFile:
      new RequestMocker<"/repos/{owner}/{repo}/contents/{path}", "delete">(baseUrl, endpoints["repos"]["deleteFile"]).request,
    deleteInvitation:
      new RequestMocker<"/repos/{owner}/{repo}/invitations/{invitation_id}", "delete">(baseUrl, endpoints["repos"]["deleteInvitation"]).request,
    deletePagesSite:
      new RequestMocker<"/repos/{owner}/{repo}/pages", "delete">(baseUrl, endpoints["repos"]["deletePagesSite"]).request,
    deletePullRequestReviewProtection:
      new RequestMocker<"/repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews", "delete">(baseUrl, endpoints["repos"]["deletePullRequestReviewProtection"]).request,
    deleteRelease:
      new RequestMocker<"/repos/{owner}/{repo}/releases/{release_id}", "delete">(baseUrl, endpoints["repos"]["deleteRelease"]).request,
    deleteReleaseAsset:
      new RequestMocker<"/repos/{owner}/{repo}/releases/assets/{asset_id}", "delete">(baseUrl, endpoints["repos"]["deleteReleaseAsset"]).request,
    deleteTagProtection:
      new RequestMocker<"/repos/{owner}/{repo}/tags/protection/{tag_protection_id}", "delete">(baseUrl, endpoints["repos"]["deleteTagProtection"]).request,
    deleteWebhook:
      new RequestMocker<"/repos/{owner}/{repo}/hooks/{hook_id}", "delete">(baseUrl, endpoints["repos"]["deleteWebhook"]).request,
    disableAutomatedSecurityFixes:
      new RequestMocker<"/repos/{owner}/{repo}/automated-security-fixes", "delete">(baseUrl, endpoints["repos"]["disableAutomatedSecurityFixes"]).request,
    disableLfsForRepo:
      new RequestMocker<"/repos/{owner}/{repo}/lfs", "delete">(baseUrl, endpoints["repos"]["disableLfsForRepo"]).request,
    disableVulnerabilityAlerts:
      new RequestMocker<"/repos/{owner}/{repo}/vulnerability-alerts", "delete">(baseUrl, endpoints["repos"]["disableVulnerabilityAlerts"]).request,
    downloadArchive:
      new RequestMocker<"/repos/{owner}/{repo}/zipball/{ref}", "get">(baseUrl, endpoints["repos"]["downloadArchive"]).request,
    downloadTarballArchive:
      new RequestMocker<"/repos/{owner}/{repo}/tarball/{ref}", "get">(baseUrl, endpoints["repos"]["downloadTarballArchive"]).request,
    downloadZipballArchive:
      new RequestMocker<"/repos/{owner}/{repo}/zipball/{ref}", "get">(baseUrl, endpoints["repos"]["downloadZipballArchive"]).request,
    enableAutomatedSecurityFixes:
      new RequestMocker<"/repos/{owner}/{repo}/automated-security-fixes", "put">(baseUrl, endpoints["repos"]["enableAutomatedSecurityFixes"]).request,
    enableLfsForRepo:
      new RequestMocker<"/repos/{owner}/{repo}/lfs", "put">(baseUrl, endpoints["repos"]["enableLfsForRepo"]).request,
    enableVulnerabilityAlerts:
      new RequestMocker<"/repos/{owner}/{repo}/vulnerability-alerts", "put">(baseUrl, endpoints["repos"]["enableVulnerabilityAlerts"]).request,
    generateReleaseNotes:
      new RequestMocker<"/repos/{owner}/{repo}/releases/generate-notes", "post">(baseUrl, endpoints["repos"]["generateReleaseNotes"]).request,
    get: new RequestMocker<"/repos/{owner}/{repo}", "get">(baseUrl, endpoints["repos"]["get"]).request,
    getAccessRestrictions:
      new RequestMocker<"/repos/{owner}/{repo}/branches/{branch}/protection/restrictions", "get">(baseUrl, endpoints["repos"]["getAccessRestrictions"]).request,
    getAdminBranchProtection:
      new RequestMocker<"/repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins", "get">(baseUrl, endpoints["repos"]["getAdminBranchProtection"]).request,
    getAllEnvironments:
      new RequestMocker<"/repos/{owner}/{repo}/environments", "get">(baseUrl, endpoints["repos"]["getAllEnvironments"]).request,
    getAllStatusCheckContexts:
      new RequestMocker<"/repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts", "get">(baseUrl, endpoints["repos"]["getAllStatusCheckContexts"]).request,
    getAllTopics:
      new RequestMocker<"/repos/{owner}/{repo}/topics", "get">(baseUrl, endpoints["repos"]["getAllTopics"]).request,
    getAppsWithAccessToProtectedBranch:
      new RequestMocker<"/repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps", "get">(baseUrl, endpoints["repos"]["getAppsWithAccessToProtectedBranch"]).request,
    getAutolink:
      new RequestMocker<"/repos/{owner}/{repo}/autolinks/{autolink_id}", "get">(baseUrl, endpoints["repos"]["getAutolink"]).request,
    getBranch:
      new RequestMocker<"/repos/{owner}/{repo}/branches/{branch}", "get">(baseUrl, endpoints["repos"]["getBranch"]).request,
    getBranchProtection:
      new RequestMocker<"/repos/{owner}/{repo}/branches/{branch}/protection", "get">(baseUrl, endpoints["repos"]["getBranchProtection"]).request,
    getClones:
      new RequestMocker<"/repos/{owner}/{repo}/traffic/clones", "get">(baseUrl, endpoints["repos"]["getClones"]).request,
    getCodeFrequencyStats:
      new RequestMocker<"/repos/{owner}/{repo}/stats/code_frequency", "get">(baseUrl, endpoints["repos"]["getCodeFrequencyStats"]).request,
    getCollaboratorPermissionLevel:
      new RequestMocker<"/repos/{owner}/{repo}/collaborators/{username}/permission", "get">(baseUrl, endpoints["repos"]["getCollaboratorPermissionLevel"]).request,
    getCombinedStatusForRef:
      new RequestMocker<"/repos/{owner}/{repo}/commits/{ref}/status", "get">(baseUrl, endpoints["repos"]["getCombinedStatusForRef"]).request,
    getCommit:
      new RequestMocker<"/repos/{owner}/{repo}/commits/{ref}", "get">(baseUrl, endpoints["repos"]["getCommit"]).request,
    getCommitActivityStats:
      new RequestMocker<"/repos/{owner}/{repo}/stats/commit_activity", "get">(baseUrl, endpoints["repos"]["getCommitActivityStats"]).request,
    getCommitComment:
      new RequestMocker<"/repos/{owner}/{repo}/comments/{comment_id}", "get">(baseUrl, endpoints["repos"]["getCommitComment"]).request,
    getCommitSignatureProtection:
      new RequestMocker<"/repos/{owner}/{repo}/branches/{branch}/protection/required_signatures", "get">(baseUrl, endpoints["repos"]["getCommitSignatureProtection"]).request,
    getCommunityProfileMetrics:
      new RequestMocker<"/repos/{owner}/{repo}/community/profile", "get">(baseUrl, endpoints["repos"]["getCommunityProfileMetrics"]).request,
    getContent:
      new RequestMocker<"/repos/{owner}/{repo}/contents/{path}", "get">(baseUrl, endpoints["repos"]["getContent"]).request,
    getContributorsStats:
      new RequestMocker<"/repos/{owner}/{repo}/stats/contributors", "get">(baseUrl, endpoints["repos"]["getContributorsStats"]).request,
    getDeployKey:
      new RequestMocker<"/repos/{owner}/{repo}/keys/{key_id}", "get">(baseUrl, endpoints["repos"]["getDeployKey"]).request,
    getDeployment:
      new RequestMocker<"/repos/{owner}/{repo}/deployments/{deployment_id}", "get">(baseUrl, endpoints["repos"]["getDeployment"]).request,
    getDeploymentBranchPolicy:
      new RequestMocker<"/repos/{owner}/{repo}/environments/{environment_name}/deployment-branch-policies/{branch_policy_id}", "get">(baseUrl, endpoints["repos"]["getDeploymentBranchPolicy"]).request,
    getDeploymentStatus:
      new RequestMocker<"/repos/{owner}/{repo}/deployments/{deployment_id}/statuses/{status_id}", "get">(baseUrl, endpoints["repos"]["getDeploymentStatus"]).request,
    getEnvironment:
      new RequestMocker<"/repos/{owner}/{repo}/environments/{environment_name}", "get">(baseUrl, endpoints["repos"]["getEnvironment"]).request,
    getLatestPagesBuild:
      new RequestMocker<"/repos/{owner}/{repo}/pages/builds/latest", "get">(baseUrl, endpoints["repos"]["getLatestPagesBuild"]).request,
    getLatestRelease:
      new RequestMocker<"/repos/{owner}/{repo}/releases/latest", "get">(baseUrl, endpoints["repos"]["getLatestRelease"]).request,
    getPages:
      new RequestMocker<"/repos/{owner}/{repo}/pages", "get">(baseUrl, endpoints["repos"]["getPages"]).request,
    getPagesBuild:
      new RequestMocker<"/repos/{owner}/{repo}/pages/builds/{build_id}", "get">(baseUrl, endpoints["repos"]["getPagesBuild"]).request,
    getPagesHealthCheck:
      new RequestMocker<"/repos/{owner}/{repo}/pages/health", "get">(baseUrl, endpoints["repos"]["getPagesHealthCheck"]).request,
    getParticipationStats:
      new RequestMocker<"/repos/{owner}/{repo}/stats/participation", "get">(baseUrl, endpoints["repos"]["getParticipationStats"]).request,
    getPullRequestReviewProtection:
      new RequestMocker<"/repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews", "get">(baseUrl, endpoints["repos"]["getPullRequestReviewProtection"]).request,
    getPunchCardStats:
      new RequestMocker<"/repos/{owner}/{repo}/stats/punch_card", "get">(baseUrl, endpoints["repos"]["getPunchCardStats"]).request,
    getReadme:
      new RequestMocker<"/repos/{owner}/{repo}/readme", "get">(baseUrl, endpoints["repos"]["getReadme"]).request,
    getReadmeInDirectory:
      new RequestMocker<"/repos/{owner}/{repo}/readme/{dir}", "get">(baseUrl, endpoints["repos"]["getReadmeInDirectory"]).request,
    getRelease:
      new RequestMocker<"/repos/{owner}/{repo}/releases/{release_id}", "get">(baseUrl, endpoints["repos"]["getRelease"]).request,
    getReleaseAsset:
      new RequestMocker<"/repos/{owner}/{repo}/releases/assets/{asset_id}", "get">(baseUrl, endpoints["repos"]["getReleaseAsset"]).request,
    getReleaseByTag:
      new RequestMocker<"/repos/{owner}/{repo}/releases/tags/{tag}", "get">(baseUrl, endpoints["repos"]["getReleaseByTag"]).request,
    getStatusChecksProtection:
      new RequestMocker<"/repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks", "get">(baseUrl, endpoints["repos"]["getStatusChecksProtection"]).request,
    getTeamsWithAccessToProtectedBranch:
      new RequestMocker<"/repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams", "get">(baseUrl, endpoints["repos"]["getTeamsWithAccessToProtectedBranch"]).request,
    getTopPaths:
      new RequestMocker<"/repos/{owner}/{repo}/traffic/popular/paths", "get">(baseUrl, endpoints["repos"]["getTopPaths"]).request,
    getTopReferrers:
      new RequestMocker<"/repos/{owner}/{repo}/traffic/popular/referrers", "get">(baseUrl, endpoints["repos"]["getTopReferrers"]).request,
    getUsersWithAccessToProtectedBranch:
      new RequestMocker<"/repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users", "get">(baseUrl, endpoints["repos"]["getUsersWithAccessToProtectedBranch"]).request,
    getViews:
      new RequestMocker<"/repos/{owner}/{repo}/traffic/views", "get">(baseUrl, endpoints["repos"]["getViews"]).request,
    getWebhook:
      new RequestMocker<"/repos/{owner}/{repo}/hooks/{hook_id}", "get">(baseUrl, endpoints["repos"]["getWebhook"]).request,
    getWebhookConfigForRepo:
      new RequestMocker<"/repos/{owner}/{repo}/hooks/{hook_id}/config", "get">(baseUrl, endpoints["repos"]["getWebhookConfigForRepo"]).request,
    getWebhookDelivery:
      new RequestMocker<"/repos/{owner}/{repo}/hooks/{hook_id}/deliveries/{delivery_id}", "get">(baseUrl, endpoints["repos"]["getWebhookDelivery"]).request,
    listAutolinks:
      new RequestMocker<"/repos/{owner}/{repo}/autolinks", "get">(baseUrl, endpoints["repos"]["listAutolinks"]).request,
    listBranches:
      new RequestMocker<"/repos/{owner}/{repo}/branches", "get">(baseUrl, endpoints["repos"]["listBranches"]).request,
    listBranchesForHeadCommit:
      new RequestMocker<"/repos/{owner}/{repo}/commits/{commit_sha}/branches-where-head", "get">(baseUrl, endpoints["repos"]["listBranchesForHeadCommit"]).request,
    listCollaborators:
      new RequestMocker<"/repos/{owner}/{repo}/collaborators", "get">(baseUrl, endpoints["repos"]["listCollaborators"]).request,
    listCommentsForCommit:
      new RequestMocker<"/repos/{owner}/{repo}/commits/{commit_sha}/comments", "get">(baseUrl, endpoints["repos"]["listCommentsForCommit"]).request,
    listCommitCommentsForRepo:
      new RequestMocker<"/repos/{owner}/{repo}/comments", "get">(baseUrl, endpoints["repos"]["listCommitCommentsForRepo"]).request,
    listCommitStatusesForRef:
      new RequestMocker<"/repos/{owner}/{repo}/commits/{ref}/statuses", "get">(baseUrl, endpoints["repos"]["listCommitStatusesForRef"]).request,
    listCommits:
      new RequestMocker<"/repos/{owner}/{repo}/commits", "get">(baseUrl, endpoints["repos"]["listCommits"]).request,
    listContributors:
      new RequestMocker<"/repos/{owner}/{repo}/contributors", "get">(baseUrl, endpoints["repos"]["listContributors"]).request,
    listDeployKeys:
      new RequestMocker<"/repos/{owner}/{repo}/keys", "get">(baseUrl, endpoints["repos"]["listDeployKeys"]).request,
    listDeploymentBranchPolicies:
      new RequestMocker<"/repos/{owner}/{repo}/environments/{environment_name}/deployment-branch-policies", "get">(baseUrl, endpoints["repos"]["listDeploymentBranchPolicies"]).request,
    listDeploymentStatuses:
      new RequestMocker<"/repos/{owner}/{repo}/deployments/{deployment_id}/statuses", "get">(baseUrl, endpoints["repos"]["listDeploymentStatuses"]).request,
    listDeployments:
      new RequestMocker<"/repos/{owner}/{repo}/deployments", "get">(baseUrl, endpoints["repos"]["listDeployments"]).request,
    listForAuthenticatedUser:
      new RequestMocker<"/user/repos", "get">(baseUrl, endpoints["repos"]["listForAuthenticatedUser"]).request,
    listForOrg:
      new RequestMocker<"/orgs/{org}/repos", "get">(baseUrl, endpoints["repos"]["listForOrg"]).request,
    listForUser:
      new RequestMocker<"/users/{username}/repos", "get">(baseUrl, endpoints["repos"]["listForUser"]).request,
    listForks:
      new RequestMocker<"/repos/{owner}/{repo}/forks", "get">(baseUrl, endpoints["repos"]["listForks"]).request,
    listInvitations:
      new RequestMocker<"/repos/{owner}/{repo}/invitations", "get">(baseUrl, endpoints["repos"]["listInvitations"]).request,
    listInvitationsForAuthenticatedUser:
      new RequestMocker<"/user/repository_invitations", "get">(baseUrl, endpoints["repos"]["listInvitationsForAuthenticatedUser"]).request,
    listLanguages:
      new RequestMocker<"/repos/{owner}/{repo}/languages", "get">(baseUrl, endpoints["repos"]["listLanguages"]).request,
    listPagesBuilds:
      new RequestMocker<"/repos/{owner}/{repo}/pages/builds", "get">(baseUrl, endpoints["repos"]["listPagesBuilds"]).request,
    listPublic:
      new RequestMocker<"/repositories", "get">(baseUrl, endpoints["repos"]["listPublic"]).request,
    listPullRequestsAssociatedWithCommit:
      new RequestMocker<"/repos/{owner}/{repo}/commits/{commit_sha}/pulls", "get">(baseUrl, endpoints["repos"]["listPullRequestsAssociatedWithCommit"]).request,
    listReleaseAssets:
      new RequestMocker<"/repos/{owner}/{repo}/releases/{release_id}/assets", "get">(baseUrl, endpoints["repos"]["listReleaseAssets"]).request,
    listReleases:
      new RequestMocker<"/repos/{owner}/{repo}/releases", "get">(baseUrl, endpoints["repos"]["listReleases"]).request,
    listTagProtection:
      new RequestMocker<"/repos/{owner}/{repo}/tags/protection", "get">(baseUrl, endpoints["repos"]["listTagProtection"]).request,
    listTags:
      new RequestMocker<"/repos/{owner}/{repo}/tags", "get">(baseUrl, endpoints["repos"]["listTags"]).request,
    listTeams:
      new RequestMocker<"/repos/{owner}/{repo}/teams", "get">(baseUrl, endpoints["repos"]["listTeams"]).request,
    listWebhookDeliveries:
      new RequestMocker<"/repos/{owner}/{repo}/hooks/{hook_id}/deliveries", "get">(baseUrl, endpoints["repos"]["listWebhookDeliveries"]).request,
    listWebhooks:
      new RequestMocker<"/repos/{owner}/{repo}/hooks", "get">(baseUrl, endpoints["repos"]["listWebhooks"]).request,
    merge:
      new RequestMocker<"/repos/{owner}/{repo}/merges", "post">(baseUrl, endpoints["repos"]["merge"]).request,
    mergeUpstream:
      new RequestMocker<"/repos/{owner}/{repo}/merge-upstream", "post">(baseUrl, endpoints["repos"]["mergeUpstream"]).request,
    pingWebhook:
      new RequestMocker<"/repos/{owner}/{repo}/hooks/{hook_id}/pings", "post">(baseUrl, endpoints["repos"]["pingWebhook"]).request,
    redeliverWebhookDelivery:
      new RequestMocker<"/repos/{owner}/{repo}/hooks/{hook_id}/deliveries/{delivery_id}/attempts", "post">(baseUrl, endpoints["repos"]["redeliverWebhookDelivery"]).request,
    removeAppAccessRestrictions:
      new RequestMocker<"/repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps", "delete">(baseUrl, endpoints["repos"]["removeAppAccessRestrictions"]).request,
    removeCollaborator:
      new RequestMocker<"/repos/{owner}/{repo}/collaborators/{username}", "delete">(baseUrl, endpoints["repos"]["removeCollaborator"]).request,
    removeStatusCheckContexts:
      new RequestMocker<"/repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts", "delete">(baseUrl, endpoints["repos"]["removeStatusCheckContexts"]).request,
    removeStatusCheckProtection:
      new RequestMocker<"/repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks", "delete">(baseUrl, endpoints["repos"]["removeStatusCheckProtection"]).request,
    removeTeamAccessRestrictions:
      new RequestMocker<"/repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams", "delete">(baseUrl, endpoints["repos"]["removeTeamAccessRestrictions"]).request,
    removeUserAccessRestrictions:
      new RequestMocker<"/repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users", "delete">(baseUrl, endpoints["repos"]["removeUserAccessRestrictions"]).request,
    renameBranch:
      new RequestMocker<"/repos/{owner}/{repo}/branches/{branch}/rename", "post">(baseUrl, endpoints["repos"]["renameBranch"]).request,
    replaceAllTopics:
      new RequestMocker<"/repos/{owner}/{repo}/topics", "put">(baseUrl, endpoints["repos"]["replaceAllTopics"]).request,
    requestPagesBuild:
      new RequestMocker<"/repos/{owner}/{repo}/pages/builds", "post">(baseUrl, endpoints["repos"]["requestPagesBuild"]).request,
    setAdminBranchProtection:
      new RequestMocker<"/repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins", "post">(baseUrl, endpoints["repos"]["setAdminBranchProtection"]).request,
    setAppAccessRestrictions:
      new RequestMocker<"/repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps", "put">(baseUrl, endpoints["repos"]["setAppAccessRestrictions"]).request,
    setStatusCheckContexts:
      new RequestMocker<"/repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts", "put">(baseUrl, endpoints["repos"]["setStatusCheckContexts"]).request,
    setTeamAccessRestrictions:
      new RequestMocker<"/repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams", "put">(baseUrl, endpoints["repos"]["setTeamAccessRestrictions"]).request,
    setUserAccessRestrictions:
      new RequestMocker<"/repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users", "put">(baseUrl, endpoints["repos"]["setUserAccessRestrictions"]).request,
    testPushWebhook:
      new RequestMocker<"/repos/{owner}/{repo}/hooks/{hook_id}/tests", "post">(baseUrl, endpoints["repos"]["testPushWebhook"]).request,
    transfer:
      new RequestMocker<"/repos/{owner}/{repo}/transfer", "post">(baseUrl, endpoints["repos"]["transfer"]).request,
    update:
      new RequestMocker<"/repos/{owner}/{repo}", "patch">(baseUrl, endpoints["repos"]["update"]).request,
    updateBranchProtection:
      new RequestMocker<"/repos/{owner}/{repo}/branches/{branch}/protection", "put">(baseUrl, endpoints["repos"]["updateBranchProtection"]).request,
    updateCommitComment:
      new RequestMocker<"/repos/{owner}/{repo}/comments/{comment_id}", "patch">(baseUrl, endpoints["repos"]["updateCommitComment"]).request,
    updateDeploymentBranchPolicy:
      new RequestMocker<"/repos/{owner}/{repo}/environments/{environment_name}/deployment-branch-policies/{branch_policy_id}", "put">(baseUrl, endpoints["repos"]["updateDeploymentBranchPolicy"]).request,
    updateInformationAboutPagesSite:
      new RequestMocker<"/repos/{owner}/{repo}/pages", "put">(baseUrl, endpoints["repos"]["updateInformationAboutPagesSite"]).request,
    updateInvitation:
      new RequestMocker<"/repos/{owner}/{repo}/invitations/{invitation_id}", "patch">(baseUrl, endpoints["repos"]["updateInvitation"]).request,
    updatePullRequestReviewProtection:
      new RequestMocker<"/repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews", "patch">(baseUrl, endpoints["repos"]["updatePullRequestReviewProtection"]).request,
    updateRelease:
      new RequestMocker<"/repos/{owner}/{repo}/releases/{release_id}", "patch">(baseUrl, endpoints["repos"]["updateRelease"]).request,
    updateReleaseAsset:
      new RequestMocker<"/repos/{owner}/{repo}/releases/assets/{asset_id}", "patch">(baseUrl, endpoints["repos"]["updateReleaseAsset"]).request,
    updateStatusCheckPotection:
      new RequestMocker<"/repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks", "patch">(baseUrl, endpoints["repos"]["updateStatusCheckPotection"]).request,
    updateStatusCheckProtection:
      new RequestMocker<"/repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks", "patch">(baseUrl, endpoints["repos"]["updateStatusCheckProtection"]).request,
    updateWebhook:
      new RequestMocker<"/repos/{owner}/{repo}/hooks/{hook_id}", "patch">(baseUrl, endpoints["repos"]["updateWebhook"]).request,
    updateWebhookConfigForRepo:
      new RequestMocker<"/repos/{owner}/{repo}/hooks/{hook_id}/config", "patch">(baseUrl, endpoints["repos"]["updateWebhookConfigForRepo"]).request,
    uploadReleaseAsset:
      new RequestMocker<"/repos/{owner}/{repo}/releases/{release_id}/assets", "post">(baseUrl, endpoints["repos"]["uploadReleaseAsset"]).request,
  },
  search: {
    code: new RequestMocker<"/search/code", "get">(baseUrl, endpoints["search"]["code"]).request,
    commits:
      new RequestMocker<"/search/commits", "get">(baseUrl, endpoints["search"]["commits"]).request,
    issuesAndPullRequests:
      new RequestMocker<"/search/issues", "get">(baseUrl, endpoints["search"]["issuesAndPullRequests"]).request,
    labels:
      new RequestMocker<"/search/labels", "get">(baseUrl, endpoints["search"]["labels"]).request,
    repos:
      new RequestMocker<"/search/repositories", "get">(baseUrl, endpoints["search"]["repos"]).request,
    topics:
      new RequestMocker<"/search/topics", "get">(baseUrl, endpoints["search"]["topics"]).request,
    users:
      new RequestMocker<"/search/users", "get">(baseUrl, endpoints["search"]["users"]).request,
  },
  secretScanning: {
    getAlert:
      new RequestMocker<"/repos/{owner}/{repo}/secret-scanning/alerts/{alert_number}", "get">(baseUrl, endpoints["secretScanning"]["getAlert"]).request,
    listAlertsForEnterprise:
      new RequestMocker<"/enterprises/{enterprise}/secret-scanning/alerts", "get">(baseUrl, endpoints["secretScanning"]["listAlertsForEnterprise"]).request,
    listAlertsForOrg:
      new RequestMocker<"/orgs/{org}/secret-scanning/alerts", "get">(baseUrl, endpoints["secretScanning"]["listAlertsForOrg"]).request,
    listAlertsForRepo:
      new RequestMocker<"/repos/{owner}/{repo}/secret-scanning/alerts", "get">(baseUrl, endpoints["secretScanning"]["listAlertsForRepo"]).request,
    listLocationsForAlert:
      new RequestMocker<"/repos/{owner}/{repo}/secret-scanning/alerts/{alert_number}/locations", "get">(baseUrl, endpoints["secretScanning"]["listLocationsForAlert"]).request,
    updateAlert:
      new RequestMocker<"/repos/{owner}/{repo}/secret-scanning/alerts/{alert_number}", "patch">(baseUrl, endpoints["secretScanning"]["updateAlert"]).request,
  },
  teams: {
    addOrUpdateMembershipForUserInOrg:
      new RequestMocker<"/orgs/{org}/teams/{team_slug}/memberships/{username}", "put">(baseUrl, endpoints["teams"]["addOrUpdateMembershipForUserInOrg"]).request,
    addOrUpdateProjectPermissionsInOrg:
      new RequestMocker<"/orgs/{org}/teams/{team_slug}/projects/{project_id}", "put">(baseUrl, endpoints["teams"]["addOrUpdateProjectPermissionsInOrg"]).request,
    addOrUpdateRepoPermissionsInOrg:
      new RequestMocker<"/orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}", "put">(baseUrl, endpoints["teams"]["addOrUpdateRepoPermissionsInOrg"]).request,
    checkPermissionsForProjectInOrg:
      new RequestMocker<"/orgs/{org}/teams/{team_slug}/projects/{project_id}", "get">(baseUrl, endpoints["teams"]["checkPermissionsForProjectInOrg"]).request,
    checkPermissionsForRepoInOrg:
      new RequestMocker<"/orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}", "get">(baseUrl, endpoints["teams"]["checkPermissionsForRepoInOrg"]).request,
    create:
      new RequestMocker<"/orgs/{org}/teams", "post">(baseUrl, endpoints["teams"]["create"]).request,
    createDiscussionCommentInOrg:
      new RequestMocker<"/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments", "post">(baseUrl, endpoints["teams"]["createDiscussionCommentInOrg"]).request,
    createDiscussionInOrg:
      new RequestMocker<"/orgs/{org}/teams/{team_slug}/discussions", "post">(baseUrl, endpoints["teams"]["createDiscussionInOrg"]).request,
    deleteDiscussionCommentInOrg:
      new RequestMocker<"/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}", "delete">(baseUrl, endpoints["teams"]["deleteDiscussionCommentInOrg"]).request,
    deleteDiscussionInOrg:
      new RequestMocker<"/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}", "delete">(baseUrl, endpoints["teams"]["deleteDiscussionInOrg"]).request,
    deleteInOrg:
      new RequestMocker<"/orgs/{org}/teams/{team_slug}", "delete">(baseUrl, endpoints["teams"]["deleteInOrg"]).request,
    getByName:
      new RequestMocker<"/orgs/{org}/teams/{team_slug}", "get">(baseUrl, endpoints["teams"]["getByName"]).request,
    getDiscussionCommentInOrg:
      new RequestMocker<"/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}", "get">(baseUrl, endpoints["teams"]["getDiscussionCommentInOrg"]).request,
    getDiscussionInOrg:
      new RequestMocker<"/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}", "get">(baseUrl, endpoints["teams"]["getDiscussionInOrg"]).request,
    getMembershipForUserInOrg:
      new RequestMocker<"/orgs/{org}/teams/{team_slug}/memberships/{username}", "get">(baseUrl, endpoints["teams"]["getMembershipForUserInOrg"]).request,
    list: new RequestMocker<"/orgs/{org}/teams", "get">(baseUrl, endpoints["teams"]["list"]).request,
    listChildInOrg:
      new RequestMocker<"/orgs/{org}/teams/{team_slug}/teams", "get">(baseUrl, endpoints["teams"]["listChildInOrg"]).request,
    listDiscussionCommentsInOrg:
      new RequestMocker<"/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments", "get">(baseUrl, endpoints["teams"]["listDiscussionCommentsInOrg"]).request,
    listDiscussionsInOrg:
      new RequestMocker<"/orgs/{org}/teams/{team_slug}/discussions", "get">(baseUrl, endpoints["teams"]["listDiscussionsInOrg"]).request,
    listForAuthenticatedUser:
      new RequestMocker<"/user/teams", "get">(baseUrl, endpoints["teams"]["listForAuthenticatedUser"]).request,
    listMembersInOrg:
      new RequestMocker<"/orgs/{org}/teams/{team_slug}/members", "get">(baseUrl, endpoints["teams"]["listMembersInOrg"]).request,
    listPendingInvitationsInOrg:
      new RequestMocker<"/orgs/{org}/teams/{team_slug}/invitations", "get">(baseUrl, endpoints["teams"]["listPendingInvitationsInOrg"]).request,
    listProjectsInOrg:
      new RequestMocker<"/orgs/{org}/teams/{team_slug}/projects", "get">(baseUrl, endpoints["teams"]["listProjectsInOrg"]).request,
    listReposInOrg:
      new RequestMocker<"/orgs/{org}/teams/{team_slug}/repos", "get">(baseUrl, endpoints["teams"]["listReposInOrg"]).request,
    removeMembershipForUserInOrg:
      new RequestMocker<"/orgs/{org}/teams/{team_slug}/memberships/{username}", "delete">(baseUrl, endpoints["teams"]["removeMembershipForUserInOrg"]).request,
    removeProjectInOrg:
      new RequestMocker<"/orgs/{org}/teams/{team_slug}/projects/{project_id}", "delete">(baseUrl, endpoints["teams"]["removeProjectInOrg"]).request,
    removeRepoInOrg:
      new RequestMocker<"/orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}", "delete">(baseUrl, endpoints["teams"]["removeRepoInOrg"]).request,
    updateDiscussionCommentInOrg:
      new RequestMocker<"/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}", "patch">(baseUrl, endpoints["teams"]["updateDiscussionCommentInOrg"]).request,
    updateDiscussionInOrg:
      new RequestMocker<"/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}", "patch">(baseUrl, endpoints["teams"]["updateDiscussionInOrg"]).request,
    updateInOrg:
      new RequestMocker<"/orgs/{org}/teams/{team_slug}", "patch">(baseUrl, endpoints["teams"]["updateInOrg"]).request,
  },
  users: {
    addEmailForAuthenticated:
      new RequestMocker<"/user/emails", "post">(baseUrl, endpoints["users"]["addEmailForAuthenticated"]).request,
    addEmailForAuthenticatedUser:
      new RequestMocker<"/user/emails", "post">(baseUrl, endpoints["users"]["addEmailForAuthenticatedUser"]).request,
    block:
      new RequestMocker<"/user/blocks/{username}", "put">(baseUrl, endpoints["users"]["block"]).request,
    checkBlocked:
      new RequestMocker<"/user/blocks/{username}", "get">(baseUrl, endpoints["users"]["checkBlocked"]).request,
    checkFollowingForUser:
      new RequestMocker<"/users/{username}/following/{target_user}", "get">(baseUrl, endpoints["users"]["checkFollowingForUser"]).request,
    checkPersonIsFollowedByAuthenticated:
      new RequestMocker<"/user/following/{username}", "get">(baseUrl, endpoints["users"]["checkPersonIsFollowedByAuthenticated"]).request,
    createGpgKeyForAuthenticated:
      new RequestMocker<"/user/gpg_keys", "post">(baseUrl, endpoints["users"]["createGpgKeyForAuthenticated"]).request,
    createGpgKeyForAuthenticatedUser:
      new RequestMocker<"/user/gpg_keys", "post">(baseUrl, endpoints["users"]["createGpgKeyForAuthenticatedUser"]).request,
    createPublicSshKeyForAuthenticated:
      new RequestMocker<"/user/keys", "post">(baseUrl, endpoints["users"]["createPublicSshKeyForAuthenticated"]).request,
    createPublicSshKeyForAuthenticatedUser:
      new RequestMocker<"/user/keys", "post">(baseUrl, endpoints["users"]["createPublicSshKeyForAuthenticatedUser"]).request,
    createSshSigningKeyForAuthenticatedUser:
      new RequestMocker<"/user/ssh_signing_keys", "post">(baseUrl, endpoints["users"]["createSshSigningKeyForAuthenticatedUser"]).request,
    deleteEmailForAuthenticated:
      new RequestMocker<"/user/emails", "delete">(baseUrl, endpoints["users"]["deleteEmailForAuthenticated"]).request,
    deleteEmailForAuthenticatedUser:
      new RequestMocker<"/user/emails", "delete">(baseUrl, endpoints["users"]["deleteEmailForAuthenticatedUser"]).request,
    deleteGpgKeyForAuthenticated:
      new RequestMocker<"/user/gpg_keys/{gpg_key_id}", "delete">(baseUrl, endpoints["users"]["deleteGpgKeyForAuthenticated"]).request,
    deleteGpgKeyForAuthenticatedUser:
      new RequestMocker<"/user/gpg_keys/{gpg_key_id}", "delete">(baseUrl, endpoints["users"]["deleteGpgKeyForAuthenticatedUser"]).request,
    deletePublicSshKeyForAuthenticated:
      new RequestMocker<"/user/keys/{key_id}", "delete">(baseUrl, endpoints["users"]["deletePublicSshKeyForAuthenticated"]).request,
    deletePublicSshKeyForAuthenticatedUser:
      new RequestMocker<"/user/keys/{key_id}", "delete">(baseUrl, endpoints["users"]["deletePublicSshKeyForAuthenticatedUser"]).request,
    deleteSshSigningKeyForAuthenticatedUser:
      new RequestMocker<"/user/ssh_signing_keys/{ssh_signing_key_id}", "delete">(baseUrl, endpoints["users"]["deleteSshSigningKeyForAuthenticatedUser"]).request,
    follow:
      new RequestMocker<"/user/following/{username}", "put">(baseUrl, endpoints["users"]["follow"]).request,
    getAuthenticated:
      new RequestMocker<"/user", "get">(baseUrl, endpoints["users"]["getAuthenticated"]).request,
    getByUsername:
      new RequestMocker<"/users/{username}", "get">(baseUrl, endpoints["users"]["getByUsername"]).request,
    getContextForUser:
      new RequestMocker<"/users/{username}/hovercard", "get">(baseUrl, endpoints["users"]["getContextForUser"]).request,
    getGpgKeyForAuthenticated:
      new RequestMocker<"/user/gpg_keys/{gpg_key_id}", "get">(baseUrl, endpoints["users"]["getGpgKeyForAuthenticated"]).request,
    getGpgKeyForAuthenticatedUser:
      new RequestMocker<"/user/gpg_keys/{gpg_key_id}", "get">(baseUrl, endpoints["users"]["getGpgKeyForAuthenticatedUser"]).request,
    getPublicSshKeyForAuthenticated:
      new RequestMocker<"/user/keys/{key_id}", "get">(baseUrl, endpoints["users"]["getPublicSshKeyForAuthenticated"]).request,
    getPublicSshKeyForAuthenticatedUser:
      new RequestMocker<"/user/keys/{key_id}", "get">(baseUrl, endpoints["users"]["getPublicSshKeyForAuthenticatedUser"]).request,
    getSshSigningKeyForAuthenticatedUser:
      new RequestMocker<"/user/ssh_signing_keys/{ssh_signing_key_id}", "get">(baseUrl, endpoints["users"]["getSshSigningKeyForAuthenticatedUser"]).request,
    list: new RequestMocker<"/users", "get">(baseUrl, endpoints["users"]["list"]).request,
    listBlockedByAuthenticated:
      new RequestMocker<"/user/blocks", "get">(baseUrl, endpoints["users"]["listBlockedByAuthenticated"]).request,
    listBlockedByAuthenticatedUser:
      new RequestMocker<"/user/blocks", "get">(baseUrl, endpoints["users"]["listBlockedByAuthenticatedUser"]).request,
    listEmailsForAuthenticated:
      new RequestMocker<"/user/emails", "get">(baseUrl, endpoints["users"]["listEmailsForAuthenticated"]).request,
    listEmailsForAuthenticatedUser:
      new RequestMocker<"/user/emails", "get">(baseUrl, endpoints["users"]["listEmailsForAuthenticatedUser"]).request,
    listFollowedByAuthenticated:
      new RequestMocker<"/user/following", "get">(baseUrl, endpoints["users"]["listFollowedByAuthenticated"]).request,
    listFollowedByAuthenticatedUser:
      new RequestMocker<"/user/following", "get">(baseUrl, endpoints["users"]["listFollowedByAuthenticatedUser"]).request,
    listFollowersForAuthenticatedUser:
      new RequestMocker<"/user/followers", "get">(baseUrl, endpoints["users"]["listFollowersForAuthenticatedUser"]).request,
    listFollowersForUser:
      new RequestMocker<"/users/{username}/followers", "get">(baseUrl, endpoints["users"]["listFollowersForUser"]).request,
    listFollowingForUser:
      new RequestMocker<"/users/{username}/following", "get">(baseUrl, endpoints["users"]["listFollowingForUser"]).request,
    listGpgKeysForAuthenticated:
      new RequestMocker<"/user/gpg_keys", "get">(baseUrl, endpoints["users"]["listGpgKeysForAuthenticated"]).request,
    listGpgKeysForAuthenticatedUser:
      new RequestMocker<"/user/gpg_keys", "get">(baseUrl, endpoints["users"]["listGpgKeysForAuthenticatedUser"]).request,
    listGpgKeysForUser:
      new RequestMocker<"/users/{username}/gpg_keys", "get">(baseUrl, endpoints["users"]["listGpgKeysForUser"]).request,
    listPublicEmailsForAuthenticated:
      new RequestMocker<"/user/public_emails", "get">(baseUrl, endpoints["users"]["listPublicEmailsForAuthenticated"]).request,
    listPublicEmailsForAuthenticatedUser:
      new RequestMocker<"/user/public_emails", "get">(baseUrl, endpoints["users"]["listPublicEmailsForAuthenticatedUser"]).request,
    listPublicKeysForUser:
      new RequestMocker<"/users/{username}/keys", "get">(baseUrl, endpoints["users"]["listPublicKeysForUser"]).request,
    listPublicSshKeysForAuthenticated:
      new RequestMocker<"/user/keys", "get">(baseUrl, endpoints["users"]["listPublicSshKeysForAuthenticated"]).request,
    listPublicSshKeysForAuthenticatedUser:
      new RequestMocker<"/user/keys", "get">(baseUrl, endpoints["users"]["listPublicSshKeysForAuthenticatedUser"]).request,
    listSshSigningKeysForAuthenticatedUser:
      new RequestMocker<"/user/ssh_signing_keys", "get">(baseUrl, endpoints["users"]["listSshSigningKeysForAuthenticatedUser"]).request,
    listSshSigningKeysForUser:
      new RequestMocker<"/users/{username}/ssh_signing_keys", "get">(baseUrl, endpoints["users"]["listSshSigningKeysForUser"]).request,
    setPrimaryEmailVisibilityForAuthenticated:
      new RequestMocker<"/user/email/visibility", "patch">(baseUrl, endpoints["users"]["setPrimaryEmailVisibilityForAuthenticated"]).request,
    setPrimaryEmailVisibilityForAuthenticatedUser:
      new RequestMocker<"/user/email/visibility", "patch">(baseUrl, endpoints["users"]["setPrimaryEmailVisibilityForAuthenticatedUser"]).request,
    unblock:
      new RequestMocker<"/user/blocks/{username}", "delete">(baseUrl, endpoints["users"]["unblock"]).request,
    unfollow:
      new RequestMocker<"/user/following/{username}", "delete">(baseUrl, endpoints["users"]["unfollow"]).request,
    updateAuthenticated:
      new RequestMocker<"/user", "patch">(baseUrl, endpoints["users"]["updateAuthenticated"]).request,
  },
});

export default endpointToMethod;
