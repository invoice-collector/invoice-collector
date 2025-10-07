
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class RapidusertestsCollector extends SketchCollector {

    static CONFIG = {
        id: "rapidusertests",
        name: "RapidUserTests",
        description: "i18n.collectors.rapidusertests.description",
        version: "0",
        website: "https://rapidusertests.com/user/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/758898.jpg",
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
        entryUrl: "https://rapidusertests.com/user/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(RapidusertestsCollector.CONFIG);
    }
}
