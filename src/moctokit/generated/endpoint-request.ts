import { MoctokitRequestMocker } from "@mg/moctokit/request/request-mocker";
import endpoints from "./endpoint-details";
import { MockAgent } from "undici";

const endpointToMethod = (agent: MockAgent, baseUrl: string) => ({
  actions: {
    addCustomLabelsToSelfHostedRunnerForOrg:
      new MoctokitRequestMocker<"/orgs/{org}/actions/runners/{runner_id}/labels", "post">(agent, baseUrl, endpoints["actions"]["addCustomLabelsToSelfHostedRunnerForOrg"]).request,
    addCustomLabelsToSelfHostedRunnerForRepo:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/runners/{runner_id}/labels", "post">(agent, baseUrl, endpoints["actions"]["addCustomLabelsToSelfHostedRunnerForRepo"]).request,
    addSelectedRepoToOrgSecret:
      new MoctokitRequestMocker<"/orgs/{org}/actions/secrets/{secret_name}/repositories/{repository_id}", "put">(agent, baseUrl, endpoints["actions"]["addSelectedRepoToOrgSecret"]).request,
    addSelectedRepoToOrgVariable:
      new MoctokitRequestMocker<"/orgs/{org}/actions/variables/{name}/repositories/{repository_id}", "put">(agent, baseUrl, endpoints["actions"]["addSelectedRepoToOrgVariable"]).request,
    addSelectedRepoToRequiredWorkflow:
      new MoctokitRequestMocker<"/orgs/{org}/actions/required_workflows/{required_workflow_id}/repositories/{repository_id}", "put">(agent, baseUrl, endpoints["actions"]["addSelectedRepoToRequiredWorkflow"]).request,
    approveWorkflowRun:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/runs/{run_id}/approve", "post">(agent, baseUrl, endpoints["actions"]["approveWorkflowRun"]).request,
    cancelWorkflowRun:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/runs/{run_id}/cancel", "post">(agent, baseUrl, endpoints["actions"]["cancelWorkflowRun"]).request,
    createEnvironmentVariable:
      new MoctokitRequestMocker<"/repositories/{repository_id}/environments/{environment_name}/variables", "post">(agent, baseUrl, endpoints["actions"]["createEnvironmentVariable"]).request,
    createOrUpdateEnvironmentSecret:
      new MoctokitRequestMocker<"/repositories/{repository_id}/environments/{environment_name}/secrets/{secret_name}", "put">(agent, baseUrl, endpoints["actions"]["createOrUpdateEnvironmentSecret"]).request,
    createOrUpdateOrgSecret:
      new MoctokitRequestMocker<"/orgs/{org}/actions/secrets/{secret_name}", "put">(agent, baseUrl, endpoints["actions"]["createOrUpdateOrgSecret"]).request,
    createOrUpdateRepoSecret:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/secrets/{secret_name}", "put">(agent, baseUrl, endpoints["actions"]["createOrUpdateRepoSecret"]).request,
    createOrgVariable:
      new MoctokitRequestMocker<"/orgs/{org}/actions/variables", "post">(agent, baseUrl, endpoints["actions"]["createOrgVariable"]).request,
    createRegistrationTokenForOrg:
      new MoctokitRequestMocker<"/orgs/{org}/actions/runners/registration-token", "post">(agent, baseUrl, endpoints["actions"]["createRegistrationTokenForOrg"]).request,
    createRegistrationTokenForRepo:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/runners/registration-token", "post">(agent, baseUrl, endpoints["actions"]["createRegistrationTokenForRepo"]).request,
    createRemoveTokenForOrg:
      new MoctokitRequestMocker<"/orgs/{org}/actions/runners/remove-token", "post">(agent, baseUrl, endpoints["actions"]["createRemoveTokenForOrg"]).request,
    createRemoveTokenForRepo:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/runners/remove-token", "post">(agent, baseUrl, endpoints["actions"]["createRemoveTokenForRepo"]).request,
    createRepoVariable:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/variables", "post">(agent, baseUrl, endpoints["actions"]["createRepoVariable"]).request,
    createRequiredWorkflow:
      new MoctokitRequestMocker<"/orgs/{org}/actions/required_workflows", "post">(agent, baseUrl, endpoints["actions"]["createRequiredWorkflow"]).request,
    createWorkflowDispatch:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/workflows/{workflow_id}/dispatches", "post">(agent, baseUrl, endpoints["actions"]["createWorkflowDispatch"]).request,
    deleteActionsCacheById:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/caches/{cache_id}", "delete">(agent, baseUrl, endpoints["actions"]["deleteActionsCacheById"]).request,
    deleteActionsCacheByKey:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/caches", "delete">(agent, baseUrl, endpoints["actions"]["deleteActionsCacheByKey"]).request,
    deleteArtifact:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/artifacts/{artifact_id}", "delete">(agent, baseUrl, endpoints["actions"]["deleteArtifact"]).request,
    deleteEnvironmentSecret:
      new MoctokitRequestMocker<"/repositories/{repository_id}/environments/{environment_name}/secrets/{secret_name}", "delete">(agent, baseUrl, endpoints["actions"]["deleteEnvironmentSecret"]).request,
    deleteEnvironmentVariable:
      new MoctokitRequestMocker<"/repositories/{repository_id}/environments/{environment_name}/variables/{name}", "delete">(agent, baseUrl, endpoints["actions"]["deleteEnvironmentVariable"]).request,
    deleteOrgSecret:
      new MoctokitRequestMocker<"/orgs/{org}/actions/secrets/{secret_name}", "delete">(agent, baseUrl, endpoints["actions"]["deleteOrgSecret"]).request,
    deleteOrgVariable:
      new MoctokitRequestMocker<"/orgs/{org}/actions/variables/{name}", "delete">(agent, baseUrl, endpoints["actions"]["deleteOrgVariable"]).request,
    deleteRepoSecret:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/secrets/{secret_name}", "delete">(agent, baseUrl, endpoints["actions"]["deleteRepoSecret"]).request,
    deleteRepoVariable:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/variables/{name}", "delete">(agent, baseUrl, endpoints["actions"]["deleteRepoVariable"]).request,
    deleteRequiredWorkflow:
      new MoctokitRequestMocker<"/orgs/{org}/actions/required_workflows/{required_workflow_id}", "delete">(agent, baseUrl, endpoints["actions"]["deleteRequiredWorkflow"]).request,
    deleteSelfHostedRunnerFromOrg:
      new MoctokitRequestMocker<"/orgs/{org}/actions/runners/{runner_id}", "delete">(agent, baseUrl, endpoints["actions"]["deleteSelfHostedRunnerFromOrg"]).request,
    deleteSelfHostedRunnerFromRepo:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/runners/{runner_id}", "delete">(agent, baseUrl, endpoints["actions"]["deleteSelfHostedRunnerFromRepo"]).request,
    deleteWorkflowRun:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/runs/{run_id}", "delete">(agent, baseUrl, endpoints["actions"]["deleteWorkflowRun"]).request,
    deleteWorkflowRunLogs:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/runs/{run_id}/logs", "delete">(agent, baseUrl, endpoints["actions"]["deleteWorkflowRunLogs"]).request,
    disableSelectedRepositoryGithubActionsOrganization:
      new MoctokitRequestMocker<"/orgs/{org}/actions/permissions/repositories/{repository_id}", "delete">(agent, baseUrl, endpoints["actions"]["disableSelectedRepositoryGithubActionsOrganization"]).request,
    disableWorkflow:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/workflows/{workflow_id}/disable", "put">(agent, baseUrl, endpoints["actions"]["disableWorkflow"]).request,
    downloadArtifact:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/artifacts/{artifact_id}/{archive_format}", "get">(agent, baseUrl, endpoints["actions"]["downloadArtifact"]).request,
    downloadJobLogsForWorkflowRun:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/jobs/{job_id}/logs", "get">(agent, baseUrl, endpoints["actions"]["downloadJobLogsForWorkflowRun"]).request,
    downloadWorkflowRunAttemptLogs:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/runs/{run_id}/attempts/{attempt_number}/logs", "get">(agent, baseUrl, endpoints["actions"]["downloadWorkflowRunAttemptLogs"]).request,
    downloadWorkflowRunLogs:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/runs/{run_id}/logs", "get">(agent, baseUrl, endpoints["actions"]["downloadWorkflowRunLogs"]).request,
    enableSelectedRepositoryGithubActionsOrganization:
      new MoctokitRequestMocker<"/orgs/{org}/actions/permissions/repositories/{repository_id}", "put">(agent, baseUrl, endpoints["actions"]["enableSelectedRepositoryGithubActionsOrganization"]).request,
    enableWorkflow:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/workflows/{workflow_id}/enable", "put">(agent, baseUrl, endpoints["actions"]["enableWorkflow"]).request,
    generateRunnerJitconfigForEnterprise:
      new MoctokitRequestMocker<"/enterprises/{enterprise}/actions/runners/generate-jitconfig", "post">(agent, baseUrl, endpoints["actions"]["generateRunnerJitconfigForEnterprise"]).request,
    generateRunnerJitconfigForOrg:
      new MoctokitRequestMocker<"/orgs/{org}/actions/runners/generate-jitconfig", "post">(agent, baseUrl, endpoints["actions"]["generateRunnerJitconfigForOrg"]).request,
    generateRunnerJitconfigForRepo:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/runners/generate-jitconfig", "post">(agent, baseUrl, endpoints["actions"]["generateRunnerJitconfigForRepo"]).request,
    getActionsCacheList:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/caches", "get">(agent, baseUrl, endpoints["actions"]["getActionsCacheList"]).request,
    getActionsCacheUsage:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/cache/usage", "get">(agent, baseUrl, endpoints["actions"]["getActionsCacheUsage"]).request,
    getActionsCacheUsageByRepoForOrg:
      new MoctokitRequestMocker<"/orgs/{org}/actions/cache/usage-by-repository", "get">(agent, baseUrl, endpoints["actions"]["getActionsCacheUsageByRepoForOrg"]).request,
    getActionsCacheUsageForOrg:
      new MoctokitRequestMocker<"/orgs/{org}/actions/cache/usage", "get">(agent, baseUrl, endpoints["actions"]["getActionsCacheUsageForOrg"]).request,
    getAllowedActionsOrganization:
      new MoctokitRequestMocker<"/orgs/{org}/actions/permissions/selected-actions", "get">(agent, baseUrl, endpoints["actions"]["getAllowedActionsOrganization"]).request,
    getAllowedActionsRepository:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/permissions/selected-actions", "get">(agent, baseUrl, endpoints["actions"]["getAllowedActionsRepository"]).request,
    getArtifact:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/artifacts/{artifact_id}", "get">(agent, baseUrl, endpoints["actions"]["getArtifact"]).request,
    getEnvironmentPublicKey:
      new MoctokitRequestMocker<"/repositories/{repository_id}/environments/{environment_name}/secrets/public-key", "get">(agent, baseUrl, endpoints["actions"]["getEnvironmentPublicKey"]).request,
    getEnvironmentSecret:
      new MoctokitRequestMocker<"/repositories/{repository_id}/environments/{environment_name}/secrets/{secret_name}", "get">(agent, baseUrl, endpoints["actions"]["getEnvironmentSecret"]).request,
    getEnvironmentVariable:
      new MoctokitRequestMocker<"/repositories/{repository_id}/environments/{environment_name}/variables/{name}", "get">(agent, baseUrl, endpoints["actions"]["getEnvironmentVariable"]).request,
    getGithubActionsDefaultWorkflowPermissionsOrganization:
      new MoctokitRequestMocker<"/orgs/{org}/actions/permissions/workflow", "get">(agent, baseUrl, endpoints["actions"]["getGithubActionsDefaultWorkflowPermissionsOrganization"]).request,
    getGithubActionsDefaultWorkflowPermissionsRepository:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/permissions/workflow", "get">(agent, baseUrl, endpoints["actions"]["getGithubActionsDefaultWorkflowPermissionsRepository"]).request,
    getGithubActionsPermissionsOrganization:
      new MoctokitRequestMocker<"/orgs/{org}/actions/permissions", "get">(agent, baseUrl, endpoints["actions"]["getGithubActionsPermissionsOrganization"]).request,
    getGithubActionsPermissionsRepository:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/permissions", "get">(agent, baseUrl, endpoints["actions"]["getGithubActionsPermissionsRepository"]).request,
    getJobForWorkflowRun:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/jobs/{job_id}", "get">(agent, baseUrl, endpoints["actions"]["getJobForWorkflowRun"]).request,
    getOrgPublicKey:
      new MoctokitRequestMocker<"/orgs/{org}/actions/secrets/public-key", "get">(agent, baseUrl, endpoints["actions"]["getOrgPublicKey"]).request,
    getOrgSecret:
      new MoctokitRequestMocker<"/orgs/{org}/actions/secrets/{secret_name}", "get">(agent, baseUrl, endpoints["actions"]["getOrgSecret"]).request,
    getOrgVariable:
      new MoctokitRequestMocker<"/orgs/{org}/actions/variables/{name}", "get">(agent, baseUrl, endpoints["actions"]["getOrgVariable"]).request,
    getPendingDeploymentsForRun:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/runs/{run_id}/pending_deployments", "get">(agent, baseUrl, endpoints["actions"]["getPendingDeploymentsForRun"]).request,
    getRepoPermissions:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/permissions", "get">(agent, baseUrl, endpoints["actions"]["getRepoPermissions"]).request,
    getRepoPublicKey:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/secrets/public-key", "get">(agent, baseUrl, endpoints["actions"]["getRepoPublicKey"]).request,
    getRepoRequiredWorkflow:
      new MoctokitRequestMocker<"/repos/{org}/{repo}/actions/required_workflows/{required_workflow_id_for_repo}", "get">(agent, baseUrl, endpoints["actions"]["getRepoRequiredWorkflow"]).request,
    getRepoRequiredWorkflowUsage:
      new MoctokitRequestMocker<"/repos/{org}/{repo}/actions/required_workflows/{required_workflow_id_for_repo}/timing", "get">(agent, baseUrl, endpoints["actions"]["getRepoRequiredWorkflowUsage"]).request,
    getRepoSecret:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/secrets/{secret_name}", "get">(agent, baseUrl, endpoints["actions"]["getRepoSecret"]).request,
    getRepoVariable:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/variables/{name}", "get">(agent, baseUrl, endpoints["actions"]["getRepoVariable"]).request,
    getRequiredWorkflow:
      new MoctokitRequestMocker<"/orgs/{org}/actions/required_workflows/{required_workflow_id}", "get">(agent, baseUrl, endpoints["actions"]["getRequiredWorkflow"]).request,
    getReviewsForRun:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/runs/{run_id}/approvals", "get">(agent, baseUrl, endpoints["actions"]["getReviewsForRun"]).request,
    getSelfHostedRunnerForOrg:
      new MoctokitRequestMocker<"/orgs/{org}/actions/runners/{runner_id}", "get">(agent, baseUrl, endpoints["actions"]["getSelfHostedRunnerForOrg"]).request,
    getSelfHostedRunnerForRepo:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/runners/{runner_id}", "get">(agent, baseUrl, endpoints["actions"]["getSelfHostedRunnerForRepo"]).request,
    getWorkflow:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/workflows/{workflow_id}", "get">(agent, baseUrl, endpoints["actions"]["getWorkflow"]).request,
    getWorkflowAccessToRepository:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/permissions/access", "get">(agent, baseUrl, endpoints["actions"]["getWorkflowAccessToRepository"]).request,
    getWorkflowRun:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/runs/{run_id}", "get">(agent, baseUrl, endpoints["actions"]["getWorkflowRun"]).request,
    getWorkflowRunAttempt:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/runs/{run_id}/attempts/{attempt_number}", "get">(agent, baseUrl, endpoints["actions"]["getWorkflowRunAttempt"]).request,
    getWorkflowRunUsage:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/runs/{run_id}/timing", "get">(agent, baseUrl, endpoints["actions"]["getWorkflowRunUsage"]).request,
    getWorkflowUsage:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/workflows/{workflow_id}/timing", "get">(agent, baseUrl, endpoints["actions"]["getWorkflowUsage"]).request,
    listArtifactsForRepo:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/artifacts", "get">(agent, baseUrl, endpoints["actions"]["listArtifactsForRepo"]).request,
    listEnvironmentSecrets:
      new MoctokitRequestMocker<"/repositories/{repository_id}/environments/{environment_name}/secrets", "get">(agent, baseUrl, endpoints["actions"]["listEnvironmentSecrets"]).request,
    listEnvironmentVariables:
      new MoctokitRequestMocker<"/repositories/{repository_id}/environments/{environment_name}/variables", "get">(agent, baseUrl, endpoints["actions"]["listEnvironmentVariables"]).request,
    listJobsForWorkflowRun:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/runs/{run_id}/jobs", "get">(agent, baseUrl, endpoints["actions"]["listJobsForWorkflowRun"]).request,
    listJobsForWorkflowRunAttempt:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/runs/{run_id}/attempts/{attempt_number}/jobs", "get">(agent, baseUrl, endpoints["actions"]["listJobsForWorkflowRunAttempt"]).request,
    listLabelsForSelfHostedRunnerForOrg:
      new MoctokitRequestMocker<"/orgs/{org}/actions/runners/{runner_id}/labels", "get">(agent, baseUrl, endpoints["actions"]["listLabelsForSelfHostedRunnerForOrg"]).request,
    listLabelsForSelfHostedRunnerForRepo:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/runners/{runner_id}/labels", "get">(agent, baseUrl, endpoints["actions"]["listLabelsForSelfHostedRunnerForRepo"]).request,
    listOrgSecrets:
      new MoctokitRequestMocker<"/orgs/{org}/actions/secrets", "get">(agent, baseUrl, endpoints["actions"]["listOrgSecrets"]).request,
    listOrgVariables:
      new MoctokitRequestMocker<"/orgs/{org}/actions/variables", "get">(agent, baseUrl, endpoints["actions"]["listOrgVariables"]).request,
    listRepoOrganizationSecrets:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/organization-secrets", "get">(agent, baseUrl, endpoints["actions"]["listRepoOrganizationSecrets"]).request,
    listRepoOrganizationVariables:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/organization-variables", "get">(agent, baseUrl, endpoints["actions"]["listRepoOrganizationVariables"]).request,
    listRepoRequiredWorkflows:
      new MoctokitRequestMocker<"/repos/{org}/{repo}/actions/required_workflows", "get">(agent, baseUrl, endpoints["actions"]["listRepoRequiredWorkflows"]).request,
    listRepoSecrets:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/secrets", "get">(agent, baseUrl, endpoints["actions"]["listRepoSecrets"]).request,
    listRepoVariables:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/variables", "get">(agent, baseUrl, endpoints["actions"]["listRepoVariables"]).request,
    listRepoWorkflows:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/workflows", "get">(agent, baseUrl, endpoints["actions"]["listRepoWorkflows"]).request,
    listRequiredWorkflowRuns:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/required_workflows/{required_workflow_id_for_repo}/runs", "get">(agent, baseUrl, endpoints["actions"]["listRequiredWorkflowRuns"]).request,
    listRequiredWorkflows:
      new MoctokitRequestMocker<"/orgs/{org}/actions/required_workflows", "get">(agent, baseUrl, endpoints["actions"]["listRequiredWorkflows"]).request,
    listRunnerApplicationsForOrg:
      new MoctokitRequestMocker<"/orgs/{org}/actions/runners/downloads", "get">(agent, baseUrl, endpoints["actions"]["listRunnerApplicationsForOrg"]).request,
    listRunnerApplicationsForRepo:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/runners/downloads", "get">(agent, baseUrl, endpoints["actions"]["listRunnerApplicationsForRepo"]).request,
    listSelectedReposForOrgSecret:
      new MoctokitRequestMocker<"/orgs/{org}/actions/secrets/{secret_name}/repositories", "get">(agent, baseUrl, endpoints["actions"]["listSelectedReposForOrgSecret"]).request,
    listSelectedReposForOrgVariable:
      new MoctokitRequestMocker<"/orgs/{org}/actions/variables/{name}/repositories", "get">(agent, baseUrl, endpoints["actions"]["listSelectedReposForOrgVariable"]).request,
    listSelectedRepositoriesEnabledGithubActionsOrganization:
      new MoctokitRequestMocker<"/orgs/{org}/actions/permissions/repositories", "get">(agent, baseUrl, endpoints["actions"]["listSelectedRepositoriesEnabledGithubActionsOrganization"]).request,
    listSelectedRepositoriesRequiredWorkflow:
      new MoctokitRequestMocker<"/orgs/{org}/actions/required_workflows/{required_workflow_id}/repositories", "get">(agent, baseUrl, endpoints["actions"]["listSelectedRepositoriesRequiredWorkflow"]).request,
    listSelfHostedRunnersForOrg:
      new MoctokitRequestMocker<"/orgs/{org}/actions/runners", "get">(agent, baseUrl, endpoints["actions"]["listSelfHostedRunnersForOrg"]).request,
    listSelfHostedRunnersForRepo:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/runners", "get">(agent, baseUrl, endpoints["actions"]["listSelfHostedRunnersForRepo"]).request,
    listWorkflowRunArtifacts:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/runs/{run_id}/artifacts", "get">(agent, baseUrl, endpoints["actions"]["listWorkflowRunArtifacts"]).request,
    listWorkflowRuns:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/workflows/{workflow_id}/runs", "get">(agent, baseUrl, endpoints["actions"]["listWorkflowRuns"]).request,
    listWorkflowRunsForRepo:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/runs", "get">(agent, baseUrl, endpoints["actions"]["listWorkflowRunsForRepo"]).request,
    reRunJobForWorkflowRun:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/jobs/{job_id}/rerun", "post">(agent, baseUrl, endpoints["actions"]["reRunJobForWorkflowRun"]).request,
    reRunWorkflow:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/runs/{run_id}/rerun", "post">(agent, baseUrl, endpoints["actions"]["reRunWorkflow"]).request,
    reRunWorkflowFailedJobs:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/runs/{run_id}/rerun-failed-jobs", "post">(agent, baseUrl, endpoints["actions"]["reRunWorkflowFailedJobs"]).request,
    removeAllCustomLabelsFromSelfHostedRunnerForOrg:
      new MoctokitRequestMocker<"/orgs/{org}/actions/runners/{runner_id}/labels", "delete">(agent, baseUrl, endpoints["actions"]["removeAllCustomLabelsFromSelfHostedRunnerForOrg"]).request,
    removeAllCustomLabelsFromSelfHostedRunnerForRepo:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/runners/{runner_id}/labels", "delete">(agent, baseUrl, endpoints["actions"]["removeAllCustomLabelsFromSelfHostedRunnerForRepo"]).request,
    removeCustomLabelFromSelfHostedRunnerForOrg:
      new MoctokitRequestMocker<"/orgs/{org}/actions/runners/{runner_id}/labels/{name}", "delete">(agent, baseUrl, endpoints["actions"]["removeCustomLabelFromSelfHostedRunnerForOrg"]).request,
    removeCustomLabelFromSelfHostedRunnerForRepo:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/runners/{runner_id}/labels/{name}", "delete">(agent, baseUrl, endpoints["actions"]["removeCustomLabelFromSelfHostedRunnerForRepo"]).request,
    removeSelectedRepoFromOrgSecret:
      new MoctokitRequestMocker<"/orgs/{org}/actions/secrets/{secret_name}/repositories/{repository_id}", "delete">(agent, baseUrl, endpoints["actions"]["removeSelectedRepoFromOrgSecret"]).request,
    removeSelectedRepoFromOrgVariable:
      new MoctokitRequestMocker<"/orgs/{org}/actions/variables/{name}/repositories/{repository_id}", "delete">(agent, baseUrl, endpoints["actions"]["removeSelectedRepoFromOrgVariable"]).request,
    removeSelectedRepoFromRequiredWorkflow:
      new MoctokitRequestMocker<"/orgs/{org}/actions/required_workflows/{required_workflow_id}/repositories/{repository_id}", "delete">(agent, baseUrl, endpoints["actions"]["removeSelectedRepoFromRequiredWorkflow"]).request,
    reviewCustomGatesForRun:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/runs/{run_id}/deployment_protection_rule", "post">(agent, baseUrl, endpoints["actions"]["reviewCustomGatesForRun"]).request,
    reviewPendingDeploymentsForRun:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/runs/{run_id}/pending_deployments", "post">(agent, baseUrl, endpoints["actions"]["reviewPendingDeploymentsForRun"]).request,
    setAllowedActionsOrganization:
      new MoctokitRequestMocker<"/orgs/{org}/actions/permissions/selected-actions", "put">(agent, baseUrl, endpoints["actions"]["setAllowedActionsOrganization"]).request,
    setAllowedActionsRepository:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/permissions/selected-actions", "put">(agent, baseUrl, endpoints["actions"]["setAllowedActionsRepository"]).request,
    setCustomLabelsForSelfHostedRunnerForOrg:
      new MoctokitRequestMocker<"/orgs/{org}/actions/runners/{runner_id}/labels", "put">(agent, baseUrl, endpoints["actions"]["setCustomLabelsForSelfHostedRunnerForOrg"]).request,
    setCustomLabelsForSelfHostedRunnerForRepo:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/runners/{runner_id}/labels", "put">(agent, baseUrl, endpoints["actions"]["setCustomLabelsForSelfHostedRunnerForRepo"]).request,
    setGithubActionsDefaultWorkflowPermissionsOrganization:
      new MoctokitRequestMocker<"/orgs/{org}/actions/permissions/workflow", "put">(agent, baseUrl, endpoints["actions"]["setGithubActionsDefaultWorkflowPermissionsOrganization"]).request,
    setGithubActionsDefaultWorkflowPermissionsRepository:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/permissions/workflow", "put">(agent, baseUrl, endpoints["actions"]["setGithubActionsDefaultWorkflowPermissionsRepository"]).request,
    setGithubActionsPermissionsOrganization:
      new MoctokitRequestMocker<"/orgs/{org}/actions/permissions", "put">(agent, baseUrl, endpoints["actions"]["setGithubActionsPermissionsOrganization"]).request,
    setGithubActionsPermissionsRepository:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/permissions", "put">(agent, baseUrl, endpoints["actions"]["setGithubActionsPermissionsRepository"]).request,
    setSelectedReposForOrgSecret:
      new MoctokitRequestMocker<"/orgs/{org}/actions/secrets/{secret_name}/repositories", "put">(agent, baseUrl, endpoints["actions"]["setSelectedReposForOrgSecret"]).request,
    setSelectedReposForOrgVariable:
      new MoctokitRequestMocker<"/orgs/{org}/actions/variables/{name}/repositories", "put">(agent, baseUrl, endpoints["actions"]["setSelectedReposForOrgVariable"]).request,
    setSelectedReposToRequiredWorkflow:
      new MoctokitRequestMocker<"/orgs/{org}/actions/required_workflows/{required_workflow_id}/repositories", "put">(agent, baseUrl, endpoints["actions"]["setSelectedReposToRequiredWorkflow"]).request,
    setSelectedRepositoriesEnabledGithubActionsOrganization:
      new MoctokitRequestMocker<"/orgs/{org}/actions/permissions/repositories", "put">(agent, baseUrl, endpoints["actions"]["setSelectedRepositoriesEnabledGithubActionsOrganization"]).request,
    setWorkflowAccessToRepository:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/permissions/access", "put">(agent, baseUrl, endpoints["actions"]["setWorkflowAccessToRepository"]).request,
    updateEnvironmentVariable:
      new MoctokitRequestMocker<"/repositories/{repository_id}/environments/{environment_name}/variables/{name}", "patch">(agent, baseUrl, endpoints["actions"]["updateEnvironmentVariable"]).request,
    updateOrgVariable:
      new MoctokitRequestMocker<"/orgs/{org}/actions/variables/{name}", "patch">(agent, baseUrl, endpoints["actions"]["updateOrgVariable"]).request,
    updateRepoVariable:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/actions/variables/{name}", "patch">(agent, baseUrl, endpoints["actions"]["updateRepoVariable"]).request,
    updateRequiredWorkflow:
      new MoctokitRequestMocker<"/orgs/{org}/actions/required_workflows/{required_workflow_id}", "patch">(agent, baseUrl, endpoints["actions"]["updateRequiredWorkflow"]).request,
  },
  activity: {
    checkRepoIsStarredByAuthenticatedUser:
      new MoctokitRequestMocker<"/user/starred/{owner}/{repo}", "get">(agent, baseUrl, endpoints["activity"]["checkRepoIsStarredByAuthenticatedUser"]).request,
    deleteRepoSubscription:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/subscription", "delete">(agent, baseUrl, endpoints["activity"]["deleteRepoSubscription"]).request,
    deleteThreadSubscription:
      new MoctokitRequestMocker<"/notifications/threads/{thread_id}/subscription", "delete">(agent, baseUrl, endpoints["activity"]["deleteThreadSubscription"]).request,
    getFeeds:
      new MoctokitRequestMocker<"/feeds", "get">(agent, baseUrl, endpoints["activity"]["getFeeds"]).request,
    getRepoSubscription:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/subscription", "get">(agent, baseUrl, endpoints["activity"]["getRepoSubscription"]).request,
    getThread:
      new MoctokitRequestMocker<"/notifications/threads/{thread_id}", "get">(agent, baseUrl, endpoints["activity"]["getThread"]).request,
    getThreadSubscriptionForAuthenticatedUser:
      new MoctokitRequestMocker<"/notifications/threads/{thread_id}/subscription", "get">(agent, baseUrl, endpoints["activity"]["getThreadSubscriptionForAuthenticatedUser"]).request,
    listEventsForAuthenticatedUser:
      new MoctokitRequestMocker<"/users/{username}/events", "get">(agent, baseUrl, endpoints["activity"]["listEventsForAuthenticatedUser"]).request,
    listNotificationsForAuthenticatedUser:
      new MoctokitRequestMocker<"/notifications", "get">(agent, baseUrl, endpoints["activity"]["listNotificationsForAuthenticatedUser"]).request,
    listOrgEventsForAuthenticatedUser:
      new MoctokitRequestMocker<"/users/{username}/events/orgs/{org}", "get">(agent, baseUrl, endpoints["activity"]["listOrgEventsForAuthenticatedUser"]).request,
    listPublicEvents:
      new MoctokitRequestMocker<"/events", "get">(agent, baseUrl, endpoints["activity"]["listPublicEvents"]).request,
    listPublicEventsForRepoNetwork:
      new MoctokitRequestMocker<"/networks/{owner}/{repo}/events", "get">(agent, baseUrl, endpoints["activity"]["listPublicEventsForRepoNetwork"]).request,
    listPublicEventsForUser:
      new MoctokitRequestMocker<"/users/{username}/events/public", "get">(agent, baseUrl, endpoints["activity"]["listPublicEventsForUser"]).request,
    listPublicOrgEvents:
      new MoctokitRequestMocker<"/orgs/{org}/events", "get">(agent, baseUrl, endpoints["activity"]["listPublicOrgEvents"]).request,
    listReceivedEventsForUser:
      new MoctokitRequestMocker<"/users/{username}/received_events", "get">(agent, baseUrl, endpoints["activity"]["listReceivedEventsForUser"]).request,
    listReceivedPublicEventsForUser:
      new MoctokitRequestMocker<"/users/{username}/received_events/public", "get">(agent, baseUrl, endpoints["activity"]["listReceivedPublicEventsForUser"]).request,
    listRepoEvents:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/events", "get">(agent, baseUrl, endpoints["activity"]["listRepoEvents"]).request,
    listRepoNotificationsForAuthenticatedUser:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/notifications", "get">(agent, baseUrl, endpoints["activity"]["listRepoNotificationsForAuthenticatedUser"]).request,
    listReposStarredByAuthenticatedUser:
      new MoctokitRequestMocker<"/user/starred", "get">(agent, baseUrl, endpoints["activity"]["listReposStarredByAuthenticatedUser"]).request,
    listReposStarredByUser:
      new MoctokitRequestMocker<"/users/{username}/starred", "get">(agent, baseUrl, endpoints["activity"]["listReposStarredByUser"]).request,
    listReposWatchedByUser:
      new MoctokitRequestMocker<"/users/{username}/subscriptions", "get">(agent, baseUrl, endpoints["activity"]["listReposWatchedByUser"]).request,
    listStargazersForRepo:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/stargazers", "get">(agent, baseUrl, endpoints["activity"]["listStargazersForRepo"]).request,
    listWatchedReposForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/subscriptions", "get">(agent, baseUrl, endpoints["activity"]["listWatchedReposForAuthenticatedUser"]).request,
    listWatchersForRepo:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/subscribers", "get">(agent, baseUrl, endpoints["activity"]["listWatchersForRepo"]).request,
    markNotificationsAsRead:
      new MoctokitRequestMocker<"/notifications", "put">(agent, baseUrl, endpoints["activity"]["markNotificationsAsRead"]).request,
    markRepoNotificationsAsRead:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/notifications", "put">(agent, baseUrl, endpoints["activity"]["markRepoNotificationsAsRead"]).request,
    markThreadAsRead:
      new MoctokitRequestMocker<"/notifications/threads/{thread_id}", "patch">(agent, baseUrl, endpoints["activity"]["markThreadAsRead"]).request,
    setRepoSubscription:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/subscription", "put">(agent, baseUrl, endpoints["activity"]["setRepoSubscription"]).request,
    setThreadSubscription:
      new MoctokitRequestMocker<"/notifications/threads/{thread_id}/subscription", "put">(agent, baseUrl, endpoints["activity"]["setThreadSubscription"]).request,
    starRepoForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/starred/{owner}/{repo}", "put">(agent, baseUrl, endpoints["activity"]["starRepoForAuthenticatedUser"]).request,
    unstarRepoForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/starred/{owner}/{repo}", "delete">(agent, baseUrl, endpoints["activity"]["unstarRepoForAuthenticatedUser"]).request,
  },
  apps: {
    addRepoToInstallation:
      new MoctokitRequestMocker<"/user/installations/{installation_id}/repositories/{repository_id}", "put">(agent, baseUrl, endpoints["apps"]["addRepoToInstallation"]).request,
    addRepoToInstallationForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/installations/{installation_id}/repositories/{repository_id}", "put">(agent, baseUrl, endpoints["apps"]["addRepoToInstallationForAuthenticatedUser"]).request,
    checkToken:
      new MoctokitRequestMocker<"/applications/{client_id}/token", "post">(agent, baseUrl, endpoints["apps"]["checkToken"]).request,
    createFromManifest:
      new MoctokitRequestMocker<"/app-manifests/{code}/conversions", "post">(agent, baseUrl, endpoints["apps"]["createFromManifest"]).request,
    createInstallationAccessToken:
      new MoctokitRequestMocker<"/app/installations/{installation_id}/access_tokens", "post">(agent, baseUrl, endpoints["apps"]["createInstallationAccessToken"]).request,
    deleteAuthorization:
      new MoctokitRequestMocker<"/applications/{client_id}/grant", "delete">(agent, baseUrl, endpoints["apps"]["deleteAuthorization"]).request,
    deleteInstallation:
      new MoctokitRequestMocker<"/app/installations/{installation_id}", "delete">(agent, baseUrl, endpoints["apps"]["deleteInstallation"]).request,
    deleteToken:
      new MoctokitRequestMocker<"/applications/{client_id}/token", "delete">(agent, baseUrl, endpoints["apps"]["deleteToken"]).request,
    getAuthenticated:
      new MoctokitRequestMocker<"/app", "get">(agent, baseUrl, endpoints["apps"]["getAuthenticated"]).request,
    getBySlug:
      new MoctokitRequestMocker<"/apps/{app_slug}", "get">(agent, baseUrl, endpoints["apps"]["getBySlug"]).request,
    getInstallation:
      new MoctokitRequestMocker<"/app/installations/{installation_id}", "get">(agent, baseUrl, endpoints["apps"]["getInstallation"]).request,
    getOrgInstallation:
      new MoctokitRequestMocker<"/orgs/{org}/installation", "get">(agent, baseUrl, endpoints["apps"]["getOrgInstallation"]).request,
    getRepoInstallation:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/installation", "get">(agent, baseUrl, endpoints["apps"]["getRepoInstallation"]).request,
    getSubscriptionPlanForAccount:
      new MoctokitRequestMocker<"/marketplace_listing/accounts/{account_id}", "get">(agent, baseUrl, endpoints["apps"]["getSubscriptionPlanForAccount"]).request,
    getSubscriptionPlanForAccountStubbed:
      new MoctokitRequestMocker<"/marketplace_listing/stubbed/accounts/{account_id}", "get">(agent, baseUrl, endpoints["apps"]["getSubscriptionPlanForAccountStubbed"]).request,
    getUserInstallation:
      new MoctokitRequestMocker<"/users/{username}/installation", "get">(agent, baseUrl, endpoints["apps"]["getUserInstallation"]).request,
    getWebhookConfigForApp:
      new MoctokitRequestMocker<"/app/hook/config", "get">(agent, baseUrl, endpoints["apps"]["getWebhookConfigForApp"]).request,
    getWebhookDelivery:
      new MoctokitRequestMocker<"/app/hook/deliveries/{delivery_id}", "get">(agent, baseUrl, endpoints["apps"]["getWebhookDelivery"]).request,
    listAccountsForPlan:
      new MoctokitRequestMocker<"/marketplace_listing/plans/{plan_id}/accounts", "get">(agent, baseUrl, endpoints["apps"]["listAccountsForPlan"]).request,
    listAccountsForPlanStubbed:
      new MoctokitRequestMocker<"/marketplace_listing/stubbed/plans/{plan_id}/accounts", "get">(agent, baseUrl, endpoints["apps"]["listAccountsForPlanStubbed"]).request,
    listInstallationReposForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/installations/{installation_id}/repositories", "get">(agent, baseUrl, endpoints["apps"]["listInstallationReposForAuthenticatedUser"]).request,
    listInstallationRequestsForAuthenticatedApp:
      new MoctokitRequestMocker<"/app/installation-requests", "get">(agent, baseUrl, endpoints["apps"]["listInstallationRequestsForAuthenticatedApp"]).request,
    listInstallations:
      new MoctokitRequestMocker<"/app/installations", "get">(agent, baseUrl, endpoints["apps"]["listInstallations"]).request,
    listInstallationsForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/installations", "get">(agent, baseUrl, endpoints["apps"]["listInstallationsForAuthenticatedUser"]).request,
    listPlans:
      new MoctokitRequestMocker<"/marketplace_listing/plans", "get">(agent, baseUrl, endpoints["apps"]["listPlans"]).request,
    listPlansStubbed:
      new MoctokitRequestMocker<"/marketplace_listing/stubbed/plans", "get">(agent, baseUrl, endpoints["apps"]["listPlansStubbed"]).request,
    listReposAccessibleToInstallation:
      new MoctokitRequestMocker<"/installation/repositories", "get">(agent, baseUrl, endpoints["apps"]["listReposAccessibleToInstallation"]).request,
    listSubscriptionsForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/marketplace_purchases", "get">(agent, baseUrl, endpoints["apps"]["listSubscriptionsForAuthenticatedUser"]).request,
    listSubscriptionsForAuthenticatedUserStubbed:
      new MoctokitRequestMocker<"/user/marketplace_purchases/stubbed", "get">(agent, baseUrl, endpoints["apps"]["listSubscriptionsForAuthenticatedUserStubbed"]).request,
    listWebhookDeliveries:
      new MoctokitRequestMocker<"/app/hook/deliveries", "get">(agent, baseUrl, endpoints["apps"]["listWebhookDeliveries"]).request,
    redeliverWebhookDelivery:
      new MoctokitRequestMocker<"/app/hook/deliveries/{delivery_id}/attempts", "post">(agent, baseUrl, endpoints["apps"]["redeliverWebhookDelivery"]).request,
    removeRepoFromInstallation:
      new MoctokitRequestMocker<"/user/installations/{installation_id}/repositories/{repository_id}", "delete">(agent, baseUrl, endpoints["apps"]["removeRepoFromInstallation"]).request,
    removeRepoFromInstallationForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/installations/{installation_id}/repositories/{repository_id}", "delete">(agent, baseUrl, endpoints["apps"]["removeRepoFromInstallationForAuthenticatedUser"]).request,
    resetToken:
      new MoctokitRequestMocker<"/applications/{client_id}/token", "patch">(agent, baseUrl, endpoints["apps"]["resetToken"]).request,
    revokeInstallationAccessToken:
      new MoctokitRequestMocker<"/installation/token", "delete">(agent, baseUrl, endpoints["apps"]["revokeInstallationAccessToken"]).request,
    scopeToken:
      new MoctokitRequestMocker<"/applications/{client_id}/token/scoped", "post">(agent, baseUrl, endpoints["apps"]["scopeToken"]).request,
    suspendInstallation:
      new MoctokitRequestMocker<"/app/installations/{installation_id}/suspended", "put">(agent, baseUrl, endpoints["apps"]["suspendInstallation"]).request,
    unsuspendInstallation:
      new MoctokitRequestMocker<"/app/installations/{installation_id}/suspended", "delete">(agent, baseUrl, endpoints["apps"]["unsuspendInstallation"]).request,
    updateWebhookConfigForApp:
      new MoctokitRequestMocker<"/app/hook/config", "patch">(agent, baseUrl, endpoints["apps"]["updateWebhookConfigForApp"]).request,
  },
  billing: {
    getGithubActionsBillingOrg:
      new MoctokitRequestMocker<"/orgs/{org}/settings/billing/actions", "get">(agent, baseUrl, endpoints["billing"]["getGithubActionsBillingOrg"]).request,
    getGithubActionsBillingUser:
      new MoctokitRequestMocker<"/users/{username}/settings/billing/actions", "get">(agent, baseUrl, endpoints["billing"]["getGithubActionsBillingUser"]).request,
    getGithubPackagesBillingOrg:
      new MoctokitRequestMocker<"/orgs/{org}/settings/billing/packages", "get">(agent, baseUrl, endpoints["billing"]["getGithubPackagesBillingOrg"]).request,
    getGithubPackagesBillingUser:
      new MoctokitRequestMocker<"/users/{username}/settings/billing/packages", "get">(agent, baseUrl, endpoints["billing"]["getGithubPackagesBillingUser"]).request,
    getSharedStorageBillingOrg:
      new MoctokitRequestMocker<"/orgs/{org}/settings/billing/shared-storage", "get">(agent, baseUrl, endpoints["billing"]["getSharedStorageBillingOrg"]).request,
    getSharedStorageBillingUser:
      new MoctokitRequestMocker<"/users/{username}/settings/billing/shared-storage", "get">(agent, baseUrl, endpoints["billing"]["getSharedStorageBillingUser"]).request,
  },
  checks: {
    create:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/check-runs", "post">(agent, baseUrl, endpoints["checks"]["create"]).request,
    createSuite:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/check-suites", "post">(agent, baseUrl, endpoints["checks"]["createSuite"]).request,
    get: new MoctokitRequestMocker<"/repos/{owner}/{repo}/check-runs/{check_run_id}", "get">(agent, baseUrl, endpoints["checks"]["get"]).request,
    getSuite:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/check-suites/{check_suite_id}", "get">(agent, baseUrl, endpoints["checks"]["getSuite"]).request,
    listAnnotations:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/check-runs/{check_run_id}/annotations", "get">(agent, baseUrl, endpoints["checks"]["listAnnotations"]).request,
    listForRef:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/commits/{ref}/check-runs", "get">(agent, baseUrl, endpoints["checks"]["listForRef"]).request,
    listForSuite:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/check-suites/{check_suite_id}/check-runs", "get">(agent, baseUrl, endpoints["checks"]["listForSuite"]).request,
    listSuitesForRef:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/commits/{ref}/check-suites", "get">(agent, baseUrl, endpoints["checks"]["listSuitesForRef"]).request,
    rerequestRun:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/check-runs/{check_run_id}/rerequest", "post">(agent, baseUrl, endpoints["checks"]["rerequestRun"]).request,
    rerequestSuite:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/check-suites/{check_suite_id}/rerequest", "post">(agent, baseUrl, endpoints["checks"]["rerequestSuite"]).request,
    setSuitesPreferences:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/check-suites/preferences", "patch">(agent, baseUrl, endpoints["checks"]["setSuitesPreferences"]).request,
    update:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/check-runs/{check_run_id}", "patch">(agent, baseUrl, endpoints["checks"]["update"]).request,
  },
  codeScanning: {
    deleteAnalysis:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/code-scanning/analyses/{analysis_id}", "delete">(agent, baseUrl, endpoints["codeScanning"]["deleteAnalysis"]).request,
    getAlert:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/code-scanning/alerts/{alert_number}", "get">(agent, baseUrl, endpoints["codeScanning"]["getAlert"]).request,
    getAnalysis:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/code-scanning/analyses/{analysis_id}", "get">(agent, baseUrl, endpoints["codeScanning"]["getAnalysis"]).request,
    getCodeqlDatabase:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/code-scanning/codeql/databases/{language}", "get">(agent, baseUrl, endpoints["codeScanning"]["getCodeqlDatabase"]).request,
    getDefaultSetup:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/code-scanning/default-setup", "get">(agent, baseUrl, endpoints["codeScanning"]["getDefaultSetup"]).request,
    getSarif:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/code-scanning/sarifs/{sarif_id}", "get">(agent, baseUrl, endpoints["codeScanning"]["getSarif"]).request,
    listAlertInstances:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/code-scanning/alerts/{alert_number}/instances", "get">(agent, baseUrl, endpoints["codeScanning"]["listAlertInstances"]).request,
    listAlertsForOrg:
      new MoctokitRequestMocker<"/orgs/{org}/code-scanning/alerts", "get">(agent, baseUrl, endpoints["codeScanning"]["listAlertsForOrg"]).request,
    listAlertsForRepo:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/code-scanning/alerts", "get">(agent, baseUrl, endpoints["codeScanning"]["listAlertsForRepo"]).request,
    listAlertsInstances:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/code-scanning/alerts/{alert_number}/instances", "get">(agent, baseUrl, endpoints["codeScanning"]["listAlertsInstances"]).request,
    listCodeqlDatabases:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/code-scanning/codeql/databases", "get">(agent, baseUrl, endpoints["codeScanning"]["listCodeqlDatabases"]).request,
    listRecentAnalyses:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/code-scanning/analyses", "get">(agent, baseUrl, endpoints["codeScanning"]["listRecentAnalyses"]).request,
    updateAlert:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/code-scanning/alerts/{alert_number}", "patch">(agent, baseUrl, endpoints["codeScanning"]["updateAlert"]).request,
    updateDefaultSetup:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/code-scanning/default-setup", "patch">(agent, baseUrl, endpoints["codeScanning"]["updateDefaultSetup"]).request,
    uploadSarif:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/code-scanning/sarifs", "post">(agent, baseUrl, endpoints["codeScanning"]["uploadSarif"]).request,
  },
  codesOfConduct: {
    getAllCodesOfConduct:
      new MoctokitRequestMocker<"/codes_of_conduct", "get">(agent, baseUrl, endpoints["codesOfConduct"]["getAllCodesOfConduct"]).request,
    getConductCode:
      new MoctokitRequestMocker<"/codes_of_conduct/{key}", "get">(agent, baseUrl, endpoints["codesOfConduct"]["getConductCode"]).request,
  },
  codespaces: {
    addRepositoryForSecretForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/codespaces/secrets/{secret_name}/repositories/{repository_id}", "put">(agent, baseUrl, endpoints["codespaces"]["addRepositoryForSecretForAuthenticatedUser"]).request,
    addSelectedRepoToOrgSecret:
      new MoctokitRequestMocker<"/orgs/{org}/codespaces/secrets/{secret_name}/repositories/{repository_id}", "put">(agent, baseUrl, endpoints["codespaces"]["addSelectedRepoToOrgSecret"]).request,
    codespaceMachinesForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/codespaces/{codespace_name}/machines", "get">(agent, baseUrl, endpoints["codespaces"]["codespaceMachinesForAuthenticatedUser"]).request,
    createForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/codespaces", "post">(agent, baseUrl, endpoints["codespaces"]["createForAuthenticatedUser"]).request,
    createOrUpdateOrgSecret:
      new MoctokitRequestMocker<"/orgs/{org}/codespaces/secrets/{secret_name}", "put">(agent, baseUrl, endpoints["codespaces"]["createOrUpdateOrgSecret"]).request,
    createOrUpdateRepoSecret:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/codespaces/secrets/{secret_name}", "put">(agent, baseUrl, endpoints["codespaces"]["createOrUpdateRepoSecret"]).request,
    createOrUpdateSecretForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/codespaces/secrets/{secret_name}", "put">(agent, baseUrl, endpoints["codespaces"]["createOrUpdateSecretForAuthenticatedUser"]).request,
    createWithPrForAuthenticatedUser:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/pulls/{pull_number}/codespaces", "post">(agent, baseUrl, endpoints["codespaces"]["createWithPrForAuthenticatedUser"]).request,
    createWithRepoForAuthenticatedUser:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/codespaces", "post">(agent, baseUrl, endpoints["codespaces"]["createWithRepoForAuthenticatedUser"]).request,
    deleteCodespacesBillingUsers:
      new MoctokitRequestMocker<"/orgs/{org}/codespaces/billing/selected_users", "delete">(agent, baseUrl, endpoints["codespaces"]["deleteCodespacesBillingUsers"]).request,
    deleteForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/codespaces/{codespace_name}", "delete">(agent, baseUrl, endpoints["codespaces"]["deleteForAuthenticatedUser"]).request,
    deleteFromOrganization:
      new MoctokitRequestMocker<"/orgs/{org}/members/{username}/codespaces/{codespace_name}", "delete">(agent, baseUrl, endpoints["codespaces"]["deleteFromOrganization"]).request,
    deleteOrgSecret:
      new MoctokitRequestMocker<"/orgs/{org}/codespaces/secrets/{secret_name}", "delete">(agent, baseUrl, endpoints["codespaces"]["deleteOrgSecret"]).request,
    deleteRepoSecret:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/codespaces/secrets/{secret_name}", "delete">(agent, baseUrl, endpoints["codespaces"]["deleteRepoSecret"]).request,
    deleteSecretForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/codespaces/secrets/{secret_name}", "delete">(agent, baseUrl, endpoints["codespaces"]["deleteSecretForAuthenticatedUser"]).request,
    exportForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/codespaces/{codespace_name}/exports", "post">(agent, baseUrl, endpoints["codespaces"]["exportForAuthenticatedUser"]).request,
    getCodespacesForUserInOrg:
      new MoctokitRequestMocker<"/orgs/{org}/members/{username}/codespaces", "get">(agent, baseUrl, endpoints["codespaces"]["getCodespacesForUserInOrg"]).request,
    getExportDetailsForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/codespaces/{codespace_name}/exports/{export_id}", "get">(agent, baseUrl, endpoints["codespaces"]["getExportDetailsForAuthenticatedUser"]).request,
    getForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/codespaces/{codespace_name}", "get">(agent, baseUrl, endpoints["codespaces"]["getForAuthenticatedUser"]).request,
    getOrgPublicKey:
      new MoctokitRequestMocker<"/orgs/{org}/codespaces/secrets/public-key", "get">(agent, baseUrl, endpoints["codespaces"]["getOrgPublicKey"]).request,
    getOrgSecret:
      new MoctokitRequestMocker<"/orgs/{org}/codespaces/secrets/{secret_name}", "get">(agent, baseUrl, endpoints["codespaces"]["getOrgSecret"]).request,
    getPublicKeyForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/codespaces/secrets/public-key", "get">(agent, baseUrl, endpoints["codespaces"]["getPublicKeyForAuthenticatedUser"]).request,
    getRepoPublicKey:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/codespaces/secrets/public-key", "get">(agent, baseUrl, endpoints["codespaces"]["getRepoPublicKey"]).request,
    getRepoSecret:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/codespaces/secrets/{secret_name}", "get">(agent, baseUrl, endpoints["codespaces"]["getRepoSecret"]).request,
    getSecretForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/codespaces/secrets/{secret_name}", "get">(agent, baseUrl, endpoints["codespaces"]["getSecretForAuthenticatedUser"]).request,
    listDevcontainersInRepositoryForAuthenticatedUser:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/codespaces/devcontainers", "get">(agent, baseUrl, endpoints["codespaces"]["listDevcontainersInRepositoryForAuthenticatedUser"]).request,
    listForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/codespaces", "get">(agent, baseUrl, endpoints["codespaces"]["listForAuthenticatedUser"]).request,
    listInOrganization:
      new MoctokitRequestMocker<"/orgs/{org}/codespaces", "get">(agent, baseUrl, endpoints["codespaces"]["listInOrganization"]).request,
    listInRepositoryForAuthenticatedUser:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/codespaces", "get">(agent, baseUrl, endpoints["codespaces"]["listInRepositoryForAuthenticatedUser"]).request,
    listOrgSecrets:
      new MoctokitRequestMocker<"/orgs/{org}/codespaces/secrets", "get">(agent, baseUrl, endpoints["codespaces"]["listOrgSecrets"]).request,
    listRepoSecrets:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/codespaces/secrets", "get">(agent, baseUrl, endpoints["codespaces"]["listRepoSecrets"]).request,
    listRepositoriesForSecretForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/codespaces/secrets/{secret_name}/repositories", "get">(agent, baseUrl, endpoints["codespaces"]["listRepositoriesForSecretForAuthenticatedUser"]).request,
    listSecretsForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/codespaces/secrets", "get">(agent, baseUrl, endpoints["codespaces"]["listSecretsForAuthenticatedUser"]).request,
    listSelectedReposForOrgSecret:
      new MoctokitRequestMocker<"/orgs/{org}/codespaces/secrets/{secret_name}/repositories", "get">(agent, baseUrl, endpoints["codespaces"]["listSelectedReposForOrgSecret"]).request,
    preFlightWithRepoForAuthenticatedUser:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/codespaces/new", "get">(agent, baseUrl, endpoints["codespaces"]["preFlightWithRepoForAuthenticatedUser"]).request,
    publishForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/codespaces/{codespace_name}/publish", "post">(agent, baseUrl, endpoints["codespaces"]["publishForAuthenticatedUser"]).request,
    removeRepositoryForSecretForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/codespaces/secrets/{secret_name}/repositories/{repository_id}", "delete">(agent, baseUrl, endpoints["codespaces"]["removeRepositoryForSecretForAuthenticatedUser"]).request,
    removeSelectedRepoFromOrgSecret:
      new MoctokitRequestMocker<"/orgs/{org}/codespaces/secrets/{secret_name}/repositories/{repository_id}", "delete">(agent, baseUrl, endpoints["codespaces"]["removeSelectedRepoFromOrgSecret"]).request,
    repoMachinesForAuthenticatedUser:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/codespaces/machines", "get">(agent, baseUrl, endpoints["codespaces"]["repoMachinesForAuthenticatedUser"]).request,
    setCodespacesBilling:
      new MoctokitRequestMocker<"/orgs/{org}/codespaces/billing", "put">(agent, baseUrl, endpoints["codespaces"]["setCodespacesBilling"]).request,
    setCodespacesBillingUsers:
      new MoctokitRequestMocker<"/orgs/{org}/codespaces/billing/selected_users", "post">(agent, baseUrl, endpoints["codespaces"]["setCodespacesBillingUsers"]).request,
    setRepositoriesForSecretForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/codespaces/secrets/{secret_name}/repositories", "put">(agent, baseUrl, endpoints["codespaces"]["setRepositoriesForSecretForAuthenticatedUser"]).request,
    setSelectedReposForOrgSecret:
      new MoctokitRequestMocker<"/orgs/{org}/codespaces/secrets/{secret_name}/repositories", "put">(agent, baseUrl, endpoints["codespaces"]["setSelectedReposForOrgSecret"]).request,
    startForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/codespaces/{codespace_name}/start", "post">(agent, baseUrl, endpoints["codespaces"]["startForAuthenticatedUser"]).request,
    stopForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/codespaces/{codespace_name}/stop", "post">(agent, baseUrl, endpoints["codespaces"]["stopForAuthenticatedUser"]).request,
    stopInOrganization:
      new MoctokitRequestMocker<"/orgs/{org}/members/{username}/codespaces/{codespace_name}/stop", "post">(agent, baseUrl, endpoints["codespaces"]["stopInOrganization"]).request,
    updateForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/codespaces/{codespace_name}", "patch">(agent, baseUrl, endpoints["codespaces"]["updateForAuthenticatedUser"]).request,
  },
  dependabot: {
    addSelectedRepoToOrgSecret:
      new MoctokitRequestMocker<"/orgs/{org}/dependabot/secrets/{secret_name}/repositories/{repository_id}", "put">(agent, baseUrl, endpoints["dependabot"]["addSelectedRepoToOrgSecret"]).request,
    createOrUpdateOrgSecret:
      new MoctokitRequestMocker<"/orgs/{org}/dependabot/secrets/{secret_name}", "put">(agent, baseUrl, endpoints["dependabot"]["createOrUpdateOrgSecret"]).request,
    createOrUpdateRepoSecret:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/dependabot/secrets/{secret_name}", "put">(agent, baseUrl, endpoints["dependabot"]["createOrUpdateRepoSecret"]).request,
    deleteOrgSecret:
      new MoctokitRequestMocker<"/orgs/{org}/dependabot/secrets/{secret_name}", "delete">(agent, baseUrl, endpoints["dependabot"]["deleteOrgSecret"]).request,
    deleteRepoSecret:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/dependabot/secrets/{secret_name}", "delete">(agent, baseUrl, endpoints["dependabot"]["deleteRepoSecret"]).request,
    getAlert:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/dependabot/alerts/{alert_number}", "get">(agent, baseUrl, endpoints["dependabot"]["getAlert"]).request,
    getOrgPublicKey:
      new MoctokitRequestMocker<"/orgs/{org}/dependabot/secrets/public-key", "get">(agent, baseUrl, endpoints["dependabot"]["getOrgPublicKey"]).request,
    getOrgSecret:
      new MoctokitRequestMocker<"/orgs/{org}/dependabot/secrets/{secret_name}", "get">(agent, baseUrl, endpoints["dependabot"]["getOrgSecret"]).request,
    getRepoPublicKey:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/dependabot/secrets/public-key", "get">(agent, baseUrl, endpoints["dependabot"]["getRepoPublicKey"]).request,
    getRepoSecret:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/dependabot/secrets/{secret_name}", "get">(agent, baseUrl, endpoints["dependabot"]["getRepoSecret"]).request,
    listAlertsForEnterprise:
      new MoctokitRequestMocker<"/enterprises/{enterprise}/dependabot/alerts", "get">(agent, baseUrl, endpoints["dependabot"]["listAlertsForEnterprise"]).request,
    listAlertsForOrg:
      new MoctokitRequestMocker<"/orgs/{org}/dependabot/alerts", "get">(agent, baseUrl, endpoints["dependabot"]["listAlertsForOrg"]).request,
    listAlertsForRepo:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/dependabot/alerts", "get">(agent, baseUrl, endpoints["dependabot"]["listAlertsForRepo"]).request,
    listOrgSecrets:
      new MoctokitRequestMocker<"/orgs/{org}/dependabot/secrets", "get">(agent, baseUrl, endpoints["dependabot"]["listOrgSecrets"]).request,
    listRepoSecrets:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/dependabot/secrets", "get">(agent, baseUrl, endpoints["dependabot"]["listRepoSecrets"]).request,
    listSelectedReposForOrgSecret:
      new MoctokitRequestMocker<"/orgs/{org}/dependabot/secrets/{secret_name}/repositories", "get">(agent, baseUrl, endpoints["dependabot"]["listSelectedReposForOrgSecret"]).request,
    removeSelectedRepoFromOrgSecret:
      new MoctokitRequestMocker<"/orgs/{org}/dependabot/secrets/{secret_name}/repositories/{repository_id}", "delete">(agent, baseUrl, endpoints["dependabot"]["removeSelectedRepoFromOrgSecret"]).request,
    setSelectedReposForOrgSecret:
      new MoctokitRequestMocker<"/orgs/{org}/dependabot/secrets/{secret_name}/repositories", "put">(agent, baseUrl, endpoints["dependabot"]["setSelectedReposForOrgSecret"]).request,
    updateAlert:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/dependabot/alerts/{alert_number}", "patch">(agent, baseUrl, endpoints["dependabot"]["updateAlert"]).request,
  },
  dependencyGraph: {
    createRepositorySnapshot:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/dependency-graph/snapshots", "post">(agent, baseUrl, endpoints["dependencyGraph"]["createRepositorySnapshot"]).request,
    diffRange:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/dependency-graph/compare/{basehead}", "get">(agent, baseUrl, endpoints["dependencyGraph"]["diffRange"]).request,
    exportSbom:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/dependency-graph/sbom", "get">(agent, baseUrl, endpoints["dependencyGraph"]["exportSbom"]).request,
  },
  emojis: {
    get: new MoctokitRequestMocker<"/emojis", "get">(agent, baseUrl, endpoints["emojis"]["get"]).request,
  },
  gists: {
    checkIsStarred:
      new MoctokitRequestMocker<"/gists/{gist_id}/star", "get">(agent, baseUrl, endpoints["gists"]["checkIsStarred"]).request,
    create:
      new MoctokitRequestMocker<"/gists", "post">(agent, baseUrl, endpoints["gists"]["create"]).request,
    createComment:
      new MoctokitRequestMocker<"/gists/{gist_id}/comments", "post">(agent, baseUrl, endpoints["gists"]["createComment"]).request,
    delete:
      new MoctokitRequestMocker<"/gists/{gist_id}", "delete">(agent, baseUrl, endpoints["gists"]["delete"]).request,
    deleteComment:
      new MoctokitRequestMocker<"/gists/{gist_id}/comments/{comment_id}", "delete">(agent, baseUrl, endpoints["gists"]["deleteComment"]).request,
    fork: new MoctokitRequestMocker<"/gists/{gist_id}/forks", "post">(agent, baseUrl, endpoints["gists"]["fork"]).request,
    get: new MoctokitRequestMocker<"/gists/{gist_id}", "get">(agent, baseUrl, endpoints["gists"]["get"]).request,
    getComment:
      new MoctokitRequestMocker<"/gists/{gist_id}/comments/{comment_id}", "get">(agent, baseUrl, endpoints["gists"]["getComment"]).request,
    getRevision:
      new MoctokitRequestMocker<"/gists/{gist_id}/{sha}", "get">(agent, baseUrl, endpoints["gists"]["getRevision"]).request,
    list: new MoctokitRequestMocker<"/gists", "get">(agent, baseUrl, endpoints["gists"]["list"]).request,
    listComments:
      new MoctokitRequestMocker<"/gists/{gist_id}/comments", "get">(agent, baseUrl, endpoints["gists"]["listComments"]).request,
    listCommits:
      new MoctokitRequestMocker<"/gists/{gist_id}/commits", "get">(agent, baseUrl, endpoints["gists"]["listCommits"]).request,
    listForUser:
      new MoctokitRequestMocker<"/users/{username}/gists", "get">(agent, baseUrl, endpoints["gists"]["listForUser"]).request,
    listForks:
      new MoctokitRequestMocker<"/gists/{gist_id}/forks", "get">(agent, baseUrl, endpoints["gists"]["listForks"]).request,
    listPublic:
      new MoctokitRequestMocker<"/gists/public", "get">(agent, baseUrl, endpoints["gists"]["listPublic"]).request,
    listStarred:
      new MoctokitRequestMocker<"/gists/starred", "get">(agent, baseUrl, endpoints["gists"]["listStarred"]).request,
    star: new MoctokitRequestMocker<"/gists/{gist_id}/star", "put">(agent, baseUrl, endpoints["gists"]["star"]).request,
    unstar:
      new MoctokitRequestMocker<"/gists/{gist_id}/star", "delete">(agent, baseUrl, endpoints["gists"]["unstar"]).request,
    update:
      new MoctokitRequestMocker<"/gists/{gist_id}", "patch">(agent, baseUrl, endpoints["gists"]["update"]).request,
    updateComment:
      new MoctokitRequestMocker<"/gists/{gist_id}/comments/{comment_id}", "patch">(agent, baseUrl, endpoints["gists"]["updateComment"]).request,
  },
  git: {
    createBlob:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/git/blobs", "post">(agent, baseUrl, endpoints["git"]["createBlob"]).request,
    createCommit:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/git/commits", "post">(agent, baseUrl, endpoints["git"]["createCommit"]).request,
    createRef:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/git/refs", "post">(agent, baseUrl, endpoints["git"]["createRef"]).request,
    createTag:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/git/tags", "post">(agent, baseUrl, endpoints["git"]["createTag"]).request,
    createTree:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/git/trees", "post">(agent, baseUrl, endpoints["git"]["createTree"]).request,
    deleteRef:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/git/refs/{ref}", "delete">(agent, baseUrl, endpoints["git"]["deleteRef"]).request,
    getBlob:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/git/blobs/{file_sha}", "get">(agent, baseUrl, endpoints["git"]["getBlob"]).request,
    getCommit:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/git/commits/{commit_sha}", "get">(agent, baseUrl, endpoints["git"]["getCommit"]).request,
    getRef:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/git/ref/{ref}", "get">(agent, baseUrl, endpoints["git"]["getRef"]).request,
    getTag:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/git/tags/{tag_sha}", "get">(agent, baseUrl, endpoints["git"]["getTag"]).request,
    getTree:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/git/trees/{tree_sha}", "get">(agent, baseUrl, endpoints["git"]["getTree"]).request,
    listMatchingRefs:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/git/matching-refs/{ref}", "get">(agent, baseUrl, endpoints["git"]["listMatchingRefs"]).request,
    updateRef:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/git/refs/{ref}", "patch">(agent, baseUrl, endpoints["git"]["updateRef"]).request,
  },
  gitignore: {
    getAllTemplates:
      new MoctokitRequestMocker<"/gitignore/templates", "get">(agent, baseUrl, endpoints["gitignore"]["getAllTemplates"]).request,
    getTemplate:
      new MoctokitRequestMocker<"/gitignore/templates/{name}", "get">(agent, baseUrl, endpoints["gitignore"]["getTemplate"]).request,
  },
  interactions: {
    getRestrictionsForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/interaction-limits", "get">(agent, baseUrl, endpoints["interactions"]["getRestrictionsForAuthenticatedUser"]).request,
    getRestrictionsForOrg:
      new MoctokitRequestMocker<"/orgs/{org}/interaction-limits", "get">(agent, baseUrl, endpoints["interactions"]["getRestrictionsForOrg"]).request,
    getRestrictionsForRepo:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/interaction-limits", "get">(agent, baseUrl, endpoints["interactions"]["getRestrictionsForRepo"]).request,
    getRestrictionsForYourPublicRepos:
      new MoctokitRequestMocker<"/user/interaction-limits", "get">(agent, baseUrl, endpoints["interactions"]["getRestrictionsForYourPublicRepos"]).request,
    removeRestrictionsForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/interaction-limits", "delete">(agent, baseUrl, endpoints["interactions"]["removeRestrictionsForAuthenticatedUser"]).request,
    removeRestrictionsForOrg:
      new MoctokitRequestMocker<"/orgs/{org}/interaction-limits", "delete">(agent, baseUrl, endpoints["interactions"]["removeRestrictionsForOrg"]).request,
    removeRestrictionsForRepo:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/interaction-limits", "delete">(agent, baseUrl, endpoints["interactions"]["removeRestrictionsForRepo"]).request,
    removeRestrictionsForYourPublicRepos:
      new MoctokitRequestMocker<"/user/interaction-limits", "delete">(agent, baseUrl, endpoints["interactions"]["removeRestrictionsForYourPublicRepos"]).request,
    setRestrictionsForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/interaction-limits", "put">(agent, baseUrl, endpoints["interactions"]["setRestrictionsForAuthenticatedUser"]).request,
    setRestrictionsForOrg:
      new MoctokitRequestMocker<"/orgs/{org}/interaction-limits", "put">(agent, baseUrl, endpoints["interactions"]["setRestrictionsForOrg"]).request,
    setRestrictionsForRepo:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/interaction-limits", "put">(agent, baseUrl, endpoints["interactions"]["setRestrictionsForRepo"]).request,
    setRestrictionsForYourPublicRepos:
      new MoctokitRequestMocker<"/user/interaction-limits", "put">(agent, baseUrl, endpoints["interactions"]["setRestrictionsForYourPublicRepos"]).request,
  },
  issues: {
    addAssignees:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/issues/{issue_number}/assignees", "post">(agent, baseUrl, endpoints["issues"]["addAssignees"]).request,
    addLabels:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/issues/{issue_number}/labels", "post">(agent, baseUrl, endpoints["issues"]["addLabels"]).request,
    checkUserCanBeAssigned:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/assignees/{assignee}", "get">(agent, baseUrl, endpoints["issues"]["checkUserCanBeAssigned"]).request,
    checkUserCanBeAssignedToIssue:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/issues/{issue_number}/assignees/{assignee}", "get">(agent, baseUrl, endpoints["issues"]["checkUserCanBeAssignedToIssue"]).request,
    create:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/issues", "post">(agent, baseUrl, endpoints["issues"]["create"]).request,
    createComment:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/issues/{issue_number}/comments", "post">(agent, baseUrl, endpoints["issues"]["createComment"]).request,
    createLabel:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/labels", "post">(agent, baseUrl, endpoints["issues"]["createLabel"]).request,
    createMilestone:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/milestones", "post">(agent, baseUrl, endpoints["issues"]["createMilestone"]).request,
    deleteComment:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/issues/comments/{comment_id}", "delete">(agent, baseUrl, endpoints["issues"]["deleteComment"]).request,
    deleteLabel:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/labels/{name}", "delete">(agent, baseUrl, endpoints["issues"]["deleteLabel"]).request,
    deleteMilestone:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/milestones/{milestone_number}", "delete">(agent, baseUrl, endpoints["issues"]["deleteMilestone"]).request,
    get: new MoctokitRequestMocker<"/repos/{owner}/{repo}/issues/{issue_number}", "get">(agent, baseUrl, endpoints["issues"]["get"]).request,
    getComment:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/issues/comments/{comment_id}", "get">(agent, baseUrl, endpoints["issues"]["getComment"]).request,
    getEvent:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/issues/events/{event_id}", "get">(agent, baseUrl, endpoints["issues"]["getEvent"]).request,
    getLabel:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/labels/{name}", "get">(agent, baseUrl, endpoints["issues"]["getLabel"]).request,
    getMilestone:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/milestones/{milestone_number}", "get">(agent, baseUrl, endpoints["issues"]["getMilestone"]).request,
    list: new MoctokitRequestMocker<"/issues", "get">(agent, baseUrl, endpoints["issues"]["list"]).request,
    listAssignees:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/assignees", "get">(agent, baseUrl, endpoints["issues"]["listAssignees"]).request,
    listComments:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/issues/{issue_number}/comments", "get">(agent, baseUrl, endpoints["issues"]["listComments"]).request,
    listCommentsForRepo:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/issues/comments", "get">(agent, baseUrl, endpoints["issues"]["listCommentsForRepo"]).request,
    listEvents:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/issues/{issue_number}/events", "get">(agent, baseUrl, endpoints["issues"]["listEvents"]).request,
    listEventsForRepo:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/issues/events", "get">(agent, baseUrl, endpoints["issues"]["listEventsForRepo"]).request,
    listEventsForTimeline:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/issues/{issue_number}/timeline", "get">(agent, baseUrl, endpoints["issues"]["listEventsForTimeline"]).request,
    listForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/issues", "get">(agent, baseUrl, endpoints["issues"]["listForAuthenticatedUser"]).request,
    listForOrg:
      new MoctokitRequestMocker<"/orgs/{org}/issues", "get">(agent, baseUrl, endpoints["issues"]["listForOrg"]).request,
    listForRepo:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/issues", "get">(agent, baseUrl, endpoints["issues"]["listForRepo"]).request,
    listLabelsForMilestone:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/milestones/{milestone_number}/labels", "get">(agent, baseUrl, endpoints["issues"]["listLabelsForMilestone"]).request,
    listLabelsForRepo:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/labels", "get">(agent, baseUrl, endpoints["issues"]["listLabelsForRepo"]).request,
    listLabelsOnIssue:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/issues/{issue_number}/labels", "get">(agent, baseUrl, endpoints["issues"]["listLabelsOnIssue"]).request,
    listMilestones:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/milestones", "get">(agent, baseUrl, endpoints["issues"]["listMilestones"]).request,
    lock: new MoctokitRequestMocker<"/repos/{owner}/{repo}/issues/{issue_number}/lock", "put">(agent, baseUrl, endpoints["issues"]["lock"]).request,
    removeAllLabels:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/issues/{issue_number}/labels", "delete">(agent, baseUrl, endpoints["issues"]["removeAllLabels"]).request,
    removeAssignees:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/issues/{issue_number}/assignees", "delete">(agent, baseUrl, endpoints["issues"]["removeAssignees"]).request,
    removeLabel:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/issues/{issue_number}/labels/{name}", "delete">(agent, baseUrl, endpoints["issues"]["removeLabel"]).request,
    setLabels:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/issues/{issue_number}/labels", "put">(agent, baseUrl, endpoints["issues"]["setLabels"]).request,
    unlock:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/issues/{issue_number}/lock", "delete">(agent, baseUrl, endpoints["issues"]["unlock"]).request,
    update:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/issues/{issue_number}", "patch">(agent, baseUrl, endpoints["issues"]["update"]).request,
    updateComment:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/issues/comments/{comment_id}", "patch">(agent, baseUrl, endpoints["issues"]["updateComment"]).request,
    updateLabel:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/labels/{name}", "patch">(agent, baseUrl, endpoints["issues"]["updateLabel"]).request,
    updateMilestone:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/milestones/{milestone_number}", "patch">(agent, baseUrl, endpoints["issues"]["updateMilestone"]).request,
  },
  licenses: {
    get: new MoctokitRequestMocker<"/licenses/{license}", "get">(agent, baseUrl, endpoints["licenses"]["get"]).request,
    getAllCommonlyUsed:
      new MoctokitRequestMocker<"/licenses", "get">(agent, baseUrl, endpoints["licenses"]["getAllCommonlyUsed"]).request,
    getForRepo:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/license", "get">(agent, baseUrl, endpoints["licenses"]["getForRepo"]).request,
  },
  markdown: {
    render:
      new MoctokitRequestMocker<"/markdown", "post">(agent, baseUrl, endpoints["markdown"]["render"]).request,
    renderRaw:
      new MoctokitRequestMocker<"/markdown/raw", "post">(agent, baseUrl, endpoints["markdown"]["renderRaw"]).request,
  },
  meta: {
    get: new MoctokitRequestMocker<"/meta", "get">(agent, baseUrl, endpoints["meta"]["get"]).request,
    getAllVersions:
      new MoctokitRequestMocker<"/versions", "get">(agent, baseUrl, endpoints["meta"]["getAllVersions"]).request,
    getOctocat:
      new MoctokitRequestMocker<"/octocat", "get">(agent, baseUrl, endpoints["meta"]["getOctocat"]).request,
    getZen:
      new MoctokitRequestMocker<"/zen", "get">(agent, baseUrl, endpoints["meta"]["getZen"]).request,
    root: new MoctokitRequestMocker<"/", "get">(agent, baseUrl, endpoints["meta"]["root"]).request,
  },
  migrations: {
    cancelImport:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/import", "delete">(agent, baseUrl, endpoints["migrations"]["cancelImport"]).request,
    deleteArchiveForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/migrations/{migration_id}/archive", "delete">(agent, baseUrl, endpoints["migrations"]["deleteArchiveForAuthenticatedUser"]).request,
    deleteArchiveForOrg:
      new MoctokitRequestMocker<"/orgs/{org}/migrations/{migration_id}/archive", "delete">(agent, baseUrl, endpoints["migrations"]["deleteArchiveForOrg"]).request,
    downloadArchiveForOrg:
      new MoctokitRequestMocker<"/orgs/{org}/migrations/{migration_id}/archive", "get">(agent, baseUrl, endpoints["migrations"]["downloadArchiveForOrg"]).request,
    getArchiveForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/migrations/{migration_id}/archive", "get">(agent, baseUrl, endpoints["migrations"]["getArchiveForAuthenticatedUser"]).request,
    getCommitAuthors:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/import/authors", "get">(agent, baseUrl, endpoints["migrations"]["getCommitAuthors"]).request,
    getImportStatus:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/import", "get">(agent, baseUrl, endpoints["migrations"]["getImportStatus"]).request,
    getLargeFiles:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/import/large_files", "get">(agent, baseUrl, endpoints["migrations"]["getLargeFiles"]).request,
    getStatusForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/migrations/{migration_id}", "get">(agent, baseUrl, endpoints["migrations"]["getStatusForAuthenticatedUser"]).request,
    getStatusForOrg:
      new MoctokitRequestMocker<"/orgs/{org}/migrations/{migration_id}", "get">(agent, baseUrl, endpoints["migrations"]["getStatusForOrg"]).request,
    listForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/migrations", "get">(agent, baseUrl, endpoints["migrations"]["listForAuthenticatedUser"]).request,
    listForOrg:
      new MoctokitRequestMocker<"/orgs/{org}/migrations", "get">(agent, baseUrl, endpoints["migrations"]["listForOrg"]).request,
    listReposForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/migrations/{migration_id}/repositories", "get">(agent, baseUrl, endpoints["migrations"]["listReposForAuthenticatedUser"]).request,
    listReposForOrg:
      new MoctokitRequestMocker<"/orgs/{org}/migrations/{migration_id}/repositories", "get">(agent, baseUrl, endpoints["migrations"]["listReposForOrg"]).request,
    listReposForUser:
      new MoctokitRequestMocker<"/user/migrations/{migration_id}/repositories", "get">(agent, baseUrl, endpoints["migrations"]["listReposForUser"]).request,
    mapCommitAuthor:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/import/authors/{author_id}", "patch">(agent, baseUrl, endpoints["migrations"]["mapCommitAuthor"]).request,
    setLfsPreference:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/import/lfs", "patch">(agent, baseUrl, endpoints["migrations"]["setLfsPreference"]).request,
    startForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/migrations", "post">(agent, baseUrl, endpoints["migrations"]["startForAuthenticatedUser"]).request,
    startForOrg:
      new MoctokitRequestMocker<"/orgs/{org}/migrations", "post">(agent, baseUrl, endpoints["migrations"]["startForOrg"]).request,
    startImport:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/import", "put">(agent, baseUrl, endpoints["migrations"]["startImport"]).request,
    unlockRepoForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/migrations/{migration_id}/repos/{repo_name}/lock", "delete">(agent, baseUrl, endpoints["migrations"]["unlockRepoForAuthenticatedUser"]).request,
    unlockRepoForOrg:
      new MoctokitRequestMocker<"/orgs/{org}/migrations/{migration_id}/repos/{repo_name}/lock", "delete">(agent, baseUrl, endpoints["migrations"]["unlockRepoForOrg"]).request,
    updateImport:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/import", "patch">(agent, baseUrl, endpoints["migrations"]["updateImport"]).request,
  },
  orgs: {
    addSecurityManagerTeam:
      new MoctokitRequestMocker<"/orgs/{org}/security-managers/teams/{team_slug}", "put">(agent, baseUrl, endpoints["orgs"]["addSecurityManagerTeam"]).request,
    blockUser:
      new MoctokitRequestMocker<"/orgs/{org}/blocks/{username}", "put">(agent, baseUrl, endpoints["orgs"]["blockUser"]).request,
    cancelInvitation:
      new MoctokitRequestMocker<"/orgs/{org}/invitations/{invitation_id}", "delete">(agent, baseUrl, endpoints["orgs"]["cancelInvitation"]).request,
    checkBlockedUser:
      new MoctokitRequestMocker<"/orgs/{org}/blocks/{username}", "get">(agent, baseUrl, endpoints["orgs"]["checkBlockedUser"]).request,
    checkMembershipForUser:
      new MoctokitRequestMocker<"/orgs/{org}/members/{username}", "get">(agent, baseUrl, endpoints["orgs"]["checkMembershipForUser"]).request,
    checkPublicMembershipForUser:
      new MoctokitRequestMocker<"/orgs/{org}/public_members/{username}", "get">(agent, baseUrl, endpoints["orgs"]["checkPublicMembershipForUser"]).request,
    convertMemberToOutsideCollaborator:
      new MoctokitRequestMocker<"/orgs/{org}/outside_collaborators/{username}", "put">(agent, baseUrl, endpoints["orgs"]["convertMemberToOutsideCollaborator"]).request,
    createInvitation:
      new MoctokitRequestMocker<"/orgs/{org}/invitations", "post">(agent, baseUrl, endpoints["orgs"]["createInvitation"]).request,
    createWebhook:
      new MoctokitRequestMocker<"/orgs/{org}/hooks", "post">(agent, baseUrl, endpoints["orgs"]["createWebhook"]).request,
    delete:
      new MoctokitRequestMocker<"/orgs/{org}", "delete">(agent, baseUrl, endpoints["orgs"]["delete"]).request,
    deleteWebhook:
      new MoctokitRequestMocker<"/orgs/{org}/hooks/{hook_id}", "delete">(agent, baseUrl, endpoints["orgs"]["deleteWebhook"]).request,
    enableOrDisableSecurityProductOnAllOrgRepos:
      new MoctokitRequestMocker<"/orgs/{org}/{security_product}/{enablement}", "post">(agent, baseUrl, endpoints["orgs"]["enableOrDisableSecurityProductOnAllOrgRepos"]).request,
    get: new MoctokitRequestMocker<"/orgs/{org}", "get">(agent, baseUrl, endpoints["orgs"]["get"]).request,
    getMembershipForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/memberships/orgs/{org}", "get">(agent, baseUrl, endpoints["orgs"]["getMembershipForAuthenticatedUser"]).request,
    getMembershipForUser:
      new MoctokitRequestMocker<"/orgs/{org}/memberships/{username}", "get">(agent, baseUrl, endpoints["orgs"]["getMembershipForUser"]).request,
    getWebhook:
      new MoctokitRequestMocker<"/orgs/{org}/hooks/{hook_id}", "get">(agent, baseUrl, endpoints["orgs"]["getWebhook"]).request,
    getWebhookConfigForOrg:
      new MoctokitRequestMocker<"/orgs/{org}/hooks/{hook_id}/config", "get">(agent, baseUrl, endpoints["orgs"]["getWebhookConfigForOrg"]).request,
    getWebhookDelivery:
      new MoctokitRequestMocker<"/orgs/{org}/hooks/{hook_id}/deliveries/{delivery_id}", "get">(agent, baseUrl, endpoints["orgs"]["getWebhookDelivery"]).request,
    list: new MoctokitRequestMocker<"/organizations", "get">(agent, baseUrl, endpoints["orgs"]["list"]).request,
    listAppInstallations:
      new MoctokitRequestMocker<"/orgs/{org}/installations", "get">(agent, baseUrl, endpoints["orgs"]["listAppInstallations"]).request,
    listBlockedUsers:
      new MoctokitRequestMocker<"/orgs/{org}/blocks", "get">(agent, baseUrl, endpoints["orgs"]["listBlockedUsers"]).request,
    listFailedInvitations:
      new MoctokitRequestMocker<"/orgs/{org}/failed_invitations", "get">(agent, baseUrl, endpoints["orgs"]["listFailedInvitations"]).request,
    listForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/orgs", "get">(agent, baseUrl, endpoints["orgs"]["listForAuthenticatedUser"]).request,
    listForUser:
      new MoctokitRequestMocker<"/users/{username}/orgs", "get">(agent, baseUrl, endpoints["orgs"]["listForUser"]).request,
    listInvitationTeams:
      new MoctokitRequestMocker<"/orgs/{org}/invitations/{invitation_id}/teams", "get">(agent, baseUrl, endpoints["orgs"]["listInvitationTeams"]).request,
    listMembers:
      new MoctokitRequestMocker<"/orgs/{org}/members", "get">(agent, baseUrl, endpoints["orgs"]["listMembers"]).request,
    listMembershipsForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/memberships/orgs", "get">(agent, baseUrl, endpoints["orgs"]["listMembershipsForAuthenticatedUser"]).request,
    listOutsideCollaborators:
      new MoctokitRequestMocker<"/orgs/{org}/outside_collaborators", "get">(agent, baseUrl, endpoints["orgs"]["listOutsideCollaborators"]).request,
    listPatGrantRepositories:
      new MoctokitRequestMocker<"/organizations/{org}/personal-access-tokens/{pat_id}/repositories", "get">(agent, baseUrl, endpoints["orgs"]["listPatGrantRepositories"]).request,
    listPatGrantRequestRepositories:
      new MoctokitRequestMocker<"/organizations/{org}/personal-access-token-requests/{pat_request_id}/repositories", "get">(agent, baseUrl, endpoints["orgs"]["listPatGrantRequestRepositories"]).request,
    listPatGrantRequests:
      new MoctokitRequestMocker<"/organizations/{org}/personal-access-token-requests", "get">(agent, baseUrl, endpoints["orgs"]["listPatGrantRequests"]).request,
    listPatGrants:
      new MoctokitRequestMocker<"/organizations/{org}/personal-access-tokens", "get">(agent, baseUrl, endpoints["orgs"]["listPatGrants"]).request,
    listPendingInvitations:
      new MoctokitRequestMocker<"/orgs/{org}/invitations", "get">(agent, baseUrl, endpoints["orgs"]["listPendingInvitations"]).request,
    listPublicMembers:
      new MoctokitRequestMocker<"/orgs/{org}/public_members", "get">(agent, baseUrl, endpoints["orgs"]["listPublicMembers"]).request,
    listSecurityManagerTeams:
      new MoctokitRequestMocker<"/orgs/{org}/security-managers", "get">(agent, baseUrl, endpoints["orgs"]["listSecurityManagerTeams"]).request,
    listWebhookDeliveries:
      new MoctokitRequestMocker<"/orgs/{org}/hooks/{hook_id}/deliveries", "get">(agent, baseUrl, endpoints["orgs"]["listWebhookDeliveries"]).request,
    listWebhooks:
      new MoctokitRequestMocker<"/orgs/{org}/hooks", "get">(agent, baseUrl, endpoints["orgs"]["listWebhooks"]).request,
    pingWebhook:
      new MoctokitRequestMocker<"/orgs/{org}/hooks/{hook_id}/pings", "post">(agent, baseUrl, endpoints["orgs"]["pingWebhook"]).request,
    redeliverWebhookDelivery:
      new MoctokitRequestMocker<"/orgs/{org}/hooks/{hook_id}/deliveries/{delivery_id}/attempts", "post">(agent, baseUrl, endpoints["orgs"]["redeliverWebhookDelivery"]).request,
    removeMember:
      new MoctokitRequestMocker<"/orgs/{org}/members/{username}", "delete">(agent, baseUrl, endpoints["orgs"]["removeMember"]).request,
    removeMembershipForUser:
      new MoctokitRequestMocker<"/orgs/{org}/memberships/{username}", "delete">(agent, baseUrl, endpoints["orgs"]["removeMembershipForUser"]).request,
    removeOutsideCollaborator:
      new MoctokitRequestMocker<"/orgs/{org}/outside_collaborators/{username}", "delete">(agent, baseUrl, endpoints["orgs"]["removeOutsideCollaborator"]).request,
    removePublicMembershipForAuthenticatedUser:
      new MoctokitRequestMocker<"/orgs/{org}/public_members/{username}", "delete">(agent, baseUrl, endpoints["orgs"]["removePublicMembershipForAuthenticatedUser"]).request,
    removeSecurityManagerTeam:
      new MoctokitRequestMocker<"/orgs/{org}/security-managers/teams/{team_slug}", "delete">(agent, baseUrl, endpoints["orgs"]["removeSecurityManagerTeam"]).request,
    reviewPatGrantRequest:
      new MoctokitRequestMocker<"/organizations/{org}/personal-access-token-requests/{pat_request_id}", "post">(agent, baseUrl, endpoints["orgs"]["reviewPatGrantRequest"]).request,
    reviewPatGrantRequestsInBulk:
      new MoctokitRequestMocker<"/organizations/{org}/personal-access-token-requests", "post">(agent, baseUrl, endpoints["orgs"]["reviewPatGrantRequestsInBulk"]).request,
    setMembershipForUser:
      new MoctokitRequestMocker<"/orgs/{org}/memberships/{username}", "put">(agent, baseUrl, endpoints["orgs"]["setMembershipForUser"]).request,
    setPublicMembershipForAuthenticatedUser:
      new MoctokitRequestMocker<"/orgs/{org}/public_members/{username}", "put">(agent, baseUrl, endpoints["orgs"]["setPublicMembershipForAuthenticatedUser"]).request,
    unblockUser:
      new MoctokitRequestMocker<"/orgs/{org}/blocks/{username}", "delete">(agent, baseUrl, endpoints["orgs"]["unblockUser"]).request,
    update:
      new MoctokitRequestMocker<"/orgs/{org}", "patch">(agent, baseUrl, endpoints["orgs"]["update"]).request,
    updateMembershipForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/memberships/orgs/{org}", "patch">(agent, baseUrl, endpoints["orgs"]["updateMembershipForAuthenticatedUser"]).request,
    updatePatAccess:
      new MoctokitRequestMocker<"/organizations/{org}/personal-access-tokens/{pat_id}", "post">(agent, baseUrl, endpoints["orgs"]["updatePatAccess"]).request,
    updatePatAccesses:
      new MoctokitRequestMocker<"/organizations/{org}/personal-access-tokens", "post">(agent, baseUrl, endpoints["orgs"]["updatePatAccesses"]).request,
    updateWebhook:
      new MoctokitRequestMocker<"/orgs/{org}/hooks/{hook_id}", "patch">(agent, baseUrl, endpoints["orgs"]["updateWebhook"]).request,
    updateWebhookConfigForOrg:
      new MoctokitRequestMocker<"/orgs/{org}/hooks/{hook_id}/config", "patch">(agent, baseUrl, endpoints["orgs"]["updateWebhookConfigForOrg"]).request,
  },
  packages: {
    deletePackageForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/packages/{package_type}/{package_name}", "delete">(agent, baseUrl, endpoints["packages"]["deletePackageForAuthenticatedUser"]).request,
    deletePackageForOrg:
      new MoctokitRequestMocker<"/orgs/{org}/packages/{package_type}/{package_name}", "delete">(agent, baseUrl, endpoints["packages"]["deletePackageForOrg"]).request,
    deletePackageForUser:
      new MoctokitRequestMocker<"/users/{username}/packages/{package_type}/{package_name}", "delete">(agent, baseUrl, endpoints["packages"]["deletePackageForUser"]).request,
    deletePackageVersionForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/packages/{package_type}/{package_name}/versions/{package_version_id}", "delete">(agent, baseUrl, endpoints["packages"]["deletePackageVersionForAuthenticatedUser"]).request,
    deletePackageVersionForOrg:
      new MoctokitRequestMocker<"/orgs/{org}/packages/{package_type}/{package_name}/versions/{package_version_id}", "delete">(agent, baseUrl, endpoints["packages"]["deletePackageVersionForOrg"]).request,
    deletePackageVersionForUser:
      new MoctokitRequestMocker<"/users/{username}/packages/{package_type}/{package_name}/versions/{package_version_id}", "delete">(agent, baseUrl, endpoints["packages"]["deletePackageVersionForUser"]).request,
    getAllPackageVersionsForAPackageOwnedByAnOrg:
      new MoctokitRequestMocker<"/orgs/{org}/packages/{package_type}/{package_name}/versions", "get">(agent, baseUrl, endpoints["packages"]["getAllPackageVersionsForAPackageOwnedByAnOrg"]).request,
    getAllPackageVersionsForAPackageOwnedByTheAuthenticatedUser:
      new MoctokitRequestMocker<"/user/packages/{package_type}/{package_name}/versions", "get">(agent, baseUrl, endpoints["packages"]["getAllPackageVersionsForAPackageOwnedByTheAuthenticatedUser"]).request,
    getAllPackageVersionsForPackageOwnedByAuthenticatedUser:
      new MoctokitRequestMocker<"/user/packages/{package_type}/{package_name}/versions", "get">(agent, baseUrl, endpoints["packages"]["getAllPackageVersionsForPackageOwnedByAuthenticatedUser"]).request,
    getAllPackageVersionsForPackageOwnedByOrg:
      new MoctokitRequestMocker<"/orgs/{org}/packages/{package_type}/{package_name}/versions", "get">(agent, baseUrl, endpoints["packages"]["getAllPackageVersionsForPackageOwnedByOrg"]).request,
    getAllPackageVersionsForPackageOwnedByUser:
      new MoctokitRequestMocker<"/users/{username}/packages/{package_type}/{package_name}/versions", "get">(agent, baseUrl, endpoints["packages"]["getAllPackageVersionsForPackageOwnedByUser"]).request,
    getPackageForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/packages/{package_type}/{package_name}", "get">(agent, baseUrl, endpoints["packages"]["getPackageForAuthenticatedUser"]).request,
    getPackageForOrganization:
      new MoctokitRequestMocker<"/orgs/{org}/packages/{package_type}/{package_name}", "get">(agent, baseUrl, endpoints["packages"]["getPackageForOrganization"]).request,
    getPackageForUser:
      new MoctokitRequestMocker<"/users/{username}/packages/{package_type}/{package_name}", "get">(agent, baseUrl, endpoints["packages"]["getPackageForUser"]).request,
    getPackageVersionForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/packages/{package_type}/{package_name}/versions/{package_version_id}", "get">(agent, baseUrl, endpoints["packages"]["getPackageVersionForAuthenticatedUser"]).request,
    getPackageVersionForOrganization:
      new MoctokitRequestMocker<"/orgs/{org}/packages/{package_type}/{package_name}/versions/{package_version_id}", "get">(agent, baseUrl, endpoints["packages"]["getPackageVersionForOrganization"]).request,
    getPackageVersionForUser:
      new MoctokitRequestMocker<"/users/{username}/packages/{package_type}/{package_name}/versions/{package_version_id}", "get">(agent, baseUrl, endpoints["packages"]["getPackageVersionForUser"]).request,
    listDockerMigrationConflictingPackagesForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/docker/conflicts", "get">(agent, baseUrl, endpoints["packages"]["listDockerMigrationConflictingPackagesForAuthenticatedUser"]).request,
    listDockerMigrationConflictingPackagesForOrganization:
      new MoctokitRequestMocker<"/orgs/{org}/docker/conflicts", "get">(agent, baseUrl, endpoints["packages"]["listDockerMigrationConflictingPackagesForOrganization"]).request,
    listDockerMigrationConflictingPackagesForUser:
      new MoctokitRequestMocker<"/users/{username}/docker/conflicts", "get">(agent, baseUrl, endpoints["packages"]["listDockerMigrationConflictingPackagesForUser"]).request,
    listPackagesForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/packages", "get">(agent, baseUrl, endpoints["packages"]["listPackagesForAuthenticatedUser"]).request,
    listPackagesForOrganization:
      new MoctokitRequestMocker<"/orgs/{org}/packages", "get">(agent, baseUrl, endpoints["packages"]["listPackagesForOrganization"]).request,
    listPackagesForUser:
      new MoctokitRequestMocker<"/users/{username}/packages", "get">(agent, baseUrl, endpoints["packages"]["listPackagesForUser"]).request,
    restorePackageForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/packages/{package_type}/{package_name}/restore", "post">(agent, baseUrl, endpoints["packages"]["restorePackageForAuthenticatedUser"]).request,
    restorePackageForOrg:
      new MoctokitRequestMocker<"/orgs/{org}/packages/{package_type}/{package_name}/restore", "post">(agent, baseUrl, endpoints["packages"]["restorePackageForOrg"]).request,
    restorePackageForUser:
      new MoctokitRequestMocker<"/users/{username}/packages/{package_type}/{package_name}/restore", "post">(agent, baseUrl, endpoints["packages"]["restorePackageForUser"]).request,
    restorePackageVersionForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/packages/{package_type}/{package_name}/versions/{package_version_id}/restore", "post">(agent, baseUrl, endpoints["packages"]["restorePackageVersionForAuthenticatedUser"]).request,
    restorePackageVersionForOrg:
      new MoctokitRequestMocker<"/orgs/{org}/packages/{package_type}/{package_name}/versions/{package_version_id}/restore", "post">(agent, baseUrl, endpoints["packages"]["restorePackageVersionForOrg"]).request,
    restorePackageVersionForUser:
      new MoctokitRequestMocker<"/users/{username}/packages/{package_type}/{package_name}/versions/{package_version_id}/restore", "post">(agent, baseUrl, endpoints["packages"]["restorePackageVersionForUser"]).request,
  },
  projects: {
    addCollaborator:
      new MoctokitRequestMocker<"/projects/{project_id}/collaborators/{username}", "put">(agent, baseUrl, endpoints["projects"]["addCollaborator"]).request,
    createCard:
      new MoctokitRequestMocker<"/projects/columns/{column_id}/cards", "post">(agent, baseUrl, endpoints["projects"]["createCard"]).request,
    createColumn:
      new MoctokitRequestMocker<"/projects/{project_id}/columns", "post">(agent, baseUrl, endpoints["projects"]["createColumn"]).request,
    createForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/projects", "post">(agent, baseUrl, endpoints["projects"]["createForAuthenticatedUser"]).request,
    createForOrg:
      new MoctokitRequestMocker<"/orgs/{org}/projects", "post">(agent, baseUrl, endpoints["projects"]["createForOrg"]).request,
    createForRepo:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/projects", "post">(agent, baseUrl, endpoints["projects"]["createForRepo"]).request,
    delete:
      new MoctokitRequestMocker<"/projects/{project_id}", "delete">(agent, baseUrl, endpoints["projects"]["delete"]).request,
    deleteCard:
      new MoctokitRequestMocker<"/projects/columns/cards/{card_id}", "delete">(agent, baseUrl, endpoints["projects"]["deleteCard"]).request,
    deleteColumn:
      new MoctokitRequestMocker<"/projects/columns/{column_id}", "delete">(agent, baseUrl, endpoints["projects"]["deleteColumn"]).request,
    get: new MoctokitRequestMocker<"/projects/{project_id}", "get">(agent, baseUrl, endpoints["projects"]["get"]).request,
    getCard:
      new MoctokitRequestMocker<"/projects/columns/cards/{card_id}", "get">(agent, baseUrl, endpoints["projects"]["getCard"]).request,
    getColumn:
      new MoctokitRequestMocker<"/projects/columns/{column_id}", "get">(agent, baseUrl, endpoints["projects"]["getColumn"]).request,
    getPermissionForUser:
      new MoctokitRequestMocker<"/projects/{project_id}/collaborators/{username}/permission", "get">(agent, baseUrl, endpoints["projects"]["getPermissionForUser"]).request,
    listCards:
      new MoctokitRequestMocker<"/projects/columns/{column_id}/cards", "get">(agent, baseUrl, endpoints["projects"]["listCards"]).request,
    listCollaborators:
      new MoctokitRequestMocker<"/projects/{project_id}/collaborators", "get">(agent, baseUrl, endpoints["projects"]["listCollaborators"]).request,
    listColumns:
      new MoctokitRequestMocker<"/projects/{project_id}/columns", "get">(agent, baseUrl, endpoints["projects"]["listColumns"]).request,
    listForOrg:
      new MoctokitRequestMocker<"/orgs/{org}/projects", "get">(agent, baseUrl, endpoints["projects"]["listForOrg"]).request,
    listForRepo:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/projects", "get">(agent, baseUrl, endpoints["projects"]["listForRepo"]).request,
    listForUser:
      new MoctokitRequestMocker<"/users/{username}/projects", "get">(agent, baseUrl, endpoints["projects"]["listForUser"]).request,
    moveCard:
      new MoctokitRequestMocker<"/projects/columns/cards/{card_id}/moves", "post">(agent, baseUrl, endpoints["projects"]["moveCard"]).request,
    moveColumn:
      new MoctokitRequestMocker<"/projects/columns/{column_id}/moves", "post">(agent, baseUrl, endpoints["projects"]["moveColumn"]).request,
    removeCollaborator:
      new MoctokitRequestMocker<"/projects/{project_id}/collaborators/{username}", "delete">(agent, baseUrl, endpoints["projects"]["removeCollaborator"]).request,
    update:
      new MoctokitRequestMocker<"/projects/{project_id}", "patch">(agent, baseUrl, endpoints["projects"]["update"]).request,
    updateCard:
      new MoctokitRequestMocker<"/projects/columns/cards/{card_id}", "patch">(agent, baseUrl, endpoints["projects"]["updateCard"]).request,
    updateColumn:
      new MoctokitRequestMocker<"/projects/columns/{column_id}", "patch">(agent, baseUrl, endpoints["projects"]["updateColumn"]).request,
  },
  pulls: {
    checkIfMerged:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/pulls/{pull_number}/merge", "get">(agent, baseUrl, endpoints["pulls"]["checkIfMerged"]).request,
    create:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/pulls", "post">(agent, baseUrl, endpoints["pulls"]["create"]).request,
    createReplyForReviewComment:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/pulls/{pull_number}/comments/{comment_id}/replies", "post">(agent, baseUrl, endpoints["pulls"]["createReplyForReviewComment"]).request,
    createReview:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/pulls/{pull_number}/reviews", "post">(agent, baseUrl, endpoints["pulls"]["createReview"]).request,
    createReviewComment:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/pulls/{pull_number}/comments", "post">(agent, baseUrl, endpoints["pulls"]["createReviewComment"]).request,
    deletePendingReview:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}", "delete">(agent, baseUrl, endpoints["pulls"]["deletePendingReview"]).request,
    deleteReviewComment:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/pulls/comments/{comment_id}", "delete">(agent, baseUrl, endpoints["pulls"]["deleteReviewComment"]).request,
    dismissReview:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/dismissals", "put">(agent, baseUrl, endpoints["pulls"]["dismissReview"]).request,
    get: new MoctokitRequestMocker<"/repos/{owner}/{repo}/pulls/{pull_number}", "get">(agent, baseUrl, endpoints["pulls"]["get"]).request,
    getReview:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}", "get">(agent, baseUrl, endpoints["pulls"]["getReview"]).request,
    getReviewComment:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/pulls/comments/{comment_id}", "get">(agent, baseUrl, endpoints["pulls"]["getReviewComment"]).request,
    list: new MoctokitRequestMocker<"/repos/{owner}/{repo}/pulls", "get">(agent, baseUrl, endpoints["pulls"]["list"]).request,
    listCommentsForReview:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/comments", "get">(agent, baseUrl, endpoints["pulls"]["listCommentsForReview"]).request,
    listCommits:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/pulls/{pull_number}/commits", "get">(agent, baseUrl, endpoints["pulls"]["listCommits"]).request,
    listFiles:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/pulls/{pull_number}/files", "get">(agent, baseUrl, endpoints["pulls"]["listFiles"]).request,
    listRequestedReviewers:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers", "get">(agent, baseUrl, endpoints["pulls"]["listRequestedReviewers"]).request,
    listReviewComments:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/pulls/{pull_number}/comments", "get">(agent, baseUrl, endpoints["pulls"]["listReviewComments"]).request,
    listReviewCommentsForRepo:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/pulls/comments", "get">(agent, baseUrl, endpoints["pulls"]["listReviewCommentsForRepo"]).request,
    listReviews:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/pulls/{pull_number}/reviews", "get">(agent, baseUrl, endpoints["pulls"]["listReviews"]).request,
    merge:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/pulls/{pull_number}/merge", "put">(agent, baseUrl, endpoints["pulls"]["merge"]).request,
    removeRequestedReviewers:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers", "delete">(agent, baseUrl, endpoints["pulls"]["removeRequestedReviewers"]).request,
    requestReviewers:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers", "post">(agent, baseUrl, endpoints["pulls"]["requestReviewers"]).request,
    submitReview:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/events", "post">(agent, baseUrl, endpoints["pulls"]["submitReview"]).request,
    update:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/pulls/{pull_number}", "patch">(agent, baseUrl, endpoints["pulls"]["update"]).request,
    updateBranch:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/pulls/{pull_number}/update-branch", "put">(agent, baseUrl, endpoints["pulls"]["updateBranch"]).request,
    updateReview:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}", "put">(agent, baseUrl, endpoints["pulls"]["updateReview"]).request,
    updateReviewComment:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/pulls/comments/{comment_id}", "patch">(agent, baseUrl, endpoints["pulls"]["updateReviewComment"]).request,
  },
  rateLimit: {
    get: new MoctokitRequestMocker<"/rate_limit", "get">(agent, baseUrl, endpoints["rateLimit"]["get"]).request,
  },
  reactions: {
    createForCommitComment:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/comments/{comment_id}/reactions", "post">(agent, baseUrl, endpoints["reactions"]["createForCommitComment"]).request,
    createForIssue:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/issues/{issue_number}/reactions", "post">(agent, baseUrl, endpoints["reactions"]["createForIssue"]).request,
    createForIssueComment:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/issues/comments/{comment_id}/reactions", "post">(agent, baseUrl, endpoints["reactions"]["createForIssueComment"]).request,
    createForPullRequestReviewComment:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions", "post">(agent, baseUrl, endpoints["reactions"]["createForPullRequestReviewComment"]).request,
    createForRelease:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/releases/{release_id}/reactions", "post">(agent, baseUrl, endpoints["reactions"]["createForRelease"]).request,
    createForTeamDiscussionCommentInOrg:
      new MoctokitRequestMocker<"/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions", "post">(agent, baseUrl, endpoints["reactions"]["createForTeamDiscussionCommentInOrg"]).request,
    createForTeamDiscussionInOrg:
      new MoctokitRequestMocker<"/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions", "post">(agent, baseUrl, endpoints["reactions"]["createForTeamDiscussionInOrg"]).request,
    deleteForCommitComment:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/comments/{comment_id}/reactions/{reaction_id}", "delete">(agent, baseUrl, endpoints["reactions"]["deleteForCommitComment"]).request,
    deleteForIssue:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/issues/{issue_number}/reactions/{reaction_id}", "delete">(agent, baseUrl, endpoints["reactions"]["deleteForIssue"]).request,
    deleteForIssueComment:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/issues/comments/{comment_id}/reactions/{reaction_id}", "delete">(agent, baseUrl, endpoints["reactions"]["deleteForIssueComment"]).request,
    deleteForPullRequestComment:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions/{reaction_id}", "delete">(agent, baseUrl, endpoints["reactions"]["deleteForPullRequestComment"]).request,
    deleteForRelease:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/releases/{release_id}/reactions/{reaction_id}", "delete">(agent, baseUrl, endpoints["reactions"]["deleteForRelease"]).request,
    deleteForTeamDiscussion:
      new MoctokitRequestMocker<"/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions/{reaction_id}", "delete">(agent, baseUrl, endpoints["reactions"]["deleteForTeamDiscussion"]).request,
    deleteForTeamDiscussionComment:
      new MoctokitRequestMocker<"/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions/{reaction_id}", "delete">(agent, baseUrl, endpoints["reactions"]["deleteForTeamDiscussionComment"]).request,
    listForCommitComment:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/comments/{comment_id}/reactions", "get">(agent, baseUrl, endpoints["reactions"]["listForCommitComment"]).request,
    listForIssue:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/issues/{issue_number}/reactions", "get">(agent, baseUrl, endpoints["reactions"]["listForIssue"]).request,
    listForIssueComment:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/issues/comments/{comment_id}/reactions", "get">(agent, baseUrl, endpoints["reactions"]["listForIssueComment"]).request,
    listForPullRequestReviewComment:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions", "get">(agent, baseUrl, endpoints["reactions"]["listForPullRequestReviewComment"]).request,
    listForRelease:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/releases/{release_id}/reactions", "get">(agent, baseUrl, endpoints["reactions"]["listForRelease"]).request,
    listForTeamDiscussionCommentInOrg:
      new MoctokitRequestMocker<"/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions", "get">(agent, baseUrl, endpoints["reactions"]["listForTeamDiscussionCommentInOrg"]).request,
    listForTeamDiscussionInOrg:
      new MoctokitRequestMocker<"/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions", "get">(agent, baseUrl, endpoints["reactions"]["listForTeamDiscussionInOrg"]).request,
  },
  repos: {
    acceptInvitation:
      new MoctokitRequestMocker<"/user/repository_invitations/{invitation_id}", "patch">(agent, baseUrl, endpoints["repos"]["acceptInvitation"]).request,
    acceptInvitationForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/repository_invitations/{invitation_id}", "patch">(agent, baseUrl, endpoints["repos"]["acceptInvitationForAuthenticatedUser"]).request,
    addAppAccessRestrictions:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps", "post">(agent, baseUrl, endpoints["repos"]["addAppAccessRestrictions"]).request,
    addCollaborator:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/collaborators/{username}", "put">(agent, baseUrl, endpoints["repos"]["addCollaborator"]).request,
    addStatusCheckContexts:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts", "post">(agent, baseUrl, endpoints["repos"]["addStatusCheckContexts"]).request,
    addTeamAccessRestrictions:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams", "post">(agent, baseUrl, endpoints["repos"]["addTeamAccessRestrictions"]).request,
    addUserAccessRestrictions:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users", "post">(agent, baseUrl, endpoints["repos"]["addUserAccessRestrictions"]).request,
    checkCollaborator:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/collaborators/{username}", "get">(agent, baseUrl, endpoints["repos"]["checkCollaborator"]).request,
    checkVulnerabilityAlerts:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/vulnerability-alerts", "get">(agent, baseUrl, endpoints["repos"]["checkVulnerabilityAlerts"]).request,
    codeownersErrors:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/codeowners/errors", "get">(agent, baseUrl, endpoints["repos"]["codeownersErrors"]).request,
    compareCommits:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/compare/{base}...{head}", "get">(agent, baseUrl, endpoints["repos"]["compareCommits"]).request,
    compareCommitsWithBasehead:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/compare/{basehead}", "get">(agent, baseUrl, endpoints["repos"]["compareCommitsWithBasehead"]).request,
    createAutolink:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/autolinks", "post">(agent, baseUrl, endpoints["repos"]["createAutolink"]).request,
    createCommitComment:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/commits/{commit_sha}/comments", "post">(agent, baseUrl, endpoints["repos"]["createCommitComment"]).request,
    createCommitSignatureProtection:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/branches/{branch}/protection/required_signatures", "post">(agent, baseUrl, endpoints["repos"]["createCommitSignatureProtection"]).request,
    createCommitStatus:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/statuses/{sha}", "post">(agent, baseUrl, endpoints["repos"]["createCommitStatus"]).request,
    createDeployKey:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/keys", "post">(agent, baseUrl, endpoints["repos"]["createDeployKey"]).request,
    createDeployment:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/deployments", "post">(agent, baseUrl, endpoints["repos"]["createDeployment"]).request,
    createDeploymentBranchPolicy:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/environments/{environment_name}/deployment-branch-policies", "post">(agent, baseUrl, endpoints["repos"]["createDeploymentBranchPolicy"]).request,
    createDeploymentProtectionRule:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/environments/{environment_name}/deployment_protection_rules", "post">(agent, baseUrl, endpoints["repos"]["createDeploymentProtectionRule"]).request,
    createDeploymentStatus:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/deployments/{deployment_id}/statuses", "post">(agent, baseUrl, endpoints["repos"]["createDeploymentStatus"]).request,
    createDispatchEvent:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/dispatches", "post">(agent, baseUrl, endpoints["repos"]["createDispatchEvent"]).request,
    createForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/repos", "post">(agent, baseUrl, endpoints["repos"]["createForAuthenticatedUser"]).request,
    createFork:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/forks", "post">(agent, baseUrl, endpoints["repos"]["createFork"]).request,
    createInOrg:
      new MoctokitRequestMocker<"/orgs/{org}/repos", "post">(agent, baseUrl, endpoints["repos"]["createInOrg"]).request,
    createOrUpdateEnvironment:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/environments/{environment_name}", "put">(agent, baseUrl, endpoints["repos"]["createOrUpdateEnvironment"]).request,
    createOrUpdateFileContents:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/contents/{path}", "put">(agent, baseUrl, endpoints["repos"]["createOrUpdateFileContents"]).request,
    createOrgRuleset:
      new MoctokitRequestMocker<"/orgs/{org}/rulesets", "post">(agent, baseUrl, endpoints["repos"]["createOrgRuleset"]).request,
    createPagesDeployment:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/pages/deployment", "post">(agent, baseUrl, endpoints["repos"]["createPagesDeployment"]).request,
    createPagesSite:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/pages", "post">(agent, baseUrl, endpoints["repos"]["createPagesSite"]).request,
    createRelease:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/releases", "post">(agent, baseUrl, endpoints["repos"]["createRelease"]).request,
    createRepoRuleset:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/rulesets", "post">(agent, baseUrl, endpoints["repos"]["createRepoRuleset"]).request,
    createTagProtection:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/tags/protection", "post">(agent, baseUrl, endpoints["repos"]["createTagProtection"]).request,
    createUsingTemplate:
      new MoctokitRequestMocker<"/repos/{template_owner}/{template_repo}/generate", "post">(agent, baseUrl, endpoints["repos"]["createUsingTemplate"]).request,
    createWebhook:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/hooks", "post">(agent, baseUrl, endpoints["repos"]["createWebhook"]).request,
    declineInvitation:
      new MoctokitRequestMocker<"/user/repository_invitations/{invitation_id}", "delete">(agent, baseUrl, endpoints["repos"]["declineInvitation"]).request,
    declineInvitationForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/repository_invitations/{invitation_id}", "delete">(agent, baseUrl, endpoints["repos"]["declineInvitationForAuthenticatedUser"]).request,
    delete:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}", "delete">(agent, baseUrl, endpoints["repos"]["delete"]).request,
    deleteAccessRestrictions:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/branches/{branch}/protection/restrictions", "delete">(agent, baseUrl, endpoints["repos"]["deleteAccessRestrictions"]).request,
    deleteAdminBranchProtection:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins", "delete">(agent, baseUrl, endpoints["repos"]["deleteAdminBranchProtection"]).request,
    deleteAnEnvironment:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/environments/{environment_name}", "delete">(agent, baseUrl, endpoints["repos"]["deleteAnEnvironment"]).request,
    deleteAutolink:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/autolinks/{autolink_id}", "delete">(agent, baseUrl, endpoints["repos"]["deleteAutolink"]).request,
    deleteBranchProtection:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/branches/{branch}/protection", "delete">(agent, baseUrl, endpoints["repos"]["deleteBranchProtection"]).request,
    deleteCommitComment:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/comments/{comment_id}", "delete">(agent, baseUrl, endpoints["repos"]["deleteCommitComment"]).request,
    deleteCommitSignatureProtection:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/branches/{branch}/protection/required_signatures", "delete">(agent, baseUrl, endpoints["repos"]["deleteCommitSignatureProtection"]).request,
    deleteDeployKey:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/keys/{key_id}", "delete">(agent, baseUrl, endpoints["repos"]["deleteDeployKey"]).request,
    deleteDeployment:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/deployments/{deployment_id}", "delete">(agent, baseUrl, endpoints["repos"]["deleteDeployment"]).request,
    deleteDeploymentBranchPolicy:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/environments/{environment_name}/deployment-branch-policies/{branch_policy_id}", "delete">(agent, baseUrl, endpoints["repos"]["deleteDeploymentBranchPolicy"]).request,
    deleteFile:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/contents/{path}", "delete">(agent, baseUrl, endpoints["repos"]["deleteFile"]).request,
    deleteInvitation:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/invitations/{invitation_id}", "delete">(agent, baseUrl, endpoints["repos"]["deleteInvitation"]).request,
    deleteOrgRuleset:
      new MoctokitRequestMocker<"/orgs/{org}/rulesets/{ruleset_id}", "delete">(agent, baseUrl, endpoints["repos"]["deleteOrgRuleset"]).request,
    deletePagesSite:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/pages", "delete">(agent, baseUrl, endpoints["repos"]["deletePagesSite"]).request,
    deletePullRequestReviewProtection:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews", "delete">(agent, baseUrl, endpoints["repos"]["deletePullRequestReviewProtection"]).request,
    deleteRelease:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/releases/{release_id}", "delete">(agent, baseUrl, endpoints["repos"]["deleteRelease"]).request,
    deleteReleaseAsset:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/releases/assets/{asset_id}", "delete">(agent, baseUrl, endpoints["repos"]["deleteReleaseAsset"]).request,
    deleteRepoRuleset:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/rulesets/{ruleset_id}", "delete">(agent, baseUrl, endpoints["repos"]["deleteRepoRuleset"]).request,
    deleteTagProtection:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/tags/protection/{tag_protection_id}", "delete">(agent, baseUrl, endpoints["repos"]["deleteTagProtection"]).request,
    deleteWebhook:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/hooks/{hook_id}", "delete">(agent, baseUrl, endpoints["repos"]["deleteWebhook"]).request,
    disableAutomatedSecurityFixes:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/automated-security-fixes", "delete">(agent, baseUrl, endpoints["repos"]["disableAutomatedSecurityFixes"]).request,
    disableDeploymentProtectionRule:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/environments/{environment_name}/deployment_protection_rules/{protection_rule_id}", "delete">(agent, baseUrl, endpoints["repos"]["disableDeploymentProtectionRule"]).request,
    disableLfsForRepo:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/lfs", "delete">(agent, baseUrl, endpoints["repos"]["disableLfsForRepo"]).request,
    disableVulnerabilityAlerts:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/vulnerability-alerts", "delete">(agent, baseUrl, endpoints["repos"]["disableVulnerabilityAlerts"]).request,
    downloadArchive:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/zipball/{ref}", "get">(agent, baseUrl, endpoints["repos"]["downloadArchive"]).request,
    downloadTarballArchive:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/tarball/{ref}", "get">(agent, baseUrl, endpoints["repos"]["downloadTarballArchive"]).request,
    downloadZipballArchive:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/zipball/{ref}", "get">(agent, baseUrl, endpoints["repos"]["downloadZipballArchive"]).request,
    enableAutomatedSecurityFixes:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/automated-security-fixes", "put">(agent, baseUrl, endpoints["repos"]["enableAutomatedSecurityFixes"]).request,
    enableLfsForRepo:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/lfs", "put">(agent, baseUrl, endpoints["repos"]["enableLfsForRepo"]).request,
    enableVulnerabilityAlerts:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/vulnerability-alerts", "put">(agent, baseUrl, endpoints["repos"]["enableVulnerabilityAlerts"]).request,
    generateReleaseNotes:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/releases/generate-notes", "post">(agent, baseUrl, endpoints["repos"]["generateReleaseNotes"]).request,
    get: new MoctokitRequestMocker<"/repos/{owner}/{repo}", "get">(agent, baseUrl, endpoints["repos"]["get"]).request,
    getAccessRestrictions:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/branches/{branch}/protection/restrictions", "get">(agent, baseUrl, endpoints["repos"]["getAccessRestrictions"]).request,
    getAdminBranchProtection:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins", "get">(agent, baseUrl, endpoints["repos"]["getAdminBranchProtection"]).request,
    getAllDeploymentProtectionRules:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/environments/{environment_name}/deployment_protection_rules", "get">(agent, baseUrl, endpoints["repos"]["getAllDeploymentProtectionRules"]).request,
    getAllEnvironments:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/environments", "get">(agent, baseUrl, endpoints["repos"]["getAllEnvironments"]).request,
    getAllStatusCheckContexts:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts", "get">(agent, baseUrl, endpoints["repos"]["getAllStatusCheckContexts"]).request,
    getAllTopics:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/topics", "get">(agent, baseUrl, endpoints["repos"]["getAllTopics"]).request,
    getAppsWithAccessToProtectedBranch:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps", "get">(agent, baseUrl, endpoints["repos"]["getAppsWithAccessToProtectedBranch"]).request,
    getAutolink:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/autolinks/{autolink_id}", "get">(agent, baseUrl, endpoints["repos"]["getAutolink"]).request,
    getBranch:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/branches/{branch}", "get">(agent, baseUrl, endpoints["repos"]["getBranch"]).request,
    getBranchProtection:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/branches/{branch}/protection", "get">(agent, baseUrl, endpoints["repos"]["getBranchProtection"]).request,
    getBranchRules:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/rules/branches/{branch}", "get">(agent, baseUrl, endpoints["repos"]["getBranchRules"]).request,
    getClones:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/traffic/clones", "get">(agent, baseUrl, endpoints["repos"]["getClones"]).request,
    getCodeFrequencyStats:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/stats/code_frequency", "get">(agent, baseUrl, endpoints["repos"]["getCodeFrequencyStats"]).request,
    getCollaboratorPermissionLevel:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/collaborators/{username}/permission", "get">(agent, baseUrl, endpoints["repos"]["getCollaboratorPermissionLevel"]).request,
    getCombinedStatusForRef:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/commits/{ref}/status", "get">(agent, baseUrl, endpoints["repos"]["getCombinedStatusForRef"]).request,
    getCommit:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/commits/{ref}", "get">(agent, baseUrl, endpoints["repos"]["getCommit"]).request,
    getCommitActivityStats:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/stats/commit_activity", "get">(agent, baseUrl, endpoints["repos"]["getCommitActivityStats"]).request,
    getCommitComment:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/comments/{comment_id}", "get">(agent, baseUrl, endpoints["repos"]["getCommitComment"]).request,
    getCommitSignatureProtection:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/branches/{branch}/protection/required_signatures", "get">(agent, baseUrl, endpoints["repos"]["getCommitSignatureProtection"]).request,
    getCommunityProfileMetrics:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/community/profile", "get">(agent, baseUrl, endpoints["repos"]["getCommunityProfileMetrics"]).request,
    getContent:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/contents/{path}", "get">(agent, baseUrl, endpoints["repos"]["getContent"]).request,
    getContributorsStats:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/stats/contributors", "get">(agent, baseUrl, endpoints["repos"]["getContributorsStats"]).request,
    getCustomDeploymentProtectionRule:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/environments/{environment_name}/deployment_protection_rules/{protection_rule_id}", "get">(agent, baseUrl, endpoints["repos"]["getCustomDeploymentProtectionRule"]).request,
    getDeployKey:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/keys/{key_id}", "get">(agent, baseUrl, endpoints["repos"]["getDeployKey"]).request,
    getDeployment:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/deployments/{deployment_id}", "get">(agent, baseUrl, endpoints["repos"]["getDeployment"]).request,
    getDeploymentBranchPolicy:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/environments/{environment_name}/deployment-branch-policies/{branch_policy_id}", "get">(agent, baseUrl, endpoints["repos"]["getDeploymentBranchPolicy"]).request,
    getDeploymentStatus:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/deployments/{deployment_id}/statuses/{status_id}", "get">(agent, baseUrl, endpoints["repos"]["getDeploymentStatus"]).request,
    getEnvironment:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/environments/{environment_name}", "get">(agent, baseUrl, endpoints["repos"]["getEnvironment"]).request,
    getLatestPagesBuild:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/pages/builds/latest", "get">(agent, baseUrl, endpoints["repos"]["getLatestPagesBuild"]).request,
    getLatestRelease:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/releases/latest", "get">(agent, baseUrl, endpoints["repos"]["getLatestRelease"]).request,
    getOrgRuleset:
      new MoctokitRequestMocker<"/orgs/{org}/rulesets/{ruleset_id}", "get">(agent, baseUrl, endpoints["repos"]["getOrgRuleset"]).request,
    getOrgRulesets:
      new MoctokitRequestMocker<"/orgs/{org}/rulesets", "get">(agent, baseUrl, endpoints["repos"]["getOrgRulesets"]).request,
    getPages:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/pages", "get">(agent, baseUrl, endpoints["repos"]["getPages"]).request,
    getPagesBuild:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/pages/builds/{build_id}", "get">(agent, baseUrl, endpoints["repos"]["getPagesBuild"]).request,
    getPagesHealthCheck:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/pages/health", "get">(agent, baseUrl, endpoints["repos"]["getPagesHealthCheck"]).request,
    getParticipationStats:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/stats/participation", "get">(agent, baseUrl, endpoints["repos"]["getParticipationStats"]).request,
    getPullRequestReviewProtection:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews", "get">(agent, baseUrl, endpoints["repos"]["getPullRequestReviewProtection"]).request,
    getPunchCardStats:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/stats/punch_card", "get">(agent, baseUrl, endpoints["repos"]["getPunchCardStats"]).request,
    getReadme:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/readme", "get">(agent, baseUrl, endpoints["repos"]["getReadme"]).request,
    getReadmeInDirectory:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/readme/{dir}", "get">(agent, baseUrl, endpoints["repos"]["getReadmeInDirectory"]).request,
    getRelease:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/releases/{release_id}", "get">(agent, baseUrl, endpoints["repos"]["getRelease"]).request,
    getReleaseAsset:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/releases/assets/{asset_id}", "get">(agent, baseUrl, endpoints["repos"]["getReleaseAsset"]).request,
    getReleaseByTag:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/releases/tags/{tag}", "get">(agent, baseUrl, endpoints["repos"]["getReleaseByTag"]).request,
    getRepoRuleset:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/rulesets/{ruleset_id}", "get">(agent, baseUrl, endpoints["repos"]["getRepoRuleset"]).request,
    getRepoRulesets:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/rulesets", "get">(agent, baseUrl, endpoints["repos"]["getRepoRulesets"]).request,
    getStatusChecksProtection:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks", "get">(agent, baseUrl, endpoints["repos"]["getStatusChecksProtection"]).request,
    getTeamsWithAccessToProtectedBranch:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams", "get">(agent, baseUrl, endpoints["repos"]["getTeamsWithAccessToProtectedBranch"]).request,
    getTopPaths:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/traffic/popular/paths", "get">(agent, baseUrl, endpoints["repos"]["getTopPaths"]).request,
    getTopReferrers:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/traffic/popular/referrers", "get">(agent, baseUrl, endpoints["repos"]["getTopReferrers"]).request,
    getUsersWithAccessToProtectedBranch:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users", "get">(agent, baseUrl, endpoints["repos"]["getUsersWithAccessToProtectedBranch"]).request,
    getViews:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/traffic/views", "get">(agent, baseUrl, endpoints["repos"]["getViews"]).request,
    getWebhook:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/hooks/{hook_id}", "get">(agent, baseUrl, endpoints["repos"]["getWebhook"]).request,
    getWebhookConfigForRepo:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/hooks/{hook_id}/config", "get">(agent, baseUrl, endpoints["repos"]["getWebhookConfigForRepo"]).request,
    getWebhookDelivery:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/hooks/{hook_id}/deliveries/{delivery_id}", "get">(agent, baseUrl, endpoints["repos"]["getWebhookDelivery"]).request,
    listAutolinks:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/autolinks", "get">(agent, baseUrl, endpoints["repos"]["listAutolinks"]).request,
    listBranches:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/branches", "get">(agent, baseUrl, endpoints["repos"]["listBranches"]).request,
    listBranchesForHeadCommit:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/commits/{commit_sha}/branches-where-head", "get">(agent, baseUrl, endpoints["repos"]["listBranchesForHeadCommit"]).request,
    listCollaborators:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/collaborators", "get">(agent, baseUrl, endpoints["repos"]["listCollaborators"]).request,
    listCommentsForCommit:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/commits/{commit_sha}/comments", "get">(agent, baseUrl, endpoints["repos"]["listCommentsForCommit"]).request,
    listCommitCommentsForRepo:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/comments", "get">(agent, baseUrl, endpoints["repos"]["listCommitCommentsForRepo"]).request,
    listCommitStatusesForRef:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/commits/{ref}/statuses", "get">(agent, baseUrl, endpoints["repos"]["listCommitStatusesForRef"]).request,
    listCommits:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/commits", "get">(agent, baseUrl, endpoints["repos"]["listCommits"]).request,
    listContributors:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/contributors", "get">(agent, baseUrl, endpoints["repos"]["listContributors"]).request,
    listCustomDeploymentRuleIntegrations:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/environments/{environment_name}/deployment_protection_rules/apps", "get">(agent, baseUrl, endpoints["repos"]["listCustomDeploymentRuleIntegrations"]).request,
    listDeployKeys:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/keys", "get">(agent, baseUrl, endpoints["repos"]["listDeployKeys"]).request,
    listDeploymentBranchPolicies:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/environments/{environment_name}/deployment-branch-policies", "get">(agent, baseUrl, endpoints["repos"]["listDeploymentBranchPolicies"]).request,
    listDeploymentStatuses:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/deployments/{deployment_id}/statuses", "get">(agent, baseUrl, endpoints["repos"]["listDeploymentStatuses"]).request,
    listDeployments:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/deployments", "get">(agent, baseUrl, endpoints["repos"]["listDeployments"]).request,
    listForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/repos", "get">(agent, baseUrl, endpoints["repos"]["listForAuthenticatedUser"]).request,
    listForOrg:
      new MoctokitRequestMocker<"/orgs/{org}/repos", "get">(agent, baseUrl, endpoints["repos"]["listForOrg"]).request,
    listForUser:
      new MoctokitRequestMocker<"/users/{username}/repos", "get">(agent, baseUrl, endpoints["repos"]["listForUser"]).request,
    listForks:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/forks", "get">(agent, baseUrl, endpoints["repos"]["listForks"]).request,
    listInvitations:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/invitations", "get">(agent, baseUrl, endpoints["repos"]["listInvitations"]).request,
    listInvitationsForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/repository_invitations", "get">(agent, baseUrl, endpoints["repos"]["listInvitationsForAuthenticatedUser"]).request,
    listLanguages:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/languages", "get">(agent, baseUrl, endpoints["repos"]["listLanguages"]).request,
    listPagesBuilds:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/pages/builds", "get">(agent, baseUrl, endpoints["repos"]["listPagesBuilds"]).request,
    listPublic:
      new MoctokitRequestMocker<"/repositories", "get">(agent, baseUrl, endpoints["repos"]["listPublic"]).request,
    listPullRequestsAssociatedWithCommit:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/commits/{commit_sha}/pulls", "get">(agent, baseUrl, endpoints["repos"]["listPullRequestsAssociatedWithCommit"]).request,
    listReleaseAssets:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/releases/{release_id}/assets", "get">(agent, baseUrl, endpoints["repos"]["listReleaseAssets"]).request,
    listReleases:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/releases", "get">(agent, baseUrl, endpoints["repos"]["listReleases"]).request,
    listTagProtection:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/tags/protection", "get">(agent, baseUrl, endpoints["repos"]["listTagProtection"]).request,
    listTags:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/tags", "get">(agent, baseUrl, endpoints["repos"]["listTags"]).request,
    listTeams:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/teams", "get">(agent, baseUrl, endpoints["repos"]["listTeams"]).request,
    listWebhookDeliveries:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/hooks/{hook_id}/deliveries", "get">(agent, baseUrl, endpoints["repos"]["listWebhookDeliveries"]).request,
    listWebhooks:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/hooks", "get">(agent, baseUrl, endpoints["repos"]["listWebhooks"]).request,
    merge:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/merges", "post">(agent, baseUrl, endpoints["repos"]["merge"]).request,
    mergeUpstream:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/merge-upstream", "post">(agent, baseUrl, endpoints["repos"]["mergeUpstream"]).request,
    pingWebhook:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/hooks/{hook_id}/pings", "post">(agent, baseUrl, endpoints["repos"]["pingWebhook"]).request,
    redeliverWebhookDelivery:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/hooks/{hook_id}/deliveries/{delivery_id}/attempts", "post">(agent, baseUrl, endpoints["repos"]["redeliverWebhookDelivery"]).request,
    removeAppAccessRestrictions:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps", "delete">(agent, baseUrl, endpoints["repos"]["removeAppAccessRestrictions"]).request,
    removeCollaborator:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/collaborators/{username}", "delete">(agent, baseUrl, endpoints["repos"]["removeCollaborator"]).request,
    removeStatusCheckContexts:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts", "delete">(agent, baseUrl, endpoints["repos"]["removeStatusCheckContexts"]).request,
    removeStatusCheckProtection:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks", "delete">(agent, baseUrl, endpoints["repos"]["removeStatusCheckProtection"]).request,
    removeTeamAccessRestrictions:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams", "delete">(agent, baseUrl, endpoints["repos"]["removeTeamAccessRestrictions"]).request,
    removeUserAccessRestrictions:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users", "delete">(agent, baseUrl, endpoints["repos"]["removeUserAccessRestrictions"]).request,
    renameBranch:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/branches/{branch}/rename", "post">(agent, baseUrl, endpoints["repos"]["renameBranch"]).request,
    replaceAllTopics:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/topics", "put">(agent, baseUrl, endpoints["repos"]["replaceAllTopics"]).request,
    requestPagesBuild:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/pages/builds", "post">(agent, baseUrl, endpoints["repos"]["requestPagesBuild"]).request,
    setAdminBranchProtection:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins", "post">(agent, baseUrl, endpoints["repos"]["setAdminBranchProtection"]).request,
    setAppAccessRestrictions:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps", "put">(agent, baseUrl, endpoints["repos"]["setAppAccessRestrictions"]).request,
    setStatusCheckContexts:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts", "put">(agent, baseUrl, endpoints["repos"]["setStatusCheckContexts"]).request,
    setTeamAccessRestrictions:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams", "put">(agent, baseUrl, endpoints["repos"]["setTeamAccessRestrictions"]).request,
    setUserAccessRestrictions:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users", "put">(agent, baseUrl, endpoints["repos"]["setUserAccessRestrictions"]).request,
    testPushWebhook:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/hooks/{hook_id}/tests", "post">(agent, baseUrl, endpoints["repos"]["testPushWebhook"]).request,
    transfer:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/transfer", "post">(agent, baseUrl, endpoints["repos"]["transfer"]).request,
    update:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}", "patch">(agent, baseUrl, endpoints["repos"]["update"]).request,
    updateBranchProtection:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/branches/{branch}/protection", "put">(agent, baseUrl, endpoints["repos"]["updateBranchProtection"]).request,
    updateCommitComment:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/comments/{comment_id}", "patch">(agent, baseUrl, endpoints["repos"]["updateCommitComment"]).request,
    updateDeploymentBranchPolicy:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/environments/{environment_name}/deployment-branch-policies/{branch_policy_id}", "put">(agent, baseUrl, endpoints["repos"]["updateDeploymentBranchPolicy"]).request,
    updateInformationAboutPagesSite:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/pages", "put">(agent, baseUrl, endpoints["repos"]["updateInformationAboutPagesSite"]).request,
    updateInvitation:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/invitations/{invitation_id}", "patch">(agent, baseUrl, endpoints["repos"]["updateInvitation"]).request,
    updateOrgRuleset:
      new MoctokitRequestMocker<"/orgs/{org}/rulesets/{ruleset_id}", "put">(agent, baseUrl, endpoints["repos"]["updateOrgRuleset"]).request,
    updatePullRequestReviewProtection:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews", "patch">(agent, baseUrl, endpoints["repos"]["updatePullRequestReviewProtection"]).request,
    updateRelease:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/releases/{release_id}", "patch">(agent, baseUrl, endpoints["repos"]["updateRelease"]).request,
    updateReleaseAsset:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/releases/assets/{asset_id}", "patch">(agent, baseUrl, endpoints["repos"]["updateReleaseAsset"]).request,
    updateRepoRuleset:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/rulesets/{ruleset_id}", "put">(agent, baseUrl, endpoints["repos"]["updateRepoRuleset"]).request,
    updateStatusCheckPotection:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks", "patch">(agent, baseUrl, endpoints["repos"]["updateStatusCheckPotection"]).request,
    updateStatusCheckProtection:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks", "patch">(agent, baseUrl, endpoints["repos"]["updateStatusCheckProtection"]).request,
    updateWebhook:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/hooks/{hook_id}", "patch">(agent, baseUrl, endpoints["repos"]["updateWebhook"]).request,
    updateWebhookConfigForRepo:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/hooks/{hook_id}/config", "patch">(agent, baseUrl, endpoints["repos"]["updateWebhookConfigForRepo"]).request,
    uploadReleaseAsset:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/releases/{release_id}/assets", "post">(agent, baseUrl, endpoints["repos"]["uploadReleaseAsset"]).request,
  },
  search: {
    code: new MoctokitRequestMocker<"/search/code", "get">(agent, baseUrl, endpoints["search"]["code"]).request,
    commits:
      new MoctokitRequestMocker<"/search/commits", "get">(agent, baseUrl, endpoints["search"]["commits"]).request,
    issuesAndPullRequests:
      new MoctokitRequestMocker<"/search/issues", "get">(agent, baseUrl, endpoints["search"]["issuesAndPullRequests"]).request,
    labels:
      new MoctokitRequestMocker<"/search/labels", "get">(agent, baseUrl, endpoints["search"]["labels"]).request,
    repos:
      new MoctokitRequestMocker<"/search/repositories", "get">(agent, baseUrl, endpoints["search"]["repos"]).request,
    topics:
      new MoctokitRequestMocker<"/search/topics", "get">(agent, baseUrl, endpoints["search"]["topics"]).request,
    users:
      new MoctokitRequestMocker<"/search/users", "get">(agent, baseUrl, endpoints["search"]["users"]).request,
  },
  secretScanning: {
    getAlert:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/secret-scanning/alerts/{alert_number}", "get">(agent, baseUrl, endpoints["secretScanning"]["getAlert"]).request,
    listAlertsForEnterprise:
      new MoctokitRequestMocker<"/enterprises/{enterprise}/secret-scanning/alerts", "get">(agent, baseUrl, endpoints["secretScanning"]["listAlertsForEnterprise"]).request,
    listAlertsForOrg:
      new MoctokitRequestMocker<"/orgs/{org}/secret-scanning/alerts", "get">(agent, baseUrl, endpoints["secretScanning"]["listAlertsForOrg"]).request,
    listAlertsForRepo:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/secret-scanning/alerts", "get">(agent, baseUrl, endpoints["secretScanning"]["listAlertsForRepo"]).request,
    listLocationsForAlert:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/secret-scanning/alerts/{alert_number}/locations", "get">(agent, baseUrl, endpoints["secretScanning"]["listLocationsForAlert"]).request,
    updateAlert:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/secret-scanning/alerts/{alert_number}", "patch">(agent, baseUrl, endpoints["secretScanning"]["updateAlert"]).request,
  },
  securityAdvisories: {
    createPrivateVulnerabilityReport:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/security-advisories/reports", "post">(agent, baseUrl, endpoints["securityAdvisories"]["createPrivateVulnerabilityReport"]).request,
    createRepositoryAdvisory:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/security-advisories", "post">(agent, baseUrl, endpoints["securityAdvisories"]["createRepositoryAdvisory"]).request,
    getRepositoryAdvisory:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/security-advisories/{ghsa_id}", "get">(agent, baseUrl, endpoints["securityAdvisories"]["getRepositoryAdvisory"]).request,
    listRepositoryAdvisories:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/security-advisories", "get">(agent, baseUrl, endpoints["securityAdvisories"]["listRepositoryAdvisories"]).request,
    updateRepositoryAdvisory:
      new MoctokitRequestMocker<"/repos/{owner}/{repo}/security-advisories/{ghsa_id}", "patch">(agent, baseUrl, endpoints["securityAdvisories"]["updateRepositoryAdvisory"]).request,
  },
  teams: {
    addOrUpdateMembershipForUserInOrg:
      new MoctokitRequestMocker<"/orgs/{org}/teams/{team_slug}/memberships/{username}", "put">(agent, baseUrl, endpoints["teams"]["addOrUpdateMembershipForUserInOrg"]).request,
    addOrUpdateProjectPermissionsInOrg:
      new MoctokitRequestMocker<"/orgs/{org}/teams/{team_slug}/projects/{project_id}", "put">(agent, baseUrl, endpoints["teams"]["addOrUpdateProjectPermissionsInOrg"]).request,
    addOrUpdateRepoPermissionsInOrg:
      new MoctokitRequestMocker<"/orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}", "put">(agent, baseUrl, endpoints["teams"]["addOrUpdateRepoPermissionsInOrg"]).request,
    checkPermissionsForProjectInOrg:
      new MoctokitRequestMocker<"/orgs/{org}/teams/{team_slug}/projects/{project_id}", "get">(agent, baseUrl, endpoints["teams"]["checkPermissionsForProjectInOrg"]).request,
    checkPermissionsForRepoInOrg:
      new MoctokitRequestMocker<"/orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}", "get">(agent, baseUrl, endpoints["teams"]["checkPermissionsForRepoInOrg"]).request,
    create:
      new MoctokitRequestMocker<"/orgs/{org}/teams", "post">(agent, baseUrl, endpoints["teams"]["create"]).request,
    createDiscussionCommentInOrg:
      new MoctokitRequestMocker<"/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments", "post">(agent, baseUrl, endpoints["teams"]["createDiscussionCommentInOrg"]).request,
    createDiscussionInOrg:
      new MoctokitRequestMocker<"/orgs/{org}/teams/{team_slug}/discussions", "post">(agent, baseUrl, endpoints["teams"]["createDiscussionInOrg"]).request,
    deleteDiscussionCommentInOrg:
      new MoctokitRequestMocker<"/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}", "delete">(agent, baseUrl, endpoints["teams"]["deleteDiscussionCommentInOrg"]).request,
    deleteDiscussionInOrg:
      new MoctokitRequestMocker<"/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}", "delete">(agent, baseUrl, endpoints["teams"]["deleteDiscussionInOrg"]).request,
    deleteInOrg:
      new MoctokitRequestMocker<"/orgs/{org}/teams/{team_slug}", "delete">(agent, baseUrl, endpoints["teams"]["deleteInOrg"]).request,
    getByName:
      new MoctokitRequestMocker<"/orgs/{org}/teams/{team_slug}", "get">(agent, baseUrl, endpoints["teams"]["getByName"]).request,
    getDiscussionCommentInOrg:
      new MoctokitRequestMocker<"/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}", "get">(agent, baseUrl, endpoints["teams"]["getDiscussionCommentInOrg"]).request,
    getDiscussionInOrg:
      new MoctokitRequestMocker<"/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}", "get">(agent, baseUrl, endpoints["teams"]["getDiscussionInOrg"]).request,
    getMembershipForUserInOrg:
      new MoctokitRequestMocker<"/orgs/{org}/teams/{team_slug}/memberships/{username}", "get">(agent, baseUrl, endpoints["teams"]["getMembershipForUserInOrg"]).request,
    list: new MoctokitRequestMocker<"/orgs/{org}/teams", "get">(agent, baseUrl, endpoints["teams"]["list"]).request,
    listChildInOrg:
      new MoctokitRequestMocker<"/orgs/{org}/teams/{team_slug}/teams", "get">(agent, baseUrl, endpoints["teams"]["listChildInOrg"]).request,
    listDiscussionCommentsInOrg:
      new MoctokitRequestMocker<"/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments", "get">(agent, baseUrl, endpoints["teams"]["listDiscussionCommentsInOrg"]).request,
    listDiscussionsInOrg:
      new MoctokitRequestMocker<"/orgs/{org}/teams/{team_slug}/discussions", "get">(agent, baseUrl, endpoints["teams"]["listDiscussionsInOrg"]).request,
    listForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/teams", "get">(agent, baseUrl, endpoints["teams"]["listForAuthenticatedUser"]).request,
    listMembersInOrg:
      new MoctokitRequestMocker<"/orgs/{org}/teams/{team_slug}/members", "get">(agent, baseUrl, endpoints["teams"]["listMembersInOrg"]).request,
    listPendingInvitationsInOrg:
      new MoctokitRequestMocker<"/orgs/{org}/teams/{team_slug}/invitations", "get">(agent, baseUrl, endpoints["teams"]["listPendingInvitationsInOrg"]).request,
    listProjectsInOrg:
      new MoctokitRequestMocker<"/orgs/{org}/teams/{team_slug}/projects", "get">(agent, baseUrl, endpoints["teams"]["listProjectsInOrg"]).request,
    listReposInOrg:
      new MoctokitRequestMocker<"/orgs/{org}/teams/{team_slug}/repos", "get">(agent, baseUrl, endpoints["teams"]["listReposInOrg"]).request,
    removeMembershipForUserInOrg:
      new MoctokitRequestMocker<"/orgs/{org}/teams/{team_slug}/memberships/{username}", "delete">(agent, baseUrl, endpoints["teams"]["removeMembershipForUserInOrg"]).request,
    removeProjectInOrg:
      new MoctokitRequestMocker<"/orgs/{org}/teams/{team_slug}/projects/{project_id}", "delete">(agent, baseUrl, endpoints["teams"]["removeProjectInOrg"]).request,
    removeRepoInOrg:
      new MoctokitRequestMocker<"/orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}", "delete">(agent, baseUrl, endpoints["teams"]["removeRepoInOrg"]).request,
    updateDiscussionCommentInOrg:
      new MoctokitRequestMocker<"/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}", "patch">(agent, baseUrl, endpoints["teams"]["updateDiscussionCommentInOrg"]).request,
    updateDiscussionInOrg:
      new MoctokitRequestMocker<"/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}", "patch">(agent, baseUrl, endpoints["teams"]["updateDiscussionInOrg"]).request,
    updateInOrg:
      new MoctokitRequestMocker<"/orgs/{org}/teams/{team_slug}", "patch">(agent, baseUrl, endpoints["teams"]["updateInOrg"]).request,
  },
  users: {
    addEmailForAuthenticated:
      new MoctokitRequestMocker<"/user/emails", "post">(agent, baseUrl, endpoints["users"]["addEmailForAuthenticated"]).request,
    addEmailForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/emails", "post">(agent, baseUrl, endpoints["users"]["addEmailForAuthenticatedUser"]).request,
    addSocialAccountForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/social_accounts", "post">(agent, baseUrl, endpoints["users"]["addSocialAccountForAuthenticatedUser"]).request,
    block:
      new MoctokitRequestMocker<"/user/blocks/{username}", "put">(agent, baseUrl, endpoints["users"]["block"]).request,
    checkBlocked:
      new MoctokitRequestMocker<"/user/blocks/{username}", "get">(agent, baseUrl, endpoints["users"]["checkBlocked"]).request,
    checkFollowingForUser:
      new MoctokitRequestMocker<"/users/{username}/following/{target_user}", "get">(agent, baseUrl, endpoints["users"]["checkFollowingForUser"]).request,
    checkPersonIsFollowedByAuthenticated:
      new MoctokitRequestMocker<"/user/following/{username}", "get">(agent, baseUrl, endpoints["users"]["checkPersonIsFollowedByAuthenticated"]).request,
    createGpgKeyForAuthenticated:
      new MoctokitRequestMocker<"/user/gpg_keys", "post">(agent, baseUrl, endpoints["users"]["createGpgKeyForAuthenticated"]).request,
    createGpgKeyForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/gpg_keys", "post">(agent, baseUrl, endpoints["users"]["createGpgKeyForAuthenticatedUser"]).request,
    createPublicSshKeyForAuthenticated:
      new MoctokitRequestMocker<"/user/keys", "post">(agent, baseUrl, endpoints["users"]["createPublicSshKeyForAuthenticated"]).request,
    createPublicSshKeyForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/keys", "post">(agent, baseUrl, endpoints["users"]["createPublicSshKeyForAuthenticatedUser"]).request,
    createSshSigningKeyForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/ssh_signing_keys", "post">(agent, baseUrl, endpoints["users"]["createSshSigningKeyForAuthenticatedUser"]).request,
    deleteEmailForAuthenticated:
      new MoctokitRequestMocker<"/user/emails", "delete">(agent, baseUrl, endpoints["users"]["deleteEmailForAuthenticated"]).request,
    deleteEmailForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/emails", "delete">(agent, baseUrl, endpoints["users"]["deleteEmailForAuthenticatedUser"]).request,
    deleteGpgKeyForAuthenticated:
      new MoctokitRequestMocker<"/user/gpg_keys/{gpg_key_id}", "delete">(agent, baseUrl, endpoints["users"]["deleteGpgKeyForAuthenticated"]).request,
    deleteGpgKeyForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/gpg_keys/{gpg_key_id}", "delete">(agent, baseUrl, endpoints["users"]["deleteGpgKeyForAuthenticatedUser"]).request,
    deletePublicSshKeyForAuthenticated:
      new MoctokitRequestMocker<"/user/keys/{key_id}", "delete">(agent, baseUrl, endpoints["users"]["deletePublicSshKeyForAuthenticated"]).request,
    deletePublicSshKeyForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/keys/{key_id}", "delete">(agent, baseUrl, endpoints["users"]["deletePublicSshKeyForAuthenticatedUser"]).request,
    deleteSocialAccountForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/social_accounts", "delete">(agent, baseUrl, endpoints["users"]["deleteSocialAccountForAuthenticatedUser"]).request,
    deleteSshSigningKeyForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/ssh_signing_keys/{ssh_signing_key_id}", "delete">(agent, baseUrl, endpoints["users"]["deleteSshSigningKeyForAuthenticatedUser"]).request,
    follow:
      new MoctokitRequestMocker<"/user/following/{username}", "put">(agent, baseUrl, endpoints["users"]["follow"]).request,
    getAuthenticated:
      new MoctokitRequestMocker<"/user", "get">(agent, baseUrl, endpoints["users"]["getAuthenticated"]).request,
    getByUsername:
      new MoctokitRequestMocker<"/users/{username}", "get">(agent, baseUrl, endpoints["users"]["getByUsername"]).request,
    getContextForUser:
      new MoctokitRequestMocker<"/users/{username}/hovercard", "get">(agent, baseUrl, endpoints["users"]["getContextForUser"]).request,
    getGpgKeyForAuthenticated:
      new MoctokitRequestMocker<"/user/gpg_keys/{gpg_key_id}", "get">(agent, baseUrl, endpoints["users"]["getGpgKeyForAuthenticated"]).request,
    getGpgKeyForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/gpg_keys/{gpg_key_id}", "get">(agent, baseUrl, endpoints["users"]["getGpgKeyForAuthenticatedUser"]).request,
    getPublicSshKeyForAuthenticated:
      new MoctokitRequestMocker<"/user/keys/{key_id}", "get">(agent, baseUrl, endpoints["users"]["getPublicSshKeyForAuthenticated"]).request,
    getPublicSshKeyForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/keys/{key_id}", "get">(agent, baseUrl, endpoints["users"]["getPublicSshKeyForAuthenticatedUser"]).request,
    getSshSigningKeyForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/ssh_signing_keys/{ssh_signing_key_id}", "get">(agent, baseUrl, endpoints["users"]["getSshSigningKeyForAuthenticatedUser"]).request,
    list: new MoctokitRequestMocker<"/users", "get">(agent, baseUrl, endpoints["users"]["list"]).request,
    listBlockedByAuthenticated:
      new MoctokitRequestMocker<"/user/blocks", "get">(agent, baseUrl, endpoints["users"]["listBlockedByAuthenticated"]).request,
    listBlockedByAuthenticatedUser:
      new MoctokitRequestMocker<"/user/blocks", "get">(agent, baseUrl, endpoints["users"]["listBlockedByAuthenticatedUser"]).request,
    listEmailsForAuthenticated:
      new MoctokitRequestMocker<"/user/emails", "get">(agent, baseUrl, endpoints["users"]["listEmailsForAuthenticated"]).request,
    listEmailsForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/emails", "get">(agent, baseUrl, endpoints["users"]["listEmailsForAuthenticatedUser"]).request,
    listFollowedByAuthenticated:
      new MoctokitRequestMocker<"/user/following", "get">(agent, baseUrl, endpoints["users"]["listFollowedByAuthenticated"]).request,
    listFollowedByAuthenticatedUser:
      new MoctokitRequestMocker<"/user/following", "get">(agent, baseUrl, endpoints["users"]["listFollowedByAuthenticatedUser"]).request,
    listFollowersForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/followers", "get">(agent, baseUrl, endpoints["users"]["listFollowersForAuthenticatedUser"]).request,
    listFollowersForUser:
      new MoctokitRequestMocker<"/users/{username}/followers", "get">(agent, baseUrl, endpoints["users"]["listFollowersForUser"]).request,
    listFollowingForUser:
      new MoctokitRequestMocker<"/users/{username}/following", "get">(agent, baseUrl, endpoints["users"]["listFollowingForUser"]).request,
    listGpgKeysForAuthenticated:
      new MoctokitRequestMocker<"/user/gpg_keys", "get">(agent, baseUrl, endpoints["users"]["listGpgKeysForAuthenticated"]).request,
    listGpgKeysForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/gpg_keys", "get">(agent, baseUrl, endpoints["users"]["listGpgKeysForAuthenticatedUser"]).request,
    listGpgKeysForUser:
      new MoctokitRequestMocker<"/users/{username}/gpg_keys", "get">(agent, baseUrl, endpoints["users"]["listGpgKeysForUser"]).request,
    listPublicEmailsForAuthenticated:
      new MoctokitRequestMocker<"/user/public_emails", "get">(agent, baseUrl, endpoints["users"]["listPublicEmailsForAuthenticated"]).request,
    listPublicEmailsForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/public_emails", "get">(agent, baseUrl, endpoints["users"]["listPublicEmailsForAuthenticatedUser"]).request,
    listPublicKeysForUser:
      new MoctokitRequestMocker<"/users/{username}/keys", "get">(agent, baseUrl, endpoints["users"]["listPublicKeysForUser"]).request,
    listPublicSshKeysForAuthenticated:
      new MoctokitRequestMocker<"/user/keys", "get">(agent, baseUrl, endpoints["users"]["listPublicSshKeysForAuthenticated"]).request,
    listPublicSshKeysForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/keys", "get">(agent, baseUrl, endpoints["users"]["listPublicSshKeysForAuthenticatedUser"]).request,
    listSocialAccountsForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/social_accounts", "get">(agent, baseUrl, endpoints["users"]["listSocialAccountsForAuthenticatedUser"]).request,
    listSocialAccountsForUser:
      new MoctokitRequestMocker<"/users/{username}/social_accounts", "get">(agent, baseUrl, endpoints["users"]["listSocialAccountsForUser"]).request,
    listSshSigningKeysForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/ssh_signing_keys", "get">(agent, baseUrl, endpoints["users"]["listSshSigningKeysForAuthenticatedUser"]).request,
    listSshSigningKeysForUser:
      new MoctokitRequestMocker<"/users/{username}/ssh_signing_keys", "get">(agent, baseUrl, endpoints["users"]["listSshSigningKeysForUser"]).request,
    setPrimaryEmailVisibilityForAuthenticated:
      new MoctokitRequestMocker<"/user/email/visibility", "patch">(agent, baseUrl, endpoints["users"]["setPrimaryEmailVisibilityForAuthenticated"]).request,
    setPrimaryEmailVisibilityForAuthenticatedUser:
      new MoctokitRequestMocker<"/user/email/visibility", "patch">(agent, baseUrl, endpoints["users"]["setPrimaryEmailVisibilityForAuthenticatedUser"]).request,
    unblock:
      new MoctokitRequestMocker<"/user/blocks/{username}", "delete">(agent, baseUrl, endpoints["users"]["unblock"]).request,
    unfollow:
      new MoctokitRequestMocker<"/user/following/{username}", "delete">(agent, baseUrl, endpoints["users"]["unfollow"]).request,
    updateAuthenticated:
      new MoctokitRequestMocker<"/user", "patch">(agent, baseUrl, endpoints["users"]["updateAuthenticated"]).request,
  },
});

export default endpointToMethod;
