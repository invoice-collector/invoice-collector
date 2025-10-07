
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class _3dvistaCollector extends SketchCollector {

    static CONFIG = {
        id: "3dvista",
        name: "3DVista",
        description: "i18n.collectors.3dvista.description",
        version: "0",
        website: "https://download.3dvista.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2120016.jpg",
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
        entryUrl: "https://download.3dvista.com/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(_3dvistaCollector.CONFIG);
    }
}
