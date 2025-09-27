
import { SketchCollector } from '../../sketchCollector';

export class ReadmeIoCollector extends SketchCollector {

    static CONFIG = {
        id: "readme_io",
        name: "readme.io",
        description: "i18n.collectors.readme_io.description",
        version: "0",
        website: "https://dash.readme.io/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/14406.jpg",
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
        entryUrl: "https://dash.readme.io/login",
    }

    constructor() {
        super(ReadmeIoCollector.CONFIG);
    }
}
