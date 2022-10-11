import { MoctokitRequestMocker } from "../request/request-mocker";
import endpoints from "./endpoint-details";
const endpointToMethod = (baseUrl: string) => ({
  actions: {
    addCustomLabelsToSelfHostedRunnerForOrg:
      new MoctokitRequestMocker<"/orgs/{org}/actions/runners/{runner_id}/labels", "post">(baseUrl, endpoints["actions"]["addCustomLabelsToSelfHostedRunnerForOrg"]).request,
    addCustomLabelsToSelfHostedRunnerForRepo:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/runners/{runner_id}/labels", "post">(baseUrl, endpoints["actions"]["addCustomLabelsToSelfHostedRunnerForRepo"]).request,
    addSelectedRepoToOrgSecret:
      new MoctokitRequestMocker<"/orgs/{org}/actions/secrets/{secret_name}/repositories/{repository_id}", "put">(baseUrl, endpoints["actions"]["addSelectedRepoToOrgSecret"]).request,
    approveWorkflowRun:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/runs/{run_id}/approve", "post">(baseUrl, endpoints["actions"]["approveWorkflowRun"]).request,
    cancelWorkflowRun:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/runs/{run_id}/cancel", "post">(baseUrl, endpoints["actions"]["cancelWorkflowRun"]).request,
    createOrUpdateEnvironmentSecret:
      new MoctokitRequestMocker<"/repositories/{repository_id}/environments/{environment_name}/secrets/{secret_name}", "put">(baseUrl, endpoints["actions"]["createOrUpdateEnvironmentSecret"]).request,
    createOrUpdateOrgSecret:
      new MoctokitRequestMocker<"/orgs/{org}/actions/secrets/{secret_name}", "put">(baseUrl, endpoints["actions"]["createOrUpdateOrgSecret"]).request,
    createOrUpdateRepoSecret:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/secrets/{secret_name}", "put">(baseUrl, endpoints["actions"]["createOrUpdateRepoSecret"]).request,
    createRegistrationTokenForOrg:
      new MoctokitRequestMocker<"/orgs/{org}/actions/runners/registration-token", "post">(baseUrl, endpoints["actions"]["createRegistrationTokenForOrg"]).request,
    createRegistrationTokenForRepo:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/runners/registration-token", "post">(baseUrl, endpoints["actions"]["createRegistrationTokenForRepo"]).request,
    createRemoveTokenForOrg:
      new MoctokitRequestMocker<"/orgs/{org}/actions/runners/remove-token", "post">(baseUrl, endpoints["actions"]["createRemoveTokenForOrg"]).request,
    createRemoveTokenForRepo:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/runners/remove-token", "post">(baseUrl, endpoints["actions"]["createRemoveTokenForRepo"]).request,
    createWorkflowDispatch:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/workflows/{workflow_id}/dispatches", "post">(baseUrl, endpoints["actions"]["createWorkflowDispatch"]).request,
    deleteActionsCacheById:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/caches/{cache_id}", "delete">(baseUrl, endpoints["actions"]["deleteActionsCacheById"]).request,
    deleteActionsCacheByKey:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/caches", "delete">(baseUrl, endpoints["actions"]["deleteActionsCacheByKey"]).request,
    deleteArtifact:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/artifacts/{artifact_id}", "delete">(baseUrl, endpoints["actions"]["deleteArtifact"]).request,
    deleteEnvironmentSecret:
      new MoctokitRequestMocker<"/repositories/{repository_id}/environments/{environment_name}/secrets/{secret_name}", "delete">(baseUrl, endpoints["actions"]["deleteEnvironmentSecret"]).request,
    deleteOrgSecret:
      new MoctokitRequestMocker<"/orgs/{org}/actions/secrets/{secret_name}", "delete">(baseUrl, endpoints["actions"]["deleteOrgSecret"]).request,
    deleteRepoSecret:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/secrets/{secret_name}", "delete">(baseUrl, endpoints["actions"]["deleteRepoSecret"]).request,
    deleteSelfHostedRunnerFromOrg:
      new MoctokitRequestMocker<"/orgs/{org}/actions/runners/{runner_id}", "delete">(baseUrl, endpoints["actions"]["deleteSelfHostedRunnerFromOrg"]).request,
    deleteSelfHostedRunnerFromRepo:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/runners/{runner_id}", "delete">(baseUrl, endpoints["actions"]["deleteSelfHostedRunnerFromRepo"]).request,
    deleteWorkflowRun:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/runs/{run_id}", "delete">(baseUrl, endpoints["actions"]["deleteWorkflowRun"]).request,
    deleteWorkflowRunLogs:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/runs/{run_id}/logs", "delete">(baseUrl, endpoints["actions"]["deleteWorkflowRunLogs"]).request,
    disableSelectedRepositoryGithubActionsOrganization:
      new MoctokitRequestMocker<"/orgs/{org}/actions/permissions/repositories/{repository_id}", "delete">(baseUrl, endpoints["actions"]["disableSelectedRepositoryGithubActionsOrganization"]).request,
    disableWorkflow:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/workflows/{workflow_id}/disable", "put">(baseUrl, endpoints["actions"]["disableWorkflow"]).request,
    downloadArtifact:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/artifacts/{artifact_id}/{archive_format}", "get">(baseUrl, endpoints["actions"]["downloadArtifact"]).request,
    downloadJobLogsForWorkflowRun:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/jobs/{job_id}/logs", "get">(baseUrl, endpoints["actions"]["downloadJobLogsForWorkflowRun"]).request,
    downloadWorkflowRunAttemptLogs:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/runs/{run_id}/attempts/{attempt_number}/logs", "get">(baseUrl, endpoints["actions"]["downloadWorkflowRunAttemptLogs"]).request,
    downloadWorkflowRunLogs:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/runs/{run_id}/logs", "get">(baseUrl, endpoints["actions"]["downloadWorkflowRunLogs"]).request,
    enableSelectedRepositoryGithubActionsOrganization:
      new MoctokitRequestMocker<"/orgs/{org}/actions/permissions/repositories/{repository_id}", "put">(baseUrl, endpoints["actions"]["enableSelectedRepositoryGithubActionsOrganization"]).request,
    enableWorkflow:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/workflows/{workflow_id}/enable", "put">(baseUrl, endpoints["actions"]["enableWorkflow"]).request,
    getActionsCacheList:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/caches", "get">(baseUrl, endpoints["actions"]["getActionsCacheList"]).request,
    getActionsCacheUsage:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/cache/usage", "get">(baseUrl, endpoints["actions"]["getActionsCacheUsage"]).request,
    getActionsCacheUsageByRepoForOrg:
      new MoctokitRequestMocker<"/orgs/{org}/actions/cache/usage-by-repository", "get">(baseUrl, endpoints["actions"]["getActionsCacheUsageByRepoForOrg"]).request,
    getActionsCacheUsageForEnterprise:
      new MoctokitRequestMocker<"/enterprises/{enterprise}/actions/cache/usage", "get">(baseUrl, endpoints["actions"]["getActionsCacheUsageForEnterprise"]).request,
    getActionsCacheUsageForOrg:
      new MoctokitRequestMocker<"/orgs/{org}/actions/cache/usage", "get">(baseUrl, endpoints["actions"]["getActionsCacheUsageForOrg"]).request,
    getAllowedActionsOrganization:
      new MoctokitRequestMocker<"/orgs/{org}/actions/permissions/selected-actions", "get">(baseUrl, endpoints["actions"]["getAllowedActionsOrganization"]).request,
    getAllowedActionsRepository:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/permissions/selected-actions", "get">(baseUrl, endpoints["actions"]["getAllowedActionsRepository"]).request,
    getArtifact:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/artifacts/{artifact_id}", "get">(baseUrl, endpoints["actions"]["getArtifact"]).request,
    getEnvironmentPublicKey:
      new MoctokitRequestMocker<"/repositories/{repository_id}/environments/{environment_name}/secrets/public-key", "get">(baseUrl, endpoints["actions"]["getEnvironmentPublicKey"]).request,
    getEnvironmentSecret:
      new MoctokitRequestMocker<"/repositories/{repository_id}/environments/{environment_name}/secrets/{secret_name}", "get">(baseUrl, endpoints["actions"]["getEnvironmentSecret"]).request,
    getGithubActionsDefaultWorkflowPermissionsEnterprise:
      new MoctokitRequestMocker<"/enterprises/{enterprise}/actions/permissions/workflow", "get">(baseUrl, endpoints["actions"]["getGithubActionsDefaultWorkflowPermissionsEnterprise"]).request,
    getGithubActionsDefaultWorkflowPermissionsOrganization:
      new MoctokitRequestMocker<"/orgs/{org}/actions/permissions/workflow", "get">(baseUrl, endpoints["actions"]["getGithubActionsDefaultWorkflowPermissionsOrganization"]).request,
    getGithubActionsDefaultWorkflowPermissionsRepository:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/permissions/workflow", "get">(baseUrl, endpoints["actions"]["getGithubActionsDefaultWorkflowPermissionsRepository"]).request,
    getGithubActionsPermissionsOrganization:
      new MoctokitRequestMocker<"/orgs/{org}/actions/permissions", "get">(baseUrl, endpoints["actions"]["getGithubActionsPermissionsOrganization"]).request,
    getGithubActionsPermissionsRepository:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/permissions", "get">(baseUrl, endpoints["actions"]["getGithubActionsPermissionsRepository"]).request,
    getJobForWorkflowRun:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/jobs/{job_id}", "get">(baseUrl, endpoints["actions"]["getJobForWorkflowRun"]).request,
    getOrgPublicKey:
      new MoctokitRequestMocker<"/orgs/{org}/actions/secrets/public-key", "get">(baseUrl, endpoints["actions"]["getOrgPublicKey"]).request,
    getOrgSecret:
      new MoctokitRequestMocker<"/orgs/{org}/actions/secrets/{secret_name}", "get">(baseUrl, endpoints["actions"]["getOrgSecret"]).request,
    getPendingDeploymentsForRun:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/runs/{run_id}/pending_deployments", "get">(baseUrl, endpoints["actions"]["getPendingDeploymentsForRun"]).request,
    getRepoPermissions:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/permissions", "get">(baseUrl, endpoints["actions"]["getRepoPermissions"]).request,
    getRepoPublicKey:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/secrets/public-key", "get">(baseUrl, endpoints["actions"]["getRepoPublicKey"]).request,
    getRepoSecret:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/secrets/{secret_name}", "get">(baseUrl, endpoints["actions"]["getRepoSecret"]).request,
    getReviewsForRun:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/runs/{run_id}/approvals", "get">(baseUrl, endpoints["actions"]["getReviewsForRun"]).request,
    getSelfHostedRunnerForOrg:
      new MoctokitRequestMocker<"/orgs/{org}/actions/runners/{runner_id}", "get">(baseUrl, endpoints["actions"]["getSelfHostedRunnerForOrg"]).request,
    getSelfHostedRunnerForRepo:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/runners/{runner_id}", "get">(baseUrl, endpoints["actions"]["getSelfHostedRunnerForRepo"]).request,
    getWorkflow:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/workflows/{workflow_id}", "get">(baseUrl, endpoints["actions"]["getWorkflow"]).request,
    getWorkflowAccessToRepository:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/permissions/access", "get">(baseUrl, endpoints["actions"]["getWorkflowAccessToRepository"]).request,
    getWorkflowRun:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/runs/{run_id}", "get">(baseUrl, endpoints["actions"]["getWorkflowRun"]).request,
    getWorkflowRunAttempt:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/runs/{run_id}/attempts/{attempt_number}", "get">(baseUrl, endpoints["actions"]["getWorkflowRunAttempt"]).request,
    getWorkflowRunUsage:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/runs/{run_id}/timing", "get">(baseUrl, endpoints["actions"]["getWorkflowRunUsage"]).request,
    getWorkflowUsage:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/workflows/{workflow_id}/timing", "get">(baseUrl, endpoints["actions"]["getWorkflowUsage"]).request,
    listArtifactsForRepo:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/artifacts", "get">(baseUrl, endpoints["actions"]["listArtifactsForRepo"]).request,
    listEnvironmentSecrets:
      new MoctokitRequestMocker<"/repositories/{repository_id}/environments/{environment_name}/secrets", "get">(baseUrl, endpoints["actions"]["listEnvironmentSecrets"]).request,
    listJobsForWorkflowRun:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/runs/{run_id}/jobs", "get">(baseUrl, endpoints["actions"]["listJobsForWorkflowRun"]).request,
    listJobsForWorkflowRunAttempt:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/runs/{run_id}/attempts/{attempt_number}/jobs", "get">(baseUrl, endpoints["actions"]["listJobsForWorkflowRunAttempt"]).request,
    listLabelsForSelfHostedRunnerForOrg:
      new MoctokitRequestMocker<"/orgs/{org}/actions/runners/{runner_id}/labels", "get">(baseUrl, endpoints["actions"]["listLabelsForSelfHostedRunnerForOrg"]).request,
    listLabelsForSelfHostedRunnerForRepo:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/runners/{runner_id}/labels", "get">(baseUrl, endpoints["actions"]["listLabelsForSelfHostedRunnerForRepo"]).request,
    listOrgSecrets:
      new MoctokitRequestMocker<"/orgs/{org}/actions/secrets", "get">(baseUrl, endpoints["actions"]["listOrgSecrets"]).request,
    listRepoSecrets:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/secrets", "get">(baseUrl, endpoints["actions"]["listRepoSecrets"]).request,
    listRepoWorkflows:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/workflows", "get">(baseUrl, endpoints["actions"]["listRepoWorkflows"]).request,
    listRunnerApplicationsForOrg:
      new MoctokitRequestMocker<"/orgs/{org}/actions/runners/downloads", "get">(baseUrl, endpoints["actions"]["listRunnerApplicationsForOrg"]).request,
    listRunnerApplicationsForRepo:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/runners/downloads", "get">(baseUrl, endpoints["actions"]["listRunnerApplicationsForRepo"]).request,
    listSelectedReposForOrgSecret:
      new MoctokitRequestMocker<"/orgs/{org}/actions/secrets/{secret_name}/repositories", "get">(baseUrl, endpoints["actions"]["listSelectedReposForOrgSecret"]).request,
    listSelectedRepositoriesEnabledGithubActionsOrganization:
      new MoctokitRequestMocker<"/orgs/{org}/actions/permissions/repositories", "get">(baseUrl, endpoints["actions"]["listSelectedRepositoriesEnabledGithubActionsOrganization"]).request,
    listSelfHostedRunnersForOrg:
      new MoctokitRequestMocker<"/orgs/{org}/actions/runners", "get">(baseUrl, endpoints["actions"]["listSelfHostedRunnersForOrg"]).request,
    listSelfHostedRunnersForRepo:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/runners", "get">(baseUrl, endpoints["actions"]["listSelfHostedRunnersForRepo"]).request,
    listWorkflowRunArtifacts:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/runs/{run_id}/artifacts", "get">(baseUrl, endpoints["actions"]["listWorkflowRunArtifacts"]).request,
    listWorkflowRuns:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/workflows/{workflow_id}/runs", "get">(baseUrl, endpoints["actions"]["listWorkflowRuns"]).request,
    listWorkflowRunsForRepo:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/runs", "get">(baseUrl, endpoints["actions"]["listWorkflowRunsForRepo"]).request,
    reRunJobForWorkflowRun:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/jobs/{job_id}/rerun", "post">(baseUrl, endpoints["actions"]["reRunJobForWorkflowRun"]).request,
    reRunWorkflow:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/runs/{run_id}/rerun", "post">(baseUrl, endpoints["actions"]["reRunWorkflow"]).request,
    reRunWorkflowFailedJobs:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/runs/{run_id}/rerun-failed-jobs", "post">(baseUrl, endpoints["actions"]["reRunWorkflowFailedJobs"]).request,
    removeAllCustomLabelsFromSelfHostedRunnerForOrg:
      new MoctokitRequestMocker<"/orgs/{org}/actions/runners/{runner_id}/labels", "delete">(baseUrl, endpoints["actions"]["removeAllCustomLabelsFromSelfHostedRunnerForOrg"]).request,
    removeAllCustomLabelsFromSelfHostedRunnerForRepo:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/runners/{runner_id}/labels", "delete">(baseUrl, endpoints["actions"]["removeAllCustomLabelsFromSelfHostedRunnerForRepo"]).request,
    removeCustomLabelFromSelfHostedRunnerForOrg:
      new MoctokitRequestMocker<"/orgs/{org}/actions/runners/{runner_id}/labels/{name}", "delete">(baseUrl, endpoints["actions"]["removeCustomLabelFromSelfHostedRunnerForOrg"]).request,
    removeCustomLabelFromSelfHostedRunnerForRepo:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/runners/{runner_id}/labels/{name}", "delete">(baseUrl, endpoints["actions"]["removeCustomLabelFromSelfHostedRunnerForRepo"]).request,
    removeSelectedRepoFromOrgSecret:
      new MoctokitRequestMocker<"/orgs/{org}/actions/secrets/{secret_name}/repositories/{repository_id}", "delete">(baseUrl, endpoints["actions"]["removeSelectedRepoFromOrgSecret"]).request,
    reviewPendingDeploymentsForRun:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/runs/{run_id}/pending_deployments", "post">(baseUrl, endpoints["actions"]["reviewPendingDeploymentsForRun"]).request,
    setAllowedActionsOrganization:
      new MoctokitRequestMocker<"/orgs/{org}/actions/permissions/selected-actions", "put">(baseUrl, endpoints["actions"]["setAllowedActionsOrganization"]).request,
    setAllowedActionsRepository:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/permissions/selected-actions", "put">(baseUrl, endpoints["actions"]["setAllowedActionsRepository"]).request,
    setCustomLabelsForSelfHostedRunnerForOrg:
      new MoctokitRequestMocker<"/orgs/{org}/actions/runners/{runner_id}/labels", "put">(baseUrl, endpoints["actions"]["setCustomLabelsForSelfHostedRunnerForOrg"]).request,
    setCustomLabelsForSelfHostedRunnerForRepo:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/runners/{runner_id}/labels", "put">(baseUrl, endpoints["actions"]["setCustomLabelsForSelfHostedRunnerForRepo"]).request,
    setGithubActionsDefaultWorkflowPermissionsEnterprise:
      new MoctokitRequestMocker<"/enterprises/{enterprise}/actions/permissions/workflow", "put">(baseUrl, endpoints["actions"]["setGithubActionsDefaultWorkflowPermissionsEnterprise"]).request,
    setGithubActionsDefaultWorkflowPermissionsOrganization:
      new MoctokitRequestMocker<"/orgs/{org}/actions/permissions/workflow", "put">(baseUrl, endpoints["actions"]["setGithubActionsDefaultWorkflowPermissionsOrganization"]).request,
    setGithubActionsDefaultWorkflowPermissionsRepository:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/permissions/workflow", "put">(baseUrl, endpoints["actions"]["setGithubActionsDefaultWorkflowPermissionsRepository"]).request,
    setGithubActionsPermissionsOrganization:
      new MoctokitRequestMocker<"/orgs/{org}/actions/permissions", "put">(baseUrl, endpoints["actions"]["setGithubActionsPermissionsOrganization"]).request,
    setGithubActionsPermissionsRepository:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/permissions", "put">(baseUrl, endpoints["actions"]["setGithubActionsPermissionsRepository"]).request,
    setSelectedReposForOrgSecret:
      new MoctokitRequestMocker<"/orgs/{org}/actions/secrets/{secret_name}/repositories", "put">(baseUrl, endpoints["actions"]["setSelectedReposForOrgSecret"]).request,
    setSelectedRepositoriesEnabledGithubActionsOrganization:
      new MoctokitRequestMocker<"/orgs/{org}/actions/permissions/repositories", "put">(baseUrl, endpoints["actions"]["setSelectedRepositoriesEnabledGithubActionsOrganization"]).request,
    setWorkflowAccessToRepository:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/permissions/access", "put">(baseUrl, endpoints["actions"]["setWorkflowAccessToRepository"]).request,
  },
  activity: {
    checkRepoIsStarredByAuthenticatedUser:
      new MoctokitRequestMocker<"/user/starred/{owner}/{repo}", "get">(baseUrl, endpoints["activity"]["checkRepoIsStarredByAuthenticatedUser"]).request,
    deleteRepoSubscription:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/subscription", "delete">(baseUrl, endpoints["activity"]["deleteRepoSubscription"]).request,
    deleteThreadSubscription:
      new MoctokitRequestMocker<"/notifications/threads/{thread_id}/subscription", "delete">(baseUrl, endpoints["activity"]["deleteThreadSubscription"]).request,
    getFeeds:
      new MoctokitRequestMocker<"/feeds", "get">(baseUrl, endpoints["activity"]["getFeeds"]).request,
    getRepoSubscription:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/subscription", "get">(baseUrl, endpoints["activity"]["getRepoSubscription"]).request,
    getThread:
      new MoctokitRequestMocker<"/notifications/threads/{thread_id}", "get">(baseUrl, endpoints["activity"]["getThread"]).request,
    getThreadSubscriptionForAuthenticatedUser:
      new MoctokitRequestMocker<"/notifications/threads/{thread_id}/subscription", "get">(baseUrl, endpoints["activity"]["getThreadSubscriptionForAuthenticatedUser"]).request,
    listEventsForAuthenticatedUser:
      new MoctokitRequestMocker<"/users/{username}/events", "get">(baseUrl, endpoints["activity"]["listEventsForAuthenticatedUser"]).request,
    listNotificationsForAuthenticatedUser:
      new MoctokitRequestMocker<"/notifications", "get">(baseUrl, endpoints["activity"]["listNotificationsForAuthenticatedUser"]).request,
    listOrgEventsForAuthenticatedUser:
      new MoctokitRequestMocker<"/users/{username}/events/orgs/{org}", "get">(baseUrl, endpoints["activity"]["listOrgEventsForAuthenticatedUser"]).request,
    listPublicEvents:
      new MoctokitRequestMocker<"/events", "get">(baseUrl, endpoints["activity"]["listPublicEvents"]).request,
    listPublicEventsForRepoNetwork:
      new MoctokitRequestMocker<"/networks/{owner}/{repo}/events", "get">(baseUrl, endpoints["activity"]["listPublicEventsForRepoNetwork"]).request,
    listPublicEventsForUser:
      new MoctokitRequestMocker<"/users/{username}/events/public", "get">(baseUrl, endpoints["activity"]["listPublicEventsForUser"]).request,
    listPublicOrgEvents:
      new MoctokitRequestMocker<"/orgs/{org}/events", "get">(baseUrl, endpoints["activity"]["listPublicOrgEvents"]).request,
    listReceivedEventsForUser:
      new MoctokitRequestMocker<"/users/{username}/received_events", "get">(baseUrl, endpoints["activity"]["listReceivedEventsForUser"]).request,
    listReceivedPublicEventsForUser:
      new MoctokitRequestMocker<"/users/{username}/received_events/public", "get">(baseUrl, endpoints["activity"]["listReceivedPublicEventsForUser"]).request,
    listRepoEvents:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/events", "get">(baseUrl, endpoints["activity"]["listRepoEvents"]).request,
    listRepoNotificationsForAuthenticatedUser:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/notifications", "get">(baseUrl, endpoints["activity"]["listRepoNotificationsForAuthenticatedUser"]).request,
    listReposStarredByAuthenticatedUser:
      new MoctokitRequestMocker<"/user/starred", "get">(baseUrl, endpoints["activity"]["listReposStarredByAuthenticatedUser"]).request,
    listReposStarredByUser:
      new MoctokitRequestMocker<"/users/{username}/starred", "get">(baseUrl, endpoints["activity"]["listReposStarredByUser"]).request,
    listReposWatchedByUser:
      new MoctokitRequestMocker<"/users/{username}/subscriptions", "get">(baseUrl, endpoints["activity"]["listReposWatchedByUser"]).request,
    listStargazersForRepo:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/stargazers", "get">(baseUrl, endpoints["activity"]["listStargazersForRepo"]).request,
    listWatchedReposForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/subscriptions", "get">(baseUrl, endpoints["activity"]["listWatchedReposForAuthenticatedUser"]).request,
    listWatchersForRepo:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/subscribers", "get">(baseUrl, endpoints["activity"]["listWatchersForRepo"]).request,
    markNotificationsAsRead:
      new MoctokitRequestMocker<"/notifications", "put">(baseUrl, endpoints["activity"]["markNotificationsAsRead"]).request,
    markRepoNotificationsAsRead:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/notifications", "put">(baseUrl, endpoints["activity"]["markRepoNotificationsAsRead"]).request,
    markThreadAsRead:
      new MoctokitRequestMocker<"/notifications/threads/{thread_id}", "patch">(baseUrl, endpoints["activity"]["markThreadAsRead"]).request,
    setRepoSubscription:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/subscription", "put">(baseUrl, endpoints["activity"]["setRepoSubscription"]).request,
    setThreadSubscription:
      new MoctokitRequestMocker<"/notifications/threads/{thread_id}/subscription", "put">(baseUrl, endpoints["activity"]["setThreadSubscription"]).request,
    starRepoForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/starred/{owner}/{repo}", "put">(baseUrl, endpoints["activity"]["starRepoForAuthenticatedUser"]).request,
    unstarRepoForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/starred/{owner}/{repo}", "delete">(baseUrl, endpoints["activity"]["unstarRepoForAuthenticatedUser"]).request,
  },
  apps: {
    addRepoToInstallation:
      new MoctokitRequestMocker<"/user/installations/{installation_id}/repositories/{repository_id}", "put">(baseUrl, endpoints["apps"]["addRepoToInstallation"]).request,
    addRepoToInstallationForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/installations/{installation_id}/repositories/{repository_id}", "put">(baseUrl, endpoints["apps"]["addRepoToInstallationForAuthenticatedUser"]).request,
    checkToken:
      new MoctokitRequestMocker<"/applications/{client_id}/token", "post">(baseUrl, endpoints["apps"]["checkToken"]).request,
    createFromManifest:
      new MoctokitRequestMocker<"/app-manifests/{code}/conversions", "post">(baseUrl, endpoints["apps"]["createFromManifest"]).request,
    createInstallationAccessToken:
      new MoctokitRequestMocker<"/app/installations/{installation_id}/access_tokens", "post">(baseUrl, endpoints["apps"]["createInstallationAccessToken"]).request,
    deleteAuthorization:
      new MoctokitRequestMocker<"/applications/{client_id}/grant", "delete">(baseUrl, endpoints["apps"]["deleteAuthorization"]).request,
    deleteInstallation:
      new MoctokitRequestMocker<"/app/installations/{installation_id}", "delete">(baseUrl, endpoints["apps"]["deleteInstallation"]).request,
    deleteToken:
      new MoctokitRequestMocker<"/applications/{client_id}/token", "delete">(baseUrl, endpoints["apps"]["deleteToken"]).request,
    getAuthenticated:
      new MoctokitRequestMocker<"/app", "get">(baseUrl, endpoints["apps"]["getAuthenticated"]).request,
    getBySlug:
      new MoctokitRequestMocker<"/apps/{app_slug}", "get">(baseUrl, endpoints["apps"]["getBySlug"]).request,
    getInstallation:
      new MoctokitRequestMocker<"/app/installations/{installation_id}", "get">(baseUrl, endpoints["apps"]["getInstallation"]).request,
    getOrgInstallation:
      new MoctokitRequestMocker<"/orgs/{org}/installation", "get">(baseUrl, endpoints["apps"]["getOrgInstallation"]).request,
    getRepoInstallation:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/installation", "get">(baseUrl, endpoints["apps"]["getRepoInstallation"]).request,
    getSubscriptionPlanForAccount:
      new MoctokitRequestMocker<"/marketplace_listing/accounts/{account_id}", "get">(baseUrl, endpoints["apps"]["getSubscriptionPlanForAccount"]).request,
    getSubscriptionPlanForAccountStubbed:
      new MoctokitRequestMocker<"/marketplace_listing/stubbed/accounts/{account_id}", "get">(baseUrl, endpoints["apps"]["getSubscriptionPlanForAccountStubbed"]).request,
    getUserInstallation:
      new MoctokitRequestMocker<"/users/{username}/installation", "get">(baseUrl, endpoints["apps"]["getUserInstallation"]).request,
    getWebhookConfigForApp:
      new MoctokitRequestMocker<"/app/hook/config", "get">(baseUrl, endpoints["apps"]["getWebhookConfigForApp"]).request,
    getWebhookDelivery:
      new MoctokitRequestMocker<"/app/hook/deliveries/{delivery_id}", "get">(baseUrl, endpoints["apps"]["getWebhookDelivery"]).request,
    listAccountsForPlan:
      new MoctokitRequestMocker<"/marketplace_listing/plans/{plan_id}/accounts", "get">(baseUrl, endpoints["apps"]["listAccountsForPlan"]).request,
    listAccountsForPlanStubbed:
      new MoctokitRequestMocker<"/marketplace_listing/stubbed/plans/{plan_id}/accounts", "get">(baseUrl, endpoints["apps"]["listAccountsForPlanStubbed"]).request,
    listInstallationReposForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/installations/{installation_id}/repositories", "get">(baseUrl, endpoints["apps"]["listInstallationReposForAuthenticatedUser"]).request,
    listInstallations:
      new MoctokitRequestMocker<"/app/installations", "get">(baseUrl, endpoints["apps"]["listInstallations"]).request,
    listInstallationsForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/installations", "get">(baseUrl, endpoints["apps"]["listInstallationsForAuthenticatedUser"]).request,
    listPlans:
      new MoctokitRequestMocker<"/marketplace_listing/plans", "get">(baseUrl, endpoints["apps"]["listPlans"]).request,
    listPlansStubbed:
      new MoctokitRequestMocker<"/marketplace_listing/stubbed/plans", "get">(baseUrl, endpoints["apps"]["listPlansStubbed"]).request,
    listReposAccessibleToInstallation:
      new MoctokitRequestMocker<"/installation/repositories", "get">(baseUrl, endpoints["apps"]["listReposAccessibleToInstallation"]).request,
    listSubscriptionsForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/marketplace_purchases", "get">(baseUrl, endpoints["apps"]["listSubscriptionsForAuthenticatedUser"]).request,
    listSubscriptionsForAuthenticatedUserStubbed:
      new MoctokitRequestMocker<"/user/marketplace_purchases/stubbed", "get">(baseUrl, endpoints["apps"]["listSubscriptionsForAuthenticatedUserStubbed"]).request,
    listWebhookDeliveries:
      new MoctokitRequestMocker<"/app/hook/deliveries", "get">(baseUrl, endpoints["apps"]["listWebhookDeliveries"]).request,
    redeliverWebhookDelivery:
      new MoctokitRequestMocker<"/app/hook/deliveries/{delivery_id}/attempts", "post">(baseUrl, endpoints["apps"]["redeliverWebhookDelivery"]).request,
    removeRepoFromInstallation:
      new MoctokitRequestMocker<"/user/installations/{installation_id}/repositories/{repository_id}", "delete">(baseUrl, endpoints["apps"]["removeRepoFromInstallation"]).request,
    removeRepoFromInstallationForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/installations/{installation_id}/repositories/{repository_id}", "delete">(baseUrl, endpoints["apps"]["removeRepoFromInstallationForAuthenticatedUser"]).request,
    resetToken:
      new MoctokitRequestMocker<"/applications/{client_id}/token", "patch">(baseUrl, endpoints["apps"]["resetToken"]).request,
    revokeInstallationAccessToken:
      new MoctokitRequestMocker<"/installation/token", "delete">(baseUrl, endpoints["apps"]["revokeInstallationAccessToken"]).request,
    scopeToken:
      new MoctokitRequestMocker<"/applications/{client_id}/token/scoped", "post">(baseUrl, endpoints["apps"]["scopeToken"]).request,
    suspendInstallation:
      new MoctokitRequestMocker<"/app/installations/{installation_id}/suspended", "put">(baseUrl, endpoints["apps"]["suspendInstallation"]).request,
    unsuspendInstallation:
      new MoctokitRequestMocker<"/app/installations/{installation_id}/suspended", "delete">(baseUrl, endpoints["apps"]["unsuspendInstallation"]).request,
    updateWebhookConfigForApp:
      new MoctokitRequestMocker<"/app/hook/config", "patch">(baseUrl, endpoints["apps"]["updateWebhookConfigForApp"]).request,
  },
  billing: {
    getGithubActionsBillingOrg:
      new MoctokitRequestMocker<"/orgs/{org}/settings/billing/actions", "get">(baseUrl, endpoints["billing"]["getGithubActionsBillingOrg"]).request,
    getGithubActionsBillingUser:
      new MoctokitRequestMocker<"/users/{username}/settings/billing/actions", "get">(baseUrl, endpoints["billing"]["getGithubActionsBillingUser"]).request,
    getGithubAdvancedSecurityBillingGhe:
      new MoctokitRequestMocker<"/enterprises/{enterprise}/settings/billing/advanced-security", "get">(baseUrl, endpoints["billing"]["getGithubAdvancedSecurityBillingGhe"]).request,
    getGithubAdvancedSecurityBillingOrg:
      new MoctokitRequestMocker<"/orgs/{org}/settings/billing/advanced-security", "get">(baseUrl, endpoints["billing"]["getGithubAdvancedSecurityBillingOrg"]).request,
    getGithubPackagesBillingOrg:
      new MoctokitRequestMocker<"/orgs/{org}/settings/billing/packages", "get">(baseUrl, endpoints["billing"]["getGithubPackagesBillingOrg"]).request,
    getGithubPackagesBillingUser:
      new MoctokitRequestMocker<"/users/{username}/settings/billing/packages", "get">(baseUrl, endpoints["billing"]["getGithubPackagesBillingUser"]).request,
    getSharedStorageBillingOrg:
      new MoctokitRequestMocker<"/orgs/{org}/settings/billing/shared-storage", "get">(baseUrl, endpoints["billing"]["getSharedStorageBillingOrg"]).request,
    getSharedStorageBillingUser:
      new MoctokitRequestMocker<"/users/{username}/settings/billing/shared-storage", "get">(baseUrl, endpoints["billing"]["getSharedStorageBillingUser"]).request,
  },
  checks: {
    create:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/check-runs", "post">(baseUrl, endpoints["checks"]["create"]).request,
    createSuite:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/check-suites", "post">(baseUrl, endpoints["checks"]["createSuite"]).request,
    get: new MoctokitRequestMocker<"/repos/{owner}/{repo}/check-runs/{check_run_id}", "get">(baseUrl, endpoints["checks"]["get"]).request,
    getSuite:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/check-suites/{check_suite_id}", "get">(baseUrl, endpoints["checks"]["getSuite"]).request,
    listAnnotations:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/check-runs/{check_run_id}/annotations", "get">(baseUrl, endpoints["checks"]["listAnnotations"]).request,
    listForRef:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/commits/{ref}/check-runs", "get">(baseUrl, endpoints["checks"]["listForRef"]).request,
    listForSuite:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/check-suites/{check_suite_id}/check-runs", "get">(baseUrl, endpoints["checks"]["listForSuite"]).request,
    listSuitesForRef:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/commits/{ref}/check-suites", "get">(baseUrl, endpoints["checks"]["listSuitesForRef"]).request,
    rerequestRun:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/check-runs/{check_run_id}/rerequest", "post">(baseUrl, endpoints["checks"]["rerequestRun"]).request,
    rerequestSuite:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/check-suites/{check_suite_id}/rerequest", "post">(baseUrl, endpoints["checks"]["rerequestSuite"]).request,
    setSuitesPreferences:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/check-suites/preferences", "patch">(baseUrl, endpoints["checks"]["setSuitesPreferences"]).request,
    update:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/check-runs/{check_run_id}", "patch">(baseUrl, endpoints["checks"]["update"]).request,
  },
  codeScanning: {
    deleteAnalysis:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/code-scanning/analyses/{analysis_id}", "delete">(baseUrl, endpoints["codeScanning"]["deleteAnalysis"]).request,
    getAlert:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/code-scanning/alerts/{alert_number}", "get">(baseUrl, endpoints["codeScanning"]["getAlert"]).request,
    getAnalysis:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/code-scanning/analyses/{analysis_id}", "get">(baseUrl, endpoints["codeScanning"]["getAnalysis"]).request,
    getCodeqlDatabase:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/code-scanning/codeql/databases/{language}", "get">(baseUrl, endpoints["codeScanning"]["getCodeqlDatabase"]).request,
    getSarif:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/code-scanning/sarifs/{sarif_id}", "get">(baseUrl, endpoints["codeScanning"]["getSarif"]).request,
    listAlertInstances:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/code-scanning/alerts/{alert_number}/instances", "get">(baseUrl, endpoints["codeScanning"]["listAlertInstances"]).request,
    listAlertsForEnterprise:
      new MoctokitRequestMocker<"/enterprises/{enterprise}/code-scanning/alerts", "get">(baseUrl, endpoints["codeScanning"]["listAlertsForEnterprise"]).request,
    listAlertsForOrg:
      new MoctokitRequestMocker<"/orgs/{org}/code-scanning/alerts", "get">(baseUrl, endpoints["codeScanning"]["listAlertsForOrg"]).request,
    listAlertsForRepo:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/code-scanning/alerts", "get">(baseUrl, endpoints["codeScanning"]["listAlertsForRepo"]).request,
    listAlertsInstances:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/code-scanning/alerts/{alert_number}/instances", "get">(baseUrl, endpoints["codeScanning"]["listAlertsInstances"]).request,
    listCodeqlDatabases:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/code-scanning/codeql/databases", "get">(baseUrl, endpoints["codeScanning"]["listCodeqlDatabases"]).request,
    listRecentAnalyses:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/code-scanning/analyses", "get">(baseUrl, endpoints["codeScanning"]["listRecentAnalyses"]).request,
    updateAlert:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/code-scanning/alerts/{alert_number}", "patch">(baseUrl, endpoints["codeScanning"]["updateAlert"]).request,
    uploadSarif:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/code-scanning/sarifs", "post">(baseUrl, endpoints["codeScanning"]["uploadSarif"]).request,
  },
  codesOfConduct: {
    getAllCodesOfConduct:
      new MoctokitRequestMocker<"/codes_of_conduct", "get">(baseUrl, endpoints["codesOfConduct"]["getAllCodesOfConduct"]).request,
    getConductCode:
      new MoctokitRequestMocker<"/codes_of_conduct/{key}", "get">(baseUrl, endpoints["codesOfConduct"]["getConductCode"]).request,
  },
  codespaces: {
    addRepositoryForSecretForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/codespaces/secrets/{secret_name}/repositories/{repository_id}", "put">(baseUrl, endpoints["codespaces"]["addRepositoryForSecretForAuthenticatedUser"]).request,
    addSelectedRepoToOrgSecret:
      new MoctokitRequestMocker<"/organizations/{org}/codespaces/secrets/{secret_name}/repositories/{repository_id}", "put">(baseUrl, endpoints["codespaces"]["addSelectedRepoToOrgSecret"]).request,
    codespaceMachinesForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/codespaces/{codespace_name}/machines", "get">(baseUrl, endpoints["codespaces"]["codespaceMachinesForAuthenticatedUser"]).request,
    createForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/codespaces", "post">(baseUrl, endpoints["codespaces"]["createForAuthenticatedUser"]).request,
    createOrUpdateOrgSecret:
      new MoctokitRequestMocker<"/organizations/{org}/codespaces/secrets/{secret_name}", "put">(baseUrl, endpoints["codespaces"]["createOrUpdateOrgSecret"]).request,
    createOrUpdateRepoSecret:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/codespaces/secrets/{secret_name}", "put">(baseUrl, endpoints["codespaces"]["createOrUpdateRepoSecret"]).request,
    createOrUpdateSecretForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/codespaces/secrets/{secret_name}", "put">(baseUrl, endpoints["codespaces"]["createOrUpdateSecretForAuthenticatedUser"]).request,
    createWithPrForAuthenticatedUser:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/pulls/{pull_number}/codespaces", "post">(baseUrl, endpoints["codespaces"]["createWithPrForAuthenticatedUser"]).request,
    createWithRepoForAuthenticatedUser:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/codespaces", "post">(baseUrl, endpoints["codespaces"]["createWithRepoForAuthenticatedUser"]).request,
    deleteForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/codespaces/{codespace_name}", "delete">(baseUrl, endpoints["codespaces"]["deleteForAuthenticatedUser"]).request,
    deleteFromOrganization:
      new MoctokitRequestMocker<"/orgs/{org}/members/{username}/codespaces/{codespace_name}", "delete">(baseUrl, endpoints["codespaces"]["deleteFromOrganization"]).request,
    deleteOrgSecret:
      new MoctokitRequestMocker<"/organizations/{org}/codespaces/secrets/{secret_name}", "delete">(baseUrl, endpoints["codespaces"]["deleteOrgSecret"]).request,
    deleteRepoSecret:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/codespaces/secrets/{secret_name}", "delete">(baseUrl, endpoints["codespaces"]["deleteRepoSecret"]).request,
    deleteSecretForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/codespaces/secrets/{secret_name}", "delete">(baseUrl, endpoints["codespaces"]["deleteSecretForAuthenticatedUser"]).request,
    exportForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/codespaces/{codespace_name}/exports", "post">(baseUrl, endpoints["codespaces"]["exportForAuthenticatedUser"]).request,
    getExportDetailsForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/codespaces/{codespace_name}/exports/{export_id}", "get">(baseUrl, endpoints["codespaces"]["getExportDetailsForAuthenticatedUser"]).request,
    getForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/codespaces/{codespace_name}", "get">(baseUrl, endpoints["codespaces"]["getForAuthenticatedUser"]).request,
    getOrgPublicKey:
      new MoctokitRequestMocker<"/organizations/{org}/codespaces/secrets/public-key", "get">(baseUrl, endpoints["codespaces"]["getOrgPublicKey"]).request,
    getOrgSecret:
      new MoctokitRequestMocker<"/organizations/{org}/codespaces/secrets/{secret_name}", "get">(baseUrl, endpoints["codespaces"]["getOrgSecret"]).request,
    getPublicKeyForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/codespaces/secrets/public-key", "get">(baseUrl, endpoints["codespaces"]["getPublicKeyForAuthenticatedUser"]).request,
    getRepoPublicKey:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/codespaces/secrets/public-key", "get">(baseUrl, endpoints["codespaces"]["getRepoPublicKey"]).request,
    getRepoSecret:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/codespaces/secrets/{secret_name}", "get">(baseUrl, endpoints["codespaces"]["getRepoSecret"]).request,
    getSecretForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/codespaces/secrets/{secret_name}", "get">(baseUrl, endpoints["codespaces"]["getSecretForAuthenticatedUser"]).request,
    listDevcontainersInRepositoryForAuthenticatedUser:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/codespaces/devcontainers", "get">(baseUrl, endpoints["codespaces"]["listDevcontainersInRepositoryForAuthenticatedUser"]).request,
    listForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/codespaces", "get">(baseUrl, endpoints["codespaces"]["listForAuthenticatedUser"]).request,
    listInOrganization:
      new MoctokitRequestMocker<"/orgs/{org}/codespaces", "get">(baseUrl, endpoints["codespaces"]["listInOrganization"]).request,
    listInRepositoryForAuthenticatedUser:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/codespaces", "get">(baseUrl, endpoints["codespaces"]["listInRepositoryForAuthenticatedUser"]).request,
    listOrgSecrets:
      new MoctokitRequestMocker<"/organizations/{org}/codespaces/secrets", "get">(baseUrl, endpoints["codespaces"]["listOrgSecrets"]).request,
    listRepoSecrets:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/codespaces/secrets", "get">(baseUrl, endpoints["codespaces"]["listRepoSecrets"]).request,
    listRepositoriesForSecretForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/codespaces/secrets/{secret_name}/repositories", "get">(baseUrl, endpoints["codespaces"]["listRepositoriesForSecretForAuthenticatedUser"]).request,
    listSecretsForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/codespaces/secrets", "get">(baseUrl, endpoints["codespaces"]["listSecretsForAuthenticatedUser"]).request,
    listSelectedReposForOrgSecret:
      new MoctokitRequestMocker<"/organizations/{org}/codespaces/secrets/{secret_name}/repositories", "get">(baseUrl, endpoints["codespaces"]["listSelectedReposForOrgSecret"]).request,
    preFlightWithRepoForAuthenticatedUser:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/codespaces/new", "get">(baseUrl, endpoints["codespaces"]["preFlightWithRepoForAuthenticatedUser"]).request,
    removeRepositoryForSecretForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/codespaces/secrets/{secret_name}/repositories/{repository_id}", "delete">(baseUrl, endpoints["codespaces"]["removeRepositoryForSecretForAuthenticatedUser"]).request,
    removeSelectedRepoFromOrgSecret:
      new MoctokitRequestMocker<"/organizations/{org}/codespaces/secrets/{secret_name}/repositories/{repository_id}", "delete">(baseUrl, endpoints["codespaces"]["removeSelectedRepoFromOrgSecret"]).request,
    repoMachinesForAuthenticatedUser:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/codespaces/machines", "get">(baseUrl, endpoints["codespaces"]["repoMachinesForAuthenticatedUser"]).request,
    setRepositoriesForSecretForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/codespaces/secrets/{secret_name}/repositories", "put">(baseUrl, endpoints["codespaces"]["setRepositoriesForSecretForAuthenticatedUser"]).request,
    setSelectedReposForOrgSecret:
      new MoctokitRequestMocker<"/organizations/{org}/codespaces/secrets/{secret_name}/repositories", "put">(baseUrl, endpoints["codespaces"]["setSelectedReposForOrgSecret"]).request,
    startForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/codespaces/{codespace_name}/start", "post">(baseUrl, endpoints["codespaces"]["startForAuthenticatedUser"]).request,
    stopForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/codespaces/{codespace_name}/stop", "post">(baseUrl, endpoints["codespaces"]["stopForAuthenticatedUser"]).request,
    stopInOrganization:
      new MoctokitRequestMocker<"/orgs/{org}/members/{username}/codespaces/{codespace_name}/stop", "post">(baseUrl, endpoints["codespaces"]["stopInOrganization"]).request,
    updateForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/codespaces/{codespace_name}", "patch">(baseUrl, endpoints["codespaces"]["updateForAuthenticatedUser"]).request,
  },
  dependabot: {
    addSelectedRepoToOrgSecret:
      new MoctokitRequestMocker<"/orgs/{org}/dependabot/secrets/{secret_name}/repositories/{repository_id}", "put">(baseUrl, endpoints["dependabot"]["addSelectedRepoToOrgSecret"]).request,
    createOrUpdateOrgSecret:
      new MoctokitRequestMocker<"/orgs/{org}/dependabot/secrets/{secret_name}", "put">(baseUrl, endpoints["dependabot"]["createOrUpdateOrgSecret"]).request,
    createOrUpdateRepoSecret:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/dependabot/secrets/{secret_name}", "put">(baseUrl, endpoints["dependabot"]["createOrUpdateRepoSecret"]).request,
    deleteOrgSecret:
      new MoctokitRequestMocker<"/orgs/{org}/dependabot/secrets/{secret_name}", "delete">(baseUrl, endpoints["dependabot"]["deleteOrgSecret"]).request,
    deleteRepoSecret:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/dependabot/secrets/{secret_name}", "delete">(baseUrl, endpoints["dependabot"]["deleteRepoSecret"]).request,
    getAlert:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/dependabot/alerts/{alert_number}", "get">(baseUrl, endpoints["dependabot"]["getAlert"]).request,
    getOrgPublicKey:
      new MoctokitRequestMocker<"/orgs/{org}/dependabot/secrets/public-key", "get">(baseUrl, endpoints["dependabot"]["getOrgPublicKey"]).request,
    getOrgSecret:
      new MoctokitRequestMocker<"/orgs/{org}/dependabot/secrets/{secret_name}", "get">(baseUrl, endpoints["dependabot"]["getOrgSecret"]).request,
    getRepoPublicKey:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/dependabot/secrets/public-key", "get">(baseUrl, endpoints["dependabot"]["getRepoPublicKey"]).request,
    getRepoSecret:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/dependabot/secrets/{secret_name}", "get">(baseUrl, endpoints["dependabot"]["getRepoSecret"]).request,
    listAlertsForRepo:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/dependabot/alerts", "get">(baseUrl, endpoints["dependabot"]["listAlertsForRepo"]).request,
    listOrgSecrets:
      new MoctokitRequestMocker<"/orgs/{org}/dependabot/secrets", "get">(baseUrl, endpoints["dependabot"]["listOrgSecrets"]).request,
    listRepoSecrets:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/dependabot/secrets", "get">(baseUrl, endpoints["dependabot"]["listRepoSecrets"]).request,
    listSelectedReposForOrgSecret:
      new MoctokitRequestMocker<"/orgs/{org}/dependabot/secrets/{secret_name}/repositories", "get">(baseUrl, endpoints["dependabot"]["listSelectedReposForOrgSecret"]).request,
    removeSelectedRepoFromOrgSecret:
      new MoctokitRequestMocker<"/orgs/{org}/dependabot/secrets/{secret_name}/repositories/{repository_id}", "delete">(baseUrl, endpoints["dependabot"]["removeSelectedRepoFromOrgSecret"]).request,
    setSelectedReposForOrgSecret:
      new MoctokitRequestMocker<"/orgs/{org}/dependabot/secrets/{secret_name}/repositories", "put">(baseUrl, endpoints["dependabot"]["setSelectedReposForOrgSecret"]).request,
    updateAlert:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/dependabot/alerts/{alert_number}", "patch">(baseUrl, endpoints["dependabot"]["updateAlert"]).request,
  },
  dependencyGraph: {
    createRepositorySnapshot:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/dependency-graph/snapshots", "post">(baseUrl, endpoints["dependencyGraph"]["createRepositorySnapshot"]).request,
    diffRange:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/dependency-graph/compare/{basehead}", "get">(baseUrl, endpoints["dependencyGraph"]["diffRange"]).request,
  },
  emojis: {
    get: new MoctokitRequestMocker<"/emojis", "get">(baseUrl, endpoints["emojis"]["get"]).request,
  },
  enterpriseAdmin: {
    addCustomLabelsToSelfHostedRunnerForEnterprise:
      new MoctokitRequestMocker<"/enterprises/{enterprise}/actions/runners/{runner_id}/labels", "post">(baseUrl, endpoints["enterpriseAdmin"]["addCustomLabelsToSelfHostedRunnerForEnterprise"]).request,
    disableSelectedOrganizationGithubActionsEnterprise:
      new MoctokitRequestMocker<"/enterprises/{enterprise}/actions/permissions/organizations/{org_id}", "delete">(baseUrl, endpoints["enterpriseAdmin"]["disableSelectedOrganizationGithubActionsEnterprise"]).request,
    enableSelectedOrganizationGithubActionsEnterprise:
      new MoctokitRequestMocker<"/enterprises/{enterprise}/actions/permissions/organizations/{org_id}", "put">(baseUrl, endpoints["enterpriseAdmin"]["enableSelectedOrganizationGithubActionsEnterprise"]).request,
    getAllowedActionsEnterprise:
      new MoctokitRequestMocker<"/enterprises/{enterprise}/actions/permissions/selected-actions", "get">(baseUrl, endpoints["enterpriseAdmin"]["getAllowedActionsEnterprise"]).request,
    getGithubActionsPermissionsEnterprise:
      new MoctokitRequestMocker<"/enterprises/{enterprise}/actions/permissions", "get">(baseUrl, endpoints["enterpriseAdmin"]["getGithubActionsPermissionsEnterprise"]).request,
    getServerStatistics:
      new MoctokitRequestMocker<"/enterprise-installation/{enterprise_or_org}/server-statistics", "get">(baseUrl, endpoints["enterpriseAdmin"]["getServerStatistics"]).request,
    listLabelsForSelfHostedRunnerForEnterprise:
      new MoctokitRequestMocker<"/enterprises/{enterprise}/actions/runners/{runner_id}/labels", "get">(baseUrl, endpoints["enterpriseAdmin"]["listLabelsForSelfHostedRunnerForEnterprise"]).request,
    listSelectedOrganizationsEnabledGithubActionsEnterprise:
      new MoctokitRequestMocker<"/enterprises/{enterprise}/actions/permissions/organizations", "get">(baseUrl, endpoints["enterpriseAdmin"]["listSelectedOrganizationsEnabledGithubActionsEnterprise"]).request,
    removeAllCustomLabelsFromSelfHostedRunnerForEnterprise:
      new MoctokitRequestMocker<"/enterprises/{enterprise}/actions/runners/{runner_id}/labels", "delete">(baseUrl, endpoints["enterpriseAdmin"]["removeAllCustomLabelsFromSelfHostedRunnerForEnterprise"]).request,
    removeCustomLabelFromSelfHostedRunnerForEnterprise:
      new MoctokitRequestMocker<"/enterprises/{enterprise}/actions/runners/{runner_id}/labels/{name}", "delete">(baseUrl, endpoints["enterpriseAdmin"]["removeCustomLabelFromSelfHostedRunnerForEnterprise"]).request,
    setAllowedActionsEnterprise:
      new MoctokitRequestMocker<"/enterprises/{enterprise}/actions/permissions/selected-actions", "put">(baseUrl, endpoints["enterpriseAdmin"]["setAllowedActionsEnterprise"]).request,
    setCustomLabelsForSelfHostedRunnerForEnterprise:
      new MoctokitRequestMocker<"/enterprises/{enterprise}/actions/runners/{runner_id}/labels", "put">(baseUrl, endpoints["enterpriseAdmin"]["setCustomLabelsForSelfHostedRunnerForEnterprise"]).request,
    setGithubActionsPermissionsEnterprise:
      new MoctokitRequestMocker<"/enterprises/{enterprise}/actions/permissions", "put">(baseUrl, endpoints["enterpriseAdmin"]["setGithubActionsPermissionsEnterprise"]).request,
    setSelectedOrganizationsEnabledGithubActionsEnterprise:
      new MoctokitRequestMocker<"/enterprises/{enterprise}/actions/permissions/organizations", "put">(baseUrl, endpoints["enterpriseAdmin"]["setSelectedOrganizationsEnabledGithubActionsEnterprise"]).request,
  },
  gists: {
    checkIsStarred:
      new MoctokitRequestMocker<"/gists/{gist_id}/star", "get">(baseUrl, endpoints["gists"]["checkIsStarred"]).request,
    create:
      new MoctokitRequestMocker<"/gists", "post">(baseUrl, endpoints["gists"]["create"]).request,
    createComment:
      new MoctokitRequestMocker<"/gists/{gist_id}/comments", "post">(baseUrl, endpoints["gists"]["createComment"]).request,
    delete:
      new MoctokitRequestMocker<"/gists/{gist_id}", "delete">(baseUrl, endpoints["gists"]["delete"]).request,
    deleteComment:
      new MoctokitRequestMocker<"/gists/{gist_id}/comments/{comment_id}", "delete">(baseUrl, endpoints["gists"]["deleteComment"]).request,
    fork: new MoctokitRequestMocker<"/gists/{gist_id}/forks", "post">(baseUrl, endpoints["gists"]["fork"]).request,
    get: new MoctokitRequestMocker<"/gists/{gist_id}", "get">(baseUrl, endpoints["gists"]["get"]).request,
    getComment:
      new MoctokitRequestMocker<"/gists/{gist_id}/comments/{comment_id}", "get">(baseUrl, endpoints["gists"]["getComment"]).request,
    getRevision:
      new MoctokitRequestMocker<"/gists/{gist_id}/{sha}", "get">(baseUrl, endpoints["gists"]["getRevision"]).request,
    list: new MoctokitRequestMocker<"/gists", "get">(baseUrl, endpoints["gists"]["list"]).request,
    listComments:
      new MoctokitRequestMocker<"/gists/{gist_id}/comments", "get">(baseUrl, endpoints["gists"]["listComments"]).request,
    listCommits:
      new MoctokitRequestMocker<"/gists/{gist_id}/commits", "get">(baseUrl, endpoints["gists"]["listCommits"]).request,
    listForUser:
      new MoctokitRequestMocker<"/users/{username}/gists", "get">(baseUrl, endpoints["gists"]["listForUser"]).request,
    listForks:
      new MoctokitRequestMocker<"/gists/{gist_id}/forks", "get">(baseUrl, endpoints["gists"]["listForks"]).request,
    listPublic:
      new MoctokitRequestMocker<"/gists/public", "get">(baseUrl, endpoints["gists"]["listPublic"]).request,
    listStarred:
      new MoctokitRequestMocker<"/gists/starred", "get">(baseUrl, endpoints["gists"]["listStarred"]).request,
    star: new MoctokitRequestMocker<"/gists/{gist_id}/star", "put">(baseUrl, endpoints["gists"]["star"]).request,
    unstar:
      new MoctokitRequestMocker<"/gists/{gist_id}/star", "delete">(baseUrl, endpoints["gists"]["unstar"]).request,
    update:
      new MoctokitRequestMocker<"/gists/{gist_id}", "patch">(baseUrl, endpoints["gists"]["update"]).request,
    updateComment:
      new MoctokitRequestMocker<"/gists/{gist_id}/comments/{comment_id}", "patch">(baseUrl, endpoints["gists"]["updateComment"]).request,
  },
  git: {
    createBlob:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/git/blobs", "post">(baseUrl, endpoints["git"]["createBlob"]).request,
    createCommit:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/git/commits", "post">(baseUrl, endpoints["git"]["createCommit"]).request,
    createRef:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/git/refs", "post">(baseUrl, endpoints["git"]["createRef"]).request,
    createTag:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/git/tags", "post">(baseUrl, endpoints["git"]["createTag"]).request,
    createTree:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/git/trees", "post">(baseUrl, endpoints["git"]["createTree"]).request,
    deleteRef:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/git/refs/{ref}", "delete">(baseUrl, endpoints["git"]["deleteRef"]).request,
    getBlob:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/git/blobs/{file_sha}", "get">(baseUrl, endpoints["git"]["getBlob"]).request,
    getCommit:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/git/commits/{commit_sha}", "get">(baseUrl, endpoints["git"]["getCommit"]).request,
    getRef:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/git/ref/{ref}", "get">(baseUrl, endpoints["git"]["getRef"]).request,
    getTag:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/git/tags/{tag_sha}", "get">(baseUrl, endpoints["git"]["getTag"]).request,
    getTree:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/git/trees/{tree_sha}", "get">(baseUrl, endpoints["git"]["getTree"]).request,
    listMatchingRefs:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/git/matching-refs/{ref}", "get">(baseUrl, endpoints["git"]["listMatchingRefs"]).request,
    updateRef:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/git/refs/{ref}", "patch">(baseUrl, endpoints["git"]["updateRef"]).request,
  },
  gitignore: {
    getAllTemplates:
      new MoctokitRequestMocker<"/gitignore/templates", "get">(baseUrl, endpoints["gitignore"]["getAllTemplates"]).request,
    getTemplate:
      new MoctokitRequestMocker<"/gitignore/templates/{name}", "get">(baseUrl, endpoints["gitignore"]["getTemplate"]).request,
  },
  interactions: {
    getRestrictionsForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/interaction-limits", "get">(baseUrl, endpoints["interactions"]["getRestrictionsForAuthenticatedUser"]).request,
    getRestrictionsForOrg:
      new MoctokitRequestMocker<"/orgs/{org}/interaction-limits", "get">(baseUrl, endpoints["interactions"]["getRestrictionsForOrg"]).request,
    getRestrictionsForRepo:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/interaction-limits", "get">(baseUrl, endpoints["interactions"]["getRestrictionsForRepo"]).request,
    getRestrictionsForYourPublicRepos:
      new MoctokitRequestMocker<"/user/interaction-limits", "get">(baseUrl, endpoints["interactions"]["getRestrictionsForYourPublicRepos"]).request,
    removeRestrictionsForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/interaction-limits", "delete">(baseUrl, endpoints["interactions"]["removeRestrictionsForAuthenticatedUser"]).request,
    removeRestrictionsForOrg:
      new MoctokitRequestMocker<"/orgs/{org}/interaction-limits", "delete">(baseUrl, endpoints["interactions"]["removeRestrictionsForOrg"]).request,
    removeRestrictionsForRepo:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/interaction-limits", "delete">(baseUrl, endpoints["interactions"]["removeRestrictionsForRepo"]).request,
    removeRestrictionsForYourPublicRepos:
      new MoctokitRequestMocker<"/user/interaction-limits", "delete">(baseUrl, endpoints["interactions"]["removeRestrictionsForYourPublicRepos"]).request,
    setRestrictionsForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/interaction-limits", "put">(baseUrl, endpoints["interactions"]["setRestrictionsForAuthenticatedUser"]).request,
    setRestrictionsForOrg:
      new MoctokitRequestMocker<"/orgs/{org}/interaction-limits", "put">(baseUrl, endpoints["interactions"]["setRestrictionsForOrg"]).request,
    setRestrictionsForRepo:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/interaction-limits", "put">(baseUrl, endpoints["interactions"]["setRestrictionsForRepo"]).request,
    setRestrictionsForYourPublicRepos:
      new MoctokitRequestMocker<"/user/interaction-limits", "put">(baseUrl, endpoints["interactions"]["setRestrictionsForYourPublicRepos"]).request,
  },
  issues: {
    addAssignees:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/issues/{issue_number}/assignees", "post">(baseUrl, endpoints["issues"]["addAssignees"]).request,
    addLabels:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/issues/{issue_number}/labels", "post">(baseUrl, endpoints["issues"]["addLabels"]).request,
    checkUserCanBeAssigned:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/assignees/{assignee}", "get">(baseUrl, endpoints["issues"]["checkUserCanBeAssigned"]).request,
    create:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/issues", "post">(baseUrl, endpoints["issues"]["create"]).request,
    createComment:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/issues/{issue_number}/comments", "post">(baseUrl, endpoints["issues"]["createComment"]).request,
    createLabel:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/labels", "post">(baseUrl, endpoints["issues"]["createLabel"]).request,
    createMilestone:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/milestones", "post">(baseUrl, endpoints["issues"]["createMilestone"]).request,
    deleteComment:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/issues/comments/{comment_id}", "delete">(baseUrl, endpoints["issues"]["deleteComment"]).request,
    deleteLabel:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/labels/{name}", "delete">(baseUrl, endpoints["issues"]["deleteLabel"]).request,
    deleteMilestone:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/milestones/{milestone_number}", "delete">(baseUrl, endpoints["issues"]["deleteMilestone"]).request,
    get: new MoctokitRequestMocker<"/repos/{owner}/{repo}/issues/{issue_number}", "get">(baseUrl, endpoints["issues"]["get"]).request,
    getComment:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/issues/comments/{comment_id}", "get">(baseUrl, endpoints["issues"]["getComment"]).request,
    getEvent:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/issues/events/{event_id}", "get">(baseUrl, endpoints["issues"]["getEvent"]).request,
    getLabel:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/labels/{name}", "get">(baseUrl, endpoints["issues"]["getLabel"]).request,
    getMilestone:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/milestones/{milestone_number}", "get">(baseUrl, endpoints["issues"]["getMilestone"]).request,
    list: new MoctokitRequestMocker<"/issues", "get">(baseUrl, endpoints["issues"]["list"]).request,
    listAssignees:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/assignees", "get">(baseUrl, endpoints["issues"]["listAssignees"]).request,
    listComments:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/issues/{issue_number}/comments", "get">(baseUrl, endpoints["issues"]["listComments"]).request,
    listCommentsForRepo:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/issues/comments", "get">(baseUrl, endpoints["issues"]["listCommentsForRepo"]).request,
    listEvents:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/issues/{issue_number}/events", "get">(baseUrl, endpoints["issues"]["listEvents"]).request,
    listEventsForRepo:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/issues/events", "get">(baseUrl, endpoints["issues"]["listEventsForRepo"]).request,
    listEventsForTimeline:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/issues/{issue_number}/timeline", "get">(baseUrl, endpoints["issues"]["listEventsForTimeline"]).request,
    listForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/issues", "get">(baseUrl, endpoints["issues"]["listForAuthenticatedUser"]).request,
    listForOrg:
      new MoctokitRequestMocker<"/orgs/{org}/issues", "get">(baseUrl, endpoints["issues"]["listForOrg"]).request,
    listForRepo:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/issues", "get">(baseUrl, endpoints["issues"]["listForRepo"]).request,
    listLabelsForMilestone:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/milestones/{milestone_number}/labels", "get">(baseUrl, endpoints["issues"]["listLabelsForMilestone"]).request,
    listLabelsForRepo:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/labels", "get">(baseUrl, endpoints["issues"]["listLabelsForRepo"]).request,
    listLabelsOnIssue:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/issues/{issue_number}/labels", "get">(baseUrl, endpoints["issues"]["listLabelsOnIssue"]).request,
    listMilestones:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/milestones", "get">(baseUrl, endpoints["issues"]["listMilestones"]).request,
    lock: new MoctokitRequestMocker<"/repos/{owner}/{repo}/issues/{issue_number}/lock", "put">(baseUrl, endpoints["issues"]["lock"]).request,
    removeAllLabels:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/issues/{issue_number}/labels", "delete">(baseUrl, endpoints["issues"]["removeAllLabels"]).request,
    removeAssignees:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/issues/{issue_number}/assignees", "delete">(baseUrl, endpoints["issues"]["removeAssignees"]).request,
    removeLabel:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/issues/{issue_number}/labels/{name}", "delete">(baseUrl, endpoints["issues"]["removeLabel"]).request,
    setLabels:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/issues/{issue_number}/labels", "put">(baseUrl, endpoints["issues"]["setLabels"]).request,
    unlock:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/issues/{issue_number}/lock", "delete">(baseUrl, endpoints["issues"]["unlock"]).request,
    update:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/issues/{issue_number}", "patch">(baseUrl, endpoints["issues"]["update"]).request,
    updateComment:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/issues/comments/{comment_id}", "patch">(baseUrl, endpoints["issues"]["updateComment"]).request,
    updateLabel:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/labels/{name}", "patch">(baseUrl, endpoints["issues"]["updateLabel"]).request,
    updateMilestone:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/milestones/{milestone_number}", "patch">(baseUrl, endpoints["issues"]["updateMilestone"]).request,
  },
  licenses: {
    get: new MoctokitRequestMocker<"/licenses/{license}", "get">(baseUrl, endpoints["licenses"]["get"]).request,
    getAllCommonlyUsed:
      new MoctokitRequestMocker<"/licenses", "get">(baseUrl, endpoints["licenses"]["getAllCommonlyUsed"]).request,
    getForRepo:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/license", "get">(baseUrl, endpoints["licenses"]["getForRepo"]).request,
  },
  markdown: {
    render:
      new MoctokitRequestMocker<"/markdown", "post">(baseUrl, endpoints["markdown"]["render"]).request,
    renderRaw:
      new MoctokitRequestMocker<"/markdown/raw", "post">(baseUrl, endpoints["markdown"]["renderRaw"]).request,
  },
  meta: {
    get: new MoctokitRequestMocker<"/meta", "get">(baseUrl, endpoints["meta"]["get"]).request,
    getOctocat:
      new MoctokitRequestMocker<"/octocat", "get">(baseUrl, endpoints["meta"]["getOctocat"]).request,
    getZen:
      new MoctokitRequestMocker<"/zen", "get">(baseUrl, endpoints["meta"]["getZen"]).request,
    root: new MoctokitRequestMocker<"/", "get">(baseUrl, endpoints["meta"]["root"]).request,
  },
  migrations: {
    cancelImport:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/import", "delete">(baseUrl, endpoints["migrations"]["cancelImport"]).request,
    deleteArchiveForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/migrations/{migration_id}/archive", "delete">(baseUrl, endpoints["migrations"]["deleteArchiveForAuthenticatedUser"]).request,
    deleteArchiveForOrg:
      new MoctokitRequestMocker<"/orgs/{org}/migrations/{migration_id}/archive", "delete">(baseUrl, endpoints["migrations"]["deleteArchiveForOrg"]).request,
    downloadArchiveForOrg:
      new MoctokitRequestMocker<"/orgs/{org}/migrations/{migration_id}/archive", "get">(baseUrl, endpoints["migrations"]["downloadArchiveForOrg"]).request,
    getArchiveForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/migrations/{migration_id}/archive", "get">(baseUrl, endpoints["migrations"]["getArchiveForAuthenticatedUser"]).request,
    getCommitAuthors:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/import/authors", "get">(baseUrl, endpoints["migrations"]["getCommitAuthors"]).request,
    getImportStatus:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/import", "get">(baseUrl, endpoints["migrations"]["getImportStatus"]).request,
    getLargeFiles:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/import/large_files", "get">(baseUrl, endpoints["migrations"]["getLargeFiles"]).request,
    getStatusForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/migrations/{migration_id}", "get">(baseUrl, endpoints["migrations"]["getStatusForAuthenticatedUser"]).request,
    getStatusForOrg:
      new MoctokitRequestMocker<"/orgs/{org}/migrations/{migration_id}", "get">(baseUrl, endpoints["migrations"]["getStatusForOrg"]).request,
    listForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/migrations", "get">(baseUrl, endpoints["migrations"]["listForAuthenticatedUser"]).request,
    listForOrg:
      new MoctokitRequestMocker<"/orgs/{org}/migrations", "get">(baseUrl, endpoints["migrations"]["listForOrg"]).request,
    listReposForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/migrations/{migration_id}/repositories", "get">(baseUrl, endpoints["migrations"]["listReposForAuthenticatedUser"]).request,
    listReposForOrg:
      new MoctokitRequestMocker<"/orgs/{org}/migrations/{migration_id}/repositories", "get">(baseUrl, endpoints["migrations"]["listReposForOrg"]).request,
    listReposForUser:
      new MoctokitRequestMocker<"/user/migrations/{migration_id}/repositories", "get">(baseUrl, endpoints["migrations"]["listReposForUser"]).request,
    mapCommitAuthor:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/import/authors/{author_id}", "patch">(baseUrl, endpoints["migrations"]["mapCommitAuthor"]).request,
    setLfsPreference:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/import/lfs", "patch">(baseUrl, endpoints["migrations"]["setLfsPreference"]).request,
    startForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/migrations", "post">(baseUrl, endpoints["migrations"]["startForAuthenticatedUser"]).request,
    startForOrg:
      new MoctokitRequestMocker<"/orgs/{org}/migrations", "post">(baseUrl, endpoints["migrations"]["startForOrg"]).request,
    startImport:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/import", "put">(baseUrl, endpoints["migrations"]["startImport"]).request,
    unlockRepoForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/migrations/{migration_id}/repos/{repo_name}/lock", "delete">(baseUrl, endpoints["migrations"]["unlockRepoForAuthenticatedUser"]).request,
    unlockRepoForOrg:
      new MoctokitRequestMocker<"/orgs/{org}/migrations/{migration_id}/repos/{repo_name}/lock", "delete">(baseUrl, endpoints["migrations"]["unlockRepoForOrg"]).request,
    updateImport:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/import", "patch">(baseUrl, endpoints["migrations"]["updateImport"]).request,
  },
  orgs: {
    addSecurityManagerTeam:
      new MoctokitRequestMocker<"/orgs/{org}/security-managers/teams/{team_slug}", "put">(baseUrl, endpoints["orgs"]["addSecurityManagerTeam"]).request,
    blockUser:
      new MoctokitRequestMocker<"/orgs/{org}/blocks/{username}", "put">(baseUrl, endpoints["orgs"]["blockUser"]).request,
    cancelInvitation:
      new MoctokitRequestMocker<"/orgs/{org}/invitations/{invitation_id}", "delete">(baseUrl, endpoints["orgs"]["cancelInvitation"]).request,
    checkBlockedUser:
      new MoctokitRequestMocker<"/orgs/{org}/blocks/{username}", "get">(baseUrl, endpoints["orgs"]["checkBlockedUser"]).request,
    checkMembershipForUser:
      new MoctokitRequestMocker<"/orgs/{org}/members/{username}", "get">(baseUrl, endpoints["orgs"]["checkMembershipForUser"]).request,
    checkPublicMembershipForUser:
      new MoctokitRequestMocker<"/orgs/{org}/public_members/{username}", "get">(baseUrl, endpoints["orgs"]["checkPublicMembershipForUser"]).request,
    convertMemberToOutsideCollaborator:
      new MoctokitRequestMocker<"/orgs/{org}/outside_collaborators/{username}", "put">(baseUrl, endpoints["orgs"]["convertMemberToOutsideCollaborator"]).request,
    createCustomRole:
      new MoctokitRequestMocker<"/orgs/{org}/custom_roles", "post">(baseUrl, endpoints["orgs"]["createCustomRole"]).request,
    createInvitation:
      new MoctokitRequestMocker<"/orgs/{org}/invitations", "post">(baseUrl, endpoints["orgs"]["createInvitation"]).request,
    createWebhook:
      new MoctokitRequestMocker<"/orgs/{org}/hooks", "post">(baseUrl, endpoints["orgs"]["createWebhook"]).request,
    deleteCustomRole:
      new MoctokitRequestMocker<"/orgs/{org}/custom_roles/{role_id}", "delete">(baseUrl, endpoints["orgs"]["deleteCustomRole"]).request,
    deleteWebhook:
      new MoctokitRequestMocker<"/orgs/{org}/hooks/{hook_id}", "delete">(baseUrl, endpoints["orgs"]["deleteWebhook"]).request,
    enableOrDisableSecurityProductOnAllOrgRepos:
      new MoctokitRequestMocker<"/orgs/{org}/{security_product}/{enablement}", "post">(baseUrl, endpoints["orgs"]["enableOrDisableSecurityProductOnAllOrgRepos"]).request,
    get: new MoctokitRequestMocker<"/orgs/{org}", "get">(baseUrl, endpoints["orgs"]["get"]).request,
    getMembershipForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/memberships/orgs/{org}", "get">(baseUrl, endpoints["orgs"]["getMembershipForAuthenticatedUser"]).request,
    getMembershipForUser:
      new MoctokitRequestMocker<"/orgs/{org}/memberships/{username}", "get">(baseUrl, endpoints["orgs"]["getMembershipForUser"]).request,
    getWebhook:
      new MoctokitRequestMocker<"/orgs/{org}/hooks/{hook_id}", "get">(baseUrl, endpoints["orgs"]["getWebhook"]).request,
    getWebhookConfigForOrg:
      new MoctokitRequestMocker<"/orgs/{org}/hooks/{hook_id}/config", "get">(baseUrl, endpoints["orgs"]["getWebhookConfigForOrg"]).request,
    getWebhookDelivery:
      new MoctokitRequestMocker<"/orgs/{org}/hooks/{hook_id}/deliveries/{delivery_id}", "get">(baseUrl, endpoints["orgs"]["getWebhookDelivery"]).request,
    list: new MoctokitRequestMocker<"/organizations", "get">(baseUrl, endpoints["orgs"]["list"]).request,
    listAppInstallations:
      new MoctokitRequestMocker<"/orgs/{org}/installations", "get">(baseUrl, endpoints["orgs"]["listAppInstallations"]).request,
    listBlockedUsers:
      new MoctokitRequestMocker<"/orgs/{org}/blocks", "get">(baseUrl, endpoints["orgs"]["listBlockedUsers"]).request,
    listCustomRoles:
      new MoctokitRequestMocker<"/organizations/{organization_id}/custom_roles", "get">(baseUrl, endpoints["orgs"]["listCustomRoles"]).request,
    listFailedInvitations:
      new MoctokitRequestMocker<"/orgs/{org}/failed_invitations", "get">(baseUrl, endpoints["orgs"]["listFailedInvitations"]).request,
    listFineGrainedPermissions:
      new MoctokitRequestMocker<"/orgs/{org}/fine_grained_permissions", "get">(baseUrl, endpoints["orgs"]["listFineGrainedPermissions"]).request,
    listForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/orgs", "get">(baseUrl, endpoints["orgs"]["listForAuthenticatedUser"]).request,
    listForUser:
      new MoctokitRequestMocker<"/users/{username}/orgs", "get">(baseUrl, endpoints["orgs"]["listForUser"]).request,
    listInvitationTeams:
      new MoctokitRequestMocker<"/orgs/{org}/invitations/{invitation_id}/teams", "get">(baseUrl, endpoints["orgs"]["listInvitationTeams"]).request,
    listMembers:
      new MoctokitRequestMocker<"/orgs/{org}/members", "get">(baseUrl, endpoints["orgs"]["listMembers"]).request,
    listMembershipsForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/memberships/orgs", "get">(baseUrl, endpoints["orgs"]["listMembershipsForAuthenticatedUser"]).request,
    listOutsideCollaborators:
      new MoctokitRequestMocker<"/orgs/{org}/outside_collaborators", "get">(baseUrl, endpoints["orgs"]["listOutsideCollaborators"]).request,
    listPendingInvitations:
      new MoctokitRequestMocker<"/orgs/{org}/invitations", "get">(baseUrl, endpoints["orgs"]["listPendingInvitations"]).request,
    listPublicMembers:
      new MoctokitRequestMocker<"/orgs/{org}/public_members", "get">(baseUrl, endpoints["orgs"]["listPublicMembers"]).request,
    listSecurityManagerTeams:
      new MoctokitRequestMocker<"/orgs/{org}/security-managers", "get">(baseUrl, endpoints["orgs"]["listSecurityManagerTeams"]).request,
    listWebhookDeliveries:
      new MoctokitRequestMocker<"/orgs/{org}/hooks/{hook_id}/deliveries", "get">(baseUrl, endpoints["orgs"]["listWebhookDeliveries"]).request,
    listWebhooks:
      new MoctokitRequestMocker<"/orgs/{org}/hooks", "get">(baseUrl, endpoints["orgs"]["listWebhooks"]).request,
    pingWebhook:
      new MoctokitRequestMocker<"/orgs/{org}/hooks/{hook_id}/pings", "post">(baseUrl, endpoints["orgs"]["pingWebhook"]).request,
    redeliverWebhookDelivery:
      new MoctokitRequestMocker<"/orgs/{org}/hooks/{hook_id}/deliveries/{delivery_id}/attempts", "post">(baseUrl, endpoints["orgs"]["redeliverWebhookDelivery"]).request,
    removeMember:
      new MoctokitRequestMocker<"/orgs/{org}/members/{username}", "delete">(baseUrl, endpoints["orgs"]["removeMember"]).request,
    removeMembershipForUser:
      new MoctokitRequestMocker<"/orgs/{org}/memberships/{username}", "delete">(baseUrl, endpoints["orgs"]["removeMembershipForUser"]).request,
    removeOutsideCollaborator:
      new MoctokitRequestMocker<"/orgs/{org}/outside_collaborators/{username}", "delete">(baseUrl, endpoints["orgs"]["removeOutsideCollaborator"]).request,
    removePublicMembershipForAuthenticatedUser:
      new MoctokitRequestMocker<"/orgs/{org}/public_members/{username}", "delete">(baseUrl, endpoints["orgs"]["removePublicMembershipForAuthenticatedUser"]).request,
    removeSecurityManagerTeam:
      new MoctokitRequestMocker<"/orgs/{org}/security-managers/teams/{team_slug}", "delete">(baseUrl, endpoints["orgs"]["removeSecurityManagerTeam"]).request,
    setMembershipForUser:
      new MoctokitRequestMocker<"/orgs/{org}/memberships/{username}", "put">(baseUrl, endpoints["orgs"]["setMembershipForUser"]).request,
    setPublicMembershipForAuthenticatedUser:
      new MoctokitRequestMocker<"/orgs/{org}/public_members/{username}", "put">(baseUrl, endpoints["orgs"]["setPublicMembershipForAuthenticatedUser"]).request,
    unblockUser:
      new MoctokitRequestMocker<"/orgs/{org}/blocks/{username}", "delete">(baseUrl, endpoints["orgs"]["unblockUser"]).request,
    update:
      new MoctokitRequestMocker<"/orgs/{org}", "patch">(baseUrl, endpoints["orgs"]["update"]).request,
    updateCustomRole:
      new MoctokitRequestMocker<"/orgs/{org}/custom_roles/{role_id}", "patch">(baseUrl, endpoints["orgs"]["updateCustomRole"]).request,
    updateMembershipForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/memberships/orgs/{org}", "patch">(baseUrl, endpoints["orgs"]["updateMembershipForAuthenticatedUser"]).request,
    updateWebhook:
      new MoctokitRequestMocker<"/orgs/{org}/hooks/{hook_id}", "patch">(baseUrl, endpoints["orgs"]["updateWebhook"]).request,
    updateWebhookConfigForOrg:
      new MoctokitRequestMocker<"/orgs/{org}/hooks/{hook_id}/config", "patch">(baseUrl, endpoints["orgs"]["updateWebhookConfigForOrg"]).request,
  },
  packages: {
    deletePackageForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/packages/{package_type}/{package_name}", "delete">(baseUrl, endpoints["packages"]["deletePackageForAuthenticatedUser"]).request,
    deletePackageForOrg:
      new MoctokitRequestMocker<"/orgs/{org}/packages/{package_type}/{package_name}", "delete">(baseUrl, endpoints["packages"]["deletePackageForOrg"]).request,
    deletePackageForUser:
      new MoctokitRequestMocker<"/users/{username}/packages/{package_type}/{package_name}", "delete">(baseUrl, endpoints["packages"]["deletePackageForUser"]).request,
    deletePackageVersionForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/packages/{package_type}/{package_name}/versions/{package_version_id}", "delete">(baseUrl, endpoints["packages"]["deletePackageVersionForAuthenticatedUser"]).request,
    deletePackageVersionForOrg:
      new MoctokitRequestMocker<"/orgs/{org}/packages/{package_type}/{package_name}/versions/{package_version_id}", "delete">(baseUrl, endpoints["packages"]["deletePackageVersionForOrg"]).request,
    deletePackageVersionForUser:
      new MoctokitRequestMocker<"/users/{username}/packages/{package_type}/{package_name}/versions/{package_version_id}", "delete">(baseUrl, endpoints["packages"]["deletePackageVersionForUser"]).request,
    getAllPackageVersionsForAPackageOwnedByAnOrg:
      new MoctokitRequestMocker<"/orgs/{org}/packages/{package_type}/{package_name}/versions", "get">(baseUrl, endpoints["packages"]["getAllPackageVersionsForAPackageOwnedByAnOrg"]).request,
    getAllPackageVersionsForAPackageOwnedByTheAuthenticatedUser:
      new MoctokitRequestMocker<"/user/packages/{package_type}/{package_name}/versions", "get">(baseUrl, endpoints["packages"]["getAllPackageVersionsForAPackageOwnedByTheAuthenticatedUser"]).request,
    getAllPackageVersionsForPackageOwnedByAuthenticatedUser:
      new MoctokitRequestMocker<"/user/packages/{package_type}/{package_name}/versions", "get">(baseUrl, endpoints["packages"]["getAllPackageVersionsForPackageOwnedByAuthenticatedUser"]).request,
    getAllPackageVersionsForPackageOwnedByOrg:
      new MoctokitRequestMocker<"/orgs/{org}/packages/{package_type}/{package_name}/versions", "get">(baseUrl, endpoints["packages"]["getAllPackageVersionsForPackageOwnedByOrg"]).request,
    getAllPackageVersionsForPackageOwnedByUser:
      new MoctokitRequestMocker<"/users/{username}/packages/{package_type}/{package_name}/versions", "get">(baseUrl, endpoints["packages"]["getAllPackageVersionsForPackageOwnedByUser"]).request,
    getPackageForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/packages/{package_type}/{package_name}", "get">(baseUrl, endpoints["packages"]["getPackageForAuthenticatedUser"]).request,
    getPackageForOrganization:
      new MoctokitRequestMocker<"/orgs/{org}/packages/{package_type}/{package_name}", "get">(baseUrl, endpoints["packages"]["getPackageForOrganization"]).request,
    getPackageForUser:
      new MoctokitRequestMocker<"/users/{username}/packages/{package_type}/{package_name}", "get">(baseUrl, endpoints["packages"]["getPackageForUser"]).request,
    getPackageVersionForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/packages/{package_type}/{package_name}/versions/{package_version_id}", "get">(baseUrl, endpoints["packages"]["getPackageVersionForAuthenticatedUser"]).request,
    getPackageVersionForOrganization:
      new MoctokitRequestMocker<"/orgs/{org}/packages/{package_type}/{package_name}/versions/{package_version_id}", "get">(baseUrl, endpoints["packages"]["getPackageVersionForOrganization"]).request,
    getPackageVersionForUser:
      new MoctokitRequestMocker<"/users/{username}/packages/{package_type}/{package_name}/versions/{package_version_id}", "get">(baseUrl, endpoints["packages"]["getPackageVersionForUser"]).request,
    listPackagesForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/packages", "get">(baseUrl, endpoints["packages"]["listPackagesForAuthenticatedUser"]).request,
    listPackagesForOrganization:
      new MoctokitRequestMocker<"/orgs/{org}/packages", "get">(baseUrl, endpoints["packages"]["listPackagesForOrganization"]).request,
    listPackagesForUser:
      new MoctokitRequestMocker<"/users/{username}/packages", "get">(baseUrl, endpoints["packages"]["listPackagesForUser"]).request,
    restorePackageForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/packages/{package_type}/{package_name}/restore", "post">(baseUrl, endpoints["packages"]["restorePackageForAuthenticatedUser"]).request,
    restorePackageForOrg:
      new MoctokitRequestMocker<"/orgs/{org}/packages/{package_type}/{package_name}/restore", "post">(baseUrl, endpoints["packages"]["restorePackageForOrg"]).request,
    restorePackageForUser:
      new MoctokitRequestMocker<"/users/{username}/packages/{package_type}/{package_name}/restore", "post">(baseUrl, endpoints["packages"]["restorePackageForUser"]).request,
    restorePackageVersionForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/packages/{package_type}/{package_name}/versions/{package_version_id}/restore", "post">(baseUrl, endpoints["packages"]["restorePackageVersionForAuthenticatedUser"]).request,
    restorePackageVersionForOrg:
      new MoctokitRequestMocker<"/orgs/{org}/packages/{package_type}/{package_name}/versions/{package_version_id}/restore", "post">(baseUrl, endpoints["packages"]["restorePackageVersionForOrg"]).request,
    restorePackageVersionForUser:
      new MoctokitRequestMocker<"/users/{username}/packages/{package_type}/{package_name}/versions/{package_version_id}/restore", "post">(baseUrl, endpoints["packages"]["restorePackageVersionForUser"]).request,
  },
  projects: {
    addCollaborator:
      new MoctokitRequestMocker<"/projects/{project_id}/collaborators/{username}", "put">(baseUrl, endpoints["projects"]["addCollaborator"]).request,
    createCard:
      new MoctokitRequestMocker<"/projects/columns/{column_id}/cards", "post">(baseUrl, endpoints["projects"]["createCard"]).request,
    createColumn:
      new MoctokitRequestMocker<"/projects/{project_id}/columns", "post">(baseUrl, endpoints["projects"]["createColumn"]).request,
    createForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/projects", "post">(baseUrl, endpoints["projects"]["createForAuthenticatedUser"]).request,
    createForOrg:
      new MoctokitRequestMocker<"/orgs/{org}/projects", "post">(baseUrl, endpoints["projects"]["createForOrg"]).request,
    createForRepo:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/projects", "post">(baseUrl, endpoints["projects"]["createForRepo"]).request,
    delete:
      new MoctokitRequestMocker<"/projects/{project_id}", "delete">(baseUrl, endpoints["projects"]["delete"]).request,
    deleteCard:
      new MoctokitRequestMocker<"/projects/columns/cards/{card_id}", "delete">(baseUrl, endpoints["projects"]["deleteCard"]).request,
    deleteColumn:
      new MoctokitRequestMocker<"/projects/columns/{column_id}", "delete">(baseUrl, endpoints["projects"]["deleteColumn"]).request,
    get: new MoctokitRequestMocker<"/projects/{project_id}", "get">(baseUrl, endpoints["projects"]["get"]).request,
    getCard:
      new MoctokitRequestMocker<"/projects/columns/cards/{card_id}", "get">(baseUrl, endpoints["projects"]["getCard"]).request,
    getColumn:
      new MoctokitRequestMocker<"/projects/columns/{column_id}", "get">(baseUrl, endpoints["projects"]["getColumn"]).request,
    getPermissionForUser:
      new MoctokitRequestMocker<"/projects/{project_id}/collaborators/{username}/permission", "get">(baseUrl, endpoints["projects"]["getPermissionForUser"]).request,
    listCards:
      new MoctokitRequestMocker<"/projects/columns/{column_id}/cards", "get">(baseUrl, endpoints["projects"]["listCards"]).request,
    listCollaborators:
      new MoctokitRequestMocker<"/projects/{project_id}/collaborators", "get">(baseUrl, endpoints["projects"]["listCollaborators"]).request,
    listColumns:
      new MoctokitRequestMocker<"/projects/{project_id}/columns", "get">(baseUrl, endpoints["projects"]["listColumns"]).request,
    listForOrg:
      new MoctokitRequestMocker<"/orgs/{org}/projects", "get">(baseUrl, endpoints["projects"]["listForOrg"]).request,
    listForRepo:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/projects", "get">(baseUrl, endpoints["projects"]["listForRepo"]).request,
    listForUser:
      new MoctokitRequestMocker<"/users/{username}/projects", "get">(baseUrl, endpoints["projects"]["listForUser"]).request,
    moveCard:
      new MoctokitRequestMocker<"/projects/columns/cards/{card_id}/moves", "post">(baseUrl, endpoints["projects"]["moveCard"]).request,
    moveColumn:
      new MoctokitRequestMocker<"/projects/columns/{column_id}/moves", "post">(baseUrl, endpoints["projects"]["moveColumn"]).request,
    removeCollaborator:
      new MoctokitRequestMocker<"/projects/{project_id}/collaborators/{username}", "delete">(baseUrl, endpoints["projects"]["removeCollaborator"]).request,
    update:
      new MoctokitRequestMocker<"/projects/{project_id}", "patch">(baseUrl, endpoints["projects"]["update"]).request,
    updateCard:
      new MoctokitRequestMocker<"/projects/columns/cards/{card_id}", "patch">(baseUrl, endpoints["projects"]["updateCard"]).request,
    updateColumn:
      new MoctokitRequestMocker<"/projects/columns/{column_id}", "patch">(baseUrl, endpoints["projects"]["updateColumn"]).request,
  },
  pulls: {
    checkIfMerged:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/pulls/{pull_number}/merge", "get">(baseUrl, endpoints["pulls"]["checkIfMerged"]).request,
    create:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/pulls", "post">(baseUrl, endpoints["pulls"]["create"]).request,
    createReplyForReviewComment:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/pulls/{pull_number}/comments/{comment_id}/replies", "post">(baseUrl, endpoints["pulls"]["createReplyForReviewComment"]).request,
    createReview:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/pulls/{pull_number}/reviews", "post">(baseUrl, endpoints["pulls"]["createReview"]).request,
    createReviewComment:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/pulls/{pull_number}/comments", "post">(baseUrl, endpoints["pulls"]["createReviewComment"]).request,
    deletePendingReview:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}", "delete">(baseUrl, endpoints["pulls"]["deletePendingReview"]).request,
    deleteReviewComment:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/pulls/comments/{comment_id}", "delete">(baseUrl, endpoints["pulls"]["deleteReviewComment"]).request,
    dismissReview:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/dismissals", "put">(baseUrl, endpoints["pulls"]["dismissReview"]).request,
    get: new MoctokitRequestMocker<"/repos/{owner}/{repo}/pulls/{pull_number}", "get">(baseUrl, endpoints["pulls"]["get"]).request,
    getReview:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}", "get">(baseUrl, endpoints["pulls"]["getReview"]).request,
    getReviewComment:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/pulls/comments/{comment_id}", "get">(baseUrl, endpoints["pulls"]["getReviewComment"]).request,
    list: new MoctokitRequestMocker<"/repos/{owner}/{repo}/pulls", "get">(baseUrl, endpoints["pulls"]["list"]).request,
    listCommentsForReview:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/comments", "get">(baseUrl, endpoints["pulls"]["listCommentsForReview"]).request,
    listCommits:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/pulls/{pull_number}/commits", "get">(baseUrl, endpoints["pulls"]["listCommits"]).request,
    listFiles:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/pulls/{pull_number}/files", "get">(baseUrl, endpoints["pulls"]["listFiles"]).request,
    listRequestedReviewers:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers", "get">(baseUrl, endpoints["pulls"]["listRequestedReviewers"]).request,
    listReviewComments:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/pulls/{pull_number}/comments", "get">(baseUrl, endpoints["pulls"]["listReviewComments"]).request,
    listReviewCommentsForRepo:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/pulls/comments", "get">(baseUrl, endpoints["pulls"]["listReviewCommentsForRepo"]).request,
    listReviews:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/pulls/{pull_number}/reviews", "get">(baseUrl, endpoints["pulls"]["listReviews"]).request,
    merge:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/pulls/{pull_number}/merge", "put">(baseUrl, endpoints["pulls"]["merge"]).request,
    removeRequestedReviewers:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers", "delete">(baseUrl, endpoints["pulls"]["removeRequestedReviewers"]).request,
    requestReviewers:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers", "post">(baseUrl, endpoints["pulls"]["requestReviewers"]).request,
    submitReview:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/events", "post">(baseUrl, endpoints["pulls"]["submitReview"]).request,
    update:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/pulls/{pull_number}", "patch">(baseUrl, endpoints["pulls"]["update"]).request,
    updateBranch:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/pulls/{pull_number}/update-branch", "put">(baseUrl, endpoints["pulls"]["updateBranch"]).request,
    updateReview:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}", "put">(baseUrl, endpoints["pulls"]["updateReview"]).request,
    updateReviewComment:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/pulls/comments/{comment_id}", "patch">(baseUrl, endpoints["pulls"]["updateReviewComment"]).request,
  },
  rateLimit: {
    get: new MoctokitRequestMocker<"/rate_limit", "get">(baseUrl, endpoints["rateLimit"]["get"]).request,
  },
  reactions: {
    createForCommitComment:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/comments/{comment_id}/reactions", "post">(baseUrl, endpoints["reactions"]["createForCommitComment"]).request,
    createForIssue:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/issues/{issue_number}/reactions", "post">(baseUrl, endpoints["reactions"]["createForIssue"]).request,
    createForIssueComment:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/issues/comments/{comment_id}/reactions", "post">(baseUrl, endpoints["reactions"]["createForIssueComment"]).request,
    createForPullRequestReviewComment:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions", "post">(baseUrl, endpoints["reactions"]["createForPullRequestReviewComment"]).request,
    createForRelease:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/releases/{release_id}/reactions", "post">(baseUrl, endpoints["reactions"]["createForRelease"]).request,
    createForTeamDiscussionCommentInOrg:
      new MoctokitRequestMocker<"/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions", "post">(baseUrl, endpoints["reactions"]["createForTeamDiscussionCommentInOrg"]).request,
    createForTeamDiscussionInOrg:
      new MoctokitRequestMocker<"/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions", "post">(baseUrl, endpoints["reactions"]["createForTeamDiscussionInOrg"]).request,
    deleteForCommitComment:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/comments/{comment_id}/reactions/{reaction_id}", "delete">(baseUrl, endpoints["reactions"]["deleteForCommitComment"]).request,
    deleteForIssue:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/issues/{issue_number}/reactions/{reaction_id}", "delete">(baseUrl, endpoints["reactions"]["deleteForIssue"]).request,
    deleteForIssueComment:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/issues/comments/{comment_id}/reactions/{reaction_id}", "delete">(baseUrl, endpoints["reactions"]["deleteForIssueComment"]).request,
    deleteForPullRequestComment:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions/{reaction_id}", "delete">(baseUrl, endpoints["reactions"]["deleteForPullRequestComment"]).request,
    deleteForRelease:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/releases/{release_id}/reactions/{reaction_id}", "delete">(baseUrl, endpoints["reactions"]["deleteForRelease"]).request,
    deleteForTeamDiscussion:
      new MoctokitRequestMocker<"/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions/{reaction_id}", "delete">(baseUrl, endpoints["reactions"]["deleteForTeamDiscussion"]).request,
    deleteForTeamDiscussionComment:
      new MoctokitRequestMocker<"/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions/{reaction_id}", "delete">(baseUrl, endpoints["reactions"]["deleteForTeamDiscussionComment"]).request,
    listForCommitComment:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/comments/{comment_id}/reactions", "get">(baseUrl, endpoints["reactions"]["listForCommitComment"]).request,
    listForIssue:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/issues/{issue_number}/reactions", "get">(baseUrl, endpoints["reactions"]["listForIssue"]).request,
    listForIssueComment:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/issues/comments/{comment_id}/reactions", "get">(baseUrl, endpoints["reactions"]["listForIssueComment"]).request,
    listForPullRequestReviewComment:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions", "get">(baseUrl, endpoints["reactions"]["listForPullRequestReviewComment"]).request,
    listForRelease:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/releases/{release_id}/reactions", "get">(baseUrl, endpoints["reactions"]["listForRelease"]).request,
    listForTeamDiscussionCommentInOrg:
      new MoctokitRequestMocker<"/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions", "get">(baseUrl, endpoints["reactions"]["listForTeamDiscussionCommentInOrg"]).request,
    listForTeamDiscussionInOrg:
      new MoctokitRequestMocker<"/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions", "get">(baseUrl, endpoints["reactions"]["listForTeamDiscussionInOrg"]).request,
  },
  repos: {
    acceptInvitation:
      new MoctokitRequestMocker<"/user/repository_invitations/{invitation_id}", "patch">(baseUrl, endpoints["repos"]["acceptInvitation"]).request,
    acceptInvitationForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/repository_invitations/{invitation_id}", "patch">(baseUrl, endpoints["repos"]["acceptInvitationForAuthenticatedUser"]).request,
    addAppAccessRestrictions:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps", "post">(baseUrl, endpoints["repos"]["addAppAccessRestrictions"]).request,
    addCollaborator:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/collaborators/{username}", "put">(baseUrl, endpoints["repos"]["addCollaborator"]).request,
    addStatusCheckContexts:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts", "post">(baseUrl, endpoints["repos"]["addStatusCheckContexts"]).request,
    addTeamAccessRestrictions:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams", "post">(baseUrl, endpoints["repos"]["addTeamAccessRestrictions"]).request,
    addUserAccessRestrictions:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users", "post">(baseUrl, endpoints["repos"]["addUserAccessRestrictions"]).request,
    checkCollaborator:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/collaborators/{username}", "get">(baseUrl, endpoints["repos"]["checkCollaborator"]).request,
    checkVulnerabilityAlerts:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/vulnerability-alerts", "get">(baseUrl, endpoints["repos"]["checkVulnerabilityAlerts"]).request,
    codeownersErrors:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/codeowners/errors", "get">(baseUrl, endpoints["repos"]["codeownersErrors"]).request,
    compareCommits:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/compare/{base}...{head}", "get">(baseUrl, endpoints["repos"]["compareCommits"]).request,
    compareCommitsWithBasehead:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/compare/{basehead}", "get">(baseUrl, endpoints["repos"]["compareCommitsWithBasehead"]).request,
    createAutolink:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/autolinks", "post">(baseUrl, endpoints["repos"]["createAutolink"]).request,
    createCommitComment:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/commits/{commit_sha}/comments", "post">(baseUrl, endpoints["repos"]["createCommitComment"]).request,
    createCommitSignatureProtection:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/branches/{branch}/protection/required_signatures", "post">(baseUrl, endpoints["repos"]["createCommitSignatureProtection"]).request,
    createCommitStatus:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/statuses/{sha}", "post">(baseUrl, endpoints["repos"]["createCommitStatus"]).request,
    createDeployKey:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/keys", "post">(baseUrl, endpoints["repos"]["createDeployKey"]).request,
    createDeployment:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/deployments", "post">(baseUrl, endpoints["repos"]["createDeployment"]).request,
    createDeploymentBranchPolicy:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/environments/{environment_name}/deployment-branch-policies", "post">(baseUrl, endpoints["repos"]["createDeploymentBranchPolicy"]).request,
    createDeploymentStatus:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/deployments/{deployment_id}/statuses", "post">(baseUrl, endpoints["repos"]["createDeploymentStatus"]).request,
    createDispatchEvent:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/dispatches", "post">(baseUrl, endpoints["repos"]["createDispatchEvent"]).request,
    createForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/repos", "post">(baseUrl, endpoints["repos"]["createForAuthenticatedUser"]).request,
    createFork:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/forks", "post">(baseUrl, endpoints["repos"]["createFork"]).request,
    createInOrg:
      new MoctokitRequestMocker<"/orgs/{org}/repos", "post">(baseUrl, endpoints["repos"]["createInOrg"]).request,
    createOrUpdateEnvironment:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/environments/{environment_name}", "put">(baseUrl, endpoints["repos"]["createOrUpdateEnvironment"]).request,
    createOrUpdateFileContents:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/contents/{path}", "put">(baseUrl, endpoints["repos"]["createOrUpdateFileContents"]).request,
    createPagesDeployment:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/pages/deployment", "post">(baseUrl, endpoints["repos"]["createPagesDeployment"]).request,
    createPagesSite:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/pages", "post">(baseUrl, endpoints["repos"]["createPagesSite"]).request,
    createRelease:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/releases", "post">(baseUrl, endpoints["repos"]["createRelease"]).request,
    createTagProtection:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/tags/protection", "post">(baseUrl, endpoints["repos"]["createTagProtection"]).request,
    createUsingTemplate:
      new MoctokitRequestMocker<"/repos/{template_owner}/{template_repo}/generate", "post">(baseUrl, endpoints["repos"]["createUsingTemplate"]).request,
    createWebhook:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/hooks", "post">(baseUrl, endpoints["repos"]["createWebhook"]).request,
    declineInvitation:
      new MoctokitRequestMocker<"/user/repository_invitations/{invitation_id}", "delete">(baseUrl, endpoints["repos"]["declineInvitation"]).request,
    declineInvitationForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/repository_invitations/{invitation_id}", "delete">(baseUrl, endpoints["repos"]["declineInvitationForAuthenticatedUser"]).request,
    delete:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}", "delete">(baseUrl, endpoints["repos"]["delete"]).request,
    deleteAccessRestrictions:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/branches/{branch}/protection/restrictions", "delete">(baseUrl, endpoints["repos"]["deleteAccessRestrictions"]).request,
    deleteAdminBranchProtection:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins", "delete">(baseUrl, endpoints["repos"]["deleteAdminBranchProtection"]).request,
    deleteAnEnvironment:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/environments/{environment_name}", "delete">(baseUrl, endpoints["repos"]["deleteAnEnvironment"]).request,
    deleteAutolink:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/autolinks/{autolink_id}", "delete">(baseUrl, endpoints["repos"]["deleteAutolink"]).request,
    deleteBranchProtection:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/branches/{branch}/protection", "delete">(baseUrl, endpoints["repos"]["deleteBranchProtection"]).request,
    deleteCommitComment:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/comments/{comment_id}", "delete">(baseUrl, endpoints["repos"]["deleteCommitComment"]).request,
    deleteCommitSignatureProtection:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/branches/{branch}/protection/required_signatures", "delete">(baseUrl, endpoints["repos"]["deleteCommitSignatureProtection"]).request,
    deleteDeployKey:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/keys/{key_id}", "delete">(baseUrl, endpoints["repos"]["deleteDeployKey"]).request,
    deleteDeployment:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/deployments/{deployment_id}", "delete">(baseUrl, endpoints["repos"]["deleteDeployment"]).request,
    deleteDeploymentBranchPolicy:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/environments/{environment_name}/deployment-branch-policies/{branch_policy_id}", "delete">(baseUrl, endpoints["repos"]["deleteDeploymentBranchPolicy"]).request,
    deleteFile:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/contents/{path}", "delete">(baseUrl, endpoints["repos"]["deleteFile"]).request,
    deleteInvitation:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/invitations/{invitation_id}", "delete">(baseUrl, endpoints["repos"]["deleteInvitation"]).request,
    deletePagesSite:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/pages", "delete">(baseUrl, endpoints["repos"]["deletePagesSite"]).request,
    deletePullRequestReviewProtection:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews", "delete">(baseUrl, endpoints["repos"]["deletePullRequestReviewProtection"]).request,
    deleteRelease:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/releases/{release_id}", "delete">(baseUrl, endpoints["repos"]["deleteRelease"]).request,
    deleteReleaseAsset:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/releases/assets/{asset_id}", "delete">(baseUrl, endpoints["repos"]["deleteReleaseAsset"]).request,
    deleteTagProtection:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/tags/protection/{tag_protection_id}", "delete">(baseUrl, endpoints["repos"]["deleteTagProtection"]).request,
    deleteWebhook:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/hooks/{hook_id}", "delete">(baseUrl, endpoints["repos"]["deleteWebhook"]).request,
    disableAutomatedSecurityFixes:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/automated-security-fixes", "delete">(baseUrl, endpoints["repos"]["disableAutomatedSecurityFixes"]).request,
    disableLfsForRepo:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/lfs", "delete">(baseUrl, endpoints["repos"]["disableLfsForRepo"]).request,
    disableVulnerabilityAlerts:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/vulnerability-alerts", "delete">(baseUrl, endpoints["repos"]["disableVulnerabilityAlerts"]).request,
    downloadArchive:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/zipball/{ref}", "get">(baseUrl, endpoints["repos"]["downloadArchive"]).request,
    downloadTarballArchive:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/tarball/{ref}", "get">(baseUrl, endpoints["repos"]["downloadTarballArchive"]).request,
    downloadZipballArchive:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/zipball/{ref}", "get">(baseUrl, endpoints["repos"]["downloadZipballArchive"]).request,
    enableAutomatedSecurityFixes:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/automated-security-fixes", "put">(baseUrl, endpoints["repos"]["enableAutomatedSecurityFixes"]).request,
    enableLfsForRepo:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/lfs", "put">(baseUrl, endpoints["repos"]["enableLfsForRepo"]).request,
    enableVulnerabilityAlerts:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/vulnerability-alerts", "put">(baseUrl, endpoints["repos"]["enableVulnerabilityAlerts"]).request,
    generateReleaseNotes:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/releases/generate-notes", "post">(baseUrl, endpoints["repos"]["generateReleaseNotes"]).request,
    get: new MoctokitRequestMocker<"/repos/{owner}/{repo}", "get">(baseUrl, endpoints["repos"]["get"]).request,
    getAccessRestrictions:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/branches/{branch}/protection/restrictions", "get">(baseUrl, endpoints["repos"]["getAccessRestrictions"]).request,
    getAdminBranchProtection:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins", "get">(baseUrl, endpoints["repos"]["getAdminBranchProtection"]).request,
    getAllEnvironments:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/environments", "get">(baseUrl, endpoints["repos"]["getAllEnvironments"]).request,
    getAllStatusCheckContexts:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts", "get">(baseUrl, endpoints["repos"]["getAllStatusCheckContexts"]).request,
    getAllTopics:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/topics", "get">(baseUrl, endpoints["repos"]["getAllTopics"]).request,
    getAppsWithAccessToProtectedBranch:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps", "get">(baseUrl, endpoints["repos"]["getAppsWithAccessToProtectedBranch"]).request,
    getAutolink:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/autolinks/{autolink_id}", "get">(baseUrl, endpoints["repos"]["getAutolink"]).request,
    getBranch:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/branches/{branch}", "get">(baseUrl, endpoints["repos"]["getBranch"]).request,
    getBranchProtection:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/branches/{branch}/protection", "get">(baseUrl, endpoints["repos"]["getBranchProtection"]).request,
    getClones:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/traffic/clones", "get">(baseUrl, endpoints["repos"]["getClones"]).request,
    getCodeFrequencyStats:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/stats/code_frequency", "get">(baseUrl, endpoints["repos"]["getCodeFrequencyStats"]).request,
    getCollaboratorPermissionLevel:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/collaborators/{username}/permission", "get">(baseUrl, endpoints["repos"]["getCollaboratorPermissionLevel"]).request,
    getCombinedStatusForRef:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/commits/{ref}/status", "get">(baseUrl, endpoints["repos"]["getCombinedStatusForRef"]).request,
    getCommit:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/commits/{ref}", "get">(baseUrl, endpoints["repos"]["getCommit"]).request,
    getCommitActivityStats:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/stats/commit_activity", "get">(baseUrl, endpoints["repos"]["getCommitActivityStats"]).request,
    getCommitComment:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/comments/{comment_id}", "get">(baseUrl, endpoints["repos"]["getCommitComment"]).request,
    getCommitSignatureProtection:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/branches/{branch}/protection/required_signatures", "get">(baseUrl, endpoints["repos"]["getCommitSignatureProtection"]).request,
    getCommunityProfileMetrics:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/community/profile", "get">(baseUrl, endpoints["repos"]["getCommunityProfileMetrics"]).request,
    getContent:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/contents/{path}", "get">(baseUrl, endpoints["repos"]["getContent"]).request,
    getContributorsStats:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/stats/contributors", "get">(baseUrl, endpoints["repos"]["getContributorsStats"]).request,
    getDeployKey:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/keys/{key_id}", "get">(baseUrl, endpoints["repos"]["getDeployKey"]).request,
    getDeployment:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/deployments/{deployment_id}", "get">(baseUrl, endpoints["repos"]["getDeployment"]).request,
    getDeploymentBranchPolicy:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/environments/{environment_name}/deployment-branch-policies/{branch_policy_id}", "get">(baseUrl, endpoints["repos"]["getDeploymentBranchPolicy"]).request,
    getDeploymentStatus:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/deployments/{deployment_id}/statuses/{status_id}", "get">(baseUrl, endpoints["repos"]["getDeploymentStatus"]).request,
    getEnvironment:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/environments/{environment_name}", "get">(baseUrl, endpoints["repos"]["getEnvironment"]).request,
    getLatestPagesBuild:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/pages/builds/latest", "get">(baseUrl, endpoints["repos"]["getLatestPagesBuild"]).request,
    getLatestRelease:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/releases/latest", "get">(baseUrl, endpoints["repos"]["getLatestRelease"]).request,
    getPages:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/pages", "get">(baseUrl, endpoints["repos"]["getPages"]).request,
    getPagesBuild:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/pages/builds/{build_id}", "get">(baseUrl, endpoints["repos"]["getPagesBuild"]).request,
    getPagesHealthCheck:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/pages/health", "get">(baseUrl, endpoints["repos"]["getPagesHealthCheck"]).request,
    getParticipationStats:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/stats/participation", "get">(baseUrl, endpoints["repos"]["getParticipationStats"]).request,
    getPullRequestReviewProtection:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews", "get">(baseUrl, endpoints["repos"]["getPullRequestReviewProtection"]).request,
    getPunchCardStats:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/stats/punch_card", "get">(baseUrl, endpoints["repos"]["getPunchCardStats"]).request,
    getReadme:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/readme", "get">(baseUrl, endpoints["repos"]["getReadme"]).request,
    getReadmeInDirectory:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/readme/{dir}", "get">(baseUrl, endpoints["repos"]["getReadmeInDirectory"]).request,
    getRelease:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/releases/{release_id}", "get">(baseUrl, endpoints["repos"]["getRelease"]).request,
    getReleaseAsset:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/releases/assets/{asset_id}", "get">(baseUrl, endpoints["repos"]["getReleaseAsset"]).request,
    getReleaseByTag:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/releases/tags/{tag}", "get">(baseUrl, endpoints["repos"]["getReleaseByTag"]).request,
    getStatusChecksProtection:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks", "get">(baseUrl, endpoints["repos"]["getStatusChecksProtection"]).request,
    getTeamsWithAccessToProtectedBranch:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams", "get">(baseUrl, endpoints["repos"]["getTeamsWithAccessToProtectedBranch"]).request,
    getTopPaths:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/traffic/popular/paths", "get">(baseUrl, endpoints["repos"]["getTopPaths"]).request,
    getTopReferrers:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/traffic/popular/referrers", "get">(baseUrl, endpoints["repos"]["getTopReferrers"]).request,
    getUsersWithAccessToProtectedBranch:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users", "get">(baseUrl, endpoints["repos"]["getUsersWithAccessToProtectedBranch"]).request,
    getViews:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/traffic/views", "get">(baseUrl, endpoints["repos"]["getViews"]).request,
    getWebhook:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/hooks/{hook_id}", "get">(baseUrl, endpoints["repos"]["getWebhook"]).request,
    getWebhookConfigForRepo:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/hooks/{hook_id}/config", "get">(baseUrl, endpoints["repos"]["getWebhookConfigForRepo"]).request,
    getWebhookDelivery:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/hooks/{hook_id}/deliveries/{delivery_id}", "get">(baseUrl, endpoints["repos"]["getWebhookDelivery"]).request,
    listAutolinks:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/autolinks", "get">(baseUrl, endpoints["repos"]["listAutolinks"]).request,
    listBranches:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/branches", "get">(baseUrl, endpoints["repos"]["listBranches"]).request,
    listBranchesForHeadCommit:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/commits/{commit_sha}/branches-where-head", "get">(baseUrl, endpoints["repos"]["listBranchesForHeadCommit"]).request,
    listCollaborators:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/collaborators", "get">(baseUrl, endpoints["repos"]["listCollaborators"]).request,
    listCommentsForCommit:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/commits/{commit_sha}/comments", "get">(baseUrl, endpoints["repos"]["listCommentsForCommit"]).request,
    listCommitCommentsForRepo:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/comments", "get">(baseUrl, endpoints["repos"]["listCommitCommentsForRepo"]).request,
    listCommitStatusesForRef:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/commits/{ref}/statuses", "get">(baseUrl, endpoints["repos"]["listCommitStatusesForRef"]).request,
    listCommits:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/commits", "get">(baseUrl, endpoints["repos"]["listCommits"]).request,
    listContributors:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/contributors", "get">(baseUrl, endpoints["repos"]["listContributors"]).request,
    listDeployKeys:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/keys", "get">(baseUrl, endpoints["repos"]["listDeployKeys"]).request,
    listDeploymentBranchPolicies:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/environments/{environment_name}/deployment-branch-policies", "get">(baseUrl, endpoints["repos"]["listDeploymentBranchPolicies"]).request,
    listDeploymentStatuses:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/deployments/{deployment_id}/statuses", "get">(baseUrl, endpoints["repos"]["listDeploymentStatuses"]).request,
    listDeployments:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/deployments", "get">(baseUrl, endpoints["repos"]["listDeployments"]).request,
    listForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/repos", "get">(baseUrl, endpoints["repos"]["listForAuthenticatedUser"]).request,
    listForOrg:
      new MoctokitRequestMocker<"/orgs/{org}/repos", "get">(baseUrl, endpoints["repos"]["listForOrg"]).request,
    listForUser:
      new MoctokitRequestMocker<"/users/{username}/repos", "get">(baseUrl, endpoints["repos"]["listForUser"]).request,
    listForks:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/forks", "get">(baseUrl, endpoints["repos"]["listForks"]).request,
    listInvitations:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/invitations", "get">(baseUrl, endpoints["repos"]["listInvitations"]).request,
    listInvitationsForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/repository_invitations", "get">(baseUrl, endpoints["repos"]["listInvitationsForAuthenticatedUser"]).request,
    listLanguages:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/languages", "get">(baseUrl, endpoints["repos"]["listLanguages"]).request,
    listPagesBuilds:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/pages/builds", "get">(baseUrl, endpoints["repos"]["listPagesBuilds"]).request,
    listPublic:
      new MoctokitRequestMocker<"/repositories", "get">(baseUrl, endpoints["repos"]["listPublic"]).request,
    listPullRequestsAssociatedWithCommit:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/commits/{commit_sha}/pulls", "get">(baseUrl, endpoints["repos"]["listPullRequestsAssociatedWithCommit"]).request,
    listReleaseAssets:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/releases/{release_id}/assets", "get">(baseUrl, endpoints["repos"]["listReleaseAssets"]).request,
    listReleases:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/releases", "get">(baseUrl, endpoints["repos"]["listReleases"]).request,
    listTagProtection:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/tags/protection", "get">(baseUrl, endpoints["repos"]["listTagProtection"]).request,
    listTags:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/tags", "get">(baseUrl, endpoints["repos"]["listTags"]).request,
    listTeams:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/teams", "get">(baseUrl, endpoints["repos"]["listTeams"]).request,
    listWebhookDeliveries:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/hooks/{hook_id}/deliveries", "get">(baseUrl, endpoints["repos"]["listWebhookDeliveries"]).request,
    listWebhooks:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/hooks", "get">(baseUrl, endpoints["repos"]["listWebhooks"]).request,
    merge:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/merges", "post">(baseUrl, endpoints["repos"]["merge"]).request,
    mergeUpstream:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/merge-upstream", "post">(baseUrl, endpoints["repos"]["mergeUpstream"]).request,
    pingWebhook:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/hooks/{hook_id}/pings", "post">(baseUrl, endpoints["repos"]["pingWebhook"]).request,
    redeliverWebhookDelivery:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/hooks/{hook_id}/deliveries/{delivery_id}/attempts", "post">(baseUrl, endpoints["repos"]["redeliverWebhookDelivery"]).request,
    removeAppAccessRestrictions:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps", "delete">(baseUrl, endpoints["repos"]["removeAppAccessRestrictions"]).request,
    removeCollaborator:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/collaborators/{username}", "delete">(baseUrl, endpoints["repos"]["removeCollaborator"]).request,
    removeStatusCheckContexts:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts", "delete">(baseUrl, endpoints["repos"]["removeStatusCheckContexts"]).request,
    removeStatusCheckProtection:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks", "delete">(baseUrl, endpoints["repos"]["removeStatusCheckProtection"]).request,
    removeTeamAccessRestrictions:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams", "delete">(baseUrl, endpoints["repos"]["removeTeamAccessRestrictions"]).request,
    removeUserAccessRestrictions:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users", "delete">(baseUrl, endpoints["repos"]["removeUserAccessRestrictions"]).request,
    renameBranch:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/branches/{branch}/rename", "post">(baseUrl, endpoints["repos"]["renameBranch"]).request,
    replaceAllTopics:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/topics", "put">(baseUrl, endpoints["repos"]["replaceAllTopics"]).request,
    requestPagesBuild:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/pages/builds", "post">(baseUrl, endpoints["repos"]["requestPagesBuild"]).request,
    setAdminBranchProtection:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins", "post">(baseUrl, endpoints["repos"]["setAdminBranchProtection"]).request,
    setAppAccessRestrictions:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps", "put">(baseUrl, endpoints["repos"]["setAppAccessRestrictions"]).request,
    setStatusCheckContexts:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts", "put">(baseUrl, endpoints["repos"]["setStatusCheckContexts"]).request,
    setTeamAccessRestrictions:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams", "put">(baseUrl, endpoints["repos"]["setTeamAccessRestrictions"]).request,
    setUserAccessRestrictions:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users", "put">(baseUrl, endpoints["repos"]["setUserAccessRestrictions"]).request,
    testPushWebhook:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/hooks/{hook_id}/tests", "post">(baseUrl, endpoints["repos"]["testPushWebhook"]).request,
    transfer:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/transfer", "post">(baseUrl, endpoints["repos"]["transfer"]).request,
    update:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}", "patch">(baseUrl, endpoints["repos"]["update"]).request,
    updateBranchProtection:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/branches/{branch}/protection", "put">(baseUrl, endpoints["repos"]["updateBranchProtection"]).request,
    updateCommitComment:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/comments/{comment_id}", "patch">(baseUrl, endpoints["repos"]["updateCommitComment"]).request,
    updateDeploymentBranchPolicy:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/environments/{environment_name}/deployment-branch-policies/{branch_policy_id}", "put">(baseUrl, endpoints["repos"]["updateDeploymentBranchPolicy"]).request,
    updateInformationAboutPagesSite:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/pages", "put">(baseUrl, endpoints["repos"]["updateInformationAboutPagesSite"]).request,
    updateInvitation:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/invitations/{invitation_id}", "patch">(baseUrl, endpoints["repos"]["updateInvitation"]).request,
    updatePullRequestReviewProtection:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews", "patch">(baseUrl, endpoints["repos"]["updatePullRequestReviewProtection"]).request,
    updateRelease:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/releases/{release_id}", "patch">(baseUrl, endpoints["repos"]["updateRelease"]).request,
    updateReleaseAsset:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/releases/assets/{asset_id}", "patch">(baseUrl, endpoints["repos"]["updateReleaseAsset"]).request,
    updateStatusCheckPotection:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks", "patch">(baseUrl, endpoints["repos"]["updateStatusCheckPotection"]).request,
    updateStatusCheckProtection:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks", "patch">(baseUrl, endpoints["repos"]["updateStatusCheckProtection"]).request,
    updateWebhook:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/hooks/{hook_id}", "patch">(baseUrl, endpoints["repos"]["updateWebhook"]).request,
    updateWebhookConfigForRepo:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/hooks/{hook_id}/config", "patch">(baseUrl, endpoints["repos"]["updateWebhookConfigForRepo"]).request,
    uploadReleaseAsset:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/releases/{release_id}/assets", "post">(baseUrl, endpoints["repos"]["uploadReleaseAsset"]).request,
  },
  search: {
    code: new MoctokitRequestMocker<"/search/code", "get">(baseUrl, endpoints["search"]["code"]).request,
    commits:
      new MoctokitRequestMocker<"/search/commits", "get">(baseUrl, endpoints["search"]["commits"]).request,
    issuesAndPullRequests:
      new MoctokitRequestMocker<"/search/issues", "get">(baseUrl, endpoints["search"]["issuesAndPullRequests"]).request,
    labels:
      new MoctokitRequestMocker<"/search/labels", "get">(baseUrl, endpoints["search"]["labels"]).request,
    repos:
      new MoctokitRequestMocker<"/search/repositories", "get">(baseUrl, endpoints["search"]["repos"]).request,
    topics:
      new MoctokitRequestMocker<"/search/topics", "get">(baseUrl, endpoints["search"]["topics"]).request,
    users:
      new MoctokitRequestMocker<"/search/users", "get">(baseUrl, endpoints["search"]["users"]).request,
  },
  secretScanning: {
    getAlert:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/secret-scanning/alerts/{alert_number}", "get">(baseUrl, endpoints["secretScanning"]["getAlert"]).request,
    listAlertsForEnterprise:
      new MoctokitRequestMocker<"/enterprises/{enterprise}/secret-scanning/alerts", "get">(baseUrl, endpoints["secretScanning"]["listAlertsForEnterprise"]).request,
    listAlertsForOrg:
      new MoctokitRequestMocker<"/orgs/{org}/secret-scanning/alerts", "get">(baseUrl, endpoints["secretScanning"]["listAlertsForOrg"]).request,
    listAlertsForRepo:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/secret-scanning/alerts", "get">(baseUrl, endpoints["secretScanning"]["listAlertsForRepo"]).request,
    listLocationsForAlert:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/secret-scanning/alerts/{alert_number}/locations", "get">(baseUrl, endpoints["secretScanning"]["listLocationsForAlert"]).request,
    updateAlert:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/secret-scanning/alerts/{alert_number}", "patch">(baseUrl, endpoints["secretScanning"]["updateAlert"]).request,
  },
  teams: {
    addOrUpdateMembershipForUserInOrg:
      new MoctokitRequestMocker<"/orgs/{org}/teams/{team_slug}/memberships/{username}", "put">(baseUrl, endpoints["teams"]["addOrUpdateMembershipForUserInOrg"]).request,
    addOrUpdateProjectPermissionsInOrg:
      new MoctokitRequestMocker<"/orgs/{org}/teams/{team_slug}/projects/{project_id}", "put">(baseUrl, endpoints["teams"]["addOrUpdateProjectPermissionsInOrg"]).request,
    addOrUpdateRepoPermissionsInOrg:
      new MoctokitRequestMocker<"/orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}", "put">(baseUrl, endpoints["teams"]["addOrUpdateRepoPermissionsInOrg"]).request,
    checkPermissionsForProjectInOrg:
      new MoctokitRequestMocker<"/orgs/{org}/teams/{team_slug}/projects/{project_id}", "get">(baseUrl, endpoints["teams"]["checkPermissionsForProjectInOrg"]).request,
    checkPermissionsForRepoInOrg:
      new MoctokitRequestMocker<"/orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}", "get">(baseUrl, endpoints["teams"]["checkPermissionsForRepoInOrg"]).request,
    create:
      new MoctokitRequestMocker<"/orgs/{org}/teams", "post">(baseUrl, endpoints["teams"]["create"]).request,
    createDiscussionCommentInOrg:
      new MoctokitRequestMocker<"/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments", "post">(baseUrl, endpoints["teams"]["createDiscussionCommentInOrg"]).request,
    createDiscussionInOrg:
      new MoctokitRequestMocker<"/orgs/{org}/teams/{team_slug}/discussions", "post">(baseUrl, endpoints["teams"]["createDiscussionInOrg"]).request,
    deleteDiscussionCommentInOrg:
      new MoctokitRequestMocker<"/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}", "delete">(baseUrl, endpoints["teams"]["deleteDiscussionCommentInOrg"]).request,
    deleteDiscussionInOrg:
      new MoctokitRequestMocker<"/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}", "delete">(baseUrl, endpoints["teams"]["deleteDiscussionInOrg"]).request,
    deleteInOrg:
      new MoctokitRequestMocker<"/orgs/{org}/teams/{team_slug}", "delete">(baseUrl, endpoints["teams"]["deleteInOrg"]).request,
    getByName:
      new MoctokitRequestMocker<"/orgs/{org}/teams/{team_slug}", "get">(baseUrl, endpoints["teams"]["getByName"]).request,
    getDiscussionCommentInOrg:
      new MoctokitRequestMocker<"/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}", "get">(baseUrl, endpoints["teams"]["getDiscussionCommentInOrg"]).request,
    getDiscussionInOrg:
      new MoctokitRequestMocker<"/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}", "get">(baseUrl, endpoints["teams"]["getDiscussionInOrg"]).request,
    getMembershipForUserInOrg:
      new MoctokitRequestMocker<"/orgs/{org}/teams/{team_slug}/memberships/{username}", "get">(baseUrl, endpoints["teams"]["getMembershipForUserInOrg"]).request,
    list: new MoctokitRequestMocker<"/orgs/{org}/teams", "get">(baseUrl, endpoints["teams"]["list"]).request,
    listChildInOrg:
      new MoctokitRequestMocker<"/orgs/{org}/teams/{team_slug}/teams", "get">(baseUrl, endpoints["teams"]["listChildInOrg"]).request,
    listDiscussionCommentsInOrg:
      new MoctokitRequestMocker<"/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments", "get">(baseUrl, endpoints["teams"]["listDiscussionCommentsInOrg"]).request,
    listDiscussionsInOrg:
      new MoctokitRequestMocker<"/orgs/{org}/teams/{team_slug}/discussions", "get">(baseUrl, endpoints["teams"]["listDiscussionsInOrg"]).request,
    listForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/teams", "get">(baseUrl, endpoints["teams"]["listForAuthenticatedUser"]).request,
    listMembersInOrg:
      new MoctokitRequestMocker<"/orgs/{org}/teams/{team_slug}/members", "get">(baseUrl, endpoints["teams"]["listMembersInOrg"]).request,
    listPendingInvitationsInOrg:
      new MoctokitRequestMocker<"/orgs/{org}/teams/{team_slug}/invitations", "get">(baseUrl, endpoints["teams"]["listPendingInvitationsInOrg"]).request,
    listProjectsInOrg:
      new MoctokitRequestMocker<"/orgs/{org}/teams/{team_slug}/projects", "get">(baseUrl, endpoints["teams"]["listProjectsInOrg"]).request,
    listReposInOrg:
      new MoctokitRequestMocker<"/orgs/{org}/teams/{team_slug}/repos", "get">(baseUrl, endpoints["teams"]["listReposInOrg"]).request,
    removeMembershipForUserInOrg:
      new MoctokitRequestMocker<"/orgs/{org}/teams/{team_slug}/memberships/{username}", "delete">(baseUrl, endpoints["teams"]["removeMembershipForUserInOrg"]).request,
    removeProjectInOrg:
      new MoctokitRequestMocker<"/orgs/{org}/teams/{team_slug}/projects/{project_id}", "delete">(baseUrl, endpoints["teams"]["removeProjectInOrg"]).request,
    removeRepoInOrg:
      new MoctokitRequestMocker<"/orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}", "delete">(baseUrl, endpoints["teams"]["removeRepoInOrg"]).request,
    updateDiscussionCommentInOrg:
      new MoctokitRequestMocker<"/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}", "patch">(baseUrl, endpoints["teams"]["updateDiscussionCommentInOrg"]).request,
    updateDiscussionInOrg:
      new MoctokitRequestMocker<"/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}", "patch">(baseUrl, endpoints["teams"]["updateDiscussionInOrg"]).request,
    updateInOrg:
      new MoctokitRequestMocker<"/orgs/{org}/teams/{team_slug}", "patch">(baseUrl, endpoints["teams"]["updateInOrg"]).request,
  },
  users: {
    addEmailForAuthenticated:
      new MoctokitRequestMocker<"/user/emails", "post">(baseUrl, endpoints["users"]["addEmailForAuthenticated"]).request,
    addEmailForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/emails", "post">(baseUrl, endpoints["users"]["addEmailForAuthenticatedUser"]).request,
    block:
      new MoctokitRequestMocker<"/user/blocks/{username}", "put">(baseUrl, endpoints["users"]["block"]).request,
    checkBlocked:
      new MoctokitRequestMocker<"/user/blocks/{username}", "get">(baseUrl, endpoints["users"]["checkBlocked"]).request,
    checkFollowingForUser:
      new MoctokitRequestMocker<"/users/{username}/following/{target_user}", "get">(baseUrl, endpoints["users"]["checkFollowingForUser"]).request,
    checkPersonIsFollowedByAuthenticated:
      new MoctokitRequestMocker<"/user/following/{username}", "get">(baseUrl, endpoints["users"]["checkPersonIsFollowedByAuthenticated"]).request,
    createGpgKeyForAuthenticated:
      new MoctokitRequestMocker<"/user/gpg_keys", "post">(baseUrl, endpoints["users"]["createGpgKeyForAuthenticated"]).request,
    createGpgKeyForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/gpg_keys", "post">(baseUrl, endpoints["users"]["createGpgKeyForAuthenticatedUser"]).request,
    createPublicSshKeyForAuthenticated:
      new MoctokitRequestMocker<"/user/keys", "post">(baseUrl, endpoints["users"]["createPublicSshKeyForAuthenticated"]).request,
    createPublicSshKeyForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/keys", "post">(baseUrl, endpoints["users"]["createPublicSshKeyForAuthenticatedUser"]).request,
    createSshSigningKeyForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/ssh_signing_keys", "post">(baseUrl, endpoints["users"]["createSshSigningKeyForAuthenticatedUser"]).request,
    deleteEmailForAuthenticated:
      new MoctokitRequestMocker<"/user/emails", "delete">(baseUrl, endpoints["users"]["deleteEmailForAuthenticated"]).request,
    deleteEmailForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/emails", "delete">(baseUrl, endpoints["users"]["deleteEmailForAuthenticatedUser"]).request,
    deleteGpgKeyForAuthenticated:
      new MoctokitRequestMocker<"/user/gpg_keys/{gpg_key_id}", "delete">(baseUrl, endpoints["users"]["deleteGpgKeyForAuthenticated"]).request,
    deleteGpgKeyForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/gpg_keys/{gpg_key_id}", "delete">(baseUrl, endpoints["users"]["deleteGpgKeyForAuthenticatedUser"]).request,
    deletePublicSshKeyForAuthenticated:
      new MoctokitRequestMocker<"/user/keys/{key_id}", "delete">(baseUrl, endpoints["users"]["deletePublicSshKeyForAuthenticated"]).request,
    deletePublicSshKeyForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/keys/{key_id}", "delete">(baseUrl, endpoints["users"]["deletePublicSshKeyForAuthenticatedUser"]).request,
    deleteSshSigningKeyForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/ssh_signing_keys/{ssh_signing_key_id}", "delete">(baseUrl, endpoints["users"]["deleteSshSigningKeyForAuthenticatedUser"]).request,
    follow:
      new MoctokitRequestMocker<"/user/following/{username}", "put">(baseUrl, endpoints["users"]["follow"]).request,
    getAuthenticated:
      new MoctokitRequestMocker<"/user", "get">(baseUrl, endpoints["users"]["getAuthenticated"]).request,
    getByUsername:
      new MoctokitRequestMocker<"/users/{username}", "get">(baseUrl, endpoints["users"]["getByUsername"]).request,
    getContextForUser:
      new MoctokitRequestMocker<"/users/{username}/hovercard", "get">(baseUrl, endpoints["users"]["getContextForUser"]).request,
    getGpgKeyForAuthenticated:
      new MoctokitRequestMocker<"/user/gpg_keys/{gpg_key_id}", "get">(baseUrl, endpoints["users"]["getGpgKeyForAuthenticated"]).request,
    getGpgKeyForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/gpg_keys/{gpg_key_id}", "get">(baseUrl, endpoints["users"]["getGpgKeyForAuthenticatedUser"]).request,
    getPublicSshKeyForAuthenticated:
      new MoctokitRequestMocker<"/user/keys/{key_id}", "get">(baseUrl, endpoints["users"]["getPublicSshKeyForAuthenticated"]).request,
    getPublicSshKeyForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/keys/{key_id}", "get">(baseUrl, endpoints["users"]["getPublicSshKeyForAuthenticatedUser"]).request,
    getSshSigningKeyForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/ssh_signing_keys/{ssh_signing_key_id}", "get">(baseUrl, endpoints["users"]["getSshSigningKeyForAuthenticatedUser"]).request,
    list: new MoctokitRequestMocker<"/users", "get">(baseUrl, endpoints["users"]["list"]).request,
    listBlockedByAuthenticated:
      new MoctokitRequestMocker<"/user/blocks", "get">(baseUrl, endpoints["users"]["listBlockedByAuthenticated"]).request,
    listBlockedByAuthenticatedUser:
      new MoctokitRequestMocker<"/user/blocks", "get">(baseUrl, endpoints["users"]["listBlockedByAuthenticatedUser"]).request,
    listEmailsForAuthenticated:
      new MoctokitRequestMocker<"/user/emails", "get">(baseUrl, endpoints["users"]["listEmailsForAuthenticated"]).request,
    listEmailsForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/emails", "get">(baseUrl, endpoints["users"]["listEmailsForAuthenticatedUser"]).request,
    listFollowedByAuthenticated:
      new MoctokitRequestMocker<"/user/following", "get">(baseUrl, endpoints["users"]["listFollowedByAuthenticated"]).request,
    listFollowedByAuthenticatedUser:
      new MoctokitRequestMocker<"/user/following", "get">(baseUrl, endpoints["users"]["listFollowedByAuthenticatedUser"]).request,
    listFollowersForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/followers", "get">(baseUrl, endpoints["users"]["listFollowersForAuthenticatedUser"]).request,
    listFollowersForUser:
      new MoctokitRequestMocker<"/users/{username}/followers", "get">(baseUrl, endpoints["users"]["listFollowersForUser"]).request,
    listFollowingForUser:
      new MoctokitRequestMocker<"/users/{username}/following", "get">(baseUrl, endpoints["users"]["listFollowingForUser"]).request,
    listGpgKeysForAuthenticated:
      new MoctokitRequestMocker<"/user/gpg_keys", "get">(baseUrl, endpoints["users"]["listGpgKeysForAuthenticated"]).request,
    listGpgKeysForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/gpg_keys", "get">(baseUrl, endpoints["users"]["listGpgKeysForAuthenticatedUser"]).request,
    listGpgKeysForUser:
      new MoctokitRequestMocker<"/users/{username}/gpg_keys", "get">(baseUrl, endpoints["users"]["listGpgKeysForUser"]).request,
    listPublicEmailsForAuthenticated:
      new MoctokitRequestMocker<"/user/public_emails", "get">(baseUrl, endpoints["users"]["listPublicEmailsForAuthenticated"]).request,
    listPublicEmailsForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/public_emails", "get">(baseUrl, endpoints["users"]["listPublicEmailsForAuthenticatedUser"]).request,
    listPublicKeysForUser:
      new MoctokitRequestMocker<"/users/{username}/keys", "get">(baseUrl, endpoints["users"]["listPublicKeysForUser"]).request,
    listPublicSshKeysForAuthenticated:
      new MoctokitRequestMocker<"/user/keys", "get">(baseUrl, endpoints["users"]["listPublicSshKeysForAuthenticated"]).request,
    listPublicSshKeysForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/keys", "get">(baseUrl, endpoints["users"]["listPublicSshKeysForAuthenticatedUser"]).request,
    listSshSigningKeysForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/ssh_signing_keys", "get">(baseUrl, endpoints["users"]["listSshSigningKeysForAuthenticatedUser"]).request,
    listSshSigningKeysForUser:
      new MoctokitRequestMocker<"/users/{username}/ssh_signing_keys", "get">(baseUrl, endpoints["users"]["listSshSigningKeysForUser"]).request,
    setPrimaryEmailVisibilityForAuthenticated:
      new MoctokitRequestMocker<"/user/email/visibility", "patch">(baseUrl, endpoints["users"]["setPrimaryEmailVisibilityForAuthenticated"]).request,
    setPrimaryEmailVisibilityForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/email/visibility", "patch">(baseUrl, endpoints["users"]["setPrimaryEmailVisibilityForAuthenticatedUser"]).request,
    unblock:
      new MoctokitRequestMocker<"/user/blocks/{username}", "delete">(baseUrl, endpoints["users"]["unblock"]).request,
    unfollow:
      new MoctokitRequestMocker<"/user/following/{username}", "delete">(baseUrl, endpoints["users"]["unfollow"]).request,
    updateAuthenticated:
      new MoctokitRequestMocker<"/user", "patch">(baseUrl, endpoints["users"]["updateAuthenticated"]).request,
  },
});

export default endpointToMethod;
