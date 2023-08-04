import { MoctokitRequestMocker } from "@mg/moctokit/request/request-mocker";
import endpoints from "./endpoint-details";
const endpointToMethod = (baseUrl: string, allowUnmocked = false) => ({
  actions: {
    addCustomLabelsToSelfHostedRunnerForOrg:
      new MoctokitRequestMocker<"/orgs/{org}/actions/runners/{runner_id}/labels", "post">(baseUrl, endpoints["actions"]["addCustomLabelsToSelfHostedRunnerForOrg"], allowUnmocked).request,
    addCustomLabelsToSelfHostedRunnerForRepo:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/runners/{runner_id}/labels", "post">(baseUrl, endpoints["actions"]["addCustomLabelsToSelfHostedRunnerForRepo"], allowUnmocked).request,
    addSelectedRepoToOrgSecret:
      new MoctokitRequestMocker<"/orgs/{org}/actions/secrets/{secret_name}/repositories/{repository_id}", "put">(baseUrl, endpoints["actions"]["addSelectedRepoToOrgSecret"], allowUnmocked).request,
    addSelectedRepoToOrgVariable:
      new MoctokitRequestMocker<"/orgs/{org}/actions/variables/{name}/repositories/{repository_id}", "put">(baseUrl, endpoints["actions"]["addSelectedRepoToOrgVariable"], allowUnmocked).request,
    addSelectedRepoToRequiredWorkflow:
      new MoctokitRequestMocker<"/orgs/{org}/actions/required_workflows/{required_workflow_id}/repositories/{repository_id}", "put">(baseUrl, endpoints["actions"]["addSelectedRepoToRequiredWorkflow"], allowUnmocked).request,
    approveWorkflowRun:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/runs/{run_id}/approve", "post">(baseUrl, endpoints["actions"]["approveWorkflowRun"], allowUnmocked).request,
    cancelWorkflowRun:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/runs/{run_id}/cancel", "post">(baseUrl, endpoints["actions"]["cancelWorkflowRun"], allowUnmocked).request,
    createEnvironmentVariable:
      new MoctokitRequestMocker<"/repositories/{repository_id}/environments/{environment_name}/variables", "post">(baseUrl, endpoints["actions"]["createEnvironmentVariable"], allowUnmocked).request,
    createOrUpdateEnvironmentSecret:
      new MoctokitRequestMocker<"/repositories/{repository_id}/environments/{environment_name}/secrets/{secret_name}", "put">(baseUrl, endpoints["actions"]["createOrUpdateEnvironmentSecret"], allowUnmocked).request,
    createOrUpdateOrgSecret:
      new MoctokitRequestMocker<"/orgs/{org}/actions/secrets/{secret_name}", "put">(baseUrl, endpoints["actions"]["createOrUpdateOrgSecret"], allowUnmocked).request,
    createOrUpdateRepoSecret:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/secrets/{secret_name}", "put">(baseUrl, endpoints["actions"]["createOrUpdateRepoSecret"], allowUnmocked).request,
    createOrgVariable:
      new MoctokitRequestMocker<"/orgs/{org}/actions/variables", "post">(baseUrl, endpoints["actions"]["createOrgVariable"], allowUnmocked).request,
    createRegistrationTokenForOrg:
      new MoctokitRequestMocker<"/orgs/{org}/actions/runners/registration-token", "post">(baseUrl, endpoints["actions"]["createRegistrationTokenForOrg"], allowUnmocked).request,
    createRegistrationTokenForRepo:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/runners/registration-token", "post">(baseUrl, endpoints["actions"]["createRegistrationTokenForRepo"], allowUnmocked).request,
    createRemoveTokenForOrg:
      new MoctokitRequestMocker<"/orgs/{org}/actions/runners/remove-token", "post">(baseUrl, endpoints["actions"]["createRemoveTokenForOrg"], allowUnmocked).request,
    createRemoveTokenForRepo:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/runners/remove-token", "post">(baseUrl, endpoints["actions"]["createRemoveTokenForRepo"], allowUnmocked).request,
    createRepoVariable:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/variables", "post">(baseUrl, endpoints["actions"]["createRepoVariable"], allowUnmocked).request,
    createRequiredWorkflow:
      new MoctokitRequestMocker<"/orgs/{org}/actions/required_workflows", "post">(baseUrl, endpoints["actions"]["createRequiredWorkflow"], allowUnmocked).request,
    createWorkflowDispatch:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/workflows/{workflow_id}/dispatches", "post">(baseUrl, endpoints["actions"]["createWorkflowDispatch"], allowUnmocked).request,
    deleteActionsCacheById:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/caches/{cache_id}", "delete">(baseUrl, endpoints["actions"]["deleteActionsCacheById"], allowUnmocked).request,
    deleteActionsCacheByKey:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/caches", "delete">(baseUrl, endpoints["actions"]["deleteActionsCacheByKey"], allowUnmocked).request,
    deleteArtifact:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/artifacts/{artifact_id}", "delete">(baseUrl, endpoints["actions"]["deleteArtifact"], allowUnmocked).request,
    deleteEnvironmentSecret:
      new MoctokitRequestMocker<"/repositories/{repository_id}/environments/{environment_name}/secrets/{secret_name}", "delete">(baseUrl, endpoints["actions"]["deleteEnvironmentSecret"], allowUnmocked).request,
    deleteEnvironmentVariable:
      new MoctokitRequestMocker<"/repositories/{repository_id}/environments/{environment_name}/variables/{name}", "delete">(baseUrl, endpoints["actions"]["deleteEnvironmentVariable"], allowUnmocked).request,
    deleteOrgSecret:
      new MoctokitRequestMocker<"/orgs/{org}/actions/secrets/{secret_name}", "delete">(baseUrl, endpoints["actions"]["deleteOrgSecret"], allowUnmocked).request,
    deleteOrgVariable:
      new MoctokitRequestMocker<"/orgs/{org}/actions/variables/{name}", "delete">(baseUrl, endpoints["actions"]["deleteOrgVariable"], allowUnmocked).request,
    deleteRepoSecret:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/secrets/{secret_name}", "delete">(baseUrl, endpoints["actions"]["deleteRepoSecret"], allowUnmocked).request,
    deleteRepoVariable:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/variables/{name}", "delete">(baseUrl, endpoints["actions"]["deleteRepoVariable"], allowUnmocked).request,
    deleteRequiredWorkflow:
      new MoctokitRequestMocker<"/orgs/{org}/actions/required_workflows/{required_workflow_id}", "delete">(baseUrl, endpoints["actions"]["deleteRequiredWorkflow"], allowUnmocked).request,
    deleteSelfHostedRunnerFromOrg:
      new MoctokitRequestMocker<"/orgs/{org}/actions/runners/{runner_id}", "delete">(baseUrl, endpoints["actions"]["deleteSelfHostedRunnerFromOrg"], allowUnmocked).request,
    deleteSelfHostedRunnerFromRepo:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/runners/{runner_id}", "delete">(baseUrl, endpoints["actions"]["deleteSelfHostedRunnerFromRepo"], allowUnmocked).request,
    deleteWorkflowRun:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/runs/{run_id}", "delete">(baseUrl, endpoints["actions"]["deleteWorkflowRun"], allowUnmocked).request,
    deleteWorkflowRunLogs:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/runs/{run_id}/logs", "delete">(baseUrl, endpoints["actions"]["deleteWorkflowRunLogs"], allowUnmocked).request,
    disableSelectedRepositoryGithubActionsOrganization:
      new MoctokitRequestMocker<"/orgs/{org}/actions/permissions/repositories/{repository_id}", "delete">(baseUrl, endpoints["actions"]["disableSelectedRepositoryGithubActionsOrganization"], allowUnmocked).request,
    disableWorkflow:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/workflows/{workflow_id}/disable", "put">(baseUrl, endpoints["actions"]["disableWorkflow"], allowUnmocked).request,
    downloadArtifact:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/artifacts/{artifact_id}/{archive_format}", "get">(baseUrl, endpoints["actions"]["downloadArtifact"], allowUnmocked).request,
    downloadJobLogsForWorkflowRun:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/jobs/{job_id}/logs", "get">(baseUrl, endpoints["actions"]["downloadJobLogsForWorkflowRun"], allowUnmocked).request,
    downloadWorkflowRunAttemptLogs:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/runs/{run_id}/attempts/{attempt_number}/logs", "get">(baseUrl, endpoints["actions"]["downloadWorkflowRunAttemptLogs"], allowUnmocked).request,
    downloadWorkflowRunLogs:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/runs/{run_id}/logs", "get">(baseUrl, endpoints["actions"]["downloadWorkflowRunLogs"], allowUnmocked).request,
    enableSelectedRepositoryGithubActionsOrganization:
      new MoctokitRequestMocker<"/orgs/{org}/actions/permissions/repositories/{repository_id}", "put">(baseUrl, endpoints["actions"]["enableSelectedRepositoryGithubActionsOrganization"], allowUnmocked).request,
    enableWorkflow:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/workflows/{workflow_id}/enable", "put">(baseUrl, endpoints["actions"]["enableWorkflow"], allowUnmocked).request,
    generateRunnerJitconfigForEnterprise:
      new MoctokitRequestMocker<"/enterprises/{enterprise}/actions/runners/generate-jitconfig", "post">(baseUrl, endpoints["actions"]["generateRunnerJitconfigForEnterprise"], allowUnmocked).request,
    generateRunnerJitconfigForOrg:
      new MoctokitRequestMocker<"/orgs/{org}/actions/runners/generate-jitconfig", "post">(baseUrl, endpoints["actions"]["generateRunnerJitconfigForOrg"], allowUnmocked).request,
    generateRunnerJitconfigForRepo:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/runners/generate-jitconfig", "post">(baseUrl, endpoints["actions"]["generateRunnerJitconfigForRepo"], allowUnmocked).request,
    getActionsCacheList:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/caches", "get">(baseUrl, endpoints["actions"]["getActionsCacheList"], allowUnmocked).request,
    getActionsCacheUsage:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/cache/usage", "get">(baseUrl, endpoints["actions"]["getActionsCacheUsage"], allowUnmocked).request,
    getActionsCacheUsageByRepoForOrg:
      new MoctokitRequestMocker<"/orgs/{org}/actions/cache/usage-by-repository", "get">(baseUrl, endpoints["actions"]["getActionsCacheUsageByRepoForOrg"], allowUnmocked).request,
    getActionsCacheUsageForOrg:
      new MoctokitRequestMocker<"/orgs/{org}/actions/cache/usage", "get">(baseUrl, endpoints["actions"]["getActionsCacheUsageForOrg"], allowUnmocked).request,
    getAllowedActionsOrganization:
      new MoctokitRequestMocker<"/orgs/{org}/actions/permissions/selected-actions", "get">(baseUrl, endpoints["actions"]["getAllowedActionsOrganization"], allowUnmocked).request,
    getAllowedActionsRepository:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/permissions/selected-actions", "get">(baseUrl, endpoints["actions"]["getAllowedActionsRepository"], allowUnmocked).request,
    getArtifact:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/artifacts/{artifact_id}", "get">(baseUrl, endpoints["actions"]["getArtifact"], allowUnmocked).request,
    getEnvironmentPublicKey:
      new MoctokitRequestMocker<"/repositories/{repository_id}/environments/{environment_name}/secrets/public-key", "get">(baseUrl, endpoints["actions"]["getEnvironmentPublicKey"], allowUnmocked).request,
    getEnvironmentSecret:
      new MoctokitRequestMocker<"/repositories/{repository_id}/environments/{environment_name}/secrets/{secret_name}", "get">(baseUrl, endpoints["actions"]["getEnvironmentSecret"], allowUnmocked).request,
    getEnvironmentVariable:
      new MoctokitRequestMocker<"/repositories/{repository_id}/environments/{environment_name}/variables/{name}", "get">(baseUrl, endpoints["actions"]["getEnvironmentVariable"], allowUnmocked).request,
    getGithubActionsDefaultWorkflowPermissionsOrganization:
      new MoctokitRequestMocker<"/orgs/{org}/actions/permissions/workflow", "get">(baseUrl, endpoints["actions"]["getGithubActionsDefaultWorkflowPermissionsOrganization"], allowUnmocked).request,
    getGithubActionsDefaultWorkflowPermissionsRepository:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/permissions/workflow", "get">(baseUrl, endpoints["actions"]["getGithubActionsDefaultWorkflowPermissionsRepository"], allowUnmocked).request,
    getGithubActionsPermissionsOrganization:
      new MoctokitRequestMocker<"/orgs/{org}/actions/permissions", "get">(baseUrl, endpoints["actions"]["getGithubActionsPermissionsOrganization"], allowUnmocked).request,
    getGithubActionsPermissionsRepository:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/permissions", "get">(baseUrl, endpoints["actions"]["getGithubActionsPermissionsRepository"], allowUnmocked).request,
    getJobForWorkflowRun:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/jobs/{job_id}", "get">(baseUrl, endpoints["actions"]["getJobForWorkflowRun"], allowUnmocked).request,
    getOrgPublicKey:
      new MoctokitRequestMocker<"/orgs/{org}/actions/secrets/public-key", "get">(baseUrl, endpoints["actions"]["getOrgPublicKey"], allowUnmocked).request,
    getOrgSecret:
      new MoctokitRequestMocker<"/orgs/{org}/actions/secrets/{secret_name}", "get">(baseUrl, endpoints["actions"]["getOrgSecret"], allowUnmocked).request,
    getOrgVariable:
      new MoctokitRequestMocker<"/orgs/{org}/actions/variables/{name}", "get">(baseUrl, endpoints["actions"]["getOrgVariable"], allowUnmocked).request,
    getPendingDeploymentsForRun:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/runs/{run_id}/pending_deployments", "get">(baseUrl, endpoints["actions"]["getPendingDeploymentsForRun"], allowUnmocked).request,
    getRepoPermissions:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/permissions", "get">(baseUrl, endpoints["actions"]["getRepoPermissions"], allowUnmocked).request,
    getRepoPublicKey:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/secrets/public-key", "get">(baseUrl, endpoints["actions"]["getRepoPublicKey"], allowUnmocked).request,
    getRepoRequiredWorkflow:
      new MoctokitRequestMocker<"/repos/{org}/{repo}/actions/required_workflows/{required_workflow_id_for_repo}", "get">(baseUrl, endpoints["actions"]["getRepoRequiredWorkflow"], allowUnmocked).request,
    getRepoRequiredWorkflowUsage:
      new MoctokitRequestMocker<"/repos/{org}/{repo}/actions/required_workflows/{required_workflow_id_for_repo}/timing", "get">(baseUrl, endpoints["actions"]["getRepoRequiredWorkflowUsage"], allowUnmocked).request,
    getRepoSecret:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/secrets/{secret_name}", "get">(baseUrl, endpoints["actions"]["getRepoSecret"], allowUnmocked).request,
    getRepoVariable:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/variables/{name}", "get">(baseUrl, endpoints["actions"]["getRepoVariable"], allowUnmocked).request,
    getRequiredWorkflow:
      new MoctokitRequestMocker<"/orgs/{org}/actions/required_workflows/{required_workflow_id}", "get">(baseUrl, endpoints["actions"]["getRequiredWorkflow"], allowUnmocked).request,
    getReviewsForRun:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/runs/{run_id}/approvals", "get">(baseUrl, endpoints["actions"]["getReviewsForRun"], allowUnmocked).request,
    getSelfHostedRunnerForOrg:
      new MoctokitRequestMocker<"/orgs/{org}/actions/runners/{runner_id}", "get">(baseUrl, endpoints["actions"]["getSelfHostedRunnerForOrg"], allowUnmocked).request,
    getSelfHostedRunnerForRepo:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/runners/{runner_id}", "get">(baseUrl, endpoints["actions"]["getSelfHostedRunnerForRepo"], allowUnmocked).request,
    getWorkflow:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/workflows/{workflow_id}", "get">(baseUrl, endpoints["actions"]["getWorkflow"], allowUnmocked).request,
    getWorkflowAccessToRepository:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/permissions/access", "get">(baseUrl, endpoints["actions"]["getWorkflowAccessToRepository"], allowUnmocked).request,
    getWorkflowRun:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/runs/{run_id}", "get">(baseUrl, endpoints["actions"]["getWorkflowRun"], allowUnmocked).request,
    getWorkflowRunAttempt:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/runs/{run_id}/attempts/{attempt_number}", "get">(baseUrl, endpoints["actions"]["getWorkflowRunAttempt"], allowUnmocked).request,
    getWorkflowRunUsage:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/runs/{run_id}/timing", "get">(baseUrl, endpoints["actions"]["getWorkflowRunUsage"], allowUnmocked).request,
    getWorkflowUsage:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/workflows/{workflow_id}/timing", "get">(baseUrl, endpoints["actions"]["getWorkflowUsage"], allowUnmocked).request,
    listArtifactsForRepo:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/artifacts", "get">(baseUrl, endpoints["actions"]["listArtifactsForRepo"], allowUnmocked).request,
    listEnvironmentSecrets:
      new MoctokitRequestMocker<"/repositories/{repository_id}/environments/{environment_name}/secrets", "get">(baseUrl, endpoints["actions"]["listEnvironmentSecrets"], allowUnmocked).request,
    listEnvironmentVariables:
      new MoctokitRequestMocker<"/repositories/{repository_id}/environments/{environment_name}/variables", "get">(baseUrl, endpoints["actions"]["listEnvironmentVariables"], allowUnmocked).request,
    listJobsForWorkflowRun:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/runs/{run_id}/jobs", "get">(baseUrl, endpoints["actions"]["listJobsForWorkflowRun"], allowUnmocked).request,
    listJobsForWorkflowRunAttempt:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/runs/{run_id}/attempts/{attempt_number}/jobs", "get">(baseUrl, endpoints["actions"]["listJobsForWorkflowRunAttempt"], allowUnmocked).request,
    listLabelsForSelfHostedRunnerForOrg:
      new MoctokitRequestMocker<"/orgs/{org}/actions/runners/{runner_id}/labels", "get">(baseUrl, endpoints["actions"]["listLabelsForSelfHostedRunnerForOrg"], allowUnmocked).request,
    listLabelsForSelfHostedRunnerForRepo:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/runners/{runner_id}/labels", "get">(baseUrl, endpoints["actions"]["listLabelsForSelfHostedRunnerForRepo"], allowUnmocked).request,
    listOrgSecrets:
      new MoctokitRequestMocker<"/orgs/{org}/actions/secrets", "get">(baseUrl, endpoints["actions"]["listOrgSecrets"], allowUnmocked).request,
    listOrgVariables:
      new MoctokitRequestMocker<"/orgs/{org}/actions/variables", "get">(baseUrl, endpoints["actions"]["listOrgVariables"], allowUnmocked).request,
    listRepoOrganizationSecrets:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/organization-secrets", "get">(baseUrl, endpoints["actions"]["listRepoOrganizationSecrets"], allowUnmocked).request,
    listRepoOrganizationVariables:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/organization-variables", "get">(baseUrl, endpoints["actions"]["listRepoOrganizationVariables"], allowUnmocked).request,
    listRepoRequiredWorkflows:
      new MoctokitRequestMocker<"/repos/{org}/{repo}/actions/required_workflows", "get">(baseUrl, endpoints["actions"]["listRepoRequiredWorkflows"], allowUnmocked).request,
    listRepoSecrets:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/secrets", "get">(baseUrl, endpoints["actions"]["listRepoSecrets"], allowUnmocked).request,
    listRepoVariables:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/variables", "get">(baseUrl, endpoints["actions"]["listRepoVariables"], allowUnmocked).request,
    listRepoWorkflows:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/workflows", "get">(baseUrl, endpoints["actions"]["listRepoWorkflows"], allowUnmocked).request,
    listRequiredWorkflowRuns:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/required_workflows/{required_workflow_id_for_repo}/runs", "get">(baseUrl, endpoints["actions"]["listRequiredWorkflowRuns"], allowUnmocked).request,
    listRequiredWorkflows:
      new MoctokitRequestMocker<"/orgs/{org}/actions/required_workflows", "get">(baseUrl, endpoints["actions"]["listRequiredWorkflows"], allowUnmocked).request,
    listRunnerApplicationsForOrg:
      new MoctokitRequestMocker<"/orgs/{org}/actions/runners/downloads", "get">(baseUrl, endpoints["actions"]["listRunnerApplicationsForOrg"], allowUnmocked).request,
    listRunnerApplicationsForRepo:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/runners/downloads", "get">(baseUrl, endpoints["actions"]["listRunnerApplicationsForRepo"], allowUnmocked).request,
    listSelectedReposForOrgSecret:
      new MoctokitRequestMocker<"/orgs/{org}/actions/secrets/{secret_name}/repositories", "get">(baseUrl, endpoints["actions"]["listSelectedReposForOrgSecret"], allowUnmocked).request,
    listSelectedReposForOrgVariable:
      new MoctokitRequestMocker<"/orgs/{org}/actions/variables/{name}/repositories", "get">(baseUrl, endpoints["actions"]["listSelectedReposForOrgVariable"], allowUnmocked).request,
    listSelectedRepositoriesEnabledGithubActionsOrganization:
      new MoctokitRequestMocker<"/orgs/{org}/actions/permissions/repositories", "get">(baseUrl, endpoints["actions"]["listSelectedRepositoriesEnabledGithubActionsOrganization"], allowUnmocked).request,
    listSelectedRepositoriesRequiredWorkflow:
      new MoctokitRequestMocker<"/orgs/{org}/actions/required_workflows/{required_workflow_id}/repositories", "get">(baseUrl, endpoints["actions"]["listSelectedRepositoriesRequiredWorkflow"], allowUnmocked).request,
    listSelfHostedRunnersForOrg:
      new MoctokitRequestMocker<"/orgs/{org}/actions/runners", "get">(baseUrl, endpoints["actions"]["listSelfHostedRunnersForOrg"], allowUnmocked).request,
    listSelfHostedRunnersForRepo:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/runners", "get">(baseUrl, endpoints["actions"]["listSelfHostedRunnersForRepo"], allowUnmocked).request,
    listWorkflowRunArtifacts:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/runs/{run_id}/artifacts", "get">(baseUrl, endpoints["actions"]["listWorkflowRunArtifacts"], allowUnmocked).request,
    listWorkflowRuns:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/workflows/{workflow_id}/runs", "get">(baseUrl, endpoints["actions"]["listWorkflowRuns"], allowUnmocked).request,
    listWorkflowRunsForRepo:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/runs", "get">(baseUrl, endpoints["actions"]["listWorkflowRunsForRepo"], allowUnmocked).request,
    reRunJobForWorkflowRun:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/jobs/{job_id}/rerun", "post">(baseUrl, endpoints["actions"]["reRunJobForWorkflowRun"], allowUnmocked).request,
    reRunWorkflow:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/runs/{run_id}/rerun", "post">(baseUrl, endpoints["actions"]["reRunWorkflow"], allowUnmocked).request,
    reRunWorkflowFailedJobs:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/runs/{run_id}/rerun-failed-jobs", "post">(baseUrl, endpoints["actions"]["reRunWorkflowFailedJobs"], allowUnmocked).request,
    removeAllCustomLabelsFromSelfHostedRunnerForOrg:
      new MoctokitRequestMocker<"/orgs/{org}/actions/runners/{runner_id}/labels", "delete">(baseUrl, endpoints["actions"]["removeAllCustomLabelsFromSelfHostedRunnerForOrg"], allowUnmocked).request,
    removeAllCustomLabelsFromSelfHostedRunnerForRepo:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/runners/{runner_id}/labels", "delete">(baseUrl, endpoints["actions"]["removeAllCustomLabelsFromSelfHostedRunnerForRepo"], allowUnmocked).request,
    removeCustomLabelFromSelfHostedRunnerForOrg:
      new MoctokitRequestMocker<"/orgs/{org}/actions/runners/{runner_id}/labels/{name}", "delete">(baseUrl, endpoints["actions"]["removeCustomLabelFromSelfHostedRunnerForOrg"], allowUnmocked).request,
    removeCustomLabelFromSelfHostedRunnerForRepo:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/runners/{runner_id}/labels/{name}", "delete">(baseUrl, endpoints["actions"]["removeCustomLabelFromSelfHostedRunnerForRepo"], allowUnmocked).request,
    removeSelectedRepoFromOrgSecret:
      new MoctokitRequestMocker<"/orgs/{org}/actions/secrets/{secret_name}/repositories/{repository_id}", "delete">(baseUrl, endpoints["actions"]["removeSelectedRepoFromOrgSecret"], allowUnmocked).request,
    removeSelectedRepoFromOrgVariable:
      new MoctokitRequestMocker<"/orgs/{org}/actions/variables/{name}/repositories/{repository_id}", "delete">(baseUrl, endpoints["actions"]["removeSelectedRepoFromOrgVariable"], allowUnmocked).request,
    removeSelectedRepoFromRequiredWorkflow:
      new MoctokitRequestMocker<"/orgs/{org}/actions/required_workflows/{required_workflow_id}/repositories/{repository_id}", "delete">(baseUrl, endpoints["actions"]["removeSelectedRepoFromRequiredWorkflow"], allowUnmocked).request,
    reviewCustomGatesForRun:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/runs/{run_id}/deployment_protection_rule", "post">(baseUrl, endpoints["actions"]["reviewCustomGatesForRun"], allowUnmocked).request,
    reviewPendingDeploymentsForRun:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/runs/{run_id}/pending_deployments", "post">(baseUrl, endpoints["actions"]["reviewPendingDeploymentsForRun"], allowUnmocked).request,
    setAllowedActionsOrganization:
      new MoctokitRequestMocker<"/orgs/{org}/actions/permissions/selected-actions", "put">(baseUrl, endpoints["actions"]["setAllowedActionsOrganization"], allowUnmocked).request,
    setAllowedActionsRepository:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/permissions/selected-actions", "put">(baseUrl, endpoints["actions"]["setAllowedActionsRepository"], allowUnmocked).request,
    setCustomLabelsForSelfHostedRunnerForOrg:
      new MoctokitRequestMocker<"/orgs/{org}/actions/runners/{runner_id}/labels", "put">(baseUrl, endpoints["actions"]["setCustomLabelsForSelfHostedRunnerForOrg"], allowUnmocked).request,
    setCustomLabelsForSelfHostedRunnerForRepo:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/runners/{runner_id}/labels", "put">(baseUrl, endpoints["actions"]["setCustomLabelsForSelfHostedRunnerForRepo"], allowUnmocked).request,
    setGithubActionsDefaultWorkflowPermissionsOrganization:
      new MoctokitRequestMocker<"/orgs/{org}/actions/permissions/workflow", "put">(baseUrl, endpoints["actions"]["setGithubActionsDefaultWorkflowPermissionsOrganization"], allowUnmocked).request,
    setGithubActionsDefaultWorkflowPermissionsRepository:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/permissions/workflow", "put">(baseUrl, endpoints["actions"]["setGithubActionsDefaultWorkflowPermissionsRepository"], allowUnmocked).request,
    setGithubActionsPermissionsOrganization:
      new MoctokitRequestMocker<"/orgs/{org}/actions/permissions", "put">(baseUrl, endpoints["actions"]["setGithubActionsPermissionsOrganization"], allowUnmocked).request,
    setGithubActionsPermissionsRepository:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/permissions", "put">(baseUrl, endpoints["actions"]["setGithubActionsPermissionsRepository"], allowUnmocked).request,
    setSelectedReposForOrgSecret:
      new MoctokitRequestMocker<"/orgs/{org}/actions/secrets/{secret_name}/repositories", "put">(baseUrl, endpoints["actions"]["setSelectedReposForOrgSecret"], allowUnmocked).request,
    setSelectedReposForOrgVariable:
      new MoctokitRequestMocker<"/orgs/{org}/actions/variables/{name}/repositories", "put">(baseUrl, endpoints["actions"]["setSelectedReposForOrgVariable"], allowUnmocked).request,
    setSelectedReposToRequiredWorkflow:
      new MoctokitRequestMocker<"/orgs/{org}/actions/required_workflows/{required_workflow_id}/repositories", "put">(baseUrl, endpoints["actions"]["setSelectedReposToRequiredWorkflow"], allowUnmocked).request,
    setSelectedRepositoriesEnabledGithubActionsOrganization:
      new MoctokitRequestMocker<"/orgs/{org}/actions/permissions/repositories", "put">(baseUrl, endpoints["actions"]["setSelectedRepositoriesEnabledGithubActionsOrganization"], allowUnmocked).request,
    setWorkflowAccessToRepository:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/permissions/access", "put">(baseUrl, endpoints["actions"]["setWorkflowAccessToRepository"], allowUnmocked).request,
    updateEnvironmentVariable:
      new MoctokitRequestMocker<"/repositories/{repository_id}/environments/{environment_name}/variables/{name}", "patch">(baseUrl, endpoints["actions"]["updateEnvironmentVariable"], allowUnmocked).request,
    updateOrgVariable:
      new MoctokitRequestMocker<"/orgs/{org}/actions/variables/{name}", "patch">(baseUrl, endpoints["actions"]["updateOrgVariable"], allowUnmocked).request,
    updateRepoVariable:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/variables/{name}", "patch">(baseUrl, endpoints["actions"]["updateRepoVariable"], allowUnmocked).request,
    updateRequiredWorkflow:
      new MoctokitRequestMocker<"/orgs/{org}/actions/required_workflows/{required_workflow_id}", "patch">(baseUrl, endpoints["actions"]["updateRequiredWorkflow"], allowUnmocked).request,
  },
  activity: {
    checkRepoIsStarredByAuthenticatedUser:
      new MoctokitRequestMocker<"/user/starred/{owner}/{repo}", "get">(baseUrl, endpoints["activity"]["checkRepoIsStarredByAuthenticatedUser"], allowUnmocked).request,
    deleteRepoSubscription:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/subscription", "delete">(baseUrl, endpoints["activity"]["deleteRepoSubscription"], allowUnmocked).request,
    deleteThreadSubscription:
      new MoctokitRequestMocker<"/notifications/threads/{thread_id}/subscription", "delete">(baseUrl, endpoints["activity"]["deleteThreadSubscription"], allowUnmocked).request,
    getFeeds:
      new MoctokitRequestMocker<"/feeds", "get">(baseUrl, endpoints["activity"]["getFeeds"], allowUnmocked).request,
    getRepoSubscription:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/subscription", "get">(baseUrl, endpoints["activity"]["getRepoSubscription"], allowUnmocked).request,
    getThread:
      new MoctokitRequestMocker<"/notifications/threads/{thread_id}", "get">(baseUrl, endpoints["activity"]["getThread"], allowUnmocked).request,
    getThreadSubscriptionForAuthenticatedUser:
      new MoctokitRequestMocker<"/notifications/threads/{thread_id}/subscription", "get">(baseUrl, endpoints["activity"]["getThreadSubscriptionForAuthenticatedUser"], allowUnmocked).request,
    listEventsForAuthenticatedUser:
      new MoctokitRequestMocker<"/users/{username}/events", "get">(baseUrl, endpoints["activity"]["listEventsForAuthenticatedUser"], allowUnmocked).request,
    listNotificationsForAuthenticatedUser:
      new MoctokitRequestMocker<"/notifications", "get">(baseUrl, endpoints["activity"]["listNotificationsForAuthenticatedUser"], allowUnmocked).request,
    listOrgEventsForAuthenticatedUser:
      new MoctokitRequestMocker<"/users/{username}/events/orgs/{org}", "get">(baseUrl, endpoints["activity"]["listOrgEventsForAuthenticatedUser"], allowUnmocked).request,
    listPublicEvents:
      new MoctokitRequestMocker<"/events", "get">(baseUrl, endpoints["activity"]["listPublicEvents"], allowUnmocked).request,
    listPublicEventsForRepoNetwork:
      new MoctokitRequestMocker<"/networks/{owner}/{repo}/events", "get">(baseUrl, endpoints["activity"]["listPublicEventsForRepoNetwork"], allowUnmocked).request,
    listPublicEventsForUser:
      new MoctokitRequestMocker<"/users/{username}/events/public", "get">(baseUrl, endpoints["activity"]["listPublicEventsForUser"], allowUnmocked).request,
    listPublicOrgEvents:
      new MoctokitRequestMocker<"/orgs/{org}/events", "get">(baseUrl, endpoints["activity"]["listPublicOrgEvents"], allowUnmocked).request,
    listReceivedEventsForUser:
      new MoctokitRequestMocker<"/users/{username}/received_events", "get">(baseUrl, endpoints["activity"]["listReceivedEventsForUser"], allowUnmocked).request,
    listReceivedPublicEventsForUser:
      new MoctokitRequestMocker<"/users/{username}/received_events/public", "get">(baseUrl, endpoints["activity"]["listReceivedPublicEventsForUser"], allowUnmocked).request,
    listRepoEvents:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/events", "get">(baseUrl, endpoints["activity"]["listRepoEvents"], allowUnmocked).request,
    listRepoNotificationsForAuthenticatedUser:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/notifications", "get">(baseUrl, endpoints["activity"]["listRepoNotificationsForAuthenticatedUser"], allowUnmocked).request,
    listReposStarredByAuthenticatedUser:
      new MoctokitRequestMocker<"/user/starred", "get">(baseUrl, endpoints["activity"]["listReposStarredByAuthenticatedUser"], allowUnmocked).request,
    listReposStarredByUser:
      new MoctokitRequestMocker<"/users/{username}/starred", "get">(baseUrl, endpoints["activity"]["listReposStarredByUser"], allowUnmocked).request,
    listReposWatchedByUser:
      new MoctokitRequestMocker<"/users/{username}/subscriptions", "get">(baseUrl, endpoints["activity"]["listReposWatchedByUser"], allowUnmocked).request,
    listStargazersForRepo:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/stargazers", "get">(baseUrl, endpoints["activity"]["listStargazersForRepo"], allowUnmocked).request,
    listWatchedReposForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/subscriptions", "get">(baseUrl, endpoints["activity"]["listWatchedReposForAuthenticatedUser"], allowUnmocked).request,
    listWatchersForRepo:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/subscribers", "get">(baseUrl, endpoints["activity"]["listWatchersForRepo"], allowUnmocked).request,
    markNotificationsAsRead:
      new MoctokitRequestMocker<"/notifications", "put">(baseUrl, endpoints["activity"]["markNotificationsAsRead"], allowUnmocked).request,
    markRepoNotificationsAsRead:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/notifications", "put">(baseUrl, endpoints["activity"]["markRepoNotificationsAsRead"], allowUnmocked).request,
    markThreadAsRead:
      new MoctokitRequestMocker<"/notifications/threads/{thread_id}", "patch">(baseUrl, endpoints["activity"]["markThreadAsRead"], allowUnmocked).request,
    setRepoSubscription:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/subscription", "put">(baseUrl, endpoints["activity"]["setRepoSubscription"], allowUnmocked).request,
    setThreadSubscription:
      new MoctokitRequestMocker<"/notifications/threads/{thread_id}/subscription", "put">(baseUrl, endpoints["activity"]["setThreadSubscription"], allowUnmocked).request,
    starRepoForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/starred/{owner}/{repo}", "put">(baseUrl, endpoints["activity"]["starRepoForAuthenticatedUser"], allowUnmocked).request,
    unstarRepoForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/starred/{owner}/{repo}", "delete">(baseUrl, endpoints["activity"]["unstarRepoForAuthenticatedUser"], allowUnmocked).request,
  },
  apps: {
    addRepoToInstallation:
      new MoctokitRequestMocker<"/user/installations/{installation_id}/repositories/{repository_id}", "put">(baseUrl, endpoints["apps"]["addRepoToInstallation"], allowUnmocked).request,
    addRepoToInstallationForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/installations/{installation_id}/repositories/{repository_id}", "put">(baseUrl, endpoints["apps"]["addRepoToInstallationForAuthenticatedUser"], allowUnmocked).request,
    checkToken:
      new MoctokitRequestMocker<"/applications/{client_id}/token", "post">(baseUrl, endpoints["apps"]["checkToken"], allowUnmocked).request,
    createFromManifest:
      new MoctokitRequestMocker<"/app-manifests/{code}/conversions", "post">(baseUrl, endpoints["apps"]["createFromManifest"], allowUnmocked).request,
    createInstallationAccessToken:
      new MoctokitRequestMocker<"/app/installations/{installation_id}/access_tokens", "post">(baseUrl, endpoints["apps"]["createInstallationAccessToken"], allowUnmocked).request,
    deleteAuthorization:
      new MoctokitRequestMocker<"/applications/{client_id}/grant", "delete">(baseUrl, endpoints["apps"]["deleteAuthorization"], allowUnmocked).request,
    deleteInstallation:
      new MoctokitRequestMocker<"/app/installations/{installation_id}", "delete">(baseUrl, endpoints["apps"]["deleteInstallation"], allowUnmocked).request,
    deleteToken:
      new MoctokitRequestMocker<"/applications/{client_id}/token", "delete">(baseUrl, endpoints["apps"]["deleteToken"], allowUnmocked).request,
    getAuthenticated:
      new MoctokitRequestMocker<"/app", "get">(baseUrl, endpoints["apps"]["getAuthenticated"], allowUnmocked).request,
    getBySlug:
      new MoctokitRequestMocker<"/apps/{app_slug}", "get">(baseUrl, endpoints["apps"]["getBySlug"], allowUnmocked).request,
    getInstallation:
      new MoctokitRequestMocker<"/app/installations/{installation_id}", "get">(baseUrl, endpoints["apps"]["getInstallation"], allowUnmocked).request,
    getOrgInstallation:
      new MoctokitRequestMocker<"/orgs/{org}/installation", "get">(baseUrl, endpoints["apps"]["getOrgInstallation"], allowUnmocked).request,
    getRepoInstallation:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/installation", "get">(baseUrl, endpoints["apps"]["getRepoInstallation"], allowUnmocked).request,
    getSubscriptionPlanForAccount:
      new MoctokitRequestMocker<"/marketplace_listing/accounts/{account_id}", "get">(baseUrl, endpoints["apps"]["getSubscriptionPlanForAccount"], allowUnmocked).request,
    getSubscriptionPlanForAccountStubbed:
      new MoctokitRequestMocker<"/marketplace_listing/stubbed/accounts/{account_id}", "get">(baseUrl, endpoints["apps"]["getSubscriptionPlanForAccountStubbed"], allowUnmocked).request,
    getUserInstallation:
      new MoctokitRequestMocker<"/users/{username}/installation", "get">(baseUrl, endpoints["apps"]["getUserInstallation"], allowUnmocked).request,
    getWebhookConfigForApp:
      new MoctokitRequestMocker<"/app/hook/config", "get">(baseUrl, endpoints["apps"]["getWebhookConfigForApp"], allowUnmocked).request,
    getWebhookDelivery:
      new MoctokitRequestMocker<"/app/hook/deliveries/{delivery_id}", "get">(baseUrl, endpoints["apps"]["getWebhookDelivery"], allowUnmocked).request,
    listAccountsForPlan:
      new MoctokitRequestMocker<"/marketplace_listing/plans/{plan_id}/accounts", "get">(baseUrl, endpoints["apps"]["listAccountsForPlan"], allowUnmocked).request,
    listAccountsForPlanStubbed:
      new MoctokitRequestMocker<"/marketplace_listing/stubbed/plans/{plan_id}/accounts", "get">(baseUrl, endpoints["apps"]["listAccountsForPlanStubbed"], allowUnmocked).request,
    listInstallationReposForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/installations/{installation_id}/repositories", "get">(baseUrl, endpoints["apps"]["listInstallationReposForAuthenticatedUser"], allowUnmocked).request,
    listInstallationRequestsForAuthenticatedApp:
      new MoctokitRequestMocker<"/app/installation-requests", "get">(baseUrl, endpoints["apps"]["listInstallationRequestsForAuthenticatedApp"], allowUnmocked).request,
    listInstallations:
      new MoctokitRequestMocker<"/app/installations", "get">(baseUrl, endpoints["apps"]["listInstallations"], allowUnmocked).request,
    listInstallationsForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/installations", "get">(baseUrl, endpoints["apps"]["listInstallationsForAuthenticatedUser"], allowUnmocked).request,
    listPlans:
      new MoctokitRequestMocker<"/marketplace_listing/plans", "get">(baseUrl, endpoints["apps"]["listPlans"], allowUnmocked).request,
    listPlansStubbed:
      new MoctokitRequestMocker<"/marketplace_listing/stubbed/plans", "get">(baseUrl, endpoints["apps"]["listPlansStubbed"], allowUnmocked).request,
    listReposAccessibleToInstallation:
      new MoctokitRequestMocker<"/installation/repositories", "get">(baseUrl, endpoints["apps"]["listReposAccessibleToInstallation"], allowUnmocked).request,
    listSubscriptionsForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/marketplace_purchases", "get">(baseUrl, endpoints["apps"]["listSubscriptionsForAuthenticatedUser"], allowUnmocked).request,
    listSubscriptionsForAuthenticatedUserStubbed:
      new MoctokitRequestMocker<"/user/marketplace_purchases/stubbed", "get">(baseUrl, endpoints["apps"]["listSubscriptionsForAuthenticatedUserStubbed"], allowUnmocked).request,
    listWebhookDeliveries:
      new MoctokitRequestMocker<"/app/hook/deliveries", "get">(baseUrl, endpoints["apps"]["listWebhookDeliveries"], allowUnmocked).request,
    redeliverWebhookDelivery:
      new MoctokitRequestMocker<"/app/hook/deliveries/{delivery_id}/attempts", "post">(baseUrl, endpoints["apps"]["redeliverWebhookDelivery"], allowUnmocked).request,
    removeRepoFromInstallation:
      new MoctokitRequestMocker<"/user/installations/{installation_id}/repositories/{repository_id}", "delete">(baseUrl, endpoints["apps"]["removeRepoFromInstallation"], allowUnmocked).request,
    removeRepoFromInstallationForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/installations/{installation_id}/repositories/{repository_id}", "delete">(baseUrl, endpoints["apps"]["removeRepoFromInstallationForAuthenticatedUser"], allowUnmocked).request,
    resetToken:
      new MoctokitRequestMocker<"/applications/{client_id}/token", "patch">(baseUrl, endpoints["apps"]["resetToken"], allowUnmocked).request,
    revokeInstallationAccessToken:
      new MoctokitRequestMocker<"/installation/token", "delete">(baseUrl, endpoints["apps"]["revokeInstallationAccessToken"], allowUnmocked).request,
    scopeToken:
      new MoctokitRequestMocker<"/applications/{client_id}/token/scoped", "post">(baseUrl, endpoints["apps"]["scopeToken"], allowUnmocked).request,
    suspendInstallation:
      new MoctokitRequestMocker<"/app/installations/{installation_id}/suspended", "put">(baseUrl, endpoints["apps"]["suspendInstallation"], allowUnmocked).request,
    unsuspendInstallation:
      new MoctokitRequestMocker<"/app/installations/{installation_id}/suspended", "delete">(baseUrl, endpoints["apps"]["unsuspendInstallation"], allowUnmocked).request,
    updateWebhookConfigForApp:
      new MoctokitRequestMocker<"/app/hook/config", "patch">(baseUrl, endpoints["apps"]["updateWebhookConfigForApp"], allowUnmocked).request,
  },
  billing: {
    getGithubActionsBillingOrg:
      new MoctokitRequestMocker<"/orgs/{org}/settings/billing/actions", "get">(baseUrl, endpoints["billing"]["getGithubActionsBillingOrg"], allowUnmocked).request,
    getGithubActionsBillingUser:
      new MoctokitRequestMocker<"/users/{username}/settings/billing/actions", "get">(baseUrl, endpoints["billing"]["getGithubActionsBillingUser"], allowUnmocked).request,
    getGithubPackagesBillingOrg:
      new MoctokitRequestMocker<"/orgs/{org}/settings/billing/packages", "get">(baseUrl, endpoints["billing"]["getGithubPackagesBillingOrg"], allowUnmocked).request,
    getGithubPackagesBillingUser:
      new MoctokitRequestMocker<"/users/{username}/settings/billing/packages", "get">(baseUrl, endpoints["billing"]["getGithubPackagesBillingUser"], allowUnmocked).request,
    getSharedStorageBillingOrg:
      new MoctokitRequestMocker<"/orgs/{org}/settings/billing/shared-storage", "get">(baseUrl, endpoints["billing"]["getSharedStorageBillingOrg"], allowUnmocked).request,
    getSharedStorageBillingUser:
      new MoctokitRequestMocker<"/users/{username}/settings/billing/shared-storage", "get">(baseUrl, endpoints["billing"]["getSharedStorageBillingUser"], allowUnmocked).request,
  },
  checks: {
    create:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/check-runs", "post">(baseUrl, endpoints["checks"]["create"], allowUnmocked).request,
    createSuite:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/check-suites", "post">(baseUrl, endpoints["checks"]["createSuite"], allowUnmocked).request,
    get: new MoctokitRequestMocker<"/repos/{owner}/{repo}/check-runs/{check_run_id}", "get">(baseUrl, endpoints["checks"]["get"], allowUnmocked).request,
    getSuite:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/check-suites/{check_suite_id}", "get">(baseUrl, endpoints["checks"]["getSuite"], allowUnmocked).request,
    listAnnotations:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/check-runs/{check_run_id}/annotations", "get">(baseUrl, endpoints["checks"]["listAnnotations"], allowUnmocked).request,
    listForRef:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/commits/{ref}/check-runs", "get">(baseUrl, endpoints["checks"]["listForRef"], allowUnmocked).request,
    listForSuite:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/check-suites/{check_suite_id}/check-runs", "get">(baseUrl, endpoints["checks"]["listForSuite"], allowUnmocked).request,
    listSuitesForRef:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/commits/{ref}/check-suites", "get">(baseUrl, endpoints["checks"]["listSuitesForRef"], allowUnmocked).request,
    rerequestRun:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/check-runs/{check_run_id}/rerequest", "post">(baseUrl, endpoints["checks"]["rerequestRun"], allowUnmocked).request,
    rerequestSuite:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/check-suites/{check_suite_id}/rerequest", "post">(baseUrl, endpoints["checks"]["rerequestSuite"], allowUnmocked).request,
    setSuitesPreferences:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/check-suites/preferences", "patch">(baseUrl, endpoints["checks"]["setSuitesPreferences"], allowUnmocked).request,
    update:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/check-runs/{check_run_id}", "patch">(baseUrl, endpoints["checks"]["update"], allowUnmocked).request,
  },
  codeScanning: {
    deleteAnalysis:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/code-scanning/analyses/{analysis_id}", "delete">(baseUrl, endpoints["codeScanning"]["deleteAnalysis"], allowUnmocked).request,
    getAlert:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/code-scanning/alerts/{alert_number}", "get">(baseUrl, endpoints["codeScanning"]["getAlert"], allowUnmocked).request,
    getAnalysis:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/code-scanning/analyses/{analysis_id}", "get">(baseUrl, endpoints["codeScanning"]["getAnalysis"], allowUnmocked).request,
    getCodeqlDatabase:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/code-scanning/codeql/databases/{language}", "get">(baseUrl, endpoints["codeScanning"]["getCodeqlDatabase"], allowUnmocked).request,
    getDefaultSetup:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/code-scanning/default-setup", "get">(baseUrl, endpoints["codeScanning"]["getDefaultSetup"], allowUnmocked).request,
    getSarif:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/code-scanning/sarifs/{sarif_id}", "get">(baseUrl, endpoints["codeScanning"]["getSarif"], allowUnmocked).request,
    listAlertInstances:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/code-scanning/alerts/{alert_number}/instances", "get">(baseUrl, endpoints["codeScanning"]["listAlertInstances"], allowUnmocked).request,
    listAlertsForOrg:
      new MoctokitRequestMocker<"/orgs/{org}/code-scanning/alerts", "get">(baseUrl, endpoints["codeScanning"]["listAlertsForOrg"], allowUnmocked).request,
    listAlertsForRepo:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/code-scanning/alerts", "get">(baseUrl, endpoints["codeScanning"]["listAlertsForRepo"], allowUnmocked).request,
    listAlertsInstances:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/code-scanning/alerts/{alert_number}/instances", "get">(baseUrl, endpoints["codeScanning"]["listAlertsInstances"], allowUnmocked).request,
    listCodeqlDatabases:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/code-scanning/codeql/databases", "get">(baseUrl, endpoints["codeScanning"]["listCodeqlDatabases"], allowUnmocked).request,
    listRecentAnalyses:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/code-scanning/analyses", "get">(baseUrl, endpoints["codeScanning"]["listRecentAnalyses"], allowUnmocked).request,
    updateAlert:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/code-scanning/alerts/{alert_number}", "patch">(baseUrl, endpoints["codeScanning"]["updateAlert"], allowUnmocked).request,
    updateDefaultSetup:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/code-scanning/default-setup", "patch">(baseUrl, endpoints["codeScanning"]["updateDefaultSetup"], allowUnmocked).request,
    uploadSarif:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/code-scanning/sarifs", "post">(baseUrl, endpoints["codeScanning"]["uploadSarif"], allowUnmocked).request,
  },
  codesOfConduct: {
    getAllCodesOfConduct:
      new MoctokitRequestMocker<"/codes_of_conduct", "get">(baseUrl, endpoints["codesOfConduct"]["getAllCodesOfConduct"], allowUnmocked).request,
    getConductCode:
      new MoctokitRequestMocker<"/codes_of_conduct/{key}", "get">(baseUrl, endpoints["codesOfConduct"]["getConductCode"], allowUnmocked).request,
  },
  codespaces: {
    addRepositoryForSecretForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/codespaces/secrets/{secret_name}/repositories/{repository_id}", "put">(baseUrl, endpoints["codespaces"]["addRepositoryForSecretForAuthenticatedUser"], allowUnmocked).request,
    addSelectedRepoToOrgSecret:
      new MoctokitRequestMocker<"/orgs/{org}/codespaces/secrets/{secret_name}/repositories/{repository_id}", "put">(baseUrl, endpoints["codespaces"]["addSelectedRepoToOrgSecret"], allowUnmocked).request,
    codespaceMachinesForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/codespaces/{codespace_name}/machines", "get">(baseUrl, endpoints["codespaces"]["codespaceMachinesForAuthenticatedUser"], allowUnmocked).request,
    createForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/codespaces", "post">(baseUrl, endpoints["codespaces"]["createForAuthenticatedUser"], allowUnmocked).request,
    createOrUpdateOrgSecret:
      new MoctokitRequestMocker<"/orgs/{org}/codespaces/secrets/{secret_name}", "put">(baseUrl, endpoints["codespaces"]["createOrUpdateOrgSecret"], allowUnmocked).request,
    createOrUpdateRepoSecret:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/codespaces/secrets/{secret_name}", "put">(baseUrl, endpoints["codespaces"]["createOrUpdateRepoSecret"], allowUnmocked).request,
    createOrUpdateSecretForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/codespaces/secrets/{secret_name}", "put">(baseUrl, endpoints["codespaces"]["createOrUpdateSecretForAuthenticatedUser"], allowUnmocked).request,
    createWithPrForAuthenticatedUser:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/pulls/{pull_number}/codespaces", "post">(baseUrl, endpoints["codespaces"]["createWithPrForAuthenticatedUser"], allowUnmocked).request,
    createWithRepoForAuthenticatedUser:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/codespaces", "post">(baseUrl, endpoints["codespaces"]["createWithRepoForAuthenticatedUser"], allowUnmocked).request,
    deleteCodespacesBillingUsers:
      new MoctokitRequestMocker<"/orgs/{org}/codespaces/billing/selected_users", "delete">(baseUrl, endpoints["codespaces"]["deleteCodespacesBillingUsers"], allowUnmocked).request,
    deleteForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/codespaces/{codespace_name}", "delete">(baseUrl, endpoints["codespaces"]["deleteForAuthenticatedUser"], allowUnmocked).request,
    deleteFromOrganization:
      new MoctokitRequestMocker<"/orgs/{org}/members/{username}/codespaces/{codespace_name}", "delete">(baseUrl, endpoints["codespaces"]["deleteFromOrganization"], allowUnmocked).request,
    deleteOrgSecret:
      new MoctokitRequestMocker<"/orgs/{org}/codespaces/secrets/{secret_name}", "delete">(baseUrl, endpoints["codespaces"]["deleteOrgSecret"], allowUnmocked).request,
    deleteRepoSecret:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/codespaces/secrets/{secret_name}", "delete">(baseUrl, endpoints["codespaces"]["deleteRepoSecret"], allowUnmocked).request,
    deleteSecretForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/codespaces/secrets/{secret_name}", "delete">(baseUrl, endpoints["codespaces"]["deleteSecretForAuthenticatedUser"], allowUnmocked).request,
    exportForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/codespaces/{codespace_name}/exports", "post">(baseUrl, endpoints["codespaces"]["exportForAuthenticatedUser"], allowUnmocked).request,
    getCodespacesForUserInOrg:
      new MoctokitRequestMocker<"/orgs/{org}/members/{username}/codespaces", "get">(baseUrl, endpoints["codespaces"]["getCodespacesForUserInOrg"], allowUnmocked).request,
    getExportDetailsForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/codespaces/{codespace_name}/exports/{export_id}", "get">(baseUrl, endpoints["codespaces"]["getExportDetailsForAuthenticatedUser"], allowUnmocked).request,
    getForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/codespaces/{codespace_name}", "get">(baseUrl, endpoints["codespaces"]["getForAuthenticatedUser"], allowUnmocked).request,
    getOrgPublicKey:
      new MoctokitRequestMocker<"/orgs/{org}/codespaces/secrets/public-key", "get">(baseUrl, endpoints["codespaces"]["getOrgPublicKey"], allowUnmocked).request,
    getOrgSecret:
      new MoctokitRequestMocker<"/orgs/{org}/codespaces/secrets/{secret_name}", "get">(baseUrl, endpoints["codespaces"]["getOrgSecret"], allowUnmocked).request,
    getPublicKeyForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/codespaces/secrets/public-key", "get">(baseUrl, endpoints["codespaces"]["getPublicKeyForAuthenticatedUser"], allowUnmocked).request,
    getRepoPublicKey:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/codespaces/secrets/public-key", "get">(baseUrl, endpoints["codespaces"]["getRepoPublicKey"], allowUnmocked).request,
    getRepoSecret:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/codespaces/secrets/{secret_name}", "get">(baseUrl, endpoints["codespaces"]["getRepoSecret"], allowUnmocked).request,
    getSecretForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/codespaces/secrets/{secret_name}", "get">(baseUrl, endpoints["codespaces"]["getSecretForAuthenticatedUser"], allowUnmocked).request,
    listDevcontainersInRepositoryForAuthenticatedUser:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/codespaces/devcontainers", "get">(baseUrl, endpoints["codespaces"]["listDevcontainersInRepositoryForAuthenticatedUser"], allowUnmocked).request,
    listForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/codespaces", "get">(baseUrl, endpoints["codespaces"]["listForAuthenticatedUser"], allowUnmocked).request,
    listInOrganization:
      new MoctokitRequestMocker<"/orgs/{org}/codespaces", "get">(baseUrl, endpoints["codespaces"]["listInOrganization"], allowUnmocked).request,
    listInRepositoryForAuthenticatedUser:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/codespaces", "get">(baseUrl, endpoints["codespaces"]["listInRepositoryForAuthenticatedUser"], allowUnmocked).request,
    listOrgSecrets:
      new MoctokitRequestMocker<"/orgs/{org}/codespaces/secrets", "get">(baseUrl, endpoints["codespaces"]["listOrgSecrets"], allowUnmocked).request,
    listRepoSecrets:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/codespaces/secrets", "get">(baseUrl, endpoints["codespaces"]["listRepoSecrets"], allowUnmocked).request,
    listRepositoriesForSecretForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/codespaces/secrets/{secret_name}/repositories", "get">(baseUrl, endpoints["codespaces"]["listRepositoriesForSecretForAuthenticatedUser"], allowUnmocked).request,
    listSecretsForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/codespaces/secrets", "get">(baseUrl, endpoints["codespaces"]["listSecretsForAuthenticatedUser"], allowUnmocked).request,
    listSelectedReposForOrgSecret:
      new MoctokitRequestMocker<"/orgs/{org}/codespaces/secrets/{secret_name}/repositories", "get">(baseUrl, endpoints["codespaces"]["listSelectedReposForOrgSecret"], allowUnmocked).request,
    preFlightWithRepoForAuthenticatedUser:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/codespaces/new", "get">(baseUrl, endpoints["codespaces"]["preFlightWithRepoForAuthenticatedUser"], allowUnmocked).request,
    publishForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/codespaces/{codespace_name}/publish", "post">(baseUrl, endpoints["codespaces"]["publishForAuthenticatedUser"], allowUnmocked).request,
    removeRepositoryForSecretForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/codespaces/secrets/{secret_name}/repositories/{repository_id}", "delete">(baseUrl, endpoints["codespaces"]["removeRepositoryForSecretForAuthenticatedUser"], allowUnmocked).request,
    removeSelectedRepoFromOrgSecret:
      new MoctokitRequestMocker<"/orgs/{org}/codespaces/secrets/{secret_name}/repositories/{repository_id}", "delete">(baseUrl, endpoints["codespaces"]["removeSelectedRepoFromOrgSecret"], allowUnmocked).request,
    repoMachinesForAuthenticatedUser:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/codespaces/machines", "get">(baseUrl, endpoints["codespaces"]["repoMachinesForAuthenticatedUser"], allowUnmocked).request,
    setCodespacesBilling:
      new MoctokitRequestMocker<"/orgs/{org}/codespaces/billing", "put">(baseUrl, endpoints["codespaces"]["setCodespacesBilling"], allowUnmocked).request,
    setCodespacesBillingUsers:
      new MoctokitRequestMocker<"/orgs/{org}/codespaces/billing/selected_users", "post">(baseUrl, endpoints["codespaces"]["setCodespacesBillingUsers"], allowUnmocked).request,
    setRepositoriesForSecretForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/codespaces/secrets/{secret_name}/repositories", "put">(baseUrl, endpoints["codespaces"]["setRepositoriesForSecretForAuthenticatedUser"], allowUnmocked).request,
    setSelectedReposForOrgSecret:
      new MoctokitRequestMocker<"/orgs/{org}/codespaces/secrets/{secret_name}/repositories", "put">(baseUrl, endpoints["codespaces"]["setSelectedReposForOrgSecret"], allowUnmocked).request,
    startForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/codespaces/{codespace_name}/start", "post">(baseUrl, endpoints["codespaces"]["startForAuthenticatedUser"], allowUnmocked).request,
    stopForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/codespaces/{codespace_name}/stop", "post">(baseUrl, endpoints["codespaces"]["stopForAuthenticatedUser"], allowUnmocked).request,
    stopInOrganization:
      new MoctokitRequestMocker<"/orgs/{org}/members/{username}/codespaces/{codespace_name}/stop", "post">(baseUrl, endpoints["codespaces"]["stopInOrganization"], allowUnmocked).request,
    updateForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/codespaces/{codespace_name}", "patch">(baseUrl, endpoints["codespaces"]["updateForAuthenticatedUser"], allowUnmocked).request,
  },
  dependabot: {
    addSelectedRepoToOrgSecret:
      new MoctokitRequestMocker<"/orgs/{org}/dependabot/secrets/{secret_name}/repositories/{repository_id}", "put">(baseUrl, endpoints["dependabot"]["addSelectedRepoToOrgSecret"], allowUnmocked).request,
    createOrUpdateOrgSecret:
      new MoctokitRequestMocker<"/orgs/{org}/dependabot/secrets/{secret_name}", "put">(baseUrl, endpoints["dependabot"]["createOrUpdateOrgSecret"], allowUnmocked).request,
    createOrUpdateRepoSecret:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/dependabot/secrets/{secret_name}", "put">(baseUrl, endpoints["dependabot"]["createOrUpdateRepoSecret"], allowUnmocked).request,
    deleteOrgSecret:
      new MoctokitRequestMocker<"/orgs/{org}/dependabot/secrets/{secret_name}", "delete">(baseUrl, endpoints["dependabot"]["deleteOrgSecret"], allowUnmocked).request,
    deleteRepoSecret:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/dependabot/secrets/{secret_name}", "delete">(baseUrl, endpoints["dependabot"]["deleteRepoSecret"], allowUnmocked).request,
    getAlert:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/dependabot/alerts/{alert_number}", "get">(baseUrl, endpoints["dependabot"]["getAlert"], allowUnmocked).request,
    getOrgPublicKey:
      new MoctokitRequestMocker<"/orgs/{org}/dependabot/secrets/public-key", "get">(baseUrl, endpoints["dependabot"]["getOrgPublicKey"], allowUnmocked).request,
    getOrgSecret:
      new MoctokitRequestMocker<"/orgs/{org}/dependabot/secrets/{secret_name}", "get">(baseUrl, endpoints["dependabot"]["getOrgSecret"], allowUnmocked).request,
    getRepoPublicKey:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/dependabot/secrets/public-key", "get">(baseUrl, endpoints["dependabot"]["getRepoPublicKey"], allowUnmocked).request,
    getRepoSecret:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/dependabot/secrets/{secret_name}", "get">(baseUrl, endpoints["dependabot"]["getRepoSecret"], allowUnmocked).request,
    listAlertsForEnterprise:
      new MoctokitRequestMocker<"/enterprises/{enterprise}/dependabot/alerts", "get">(baseUrl, endpoints["dependabot"]["listAlertsForEnterprise"], allowUnmocked).request,
    listAlertsForOrg:
      new MoctokitRequestMocker<"/orgs/{org}/dependabot/alerts", "get">(baseUrl, endpoints["dependabot"]["listAlertsForOrg"], allowUnmocked).request,
    listAlertsForRepo:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/dependabot/alerts", "get">(baseUrl, endpoints["dependabot"]["listAlertsForRepo"], allowUnmocked).request,
    listOrgSecrets:
      new MoctokitRequestMocker<"/orgs/{org}/dependabot/secrets", "get">(baseUrl, endpoints["dependabot"]["listOrgSecrets"], allowUnmocked).request,
    listRepoSecrets:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/dependabot/secrets", "get">(baseUrl, endpoints["dependabot"]["listRepoSecrets"], allowUnmocked).request,
    listSelectedReposForOrgSecret:
      new MoctokitRequestMocker<"/orgs/{org}/dependabot/secrets/{secret_name}/repositories", "get">(baseUrl, endpoints["dependabot"]["listSelectedReposForOrgSecret"], allowUnmocked).request,
    removeSelectedRepoFromOrgSecret:
      new MoctokitRequestMocker<"/orgs/{org}/dependabot/secrets/{secret_name}/repositories/{repository_id}", "delete">(baseUrl, endpoints["dependabot"]["removeSelectedRepoFromOrgSecret"], allowUnmocked).request,
    setSelectedReposForOrgSecret:
      new MoctokitRequestMocker<"/orgs/{org}/dependabot/secrets/{secret_name}/repositories", "put">(baseUrl, endpoints["dependabot"]["setSelectedReposForOrgSecret"], allowUnmocked).request,
    updateAlert:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/dependabot/alerts/{alert_number}", "patch">(baseUrl, endpoints["dependabot"]["updateAlert"], allowUnmocked).request,
  },
  dependencyGraph: {
    createRepositorySnapshot:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/dependency-graph/snapshots", "post">(baseUrl, endpoints["dependencyGraph"]["createRepositorySnapshot"], allowUnmocked).request,
    diffRange:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/dependency-graph/compare/{basehead}", "get">(baseUrl, endpoints["dependencyGraph"]["diffRange"], allowUnmocked).request,
    exportSbom:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/dependency-graph/sbom", "get">(baseUrl, endpoints["dependencyGraph"]["exportSbom"], allowUnmocked).request,
  },
  emojis: {
    get: new MoctokitRequestMocker<"/emojis", "get">(baseUrl, endpoints["emojis"]["get"], allowUnmocked).request,
  },
  gists: {
    checkIsStarred:
      new MoctokitRequestMocker<"/gists/{gist_id}/star", "get">(baseUrl, endpoints["gists"]["checkIsStarred"], allowUnmocked).request,
    create:
      new MoctokitRequestMocker<"/gists", "post">(baseUrl, endpoints["gists"]["create"], allowUnmocked).request,
    createComment:
      new MoctokitRequestMocker<"/gists/{gist_id}/comments", "post">(baseUrl, endpoints["gists"]["createComment"], allowUnmocked).request,
    delete:
      new MoctokitRequestMocker<"/gists/{gist_id}", "delete">(baseUrl, endpoints["gists"]["delete"], allowUnmocked).request,
    deleteComment:
      new MoctokitRequestMocker<"/gists/{gist_id}/comments/{comment_id}", "delete">(baseUrl, endpoints["gists"]["deleteComment"], allowUnmocked).request,
    fork: new MoctokitRequestMocker<"/gists/{gist_id}/forks", "post">(baseUrl, endpoints["gists"]["fork"], allowUnmocked).request,
    get: new MoctokitRequestMocker<"/gists/{gist_id}", "get">(baseUrl, endpoints["gists"]["get"], allowUnmocked).request,
    getComment:
      new MoctokitRequestMocker<"/gists/{gist_id}/comments/{comment_id}", "get">(baseUrl, endpoints["gists"]["getComment"], allowUnmocked).request,
    getRevision:
      new MoctokitRequestMocker<"/gists/{gist_id}/{sha}", "get">(baseUrl, endpoints["gists"]["getRevision"], allowUnmocked).request,
    list: new MoctokitRequestMocker<"/gists", "get">(baseUrl, endpoints["gists"]["list"], allowUnmocked).request,
    listComments:
      new MoctokitRequestMocker<"/gists/{gist_id}/comments", "get">(baseUrl, endpoints["gists"]["listComments"], allowUnmocked).request,
    listCommits:
      new MoctokitRequestMocker<"/gists/{gist_id}/commits", "get">(baseUrl, endpoints["gists"]["listCommits"], allowUnmocked).request,
    listForUser:
      new MoctokitRequestMocker<"/users/{username}/gists", "get">(baseUrl, endpoints["gists"]["listForUser"], allowUnmocked).request,
    listForks:
      new MoctokitRequestMocker<"/gists/{gist_id}/forks", "get">(baseUrl, endpoints["gists"]["listForks"], allowUnmocked).request,
    listPublic:
      new MoctokitRequestMocker<"/gists/public", "get">(baseUrl, endpoints["gists"]["listPublic"], allowUnmocked).request,
    listStarred:
      new MoctokitRequestMocker<"/gists/starred", "get">(baseUrl, endpoints["gists"]["listStarred"], allowUnmocked).request,
    star: new MoctokitRequestMocker<"/gists/{gist_id}/star", "put">(baseUrl, endpoints["gists"]["star"], allowUnmocked).request,
    unstar:
      new MoctokitRequestMocker<"/gists/{gist_id}/star", "delete">(baseUrl, endpoints["gists"]["unstar"], allowUnmocked).request,
    update:
      new MoctokitRequestMocker<"/gists/{gist_id}", "patch">(baseUrl, endpoints["gists"]["update"], allowUnmocked).request,
    updateComment:
      new MoctokitRequestMocker<"/gists/{gist_id}/comments/{comment_id}", "patch">(baseUrl, endpoints["gists"]["updateComment"], allowUnmocked).request,
  },
  git: {
    createBlob:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/git/blobs", "post">(baseUrl, endpoints["git"]["createBlob"], allowUnmocked).request,
    createCommit:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/git/commits", "post">(baseUrl, endpoints["git"]["createCommit"], allowUnmocked).request,
    createRef:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/git/refs", "post">(baseUrl, endpoints["git"]["createRef"], allowUnmocked).request,
    createTag:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/git/tags", "post">(baseUrl, endpoints["git"]["createTag"], allowUnmocked).request,
    createTree:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/git/trees", "post">(baseUrl, endpoints["git"]["createTree"], allowUnmocked).request,
    deleteRef:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/git/refs/{ref}", "delete">(baseUrl, endpoints["git"]["deleteRef"], allowUnmocked).request,
    getBlob:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/git/blobs/{file_sha}", "get">(baseUrl, endpoints["git"]["getBlob"], allowUnmocked).request,
    getCommit:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/git/commits/{commit_sha}", "get">(baseUrl, endpoints["git"]["getCommit"], allowUnmocked).request,
    getRef:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/git/ref/{ref}", "get">(baseUrl, endpoints["git"]["getRef"], allowUnmocked).request,
    getTag:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/git/tags/{tag_sha}", "get">(baseUrl, endpoints["git"]["getTag"], allowUnmocked).request,
    getTree:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/git/trees/{tree_sha}", "get">(baseUrl, endpoints["git"]["getTree"], allowUnmocked).request,
    listMatchingRefs:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/git/matching-refs/{ref}", "get">(baseUrl, endpoints["git"]["listMatchingRefs"], allowUnmocked).request,
    updateRef:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/git/refs/{ref}", "patch">(baseUrl, endpoints["git"]["updateRef"], allowUnmocked).request,
  },
  gitignore: {
    getAllTemplates:
      new MoctokitRequestMocker<"/gitignore/templates", "get">(baseUrl, endpoints["gitignore"]["getAllTemplates"], allowUnmocked).request,
    getTemplate:
      new MoctokitRequestMocker<"/gitignore/templates/{name}", "get">(baseUrl, endpoints["gitignore"]["getTemplate"], allowUnmocked).request,
  },
  interactions: {
    getRestrictionsForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/interaction-limits", "get">(baseUrl, endpoints["interactions"]["getRestrictionsForAuthenticatedUser"], allowUnmocked).request,
    getRestrictionsForOrg:
      new MoctokitRequestMocker<"/orgs/{org}/interaction-limits", "get">(baseUrl, endpoints["interactions"]["getRestrictionsForOrg"], allowUnmocked).request,
    getRestrictionsForRepo:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/interaction-limits", "get">(baseUrl, endpoints["interactions"]["getRestrictionsForRepo"], allowUnmocked).request,
    getRestrictionsForYourPublicRepos:
      new MoctokitRequestMocker<"/user/interaction-limits", "get">(baseUrl, endpoints["interactions"]["getRestrictionsForYourPublicRepos"], allowUnmocked).request,
    removeRestrictionsForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/interaction-limits", "delete">(baseUrl, endpoints["interactions"]["removeRestrictionsForAuthenticatedUser"], allowUnmocked).request,
    removeRestrictionsForOrg:
      new MoctokitRequestMocker<"/orgs/{org}/interaction-limits", "delete">(baseUrl, endpoints["interactions"]["removeRestrictionsForOrg"], allowUnmocked).request,
    removeRestrictionsForRepo:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/interaction-limits", "delete">(baseUrl, endpoints["interactions"]["removeRestrictionsForRepo"], allowUnmocked).request,
    removeRestrictionsForYourPublicRepos:
      new MoctokitRequestMocker<"/user/interaction-limits", "delete">(baseUrl, endpoints["interactions"]["removeRestrictionsForYourPublicRepos"], allowUnmocked).request,
    setRestrictionsForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/interaction-limits", "put">(baseUrl, endpoints["interactions"]["setRestrictionsForAuthenticatedUser"], allowUnmocked).request,
    setRestrictionsForOrg:
      new MoctokitRequestMocker<"/orgs/{org}/interaction-limits", "put">(baseUrl, endpoints["interactions"]["setRestrictionsForOrg"], allowUnmocked).request,
    setRestrictionsForRepo:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/interaction-limits", "put">(baseUrl, endpoints["interactions"]["setRestrictionsForRepo"], allowUnmocked).request,
    setRestrictionsForYourPublicRepos:
      new MoctokitRequestMocker<"/user/interaction-limits", "put">(baseUrl, endpoints["interactions"]["setRestrictionsForYourPublicRepos"], allowUnmocked).request,
  },
  issues: {
    addAssignees:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/issues/{issue_number}/assignees", "post">(baseUrl, endpoints["issues"]["addAssignees"], allowUnmocked).request,
    addLabels:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/issues/{issue_number}/labels", "post">(baseUrl, endpoints["issues"]["addLabels"], allowUnmocked).request,
    checkUserCanBeAssigned:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/assignees/{assignee}", "get">(baseUrl, endpoints["issues"]["checkUserCanBeAssigned"], allowUnmocked).request,
    checkUserCanBeAssignedToIssue:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/issues/{issue_number}/assignees/{assignee}", "get">(baseUrl, endpoints["issues"]["checkUserCanBeAssignedToIssue"], allowUnmocked).request,
    create:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/issues", "post">(baseUrl, endpoints["issues"]["create"], allowUnmocked).request,
    createComment:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/issues/{issue_number}/comments", "post">(baseUrl, endpoints["issues"]["createComment"], allowUnmocked).request,
    createLabel:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/labels", "post">(baseUrl, endpoints["issues"]["createLabel"], allowUnmocked).request,
    createMilestone:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/milestones", "post">(baseUrl, endpoints["issues"]["createMilestone"], allowUnmocked).request,
    deleteComment:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/issues/comments/{comment_id}", "delete">(baseUrl, endpoints["issues"]["deleteComment"], allowUnmocked).request,
    deleteLabel:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/labels/{name}", "delete">(baseUrl, endpoints["issues"]["deleteLabel"], allowUnmocked).request,
    deleteMilestone:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/milestones/{milestone_number}", "delete">(baseUrl, endpoints["issues"]["deleteMilestone"], allowUnmocked).request,
    get: new MoctokitRequestMocker<"/repos/{owner}/{repo}/issues/{issue_number}", "get">(baseUrl, endpoints["issues"]["get"], allowUnmocked).request,
    getComment:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/issues/comments/{comment_id}", "get">(baseUrl, endpoints["issues"]["getComment"], allowUnmocked).request,
    getEvent:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/issues/events/{event_id}", "get">(baseUrl, endpoints["issues"]["getEvent"], allowUnmocked).request,
    getLabel:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/labels/{name}", "get">(baseUrl, endpoints["issues"]["getLabel"], allowUnmocked).request,
    getMilestone:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/milestones/{milestone_number}", "get">(baseUrl, endpoints["issues"]["getMilestone"], allowUnmocked).request,
    list: new MoctokitRequestMocker<"/issues", "get">(baseUrl, endpoints["issues"]["list"], allowUnmocked).request,
    listAssignees:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/assignees", "get">(baseUrl, endpoints["issues"]["listAssignees"], allowUnmocked).request,
    listComments:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/issues/{issue_number}/comments", "get">(baseUrl, endpoints["issues"]["listComments"], allowUnmocked).request,
    listCommentsForRepo:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/issues/comments", "get">(baseUrl, endpoints["issues"]["listCommentsForRepo"], allowUnmocked).request,
    listEvents:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/issues/{issue_number}/events", "get">(baseUrl, endpoints["issues"]["listEvents"], allowUnmocked).request,
    listEventsForRepo:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/issues/events", "get">(baseUrl, endpoints["issues"]["listEventsForRepo"], allowUnmocked).request,
    listEventsForTimeline:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/issues/{issue_number}/timeline", "get">(baseUrl, endpoints["issues"]["listEventsForTimeline"], allowUnmocked).request,
    listForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/issues", "get">(baseUrl, endpoints["issues"]["listForAuthenticatedUser"], allowUnmocked).request,
    listForOrg:
      new MoctokitRequestMocker<"/orgs/{org}/issues", "get">(baseUrl, endpoints["issues"]["listForOrg"], allowUnmocked).request,
    listForRepo:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/issues", "get">(baseUrl, endpoints["issues"]["listForRepo"], allowUnmocked).request,
    listLabelsForMilestone:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/milestones/{milestone_number}/labels", "get">(baseUrl, endpoints["issues"]["listLabelsForMilestone"], allowUnmocked).request,
    listLabelsForRepo:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/labels", "get">(baseUrl, endpoints["issues"]["listLabelsForRepo"], allowUnmocked).request,
    listLabelsOnIssue:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/issues/{issue_number}/labels", "get">(baseUrl, endpoints["issues"]["listLabelsOnIssue"], allowUnmocked).request,
    listMilestones:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/milestones", "get">(baseUrl, endpoints["issues"]["listMilestones"], allowUnmocked).request,
    lock: new MoctokitRequestMocker<"/repos/{owner}/{repo}/issues/{issue_number}/lock", "put">(baseUrl, endpoints["issues"]["lock"], allowUnmocked).request,
    removeAllLabels:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/issues/{issue_number}/labels", "delete">(baseUrl, endpoints["issues"]["removeAllLabels"], allowUnmocked).request,
    removeAssignees:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/issues/{issue_number}/assignees", "delete">(baseUrl, endpoints["issues"]["removeAssignees"], allowUnmocked).request,
    removeLabel:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/issues/{issue_number}/labels/{name}", "delete">(baseUrl, endpoints["issues"]["removeLabel"], allowUnmocked).request,
    setLabels:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/issues/{issue_number}/labels", "put">(baseUrl, endpoints["issues"]["setLabels"], allowUnmocked).request,
    unlock:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/issues/{issue_number}/lock", "delete">(baseUrl, endpoints["issues"]["unlock"], allowUnmocked).request,
    update:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/issues/{issue_number}", "patch">(baseUrl, endpoints["issues"]["update"], allowUnmocked).request,
    updateComment:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/issues/comments/{comment_id}", "patch">(baseUrl, endpoints["issues"]["updateComment"], allowUnmocked).request,
    updateLabel:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/labels/{name}", "patch">(baseUrl, endpoints["issues"]["updateLabel"], allowUnmocked).request,
    updateMilestone:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/milestones/{milestone_number}", "patch">(baseUrl, endpoints["issues"]["updateMilestone"], allowUnmocked).request,
  },
  licenses: {
    get: new MoctokitRequestMocker<"/licenses/{license}", "get">(baseUrl, endpoints["licenses"]["get"], allowUnmocked).request,
    getAllCommonlyUsed:
      new MoctokitRequestMocker<"/licenses", "get">(baseUrl, endpoints["licenses"]["getAllCommonlyUsed"], allowUnmocked).request,
    getForRepo:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/license", "get">(baseUrl, endpoints["licenses"]["getForRepo"], allowUnmocked).request,
  },
  markdown: {
    render:
      new MoctokitRequestMocker<"/markdown", "post">(baseUrl, endpoints["markdown"]["render"], allowUnmocked).request,
    renderRaw:
      new MoctokitRequestMocker<"/markdown/raw", "post">(baseUrl, endpoints["markdown"]["renderRaw"], allowUnmocked).request,
  },
  meta: {
    get: new MoctokitRequestMocker<"/meta", "get">(baseUrl, endpoints["meta"]["get"], allowUnmocked).request,
    getAllVersions:
      new MoctokitRequestMocker<"/versions", "get">(baseUrl, endpoints["meta"]["getAllVersions"], allowUnmocked).request,
    getOctocat:
      new MoctokitRequestMocker<"/octocat", "get">(baseUrl, endpoints["meta"]["getOctocat"], allowUnmocked).request,
    getZen:
      new MoctokitRequestMocker<"/zen", "get">(baseUrl, endpoints["meta"]["getZen"], allowUnmocked).request,
    root: new MoctokitRequestMocker<"/", "get">(baseUrl, endpoints["meta"]["root"], allowUnmocked).request,
  },
  migrations: {
    cancelImport:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/import", "delete">(baseUrl, endpoints["migrations"]["cancelImport"], allowUnmocked).request,
    deleteArchiveForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/migrations/{migration_id}/archive", "delete">(baseUrl, endpoints["migrations"]["deleteArchiveForAuthenticatedUser"], allowUnmocked).request,
    deleteArchiveForOrg:
      new MoctokitRequestMocker<"/orgs/{org}/migrations/{migration_id}/archive", "delete">(baseUrl, endpoints["migrations"]["deleteArchiveForOrg"], allowUnmocked).request,
    downloadArchiveForOrg:
      new MoctokitRequestMocker<"/orgs/{org}/migrations/{migration_id}/archive", "get">(baseUrl, endpoints["migrations"]["downloadArchiveForOrg"], allowUnmocked).request,
    getArchiveForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/migrations/{migration_id}/archive", "get">(baseUrl, endpoints["migrations"]["getArchiveForAuthenticatedUser"], allowUnmocked).request,
    getCommitAuthors:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/import/authors", "get">(baseUrl, endpoints["migrations"]["getCommitAuthors"], allowUnmocked).request,
    getImportStatus:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/import", "get">(baseUrl, endpoints["migrations"]["getImportStatus"], allowUnmocked).request,
    getLargeFiles:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/import/large_files", "get">(baseUrl, endpoints["migrations"]["getLargeFiles"], allowUnmocked).request,
    getStatusForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/migrations/{migration_id}", "get">(baseUrl, endpoints["migrations"]["getStatusForAuthenticatedUser"], allowUnmocked).request,
    getStatusForOrg:
      new MoctokitRequestMocker<"/orgs/{org}/migrations/{migration_id}", "get">(baseUrl, endpoints["migrations"]["getStatusForOrg"], allowUnmocked).request,
    listForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/migrations", "get">(baseUrl, endpoints["migrations"]["listForAuthenticatedUser"], allowUnmocked).request,
    listForOrg:
      new MoctokitRequestMocker<"/orgs/{org}/migrations", "get">(baseUrl, endpoints["migrations"]["listForOrg"], allowUnmocked).request,
    listReposForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/migrations/{migration_id}/repositories", "get">(baseUrl, endpoints["migrations"]["listReposForAuthenticatedUser"], allowUnmocked).request,
    listReposForOrg:
      new MoctokitRequestMocker<"/orgs/{org}/migrations/{migration_id}/repositories", "get">(baseUrl, endpoints["migrations"]["listReposForOrg"], allowUnmocked).request,
    listReposForUser:
      new MoctokitRequestMocker<"/user/migrations/{migration_id}/repositories", "get">(baseUrl, endpoints["migrations"]["listReposForUser"], allowUnmocked).request,
    mapCommitAuthor:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/import/authors/{author_id}", "patch">(baseUrl, endpoints["migrations"]["mapCommitAuthor"], allowUnmocked).request,
    setLfsPreference:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/import/lfs", "patch">(baseUrl, endpoints["migrations"]["setLfsPreference"], allowUnmocked).request,
    startForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/migrations", "post">(baseUrl, endpoints["migrations"]["startForAuthenticatedUser"], allowUnmocked).request,
    startForOrg:
      new MoctokitRequestMocker<"/orgs/{org}/migrations", "post">(baseUrl, endpoints["migrations"]["startForOrg"], allowUnmocked).request,
    startImport:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/import", "put">(baseUrl, endpoints["migrations"]["startImport"], allowUnmocked).request,
    unlockRepoForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/migrations/{migration_id}/repos/{repo_name}/lock", "delete">(baseUrl, endpoints["migrations"]["unlockRepoForAuthenticatedUser"], allowUnmocked).request,
    unlockRepoForOrg:
      new MoctokitRequestMocker<"/orgs/{org}/migrations/{migration_id}/repos/{repo_name}/lock", "delete">(baseUrl, endpoints["migrations"]["unlockRepoForOrg"], allowUnmocked).request,
    updateImport:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/import", "patch">(baseUrl, endpoints["migrations"]["updateImport"], allowUnmocked).request,
  },
  orgs: {
    addSecurityManagerTeam:
      new MoctokitRequestMocker<"/orgs/{org}/security-managers/teams/{team_slug}", "put">(baseUrl, endpoints["orgs"]["addSecurityManagerTeam"], allowUnmocked).request,
    blockUser:
      new MoctokitRequestMocker<"/orgs/{org}/blocks/{username}", "put">(baseUrl, endpoints["orgs"]["blockUser"], allowUnmocked).request,
    cancelInvitation:
      new MoctokitRequestMocker<"/orgs/{org}/invitations/{invitation_id}", "delete">(baseUrl, endpoints["orgs"]["cancelInvitation"], allowUnmocked).request,
    checkBlockedUser:
      new MoctokitRequestMocker<"/orgs/{org}/blocks/{username}", "get">(baseUrl, endpoints["orgs"]["checkBlockedUser"], allowUnmocked).request,
    checkMembershipForUser:
      new MoctokitRequestMocker<"/orgs/{org}/members/{username}", "get">(baseUrl, endpoints["orgs"]["checkMembershipForUser"], allowUnmocked).request,
    checkPublicMembershipForUser:
      new MoctokitRequestMocker<"/orgs/{org}/public_members/{username}", "get">(baseUrl, endpoints["orgs"]["checkPublicMembershipForUser"], allowUnmocked).request,
    convertMemberToOutsideCollaborator:
      new MoctokitRequestMocker<"/orgs/{org}/outside_collaborators/{username}", "put">(baseUrl, endpoints["orgs"]["convertMemberToOutsideCollaborator"], allowUnmocked).request,
    createInvitation:
      new MoctokitRequestMocker<"/orgs/{org}/invitations", "post">(baseUrl, endpoints["orgs"]["createInvitation"], allowUnmocked).request,
    createWebhook:
      new MoctokitRequestMocker<"/orgs/{org}/hooks", "post">(baseUrl, endpoints["orgs"]["createWebhook"], allowUnmocked).request,
    delete:
      new MoctokitRequestMocker<"/orgs/{org}", "delete">(baseUrl, endpoints["orgs"]["delete"], allowUnmocked).request,
    deleteWebhook:
      new MoctokitRequestMocker<"/orgs/{org}/hooks/{hook_id}", "delete">(baseUrl, endpoints["orgs"]["deleteWebhook"], allowUnmocked).request,
    enableOrDisableSecurityProductOnAllOrgRepos:
      new MoctokitRequestMocker<"/orgs/{org}/{security_product}/{enablement}", "post">(baseUrl, endpoints["orgs"]["enableOrDisableSecurityProductOnAllOrgRepos"], allowUnmocked).request,
    get: new MoctokitRequestMocker<"/orgs/{org}", "get">(baseUrl, endpoints["orgs"]["get"], allowUnmocked).request,
    getMembershipForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/memberships/orgs/{org}", "get">(baseUrl, endpoints["orgs"]["getMembershipForAuthenticatedUser"], allowUnmocked).request,
    getMembershipForUser:
      new MoctokitRequestMocker<"/orgs/{org}/memberships/{username}", "get">(baseUrl, endpoints["orgs"]["getMembershipForUser"], allowUnmocked).request,
    getWebhook:
      new MoctokitRequestMocker<"/orgs/{org}/hooks/{hook_id}", "get">(baseUrl, endpoints["orgs"]["getWebhook"], allowUnmocked).request,
    getWebhookConfigForOrg:
      new MoctokitRequestMocker<"/orgs/{org}/hooks/{hook_id}/config", "get">(baseUrl, endpoints["orgs"]["getWebhookConfigForOrg"], allowUnmocked).request,
    getWebhookDelivery:
      new MoctokitRequestMocker<"/orgs/{org}/hooks/{hook_id}/deliveries/{delivery_id}", "get">(baseUrl, endpoints["orgs"]["getWebhookDelivery"], allowUnmocked).request,
    list: new MoctokitRequestMocker<"/organizations", "get">(baseUrl, endpoints["orgs"]["list"], allowUnmocked).request,
    listAppInstallations:
      new MoctokitRequestMocker<"/orgs/{org}/installations", "get">(baseUrl, endpoints["orgs"]["listAppInstallations"], allowUnmocked).request,
    listBlockedUsers:
      new MoctokitRequestMocker<"/orgs/{org}/blocks", "get">(baseUrl, endpoints["orgs"]["listBlockedUsers"], allowUnmocked).request,
    listFailedInvitations:
      new MoctokitRequestMocker<"/orgs/{org}/failed_invitations", "get">(baseUrl, endpoints["orgs"]["listFailedInvitations"], allowUnmocked).request,
    listForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/orgs", "get">(baseUrl, endpoints["orgs"]["listForAuthenticatedUser"], allowUnmocked).request,
    listForUser:
      new MoctokitRequestMocker<"/users/{username}/orgs", "get">(baseUrl, endpoints["orgs"]["listForUser"], allowUnmocked).request,
    listInvitationTeams:
      new MoctokitRequestMocker<"/orgs/{org}/invitations/{invitation_id}/teams", "get">(baseUrl, endpoints["orgs"]["listInvitationTeams"], allowUnmocked).request,
    listMembers:
      new MoctokitRequestMocker<"/orgs/{org}/members", "get">(baseUrl, endpoints["orgs"]["listMembers"], allowUnmocked).request,
    listMembershipsForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/memberships/orgs", "get">(baseUrl, endpoints["orgs"]["listMembershipsForAuthenticatedUser"], allowUnmocked).request,
    listOutsideCollaborators:
      new MoctokitRequestMocker<"/orgs/{org}/outside_collaborators", "get">(baseUrl, endpoints["orgs"]["listOutsideCollaborators"], allowUnmocked).request,
    listPatGrantRepositories:
      new MoctokitRequestMocker<"/organizations/{org}/personal-access-tokens/{pat_id}/repositories", "get">(baseUrl, endpoints["orgs"]["listPatGrantRepositories"], allowUnmocked).request,
    listPatGrantRequestRepositories:
      new MoctokitRequestMocker<"/organizations/{org}/personal-access-token-requests/{pat_request_id}/repositories", "get">(baseUrl, endpoints["orgs"]["listPatGrantRequestRepositories"], allowUnmocked).request,
    listPatGrantRequests:
      new MoctokitRequestMocker<"/organizations/{org}/personal-access-token-requests", "get">(baseUrl, endpoints["orgs"]["listPatGrantRequests"], allowUnmocked).request,
    listPatGrants:
      new MoctokitRequestMocker<"/organizations/{org}/personal-access-tokens", "get">(baseUrl, endpoints["orgs"]["listPatGrants"], allowUnmocked).request,
    listPendingInvitations:
      new MoctokitRequestMocker<"/orgs/{org}/invitations", "get">(baseUrl, endpoints["orgs"]["listPendingInvitations"], allowUnmocked).request,
    listPublicMembers:
      new MoctokitRequestMocker<"/orgs/{org}/public_members", "get">(baseUrl, endpoints["orgs"]["listPublicMembers"], allowUnmocked).request,
    listSecurityManagerTeams:
      new MoctokitRequestMocker<"/orgs/{org}/security-managers", "get">(baseUrl, endpoints["orgs"]["listSecurityManagerTeams"], allowUnmocked).request,
    listWebhookDeliveries:
      new MoctokitRequestMocker<"/orgs/{org}/hooks/{hook_id}/deliveries", "get">(baseUrl, endpoints["orgs"]["listWebhookDeliveries"], allowUnmocked).request,
    listWebhooks:
      new MoctokitRequestMocker<"/orgs/{org}/hooks", "get">(baseUrl, endpoints["orgs"]["listWebhooks"], allowUnmocked).request,
    pingWebhook:
      new MoctokitRequestMocker<"/orgs/{org}/hooks/{hook_id}/pings", "post">(baseUrl, endpoints["orgs"]["pingWebhook"], allowUnmocked).request,
    redeliverWebhookDelivery:
      new MoctokitRequestMocker<"/orgs/{org}/hooks/{hook_id}/deliveries/{delivery_id}/attempts", "post">(baseUrl, endpoints["orgs"]["redeliverWebhookDelivery"], allowUnmocked).request,
    removeMember:
      new MoctokitRequestMocker<"/orgs/{org}/members/{username}", "delete">(baseUrl, endpoints["orgs"]["removeMember"], allowUnmocked).request,
    removeMembershipForUser:
      new MoctokitRequestMocker<"/orgs/{org}/memberships/{username}", "delete">(baseUrl, endpoints["orgs"]["removeMembershipForUser"], allowUnmocked).request,
    removeOutsideCollaborator:
      new MoctokitRequestMocker<"/orgs/{org}/outside_collaborators/{username}", "delete">(baseUrl, endpoints["orgs"]["removeOutsideCollaborator"], allowUnmocked).request,
    removePublicMembershipForAuthenticatedUser:
      new MoctokitRequestMocker<"/orgs/{org}/public_members/{username}", "delete">(baseUrl, endpoints["orgs"]["removePublicMembershipForAuthenticatedUser"], allowUnmocked).request,
    removeSecurityManagerTeam:
      new MoctokitRequestMocker<"/orgs/{org}/security-managers/teams/{team_slug}", "delete">(baseUrl, endpoints["orgs"]["removeSecurityManagerTeam"], allowUnmocked).request,
    reviewPatGrantRequest:
      new MoctokitRequestMocker<"/organizations/{org}/personal-access-token-requests/{pat_request_id}", "post">(baseUrl, endpoints["orgs"]["reviewPatGrantRequest"], allowUnmocked).request,
    reviewPatGrantRequestsInBulk:
      new MoctokitRequestMocker<"/organizations/{org}/personal-access-token-requests", "post">(baseUrl, endpoints["orgs"]["reviewPatGrantRequestsInBulk"], allowUnmocked).request,
    setMembershipForUser:
      new MoctokitRequestMocker<"/orgs/{org}/memberships/{username}", "put">(baseUrl, endpoints["orgs"]["setMembershipForUser"], allowUnmocked).request,
    setPublicMembershipForAuthenticatedUser:
      new MoctokitRequestMocker<"/orgs/{org}/public_members/{username}", "put">(baseUrl, endpoints["orgs"]["setPublicMembershipForAuthenticatedUser"], allowUnmocked).request,
    unblockUser:
      new MoctokitRequestMocker<"/orgs/{org}/blocks/{username}", "delete">(baseUrl, endpoints["orgs"]["unblockUser"], allowUnmocked).request,
    update:
      new MoctokitRequestMocker<"/orgs/{org}", "patch">(baseUrl, endpoints["orgs"]["update"], allowUnmocked).request,
    updateMembershipForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/memberships/orgs/{org}", "patch">(baseUrl, endpoints["orgs"]["updateMembershipForAuthenticatedUser"], allowUnmocked).request,
    updatePatAccess:
      new MoctokitRequestMocker<"/organizations/{org}/personal-access-tokens/{pat_id}", "post">(baseUrl, endpoints["orgs"]["updatePatAccess"], allowUnmocked).request,
    updatePatAccesses:
      new MoctokitRequestMocker<"/organizations/{org}/personal-access-tokens", "post">(baseUrl, endpoints["orgs"]["updatePatAccesses"], allowUnmocked).request,
    updateWebhook:
      new MoctokitRequestMocker<"/orgs/{org}/hooks/{hook_id}", "patch">(baseUrl, endpoints["orgs"]["updateWebhook"], allowUnmocked).request,
    updateWebhookConfigForOrg:
      new MoctokitRequestMocker<"/orgs/{org}/hooks/{hook_id}/config", "patch">(baseUrl, endpoints["orgs"]["updateWebhookConfigForOrg"], allowUnmocked).request,
  },
  packages: {
    deletePackageForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/packages/{package_type}/{package_name}", "delete">(baseUrl, endpoints["packages"]["deletePackageForAuthenticatedUser"], allowUnmocked).request,
    deletePackageForOrg:
      new MoctokitRequestMocker<"/orgs/{org}/packages/{package_type}/{package_name}", "delete">(baseUrl, endpoints["packages"]["deletePackageForOrg"], allowUnmocked).request,
    deletePackageForUser:
      new MoctokitRequestMocker<"/users/{username}/packages/{package_type}/{package_name}", "delete">(baseUrl, endpoints["packages"]["deletePackageForUser"], allowUnmocked).request,
    deletePackageVersionForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/packages/{package_type}/{package_name}/versions/{package_version_id}", "delete">(baseUrl, endpoints["packages"]["deletePackageVersionForAuthenticatedUser"], allowUnmocked).request,
    deletePackageVersionForOrg:
      new MoctokitRequestMocker<"/orgs/{org}/packages/{package_type}/{package_name}/versions/{package_version_id}", "delete">(baseUrl, endpoints["packages"]["deletePackageVersionForOrg"], allowUnmocked).request,
    deletePackageVersionForUser:
      new MoctokitRequestMocker<"/users/{username}/packages/{package_type}/{package_name}/versions/{package_version_id}", "delete">(baseUrl, endpoints["packages"]["deletePackageVersionForUser"], allowUnmocked).request,
    getAllPackageVersionsForAPackageOwnedByAnOrg:
      new MoctokitRequestMocker<"/orgs/{org}/packages/{package_type}/{package_name}/versions", "get">(baseUrl, endpoints["packages"]["getAllPackageVersionsForAPackageOwnedByAnOrg"], allowUnmocked).request,
    getAllPackageVersionsForAPackageOwnedByTheAuthenticatedUser:
      new MoctokitRequestMocker<"/user/packages/{package_type}/{package_name}/versions", "get">(baseUrl, endpoints["packages"]["getAllPackageVersionsForAPackageOwnedByTheAuthenticatedUser"], allowUnmocked).request,
    getAllPackageVersionsForPackageOwnedByAuthenticatedUser:
      new MoctokitRequestMocker<"/user/packages/{package_type}/{package_name}/versions", "get">(baseUrl, endpoints["packages"]["getAllPackageVersionsForPackageOwnedByAuthenticatedUser"], allowUnmocked).request,
    getAllPackageVersionsForPackageOwnedByOrg:
      new MoctokitRequestMocker<"/orgs/{org}/packages/{package_type}/{package_name}/versions", "get">(baseUrl, endpoints["packages"]["getAllPackageVersionsForPackageOwnedByOrg"], allowUnmocked).request,
    getAllPackageVersionsForPackageOwnedByUser:
      new MoctokitRequestMocker<"/users/{username}/packages/{package_type}/{package_name}/versions", "get">(baseUrl, endpoints["packages"]["getAllPackageVersionsForPackageOwnedByUser"], allowUnmocked).request,
    getPackageForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/packages/{package_type}/{package_name}", "get">(baseUrl, endpoints["packages"]["getPackageForAuthenticatedUser"], allowUnmocked).request,
    getPackageForOrganization:
      new MoctokitRequestMocker<"/orgs/{org}/packages/{package_type}/{package_name}", "get">(baseUrl, endpoints["packages"]["getPackageForOrganization"], allowUnmocked).request,
    getPackageForUser:
      new MoctokitRequestMocker<"/users/{username}/packages/{package_type}/{package_name}", "get">(baseUrl, endpoints["packages"]["getPackageForUser"], allowUnmocked).request,
    getPackageVersionForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/packages/{package_type}/{package_name}/versions/{package_version_id}", "get">(baseUrl, endpoints["packages"]["getPackageVersionForAuthenticatedUser"], allowUnmocked).request,
    getPackageVersionForOrganization:
      new MoctokitRequestMocker<"/orgs/{org}/packages/{package_type}/{package_name}/versions/{package_version_id}", "get">(baseUrl, endpoints["packages"]["getPackageVersionForOrganization"], allowUnmocked).request,
    getPackageVersionForUser:
      new MoctokitRequestMocker<"/users/{username}/packages/{package_type}/{package_name}/versions/{package_version_id}", "get">(baseUrl, endpoints["packages"]["getPackageVersionForUser"], allowUnmocked).request,
    listDockerMigrationConflictingPackagesForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/docker/conflicts", "get">(baseUrl, endpoints["packages"]["listDockerMigrationConflictingPackagesForAuthenticatedUser"], allowUnmocked).request,
    listDockerMigrationConflictingPackagesForOrganization:
      new MoctokitRequestMocker<"/orgs/{org}/docker/conflicts", "get">(baseUrl, endpoints["packages"]["listDockerMigrationConflictingPackagesForOrganization"], allowUnmocked).request,
    listDockerMigrationConflictingPackagesForUser:
      new MoctokitRequestMocker<"/users/{username}/docker/conflicts", "get">(baseUrl, endpoints["packages"]["listDockerMigrationConflictingPackagesForUser"], allowUnmocked).request,
    listPackagesForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/packages", "get">(baseUrl, endpoints["packages"]["listPackagesForAuthenticatedUser"], allowUnmocked).request,
    listPackagesForOrganization:
      new MoctokitRequestMocker<"/orgs/{org}/packages", "get">(baseUrl, endpoints["packages"]["listPackagesForOrganization"], allowUnmocked).request,
    listPackagesForUser:
      new MoctokitRequestMocker<"/users/{username}/packages", "get">(baseUrl, endpoints["packages"]["listPackagesForUser"], allowUnmocked).request,
    restorePackageForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/packages/{package_type}/{package_name}/restore", "post">(baseUrl, endpoints["packages"]["restorePackageForAuthenticatedUser"], allowUnmocked).request,
    restorePackageForOrg:
      new MoctokitRequestMocker<"/orgs/{org}/packages/{package_type}/{package_name}/restore", "post">(baseUrl, endpoints["packages"]["restorePackageForOrg"], allowUnmocked).request,
    restorePackageForUser:
      new MoctokitRequestMocker<"/users/{username}/packages/{package_type}/{package_name}/restore", "post">(baseUrl, endpoints["packages"]["restorePackageForUser"], allowUnmocked).request,
    restorePackageVersionForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/packages/{package_type}/{package_name}/versions/{package_version_id}/restore", "post">(baseUrl, endpoints["packages"]["restorePackageVersionForAuthenticatedUser"], allowUnmocked).request,
    restorePackageVersionForOrg:
      new MoctokitRequestMocker<"/orgs/{org}/packages/{package_type}/{package_name}/versions/{package_version_id}/restore", "post">(baseUrl, endpoints["packages"]["restorePackageVersionForOrg"], allowUnmocked).request,
    restorePackageVersionForUser:
      new MoctokitRequestMocker<"/users/{username}/packages/{package_type}/{package_name}/versions/{package_version_id}/restore", "post">(baseUrl, endpoints["packages"]["restorePackageVersionForUser"], allowUnmocked).request,
  },
  projects: {
    addCollaborator:
      new MoctokitRequestMocker<"/projects/{project_id}/collaborators/{username}", "put">(baseUrl, endpoints["projects"]["addCollaborator"], allowUnmocked).request,
    createCard:
      new MoctokitRequestMocker<"/projects/columns/{column_id}/cards", "post">(baseUrl, endpoints["projects"]["createCard"], allowUnmocked).request,
    createColumn:
      new MoctokitRequestMocker<"/projects/{project_id}/columns", "post">(baseUrl, endpoints["projects"]["createColumn"], allowUnmocked).request,
    createForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/projects", "post">(baseUrl, endpoints["projects"]["createForAuthenticatedUser"], allowUnmocked).request,
    createForOrg:
      new MoctokitRequestMocker<"/orgs/{org}/projects", "post">(baseUrl, endpoints["projects"]["createForOrg"], allowUnmocked).request,
    createForRepo:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/projects", "post">(baseUrl, endpoints["projects"]["createForRepo"], allowUnmocked).request,
    delete:
      new MoctokitRequestMocker<"/projects/{project_id}", "delete">(baseUrl, endpoints["projects"]["delete"], allowUnmocked).request,
    deleteCard:
      new MoctokitRequestMocker<"/projects/columns/cards/{card_id}", "delete">(baseUrl, endpoints["projects"]["deleteCard"], allowUnmocked).request,
    deleteColumn:
      new MoctokitRequestMocker<"/projects/columns/{column_id}", "delete">(baseUrl, endpoints["projects"]["deleteColumn"], allowUnmocked).request,
    get: new MoctokitRequestMocker<"/projects/{project_id}", "get">(baseUrl, endpoints["projects"]["get"], allowUnmocked).request,
    getCard:
      new MoctokitRequestMocker<"/projects/columns/cards/{card_id}", "get">(baseUrl, endpoints["projects"]["getCard"], allowUnmocked).request,
    getColumn:
      new MoctokitRequestMocker<"/projects/columns/{column_id}", "get">(baseUrl, endpoints["projects"]["getColumn"], allowUnmocked).request,
    getPermissionForUser:
      new MoctokitRequestMocker<"/projects/{project_id}/collaborators/{username}/permission", "get">(baseUrl, endpoints["projects"]["getPermissionForUser"], allowUnmocked).request,
    listCards:
      new MoctokitRequestMocker<"/projects/columns/{column_id}/cards", "get">(baseUrl, endpoints["projects"]["listCards"], allowUnmocked).request,
    listCollaborators:
      new MoctokitRequestMocker<"/projects/{project_id}/collaborators", "get">(baseUrl, endpoints["projects"]["listCollaborators"], allowUnmocked).request,
    listColumns:
      new MoctokitRequestMocker<"/projects/{project_id}/columns", "get">(baseUrl, endpoints["projects"]["listColumns"], allowUnmocked).request,
    listForOrg:
      new MoctokitRequestMocker<"/orgs/{org}/projects", "get">(baseUrl, endpoints["projects"]["listForOrg"], allowUnmocked).request,
    listForRepo:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/projects", "get">(baseUrl, endpoints["projects"]["listForRepo"], allowUnmocked).request,
    listForUser:
      new MoctokitRequestMocker<"/users/{username}/projects", "get">(baseUrl, endpoints["projects"]["listForUser"], allowUnmocked).request,
    moveCard:
      new MoctokitRequestMocker<"/projects/columns/cards/{card_id}/moves", "post">(baseUrl, endpoints["projects"]["moveCard"], allowUnmocked).request,
    moveColumn:
      new MoctokitRequestMocker<"/projects/columns/{column_id}/moves", "post">(baseUrl, endpoints["projects"]["moveColumn"], allowUnmocked).request,
    removeCollaborator:
      new MoctokitRequestMocker<"/projects/{project_id}/collaborators/{username}", "delete">(baseUrl, endpoints["projects"]["removeCollaborator"], allowUnmocked).request,
    update:
      new MoctokitRequestMocker<"/projects/{project_id}", "patch">(baseUrl, endpoints["projects"]["update"], allowUnmocked).request,
    updateCard:
      new MoctokitRequestMocker<"/projects/columns/cards/{card_id}", "patch">(baseUrl, endpoints["projects"]["updateCard"], allowUnmocked).request,
    updateColumn:
      new MoctokitRequestMocker<"/projects/columns/{column_id}", "patch">(baseUrl, endpoints["projects"]["updateColumn"], allowUnmocked).request,
  },
  pulls: {
    checkIfMerged:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/pulls/{pull_number}/merge", "get">(baseUrl, endpoints["pulls"]["checkIfMerged"], allowUnmocked).request,
    create:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/pulls", "post">(baseUrl, endpoints["pulls"]["create"], allowUnmocked).request,
    createReplyForReviewComment:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/pulls/{pull_number}/comments/{comment_id}/replies", "post">(baseUrl, endpoints["pulls"]["createReplyForReviewComment"], allowUnmocked).request,
    createReview:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/pulls/{pull_number}/reviews", "post">(baseUrl, endpoints["pulls"]["createReview"], allowUnmocked).request,
    createReviewComment:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/pulls/{pull_number}/comments", "post">(baseUrl, endpoints["pulls"]["createReviewComment"], allowUnmocked).request,
    deletePendingReview:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}", "delete">(baseUrl, endpoints["pulls"]["deletePendingReview"], allowUnmocked).request,
    deleteReviewComment:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/pulls/comments/{comment_id}", "delete">(baseUrl, endpoints["pulls"]["deleteReviewComment"], allowUnmocked).request,
    dismissReview:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/dismissals", "put">(baseUrl, endpoints["pulls"]["dismissReview"], allowUnmocked).request,
    get: new MoctokitRequestMocker<"/repos/{owner}/{repo}/pulls/{pull_number}", "get">(baseUrl, endpoints["pulls"]["get"], allowUnmocked).request,
    getReview:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}", "get">(baseUrl, endpoints["pulls"]["getReview"], allowUnmocked).request,
    getReviewComment:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/pulls/comments/{comment_id}", "get">(baseUrl, endpoints["pulls"]["getReviewComment"], allowUnmocked).request,
    list: new MoctokitRequestMocker<"/repos/{owner}/{repo}/pulls", "get">(baseUrl, endpoints["pulls"]["list"], allowUnmocked).request,
    listCommentsForReview:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/comments", "get">(baseUrl, endpoints["pulls"]["listCommentsForReview"], allowUnmocked).request,
    listCommits:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/pulls/{pull_number}/commits", "get">(baseUrl, endpoints["pulls"]["listCommits"], allowUnmocked).request,
    listFiles:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/pulls/{pull_number}/files", "get">(baseUrl, endpoints["pulls"]["listFiles"], allowUnmocked).request,
    listRequestedReviewers:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers", "get">(baseUrl, endpoints["pulls"]["listRequestedReviewers"], allowUnmocked).request,
    listReviewComments:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/pulls/{pull_number}/comments", "get">(baseUrl, endpoints["pulls"]["listReviewComments"], allowUnmocked).request,
    listReviewCommentsForRepo:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/pulls/comments", "get">(baseUrl, endpoints["pulls"]["listReviewCommentsForRepo"], allowUnmocked).request,
    listReviews:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/pulls/{pull_number}/reviews", "get">(baseUrl, endpoints["pulls"]["listReviews"], allowUnmocked).request,
    merge:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/pulls/{pull_number}/merge", "put">(baseUrl, endpoints["pulls"]["merge"], allowUnmocked).request,
    removeRequestedReviewers:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers", "delete">(baseUrl, endpoints["pulls"]["removeRequestedReviewers"], allowUnmocked).request,
    requestReviewers:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers", "post">(baseUrl, endpoints["pulls"]["requestReviewers"], allowUnmocked).request,
    submitReview:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/events", "post">(baseUrl, endpoints["pulls"]["submitReview"], allowUnmocked).request,
    update:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/pulls/{pull_number}", "patch">(baseUrl, endpoints["pulls"]["update"], allowUnmocked).request,
    updateBranch:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/pulls/{pull_number}/update-branch", "put">(baseUrl, endpoints["pulls"]["updateBranch"], allowUnmocked).request,
    updateReview:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}", "put">(baseUrl, endpoints["pulls"]["updateReview"], allowUnmocked).request,
    updateReviewComment:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/pulls/comments/{comment_id}", "patch">(baseUrl, endpoints["pulls"]["updateReviewComment"], allowUnmocked).request,
  },
  rateLimit: {
    get: new MoctokitRequestMocker<"/rate_limit", "get">(baseUrl, endpoints["rateLimit"]["get"], allowUnmocked).request,
  },
  reactions: {
    createForCommitComment:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/comments/{comment_id}/reactions", "post">(baseUrl, endpoints["reactions"]["createForCommitComment"], allowUnmocked).request,
    createForIssue:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/issues/{issue_number}/reactions", "post">(baseUrl, endpoints["reactions"]["createForIssue"], allowUnmocked).request,
    createForIssueComment:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/issues/comments/{comment_id}/reactions", "post">(baseUrl, endpoints["reactions"]["createForIssueComment"], allowUnmocked).request,
    createForPullRequestReviewComment:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions", "post">(baseUrl, endpoints["reactions"]["createForPullRequestReviewComment"], allowUnmocked).request,
    createForRelease:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/releases/{release_id}/reactions", "post">(baseUrl, endpoints["reactions"]["createForRelease"], allowUnmocked).request,
    createForTeamDiscussionCommentInOrg:
      new MoctokitRequestMocker<"/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions", "post">(baseUrl, endpoints["reactions"]["createForTeamDiscussionCommentInOrg"], allowUnmocked).request,
    createForTeamDiscussionInOrg:
      new MoctokitRequestMocker<"/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions", "post">(baseUrl, endpoints["reactions"]["createForTeamDiscussionInOrg"], allowUnmocked).request,
    deleteForCommitComment:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/comments/{comment_id}/reactions/{reaction_id}", "delete">(baseUrl, endpoints["reactions"]["deleteForCommitComment"], allowUnmocked).request,
    deleteForIssue:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/issues/{issue_number}/reactions/{reaction_id}", "delete">(baseUrl, endpoints["reactions"]["deleteForIssue"], allowUnmocked).request,
    deleteForIssueComment:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/issues/comments/{comment_id}/reactions/{reaction_id}", "delete">(baseUrl, endpoints["reactions"]["deleteForIssueComment"], allowUnmocked).request,
    deleteForPullRequestComment:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions/{reaction_id}", "delete">(baseUrl, endpoints["reactions"]["deleteForPullRequestComment"], allowUnmocked).request,
    deleteForRelease:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/releases/{release_id}/reactions/{reaction_id}", "delete">(baseUrl, endpoints["reactions"]["deleteForRelease"], allowUnmocked).request,
    deleteForTeamDiscussion:
      new MoctokitRequestMocker<"/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions/{reaction_id}", "delete">(baseUrl, endpoints["reactions"]["deleteForTeamDiscussion"], allowUnmocked).request,
    deleteForTeamDiscussionComment:
      new MoctokitRequestMocker<"/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions/{reaction_id}", "delete">(baseUrl, endpoints["reactions"]["deleteForTeamDiscussionComment"], allowUnmocked).request,
    listForCommitComment:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/comments/{comment_id}/reactions", "get">(baseUrl, endpoints["reactions"]["listForCommitComment"], allowUnmocked).request,
    listForIssue:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/issues/{issue_number}/reactions", "get">(baseUrl, endpoints["reactions"]["listForIssue"], allowUnmocked).request,
    listForIssueComment:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/issues/comments/{comment_id}/reactions", "get">(baseUrl, endpoints["reactions"]["listForIssueComment"], allowUnmocked).request,
    listForPullRequestReviewComment:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions", "get">(baseUrl, endpoints["reactions"]["listForPullRequestReviewComment"], allowUnmocked).request,
    listForRelease:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/releases/{release_id}/reactions", "get">(baseUrl, endpoints["reactions"]["listForRelease"], allowUnmocked).request,
    listForTeamDiscussionCommentInOrg:
      new MoctokitRequestMocker<"/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions", "get">(baseUrl, endpoints["reactions"]["listForTeamDiscussionCommentInOrg"], allowUnmocked).request,
    listForTeamDiscussionInOrg:
      new MoctokitRequestMocker<"/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions", "get">(baseUrl, endpoints["reactions"]["listForTeamDiscussionInOrg"], allowUnmocked).request,
  },
  repos: {
    acceptInvitation:
      new MoctokitRequestMocker<"/user/repository_invitations/{invitation_id}", "patch">(baseUrl, endpoints["repos"]["acceptInvitation"], allowUnmocked).request,
    acceptInvitationForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/repository_invitations/{invitation_id}", "patch">(baseUrl, endpoints["repos"]["acceptInvitationForAuthenticatedUser"], allowUnmocked).request,
    addAppAccessRestrictions:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps", "post">(baseUrl, endpoints["repos"]["addAppAccessRestrictions"], allowUnmocked).request,
    addCollaborator:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/collaborators/{username}", "put">(baseUrl, endpoints["repos"]["addCollaborator"], allowUnmocked).request,
    addStatusCheckContexts:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts", "post">(baseUrl, endpoints["repos"]["addStatusCheckContexts"], allowUnmocked).request,
    addTeamAccessRestrictions:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams", "post">(baseUrl, endpoints["repos"]["addTeamAccessRestrictions"], allowUnmocked).request,
    addUserAccessRestrictions:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users", "post">(baseUrl, endpoints["repos"]["addUserAccessRestrictions"], allowUnmocked).request,
    checkCollaborator:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/collaborators/{username}", "get">(baseUrl, endpoints["repos"]["checkCollaborator"], allowUnmocked).request,
    checkVulnerabilityAlerts:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/vulnerability-alerts", "get">(baseUrl, endpoints["repos"]["checkVulnerabilityAlerts"], allowUnmocked).request,
    codeownersErrors:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/codeowners/errors", "get">(baseUrl, endpoints["repos"]["codeownersErrors"], allowUnmocked).request,
    compareCommits:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/compare/{base}...{head}", "get">(baseUrl, endpoints["repos"]["compareCommits"], allowUnmocked).request,
    compareCommitsWithBasehead:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/compare/{basehead}", "get">(baseUrl, endpoints["repos"]["compareCommitsWithBasehead"], allowUnmocked).request,
    createAutolink:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/autolinks", "post">(baseUrl, endpoints["repos"]["createAutolink"], allowUnmocked).request,
    createCommitComment:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/commits/{commit_sha}/comments", "post">(baseUrl, endpoints["repos"]["createCommitComment"], allowUnmocked).request,
    createCommitSignatureProtection:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/branches/{branch}/protection/required_signatures", "post">(baseUrl, endpoints["repos"]["createCommitSignatureProtection"], allowUnmocked).request,
    createCommitStatus:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/statuses/{sha}", "post">(baseUrl, endpoints["repos"]["createCommitStatus"], allowUnmocked).request,
    createDeployKey:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/keys", "post">(baseUrl, endpoints["repos"]["createDeployKey"], allowUnmocked).request,
    createDeployment:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/deployments", "post">(baseUrl, endpoints["repos"]["createDeployment"], allowUnmocked).request,
    createDeploymentBranchPolicy:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/environments/{environment_name}/deployment-branch-policies", "post">(baseUrl, endpoints["repos"]["createDeploymentBranchPolicy"], allowUnmocked).request,
    createDeploymentProtectionRule:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/environments/{environment_name}/deployment_protection_rules", "post">(baseUrl, endpoints["repos"]["createDeploymentProtectionRule"], allowUnmocked).request,
    createDeploymentStatus:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/deployments/{deployment_id}/statuses", "post">(baseUrl, endpoints["repos"]["createDeploymentStatus"], allowUnmocked).request,
    createDispatchEvent:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/dispatches", "post">(baseUrl, endpoints["repos"]["createDispatchEvent"], allowUnmocked).request,
    createForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/repos", "post">(baseUrl, endpoints["repos"]["createForAuthenticatedUser"], allowUnmocked).request,
    createFork:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/forks", "post">(baseUrl, endpoints["repos"]["createFork"], allowUnmocked).request,
    createInOrg:
      new MoctokitRequestMocker<"/orgs/{org}/repos", "post">(baseUrl, endpoints["repos"]["createInOrg"], allowUnmocked).request,
    createOrUpdateEnvironment:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/environments/{environment_name}", "put">(baseUrl, endpoints["repos"]["createOrUpdateEnvironment"], allowUnmocked).request,
    createOrUpdateFileContents:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/contents/{path}", "put">(baseUrl, endpoints["repos"]["createOrUpdateFileContents"], allowUnmocked).request,
    createOrgRuleset:
      new MoctokitRequestMocker<"/orgs/{org}/rulesets", "post">(baseUrl, endpoints["repos"]["createOrgRuleset"], allowUnmocked).request,
    createPagesDeployment:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/pages/deployment", "post">(baseUrl, endpoints["repos"]["createPagesDeployment"], allowUnmocked).request,
    createPagesSite:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/pages", "post">(baseUrl, endpoints["repos"]["createPagesSite"], allowUnmocked).request,
    createRelease:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/releases", "post">(baseUrl, endpoints["repos"]["createRelease"], allowUnmocked).request,
    createRepoRuleset:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/rulesets", "post">(baseUrl, endpoints["repos"]["createRepoRuleset"], allowUnmocked).request,
    createTagProtection:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/tags/protection", "post">(baseUrl, endpoints["repos"]["createTagProtection"], allowUnmocked).request,
    createUsingTemplate:
      new MoctokitRequestMocker<"/repos/{template_owner}/{template_repo}/generate", "post">(baseUrl, endpoints["repos"]["createUsingTemplate"], allowUnmocked).request,
    createWebhook:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/hooks", "post">(baseUrl, endpoints["repos"]["createWebhook"], allowUnmocked).request,
    declineInvitation:
      new MoctokitRequestMocker<"/user/repository_invitations/{invitation_id}", "delete">(baseUrl, endpoints["repos"]["declineInvitation"], allowUnmocked).request,
    declineInvitationForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/repository_invitations/{invitation_id}", "delete">(baseUrl, endpoints["repos"]["declineInvitationForAuthenticatedUser"], allowUnmocked).request,
    delete:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}", "delete">(baseUrl, endpoints["repos"]["delete"], allowUnmocked).request,
    deleteAccessRestrictions:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/branches/{branch}/protection/restrictions", "delete">(baseUrl, endpoints["repos"]["deleteAccessRestrictions"], allowUnmocked).request,
    deleteAdminBranchProtection:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins", "delete">(baseUrl, endpoints["repos"]["deleteAdminBranchProtection"], allowUnmocked).request,
    deleteAnEnvironment:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/environments/{environment_name}", "delete">(baseUrl, endpoints["repos"]["deleteAnEnvironment"], allowUnmocked).request,
    deleteAutolink:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/autolinks/{autolink_id}", "delete">(baseUrl, endpoints["repos"]["deleteAutolink"], allowUnmocked).request,
    deleteBranchProtection:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/branches/{branch}/protection", "delete">(baseUrl, endpoints["repos"]["deleteBranchProtection"], allowUnmocked).request,
    deleteCommitComment:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/comments/{comment_id}", "delete">(baseUrl, endpoints["repos"]["deleteCommitComment"], allowUnmocked).request,
    deleteCommitSignatureProtection:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/branches/{branch}/protection/required_signatures", "delete">(baseUrl, endpoints["repos"]["deleteCommitSignatureProtection"], allowUnmocked).request,
    deleteDeployKey:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/keys/{key_id}", "delete">(baseUrl, endpoints["repos"]["deleteDeployKey"], allowUnmocked).request,
    deleteDeployment:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/deployments/{deployment_id}", "delete">(baseUrl, endpoints["repos"]["deleteDeployment"], allowUnmocked).request,
    deleteDeploymentBranchPolicy:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/environments/{environment_name}/deployment-branch-policies/{branch_policy_id}", "delete">(baseUrl, endpoints["repos"]["deleteDeploymentBranchPolicy"], allowUnmocked).request,
    deleteFile:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/contents/{path}", "delete">(baseUrl, endpoints["repos"]["deleteFile"], allowUnmocked).request,
    deleteInvitation:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/invitations/{invitation_id}", "delete">(baseUrl, endpoints["repos"]["deleteInvitation"], allowUnmocked).request,
    deleteOrgRuleset:
      new MoctokitRequestMocker<"/orgs/{org}/rulesets/{ruleset_id}", "delete">(baseUrl, endpoints["repos"]["deleteOrgRuleset"], allowUnmocked).request,
    deletePagesSite:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/pages", "delete">(baseUrl, endpoints["repos"]["deletePagesSite"], allowUnmocked).request,
    deletePullRequestReviewProtection:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews", "delete">(baseUrl, endpoints["repos"]["deletePullRequestReviewProtection"], allowUnmocked).request,
    deleteRelease:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/releases/{release_id}", "delete">(baseUrl, endpoints["repos"]["deleteRelease"], allowUnmocked).request,
    deleteReleaseAsset:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/releases/assets/{asset_id}", "delete">(baseUrl, endpoints["repos"]["deleteReleaseAsset"], allowUnmocked).request,
    deleteRepoRuleset:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/rulesets/{ruleset_id}", "delete">(baseUrl, endpoints["repos"]["deleteRepoRuleset"], allowUnmocked).request,
    deleteTagProtection:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/tags/protection/{tag_protection_id}", "delete">(baseUrl, endpoints["repos"]["deleteTagProtection"], allowUnmocked).request,
    deleteWebhook:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/hooks/{hook_id}", "delete">(baseUrl, endpoints["repos"]["deleteWebhook"], allowUnmocked).request,
    disableAutomatedSecurityFixes:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/automated-security-fixes", "delete">(baseUrl, endpoints["repos"]["disableAutomatedSecurityFixes"], allowUnmocked).request,
    disableDeploymentProtectionRule:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/environments/{environment_name}/deployment_protection_rules/{protection_rule_id}", "delete">(baseUrl, endpoints["repos"]["disableDeploymentProtectionRule"], allowUnmocked).request,
    disableLfsForRepo:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/lfs", "delete">(baseUrl, endpoints["repos"]["disableLfsForRepo"], allowUnmocked).request,
    disableVulnerabilityAlerts:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/vulnerability-alerts", "delete">(baseUrl, endpoints["repos"]["disableVulnerabilityAlerts"], allowUnmocked).request,
    downloadArchive:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/zipball/{ref}", "get">(baseUrl, endpoints["repos"]["downloadArchive"], allowUnmocked).request,
    downloadTarballArchive:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/tarball/{ref}", "get">(baseUrl, endpoints["repos"]["downloadTarballArchive"], allowUnmocked).request,
    downloadZipballArchive:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/zipball/{ref}", "get">(baseUrl, endpoints["repos"]["downloadZipballArchive"], allowUnmocked).request,
    enableAutomatedSecurityFixes:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/automated-security-fixes", "put">(baseUrl, endpoints["repos"]["enableAutomatedSecurityFixes"], allowUnmocked).request,
    enableLfsForRepo:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/lfs", "put">(baseUrl, endpoints["repos"]["enableLfsForRepo"], allowUnmocked).request,
    enableVulnerabilityAlerts:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/vulnerability-alerts", "put">(baseUrl, endpoints["repos"]["enableVulnerabilityAlerts"], allowUnmocked).request,
    generateReleaseNotes:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/releases/generate-notes", "post">(baseUrl, endpoints["repos"]["generateReleaseNotes"], allowUnmocked).request,
    get: new MoctokitRequestMocker<"/repos/{owner}/{repo}", "get">(baseUrl, endpoints["repos"]["get"], allowUnmocked).request,
    getAccessRestrictions:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/branches/{branch}/protection/restrictions", "get">(baseUrl, endpoints["repos"]["getAccessRestrictions"], allowUnmocked).request,
    getAdminBranchProtection:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins", "get">(baseUrl, endpoints["repos"]["getAdminBranchProtection"], allowUnmocked).request,
    getAllDeploymentProtectionRules:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/environments/{environment_name}/deployment_protection_rules", "get">(baseUrl, endpoints["repos"]["getAllDeploymentProtectionRules"], allowUnmocked).request,
    getAllEnvironments:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/environments", "get">(baseUrl, endpoints["repos"]["getAllEnvironments"], allowUnmocked).request,
    getAllStatusCheckContexts:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts", "get">(baseUrl, endpoints["repos"]["getAllStatusCheckContexts"], allowUnmocked).request,
    getAllTopics:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/topics", "get">(baseUrl, endpoints["repos"]["getAllTopics"], allowUnmocked).request,
    getAppsWithAccessToProtectedBranch:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps", "get">(baseUrl, endpoints["repos"]["getAppsWithAccessToProtectedBranch"], allowUnmocked).request,
    getAutolink:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/autolinks/{autolink_id}", "get">(baseUrl, endpoints["repos"]["getAutolink"], allowUnmocked).request,
    getBranch:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/branches/{branch}", "get">(baseUrl, endpoints["repos"]["getBranch"], allowUnmocked).request,
    getBranchProtection:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/branches/{branch}/protection", "get">(baseUrl, endpoints["repos"]["getBranchProtection"], allowUnmocked).request,
    getBranchRules:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/rules/branches/{branch}", "get">(baseUrl, endpoints["repos"]["getBranchRules"], allowUnmocked).request,
    getClones:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/traffic/clones", "get">(baseUrl, endpoints["repos"]["getClones"], allowUnmocked).request,
    getCodeFrequencyStats:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/stats/code_frequency", "get">(baseUrl, endpoints["repos"]["getCodeFrequencyStats"], allowUnmocked).request,
    getCollaboratorPermissionLevel:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/collaborators/{username}/permission", "get">(baseUrl, endpoints["repos"]["getCollaboratorPermissionLevel"], allowUnmocked).request,
    getCombinedStatusForRef:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/commits/{ref}/status", "get">(baseUrl, endpoints["repos"]["getCombinedStatusForRef"], allowUnmocked).request,
    getCommit:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/commits/{ref}", "get">(baseUrl, endpoints["repos"]["getCommit"], allowUnmocked).request,
    getCommitActivityStats:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/stats/commit_activity", "get">(baseUrl, endpoints["repos"]["getCommitActivityStats"], allowUnmocked).request,
    getCommitComment:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/comments/{comment_id}", "get">(baseUrl, endpoints["repos"]["getCommitComment"], allowUnmocked).request,
    getCommitSignatureProtection:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/branches/{branch}/protection/required_signatures", "get">(baseUrl, endpoints["repos"]["getCommitSignatureProtection"], allowUnmocked).request,
    getCommunityProfileMetrics:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/community/profile", "get">(baseUrl, endpoints["repos"]["getCommunityProfileMetrics"], allowUnmocked).request,
    getContent:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/contents/{path}", "get">(baseUrl, endpoints["repos"]["getContent"], allowUnmocked).request,
    getContributorsStats:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/stats/contributors", "get">(baseUrl, endpoints["repos"]["getContributorsStats"], allowUnmocked).request,
    getCustomDeploymentProtectionRule:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/environments/{environment_name}/deployment_protection_rules/{protection_rule_id}", "get">(baseUrl, endpoints["repos"]["getCustomDeploymentProtectionRule"], allowUnmocked).request,
    getDeployKey:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/keys/{key_id}", "get">(baseUrl, endpoints["repos"]["getDeployKey"], allowUnmocked).request,
    getDeployment:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/deployments/{deployment_id}", "get">(baseUrl, endpoints["repos"]["getDeployment"], allowUnmocked).request,
    getDeploymentBranchPolicy:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/environments/{environment_name}/deployment-branch-policies/{branch_policy_id}", "get">(baseUrl, endpoints["repos"]["getDeploymentBranchPolicy"], allowUnmocked).request,
    getDeploymentStatus:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/deployments/{deployment_id}/statuses/{status_id}", "get">(baseUrl, endpoints["repos"]["getDeploymentStatus"], allowUnmocked).request,
    getEnvironment:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/environments/{environment_name}", "get">(baseUrl, endpoints["repos"]["getEnvironment"], allowUnmocked).request,
    getLatestPagesBuild:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/pages/builds/latest", "get">(baseUrl, endpoints["repos"]["getLatestPagesBuild"], allowUnmocked).request,
    getLatestRelease:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/releases/latest", "get">(baseUrl, endpoints["repos"]["getLatestRelease"], allowUnmocked).request,
    getOrgRuleset:
      new MoctokitRequestMocker<"/orgs/{org}/rulesets/{ruleset_id}", "get">(baseUrl, endpoints["repos"]["getOrgRuleset"], allowUnmocked).request,
    getOrgRulesets:
      new MoctokitRequestMocker<"/orgs/{org}/rulesets", "get">(baseUrl, endpoints["repos"]["getOrgRulesets"], allowUnmocked).request,
    getPages:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/pages", "get">(baseUrl, endpoints["repos"]["getPages"], allowUnmocked).request,
    getPagesBuild:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/pages/builds/{build_id}", "get">(baseUrl, endpoints["repos"]["getPagesBuild"], allowUnmocked).request,
    getPagesHealthCheck:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/pages/health", "get">(baseUrl, endpoints["repos"]["getPagesHealthCheck"], allowUnmocked).request,
    getParticipationStats:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/stats/participation", "get">(baseUrl, endpoints["repos"]["getParticipationStats"], allowUnmocked).request,
    getPullRequestReviewProtection:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews", "get">(baseUrl, endpoints["repos"]["getPullRequestReviewProtection"], allowUnmocked).request,
    getPunchCardStats:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/stats/punch_card", "get">(baseUrl, endpoints["repos"]["getPunchCardStats"], allowUnmocked).request,
    getReadme:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/readme", "get">(baseUrl, endpoints["repos"]["getReadme"], allowUnmocked).request,
    getReadmeInDirectory:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/readme/{dir}", "get">(baseUrl, endpoints["repos"]["getReadmeInDirectory"], allowUnmocked).request,
    getRelease:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/releases/{release_id}", "get">(baseUrl, endpoints["repos"]["getRelease"], allowUnmocked).request,
    getReleaseAsset:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/releases/assets/{asset_id}", "get">(baseUrl, endpoints["repos"]["getReleaseAsset"], allowUnmocked).request,
    getReleaseByTag:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/releases/tags/{tag}", "get">(baseUrl, endpoints["repos"]["getReleaseByTag"], allowUnmocked).request,
    getRepoRuleset:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/rulesets/{ruleset_id}", "get">(baseUrl, endpoints["repos"]["getRepoRuleset"], allowUnmocked).request,
    getRepoRulesets:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/rulesets", "get">(baseUrl, endpoints["repos"]["getRepoRulesets"], allowUnmocked).request,
    getStatusChecksProtection:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks", "get">(baseUrl, endpoints["repos"]["getStatusChecksProtection"], allowUnmocked).request,
    getTeamsWithAccessToProtectedBranch:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams", "get">(baseUrl, endpoints["repos"]["getTeamsWithAccessToProtectedBranch"], allowUnmocked).request,
    getTopPaths:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/traffic/popular/paths", "get">(baseUrl, endpoints["repos"]["getTopPaths"], allowUnmocked).request,
    getTopReferrers:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/traffic/popular/referrers", "get">(baseUrl, endpoints["repos"]["getTopReferrers"], allowUnmocked).request,
    getUsersWithAccessToProtectedBranch:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users", "get">(baseUrl, endpoints["repos"]["getUsersWithAccessToProtectedBranch"], allowUnmocked).request,
    getViews:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/traffic/views", "get">(baseUrl, endpoints["repos"]["getViews"], allowUnmocked).request,
    getWebhook:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/hooks/{hook_id}", "get">(baseUrl, endpoints["repos"]["getWebhook"], allowUnmocked).request,
    getWebhookConfigForRepo:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/hooks/{hook_id}/config", "get">(baseUrl, endpoints["repos"]["getWebhookConfigForRepo"], allowUnmocked).request,
    getWebhookDelivery:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/hooks/{hook_id}/deliveries/{delivery_id}", "get">(baseUrl, endpoints["repos"]["getWebhookDelivery"], allowUnmocked).request,
    listAutolinks:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/autolinks", "get">(baseUrl, endpoints["repos"]["listAutolinks"], allowUnmocked).request,
    listBranches:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/branches", "get">(baseUrl, endpoints["repos"]["listBranches"], allowUnmocked).request,
    listBranchesForHeadCommit:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/commits/{commit_sha}/branches-where-head", "get">(baseUrl, endpoints["repos"]["listBranchesForHeadCommit"], allowUnmocked).request,
    listCollaborators:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/collaborators", "get">(baseUrl, endpoints["repos"]["listCollaborators"], allowUnmocked).request,
    listCommentsForCommit:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/commits/{commit_sha}/comments", "get">(baseUrl, endpoints["repos"]["listCommentsForCommit"], allowUnmocked).request,
    listCommitCommentsForRepo:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/comments", "get">(baseUrl, endpoints["repos"]["listCommitCommentsForRepo"], allowUnmocked).request,
    listCommitStatusesForRef:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/commits/{ref}/statuses", "get">(baseUrl, endpoints["repos"]["listCommitStatusesForRef"], allowUnmocked).request,
    listCommits:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/commits", "get">(baseUrl, endpoints["repos"]["listCommits"], allowUnmocked).request,
    listContributors:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/contributors", "get">(baseUrl, endpoints["repos"]["listContributors"], allowUnmocked).request,
    listCustomDeploymentRuleIntegrations:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/environments/{environment_name}/deployment_protection_rules/apps", "get">(baseUrl, endpoints["repos"]["listCustomDeploymentRuleIntegrations"], allowUnmocked).request,
    listDeployKeys:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/keys", "get">(baseUrl, endpoints["repos"]["listDeployKeys"], allowUnmocked).request,
    listDeploymentBranchPolicies:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/environments/{environment_name}/deployment-branch-policies", "get">(baseUrl, endpoints["repos"]["listDeploymentBranchPolicies"], allowUnmocked).request,
    listDeploymentStatuses:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/deployments/{deployment_id}/statuses", "get">(baseUrl, endpoints["repos"]["listDeploymentStatuses"], allowUnmocked).request,
    listDeployments:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/deployments", "get">(baseUrl, endpoints["repos"]["listDeployments"], allowUnmocked).request,
    listForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/repos", "get">(baseUrl, endpoints["repos"]["listForAuthenticatedUser"], allowUnmocked).request,
    listForOrg:
      new MoctokitRequestMocker<"/orgs/{org}/repos", "get">(baseUrl, endpoints["repos"]["listForOrg"], allowUnmocked).request,
    listForUser:
      new MoctokitRequestMocker<"/users/{username}/repos", "get">(baseUrl, endpoints["repos"]["listForUser"], allowUnmocked).request,
    listForks:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/forks", "get">(baseUrl, endpoints["repos"]["listForks"], allowUnmocked).request,
    listInvitations:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/invitations", "get">(baseUrl, endpoints["repos"]["listInvitations"], allowUnmocked).request,
    listInvitationsForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/repository_invitations", "get">(baseUrl, endpoints["repos"]["listInvitationsForAuthenticatedUser"], allowUnmocked).request,
    listLanguages:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/languages", "get">(baseUrl, endpoints["repos"]["listLanguages"], allowUnmocked).request,
    listPagesBuilds:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/pages/builds", "get">(baseUrl, endpoints["repos"]["listPagesBuilds"], allowUnmocked).request,
    listPublic:
      new MoctokitRequestMocker<"/repositories", "get">(baseUrl, endpoints["repos"]["listPublic"], allowUnmocked).request,
    listPullRequestsAssociatedWithCommit:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/commits/{commit_sha}/pulls", "get">(baseUrl, endpoints["repos"]["listPullRequestsAssociatedWithCommit"], allowUnmocked).request,
    listReleaseAssets:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/releases/{release_id}/assets", "get">(baseUrl, endpoints["repos"]["listReleaseAssets"], allowUnmocked).request,
    listReleases:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/releases", "get">(baseUrl, endpoints["repos"]["listReleases"], allowUnmocked).request,
    listTagProtection:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/tags/protection", "get">(baseUrl, endpoints["repos"]["listTagProtection"], allowUnmocked).request,
    listTags:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/tags", "get">(baseUrl, endpoints["repos"]["listTags"], allowUnmocked).request,
    listTeams:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/teams", "get">(baseUrl, endpoints["repos"]["listTeams"], allowUnmocked).request,
    listWebhookDeliveries:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/hooks/{hook_id}/deliveries", "get">(baseUrl, endpoints["repos"]["listWebhookDeliveries"], allowUnmocked).request,
    listWebhooks:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/hooks", "get">(baseUrl, endpoints["repos"]["listWebhooks"], allowUnmocked).request,
    merge:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/merges", "post">(baseUrl, endpoints["repos"]["merge"], allowUnmocked).request,
    mergeUpstream:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/merge-upstream", "post">(baseUrl, endpoints["repos"]["mergeUpstream"], allowUnmocked).request,
    pingWebhook:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/hooks/{hook_id}/pings", "post">(baseUrl, endpoints["repos"]["pingWebhook"], allowUnmocked).request,
    redeliverWebhookDelivery:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/hooks/{hook_id}/deliveries/{delivery_id}/attempts", "post">(baseUrl, endpoints["repos"]["redeliverWebhookDelivery"], allowUnmocked).request,
    removeAppAccessRestrictions:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps", "delete">(baseUrl, endpoints["repos"]["removeAppAccessRestrictions"], allowUnmocked).request,
    removeCollaborator:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/collaborators/{username}", "delete">(baseUrl, endpoints["repos"]["removeCollaborator"], allowUnmocked).request,
    removeStatusCheckContexts:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts", "delete">(baseUrl, endpoints["repos"]["removeStatusCheckContexts"], allowUnmocked).request,
    removeStatusCheckProtection:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks", "delete">(baseUrl, endpoints["repos"]["removeStatusCheckProtection"], allowUnmocked).request,
    removeTeamAccessRestrictions:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams", "delete">(baseUrl, endpoints["repos"]["removeTeamAccessRestrictions"], allowUnmocked).request,
    removeUserAccessRestrictions:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users", "delete">(baseUrl, endpoints["repos"]["removeUserAccessRestrictions"], allowUnmocked).request,
    renameBranch:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/branches/{branch}/rename", "post">(baseUrl, endpoints["repos"]["renameBranch"], allowUnmocked).request,
    replaceAllTopics:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/topics", "put">(baseUrl, endpoints["repos"]["replaceAllTopics"], allowUnmocked).request,
    requestPagesBuild:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/pages/builds", "post">(baseUrl, endpoints["repos"]["requestPagesBuild"], allowUnmocked).request,
    setAdminBranchProtection:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins", "post">(baseUrl, endpoints["repos"]["setAdminBranchProtection"], allowUnmocked).request,
    setAppAccessRestrictions:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps", "put">(baseUrl, endpoints["repos"]["setAppAccessRestrictions"], allowUnmocked).request,
    setStatusCheckContexts:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts", "put">(baseUrl, endpoints["repos"]["setStatusCheckContexts"], allowUnmocked).request,
    setTeamAccessRestrictions:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams", "put">(baseUrl, endpoints["repos"]["setTeamAccessRestrictions"], allowUnmocked).request,
    setUserAccessRestrictions:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users", "put">(baseUrl, endpoints["repos"]["setUserAccessRestrictions"], allowUnmocked).request,
    testPushWebhook:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/hooks/{hook_id}/tests", "post">(baseUrl, endpoints["repos"]["testPushWebhook"], allowUnmocked).request,
    transfer:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/transfer", "post">(baseUrl, endpoints["repos"]["transfer"], allowUnmocked).request,
    update:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}", "patch">(baseUrl, endpoints["repos"]["update"], allowUnmocked).request,
    updateBranchProtection:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/branches/{branch}/protection", "put">(baseUrl, endpoints["repos"]["updateBranchProtection"], allowUnmocked).request,
    updateCommitComment:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/comments/{comment_id}", "patch">(baseUrl, endpoints["repos"]["updateCommitComment"], allowUnmocked).request,
    updateDeploymentBranchPolicy:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/environments/{environment_name}/deployment-branch-policies/{branch_policy_id}", "put">(baseUrl, endpoints["repos"]["updateDeploymentBranchPolicy"], allowUnmocked).request,
    updateInformationAboutPagesSite:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/pages", "put">(baseUrl, endpoints["repos"]["updateInformationAboutPagesSite"], allowUnmocked).request,
    updateInvitation:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/invitations/{invitation_id}", "patch">(baseUrl, endpoints["repos"]["updateInvitation"], allowUnmocked).request,
    updateOrgRuleset:
      new MoctokitRequestMocker<"/orgs/{org}/rulesets/{ruleset_id}", "put">(baseUrl, endpoints["repos"]["updateOrgRuleset"], allowUnmocked).request,
    updatePullRequestReviewProtection:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews", "patch">(baseUrl, endpoints["repos"]["updatePullRequestReviewProtection"], allowUnmocked).request,
    updateRelease:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/releases/{release_id}", "patch">(baseUrl, endpoints["repos"]["updateRelease"], allowUnmocked).request,
    updateReleaseAsset:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/releases/assets/{asset_id}", "patch">(baseUrl, endpoints["repos"]["updateReleaseAsset"], allowUnmocked).request,
    updateRepoRuleset:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/rulesets/{ruleset_id}", "put">(baseUrl, endpoints["repos"]["updateRepoRuleset"], allowUnmocked).request,
    updateStatusCheckPotection:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks", "patch">(baseUrl, endpoints["repos"]["updateStatusCheckPotection"], allowUnmocked).request,
    updateStatusCheckProtection:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks", "patch">(baseUrl, endpoints["repos"]["updateStatusCheckProtection"], allowUnmocked).request,
    updateWebhook:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/hooks/{hook_id}", "patch">(baseUrl, endpoints["repos"]["updateWebhook"], allowUnmocked).request,
    updateWebhookConfigForRepo:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/hooks/{hook_id}/config", "patch">(baseUrl, endpoints["repos"]["updateWebhookConfigForRepo"], allowUnmocked).request,
    uploadReleaseAsset:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/releases/{release_id}/assets", "post">(baseUrl, endpoints["repos"]["uploadReleaseAsset"], allowUnmocked).request,
  },
  search: {
    code: new MoctokitRequestMocker<"/search/code", "get">(baseUrl, endpoints["search"]["code"], allowUnmocked).request,
    commits:
      new MoctokitRequestMocker<"/search/commits", "get">(baseUrl, endpoints["search"]["commits"], allowUnmocked).request,
    issuesAndPullRequests:
      new MoctokitRequestMocker<"/search/issues", "get">(baseUrl, endpoints["search"]["issuesAndPullRequests"], allowUnmocked).request,
    labels:
      new MoctokitRequestMocker<"/search/labels", "get">(baseUrl, endpoints["search"]["labels"], allowUnmocked).request,
    repos:
      new MoctokitRequestMocker<"/search/repositories", "get">(baseUrl, endpoints["search"]["repos"], allowUnmocked).request,
    topics:
      new MoctokitRequestMocker<"/search/topics", "get">(baseUrl, endpoints["search"]["topics"], allowUnmocked).request,
    users:
      new MoctokitRequestMocker<"/search/users", "get">(baseUrl, endpoints["search"]["users"], allowUnmocked).request,
  },
  secretScanning: {
    getAlert:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/secret-scanning/alerts/{alert_number}", "get">(baseUrl, endpoints["secretScanning"]["getAlert"], allowUnmocked).request,
    listAlertsForEnterprise:
      new MoctokitRequestMocker<"/enterprises/{enterprise}/secret-scanning/alerts", "get">(baseUrl, endpoints["secretScanning"]["listAlertsForEnterprise"], allowUnmocked).request,
    listAlertsForOrg:
      new MoctokitRequestMocker<"/orgs/{org}/secret-scanning/alerts", "get">(baseUrl, endpoints["secretScanning"]["listAlertsForOrg"], allowUnmocked).request,
    listAlertsForRepo:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/secret-scanning/alerts", "get">(baseUrl, endpoints["secretScanning"]["listAlertsForRepo"], allowUnmocked).request,
    listLocationsForAlert:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/secret-scanning/alerts/{alert_number}/locations", "get">(baseUrl, endpoints["secretScanning"]["listLocationsForAlert"], allowUnmocked).request,
    updateAlert:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/secret-scanning/alerts/{alert_number}", "patch">(baseUrl, endpoints["secretScanning"]["updateAlert"], allowUnmocked).request,
  },
  securityAdvisories: {
    createPrivateVulnerabilityReport:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/security-advisories/reports", "post">(baseUrl, endpoints["securityAdvisories"]["createPrivateVulnerabilityReport"], allowUnmocked).request,
    createRepositoryAdvisory:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/security-advisories", "post">(baseUrl, endpoints["securityAdvisories"]["createRepositoryAdvisory"], allowUnmocked).request,
    getRepositoryAdvisory:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/security-advisories/{ghsa_id}", "get">(baseUrl, endpoints["securityAdvisories"]["getRepositoryAdvisory"], allowUnmocked).request,
    listRepositoryAdvisories:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/security-advisories", "get">(baseUrl, endpoints["securityAdvisories"]["listRepositoryAdvisories"], allowUnmocked).request,
    updateRepositoryAdvisory:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/security-advisories/{ghsa_id}", "patch">(baseUrl, endpoints["securityAdvisories"]["updateRepositoryAdvisory"], allowUnmocked).request,
  },
  teams: {
    addOrUpdateMembershipForUserInOrg:
      new MoctokitRequestMocker<"/orgs/{org}/teams/{team_slug}/memberships/{username}", "put">(baseUrl, endpoints["teams"]["addOrUpdateMembershipForUserInOrg"], allowUnmocked).request,
    addOrUpdateProjectPermissionsInOrg:
      new MoctokitRequestMocker<"/orgs/{org}/teams/{team_slug}/projects/{project_id}", "put">(baseUrl, endpoints["teams"]["addOrUpdateProjectPermissionsInOrg"], allowUnmocked).request,
    addOrUpdateRepoPermissionsInOrg:
      new MoctokitRequestMocker<"/orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}", "put">(baseUrl, endpoints["teams"]["addOrUpdateRepoPermissionsInOrg"], allowUnmocked).request,
    checkPermissionsForProjectInOrg:
      new MoctokitRequestMocker<"/orgs/{org}/teams/{team_slug}/projects/{project_id}", "get">(baseUrl, endpoints["teams"]["checkPermissionsForProjectInOrg"], allowUnmocked).request,
    checkPermissionsForRepoInOrg:
      new MoctokitRequestMocker<"/orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}", "get">(baseUrl, endpoints["teams"]["checkPermissionsForRepoInOrg"], allowUnmocked).request,
    create:
      new MoctokitRequestMocker<"/orgs/{org}/teams", "post">(baseUrl, endpoints["teams"]["create"], allowUnmocked).request,
    createDiscussionCommentInOrg:
      new MoctokitRequestMocker<"/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments", "post">(baseUrl, endpoints["teams"]["createDiscussionCommentInOrg"], allowUnmocked).request,
    createDiscussionInOrg:
      new MoctokitRequestMocker<"/orgs/{org}/teams/{team_slug}/discussions", "post">(baseUrl, endpoints["teams"]["createDiscussionInOrg"], allowUnmocked).request,
    deleteDiscussionCommentInOrg:
      new MoctokitRequestMocker<"/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}", "delete">(baseUrl, endpoints["teams"]["deleteDiscussionCommentInOrg"], allowUnmocked).request,
    deleteDiscussionInOrg:
      new MoctokitRequestMocker<"/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}", "delete">(baseUrl, endpoints["teams"]["deleteDiscussionInOrg"], allowUnmocked).request,
    deleteInOrg:
      new MoctokitRequestMocker<"/orgs/{org}/teams/{team_slug}", "delete">(baseUrl, endpoints["teams"]["deleteInOrg"], allowUnmocked).request,
    getByName:
      new MoctokitRequestMocker<"/orgs/{org}/teams/{team_slug}", "get">(baseUrl, endpoints["teams"]["getByName"], allowUnmocked).request,
    getDiscussionCommentInOrg:
      new MoctokitRequestMocker<"/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}", "get">(baseUrl, endpoints["teams"]["getDiscussionCommentInOrg"], allowUnmocked).request,
    getDiscussionInOrg:
      new MoctokitRequestMocker<"/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}", "get">(baseUrl, endpoints["teams"]["getDiscussionInOrg"], allowUnmocked).request,
    getMembershipForUserInOrg:
      new MoctokitRequestMocker<"/orgs/{org}/teams/{team_slug}/memberships/{username}", "get">(baseUrl, endpoints["teams"]["getMembershipForUserInOrg"], allowUnmocked).request,
    list: new MoctokitRequestMocker<"/orgs/{org}/teams", "get">(baseUrl, endpoints["teams"]["list"], allowUnmocked).request,
    listChildInOrg:
      new MoctokitRequestMocker<"/orgs/{org}/teams/{team_slug}/teams", "get">(baseUrl, endpoints["teams"]["listChildInOrg"], allowUnmocked).request,
    listDiscussionCommentsInOrg:
      new MoctokitRequestMocker<"/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments", "get">(baseUrl, endpoints["teams"]["listDiscussionCommentsInOrg"], allowUnmocked).request,
    listDiscussionsInOrg:
      new MoctokitRequestMocker<"/orgs/{org}/teams/{team_slug}/discussions", "get">(baseUrl, endpoints["teams"]["listDiscussionsInOrg"], allowUnmocked).request,
    listForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/teams", "get">(baseUrl, endpoints["teams"]["listForAuthenticatedUser"], allowUnmocked).request,
    listMembersInOrg:
      new MoctokitRequestMocker<"/orgs/{org}/teams/{team_slug}/members", "get">(baseUrl, endpoints["teams"]["listMembersInOrg"], allowUnmocked).request,
    listPendingInvitationsInOrg:
      new MoctokitRequestMocker<"/orgs/{org}/teams/{team_slug}/invitations", "get">(baseUrl, endpoints["teams"]["listPendingInvitationsInOrg"], allowUnmocked).request,
    listProjectsInOrg:
      new MoctokitRequestMocker<"/orgs/{org}/teams/{team_slug}/projects", "get">(baseUrl, endpoints["teams"]["listProjectsInOrg"], allowUnmocked).request,
    listReposInOrg:
      new MoctokitRequestMocker<"/orgs/{org}/teams/{team_slug}/repos", "get">(baseUrl, endpoints["teams"]["listReposInOrg"], allowUnmocked).request,
    removeMembershipForUserInOrg:
      new MoctokitRequestMocker<"/orgs/{org}/teams/{team_slug}/memberships/{username}", "delete">(baseUrl, endpoints["teams"]["removeMembershipForUserInOrg"], allowUnmocked).request,
    removeProjectInOrg:
      new MoctokitRequestMocker<"/orgs/{org}/teams/{team_slug}/projects/{project_id}", "delete">(baseUrl, endpoints["teams"]["removeProjectInOrg"], allowUnmocked).request,
    removeRepoInOrg:
      new MoctokitRequestMocker<"/orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}", "delete">(baseUrl, endpoints["teams"]["removeRepoInOrg"], allowUnmocked).request,
    updateDiscussionCommentInOrg:
      new MoctokitRequestMocker<"/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}", "patch">(baseUrl, endpoints["teams"]["updateDiscussionCommentInOrg"], allowUnmocked).request,
    updateDiscussionInOrg:
      new MoctokitRequestMocker<"/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}", "patch">(baseUrl, endpoints["teams"]["updateDiscussionInOrg"], allowUnmocked).request,
    updateInOrg:
      new MoctokitRequestMocker<"/orgs/{org}/teams/{team_slug}", "patch">(baseUrl, endpoints["teams"]["updateInOrg"], allowUnmocked).request,
  },
  users: {
    addEmailForAuthenticated:
      new MoctokitRequestMocker<"/user/emails", "post">(baseUrl, endpoints["users"]["addEmailForAuthenticated"], allowUnmocked).request,
    addEmailForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/emails", "post">(baseUrl, endpoints["users"]["addEmailForAuthenticatedUser"], allowUnmocked).request,
    addSocialAccountForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/social_accounts", "post">(baseUrl, endpoints["users"]["addSocialAccountForAuthenticatedUser"], allowUnmocked).request,
    block:
      new MoctokitRequestMocker<"/user/blocks/{username}", "put">(baseUrl, endpoints["users"]["block"], allowUnmocked).request,
    checkBlocked:
      new MoctokitRequestMocker<"/user/blocks/{username}", "get">(baseUrl, endpoints["users"]["checkBlocked"], allowUnmocked).request,
    checkFollowingForUser:
      new MoctokitRequestMocker<"/users/{username}/following/{target_user}", "get">(baseUrl, endpoints["users"]["checkFollowingForUser"], allowUnmocked).request,
    checkPersonIsFollowedByAuthenticated:
      new MoctokitRequestMocker<"/user/following/{username}", "get">(baseUrl, endpoints["users"]["checkPersonIsFollowedByAuthenticated"], allowUnmocked).request,
    createGpgKeyForAuthenticated:
      new MoctokitRequestMocker<"/user/gpg_keys", "post">(baseUrl, endpoints["users"]["createGpgKeyForAuthenticated"], allowUnmocked).request,
    createGpgKeyForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/gpg_keys", "post">(baseUrl, endpoints["users"]["createGpgKeyForAuthenticatedUser"], allowUnmocked).request,
    createPublicSshKeyForAuthenticated:
      new MoctokitRequestMocker<"/user/keys", "post">(baseUrl, endpoints["users"]["createPublicSshKeyForAuthenticated"], allowUnmocked).request,
    createPublicSshKeyForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/keys", "post">(baseUrl, endpoints["users"]["createPublicSshKeyForAuthenticatedUser"], allowUnmocked).request,
    createSshSigningKeyForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/ssh_signing_keys", "post">(baseUrl, endpoints["users"]["createSshSigningKeyForAuthenticatedUser"], allowUnmocked).request,
    deleteEmailForAuthenticated:
      new MoctokitRequestMocker<"/user/emails", "delete">(baseUrl, endpoints["users"]["deleteEmailForAuthenticated"], allowUnmocked).request,
    deleteEmailForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/emails", "delete">(baseUrl, endpoints["users"]["deleteEmailForAuthenticatedUser"], allowUnmocked).request,
    deleteGpgKeyForAuthenticated:
      new MoctokitRequestMocker<"/user/gpg_keys/{gpg_key_id}", "delete">(baseUrl, endpoints["users"]["deleteGpgKeyForAuthenticated"], allowUnmocked).request,
    deleteGpgKeyForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/gpg_keys/{gpg_key_id}", "delete">(baseUrl, endpoints["users"]["deleteGpgKeyForAuthenticatedUser"], allowUnmocked).request,
    deletePublicSshKeyForAuthenticated:
      new MoctokitRequestMocker<"/user/keys/{key_id}", "delete">(baseUrl, endpoints["users"]["deletePublicSshKeyForAuthenticated"], allowUnmocked).request,
    deletePublicSshKeyForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/keys/{key_id}", "delete">(baseUrl, endpoints["users"]["deletePublicSshKeyForAuthenticatedUser"], allowUnmocked).request,
    deleteSocialAccountForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/social_accounts", "delete">(baseUrl, endpoints["users"]["deleteSocialAccountForAuthenticatedUser"], allowUnmocked).request,
    deleteSshSigningKeyForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/ssh_signing_keys/{ssh_signing_key_id}", "delete">(baseUrl, endpoints["users"]["deleteSshSigningKeyForAuthenticatedUser"], allowUnmocked).request,
    follow:
      new MoctokitRequestMocker<"/user/following/{username}", "put">(baseUrl, endpoints["users"]["follow"], allowUnmocked).request,
    getAuthenticated:
      new MoctokitRequestMocker<"/user", "get">(baseUrl, endpoints["users"]["getAuthenticated"], allowUnmocked).request,
    getByUsername:
      new MoctokitRequestMocker<"/users/{username}", "get">(baseUrl, endpoints["users"]["getByUsername"], allowUnmocked).request,
    getContextForUser:
      new MoctokitRequestMocker<"/users/{username}/hovercard", "get">(baseUrl, endpoints["users"]["getContextForUser"], allowUnmocked).request,
    getGpgKeyForAuthenticated:
      new MoctokitRequestMocker<"/user/gpg_keys/{gpg_key_id}", "get">(baseUrl, endpoints["users"]["getGpgKeyForAuthenticated"], allowUnmocked).request,
    getGpgKeyForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/gpg_keys/{gpg_key_id}", "get">(baseUrl, endpoints["users"]["getGpgKeyForAuthenticatedUser"], allowUnmocked).request,
    getPublicSshKeyForAuthenticated:
      new MoctokitRequestMocker<"/user/keys/{key_id}", "get">(baseUrl, endpoints["users"]["getPublicSshKeyForAuthenticated"], allowUnmocked).request,
    getPublicSshKeyForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/keys/{key_id}", "get">(baseUrl, endpoints["users"]["getPublicSshKeyForAuthenticatedUser"], allowUnmocked).request,
    getSshSigningKeyForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/ssh_signing_keys/{ssh_signing_key_id}", "get">(baseUrl, endpoints["users"]["getSshSigningKeyForAuthenticatedUser"], allowUnmocked).request,
    list: new MoctokitRequestMocker<"/users", "get">(baseUrl, endpoints["users"]["list"], allowUnmocked).request,
    listBlockedByAuthenticated:
      new MoctokitRequestMocker<"/user/blocks", "get">(baseUrl, endpoints["users"]["listBlockedByAuthenticated"], allowUnmocked).request,
    listBlockedByAuthenticatedUser:
      new MoctokitRequestMocker<"/user/blocks", "get">(baseUrl, endpoints["users"]["listBlockedByAuthenticatedUser"], allowUnmocked).request,
    listEmailsForAuthenticated:
      new MoctokitRequestMocker<"/user/emails", "get">(baseUrl, endpoints["users"]["listEmailsForAuthenticated"], allowUnmocked).request,
    listEmailsForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/emails", "get">(baseUrl, endpoints["users"]["listEmailsForAuthenticatedUser"], allowUnmocked).request,
    listFollowedByAuthenticated:
      new MoctokitRequestMocker<"/user/following", "get">(baseUrl, endpoints["users"]["listFollowedByAuthenticated"], allowUnmocked).request,
    listFollowedByAuthenticatedUser:
      new MoctokitRequestMocker<"/user/following", "get">(baseUrl, endpoints["users"]["listFollowedByAuthenticatedUser"], allowUnmocked).request,
    listFollowersForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/followers", "get">(baseUrl, endpoints["users"]["listFollowersForAuthenticatedUser"], allowUnmocked).request,
    listFollowersForUser:
      new MoctokitRequestMocker<"/users/{username}/followers", "get">(baseUrl, endpoints["users"]["listFollowersForUser"], allowUnmocked).request,
    listFollowingForUser:
      new MoctokitRequestMocker<"/users/{username}/following", "get">(baseUrl, endpoints["users"]["listFollowingForUser"], allowUnmocked).request,
    listGpgKeysForAuthenticated:
      new MoctokitRequestMocker<"/user/gpg_keys", "get">(baseUrl, endpoints["users"]["listGpgKeysForAuthenticated"], allowUnmocked).request,
    listGpgKeysForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/gpg_keys", "get">(baseUrl, endpoints["users"]["listGpgKeysForAuthenticatedUser"], allowUnmocked).request,
    listGpgKeysForUser:
      new MoctokitRequestMocker<"/users/{username}/gpg_keys", "get">(baseUrl, endpoints["users"]["listGpgKeysForUser"], allowUnmocked).request,
    listPublicEmailsForAuthenticated:
      new MoctokitRequestMocker<"/user/public_emails", "get">(baseUrl, endpoints["users"]["listPublicEmailsForAuthenticated"], allowUnmocked).request,
    listPublicEmailsForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/public_emails", "get">(baseUrl, endpoints["users"]["listPublicEmailsForAuthenticatedUser"], allowUnmocked).request,
    listPublicKeysForUser:
      new MoctokitRequestMocker<"/users/{username}/keys", "get">(baseUrl, endpoints["users"]["listPublicKeysForUser"], allowUnmocked).request,
    listPublicSshKeysForAuthenticated:
      new MoctokitRequestMocker<"/user/keys", "get">(baseUrl, endpoints["users"]["listPublicSshKeysForAuthenticated"], allowUnmocked).request,
    listPublicSshKeysForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/keys", "get">(baseUrl, endpoints["users"]["listPublicSshKeysForAuthenticatedUser"], allowUnmocked).request,
    listSocialAccountsForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/social_accounts", "get">(baseUrl, endpoints["users"]["listSocialAccountsForAuthenticatedUser"], allowUnmocked).request,
    listSocialAccountsForUser:
      new MoctokitRequestMocker<"/users/{username}/social_accounts", "get">(baseUrl, endpoints["users"]["listSocialAccountsForUser"], allowUnmocked).request,
    listSshSigningKeysForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/ssh_signing_keys", "get">(baseUrl, endpoints["users"]["listSshSigningKeysForAuthenticatedUser"], allowUnmocked).request,
    listSshSigningKeysForUser:
      new MoctokitRequestMocker<"/users/{username}/ssh_signing_keys", "get">(baseUrl, endpoints["users"]["listSshSigningKeysForUser"], allowUnmocked).request,
    setPrimaryEmailVisibilityForAuthenticated:
      new MoctokitRequestMocker<"/user/email/visibility", "patch">(baseUrl, endpoints["users"]["setPrimaryEmailVisibilityForAuthenticated"], allowUnmocked).request,
    setPrimaryEmailVisibilityForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/email/visibility", "patch">(baseUrl, endpoints["users"]["setPrimaryEmailVisibilityForAuthenticatedUser"], allowUnmocked).request,
    unblock:
      new MoctokitRequestMocker<"/user/blocks/{username}", "delete">(baseUrl, endpoints["users"]["unblock"], allowUnmocked).request,
    unfollow:
      new MoctokitRequestMocker<"/user/following/{username}", "delete">(baseUrl, endpoints["users"]["unfollow"], allowUnmocked).request,
    updateAuthenticated:
      new MoctokitRequestMocker<"/user", "patch">(baseUrl, endpoints["users"]["updateAuthenticated"], allowUnmocked).request,
  },
});

export default endpointToMethod;
