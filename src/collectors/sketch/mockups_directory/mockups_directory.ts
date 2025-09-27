
import { SketchCollector } from '../../sketchCollector';

export class MockupsDirectoryCollector extends SketchCollector {

    static CONFIG = {
        id: "mockups_directory",
        name: "Mockups.Directory",
        description: "i18n.collectors.mockups_directory.description",
        version: "0",
        website: "https://mockups.directory/account",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2854476.jpg",
        params: {
            email: {
                type: "email",
                name: "i18n.collectors.all.email",
                placeholder: "i18n.collectors.all.email.placeholder",
                mandatory: true
            },
            password: {
                type: "password",
                name: "i18n.collectors.all.password",
                placeholder: "i18n.collectors.all.password.placeholder",
                mandatory: true
            }
        },
        entryUrl: "https://mockups.directory/account",
    }

    constructor() {
        super(MockupsDirectoryCollector.CONFIG);
    }
}
