const core = require('@actions/core');
// const github = require('@actions/github');
const exec = require('@actions/exec');

function run() {
    const bucket = core.getInput('bucket-name', { required: true, trimWhitespace: true });
    const region = core.getInput('region', { required: true, trimWhitespace: true });
    const distFolder = core.getInput('dist-folder', { required: true, trimWhitespace: true });

    exec.exec(`aws s3 sync ${distFolder} s3://${bucket} --region ${region}`);

    core.notice('Hello from my custom JS Action!');
}

run();