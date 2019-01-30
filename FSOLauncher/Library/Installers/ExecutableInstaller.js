/**
 * Launches external installer executables that are stored
 * in the bin folder of the launcher.
 * 
 * @class ExecutableInstaller
 */
class ExecutableInstaller
{
	/**
	 * Runs a child process.
	 * 
	 * @param {any} file File to run.
	 * @returns 
	 * @memberof ExecutableInstaller
	 */
	run(file)
	{
		return new Promise((resolve, reject) =>
		{
			let child = require('child_process')
				.exec(file, {cwd: 'bin'});

			child.on('close', code => {
				return resolve()
            });

			child.stderr.on('data', data => {
            	console.log('stdout: ' + data);
        	})
		})
	}
}

module.exports = ExecutableInstaller;