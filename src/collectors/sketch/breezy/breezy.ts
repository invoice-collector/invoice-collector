
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class BreezyCollector extends SketchCollector {

    static CONFIG = {
        id: "breezy",
        name: "breezy",
        description: "i18n.collectors.breezy.description",
        version: "0",
        website: "https://breezy.hr/signin",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/56738.jpg",
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
        entryUrl: "https://breezy.hr/signin",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(BreezyCollector.CONFIG);
    }
}
