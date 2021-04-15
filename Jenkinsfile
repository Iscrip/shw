node {    
    properties([
        buildDiscarder(logRotator(artifactDaysToKeepStr: '', artifactNumToKeepStr: '', daysToKeepStr: '5', numToKeepStr: '5'))
    ])

    image = "agrisin/react-app-shw"
    latest = "latest"

    stage('checkout') {
        checkout scm
    }

    stage('build image') {
        app = docker.build(image)
    }
  
    stage('push image') {
        docker.withRegistry('https://registry.hub.docker.com', 'dockerhub') {
            app.push(latest)
        }
    }
}