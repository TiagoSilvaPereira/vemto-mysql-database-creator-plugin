module.exports = (vemto) => {
    
    return {

        canInstall() {
            return true
        },

        beforeCodeGenerationEnd() {
            let project = vemto.getProject(),
                connection = project.connection

            let command = vemto.executePhpFromPlugin(`files/create_database.php ${connection.username} "${connection.password}" ${connection.database} ${connection.host} ${connection.port}`),
                commandBuffer = command.toString()
            
            vemto.log.info(`Trying to create the database ${connection.database}...`)
            
            if(!commandBuffer || commandBuffer.normalize() != 'Success!') {
                vemto.log.warning(commandBuffer)
            }     
        }

    }
}