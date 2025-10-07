
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class ReadmeIoCollector extends SketchCollector {

    static CONFIG = {
        id: "readme_io",
        name: "readme.io",
        description: "i18n.collectors.readme_io.description",
        version: "0",
        website: "https://dash.readme.io/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/14406.jpg",
        type: CollectorType.SKETCH,
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
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ReadmeIoCollector.CONFIG);
    }
}
