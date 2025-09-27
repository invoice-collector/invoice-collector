
import { SketchCollector } from '../../sketchCollector';

export class AppleDeveloperProgrammCollector extends SketchCollector {

    static CONFIG = {
        id: "apple_developer_programm",
        name: "Apple Developer Programm",
        description: "i18n.collectors.apple_developer_programm.description",
        version: "0",
        website: "https://developer.apple.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/429767.jpg",
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
        entryUrl: "https://developer.apple.com/",
    }

    constructor() {
        super(AppleDeveloperProgrammCollector.CONFIG);
    }
}
