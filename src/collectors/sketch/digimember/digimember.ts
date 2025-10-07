
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class DigimemberCollector extends SketchCollector {

    static CONFIG = {
        id: "digimember",
        name: "DigiMember",
        description: "i18n.collectors.digimember.description",
        version: "0",
        website: "https://digimember.de/login/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/962398.jpg",
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
        entryUrl: "https://digimember.de/login/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(DigimemberCollector.CONFIG);
    }
}
