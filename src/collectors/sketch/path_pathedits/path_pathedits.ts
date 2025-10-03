
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class PathPatheditsCollector extends SketchCollector {

    static CONFIG = {
        id: "path_pathedits",
        name: "Path / Pathedits",
        description: "i18n.collectors.path_pathedits.description",
        version: "0",
        website: "https://dashboard.pathedits.com/home",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2846868.jpg",
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
        entryUrl: "https://dashboard.pathedits.com/home",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(PathPatheditsCollector.CONFIG);
    }
}
