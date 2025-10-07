
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class SleeknoteCollector extends SketchCollector {

    static CONFIG = {
        id: "sleeknote",
        name: "Sleeknote",
        description: "i18n.collectors.sleeknote.description",
        version: "0",
        website: "https://dashboard.sleeknote.com/profile",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/116251.jpg",
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
        entryUrl: "https://dashboard.sleeknote.com/profile",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SleeknoteCollector.CONFIG);
    }
}
