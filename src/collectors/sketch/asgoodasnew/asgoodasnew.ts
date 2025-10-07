
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class AsgoodasnewCollector extends SketchCollector {

    static CONFIG = {
        id: "asgoodasnew",
        name: "asgoodasnew",
        description: "i18n.collectors.asgoodasnew.description",
        version: "0",
        website: "http://asgoodasnew.de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1324829.jpg",
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
        entryUrl: "http://asgoodasnew.de",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AsgoodasnewCollector.CONFIG);
    }
}
