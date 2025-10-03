
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class EuroshellCardCollector extends SketchCollector {

    static CONFIG = {
        id: "euroshell_card",
        name: "euroShell Card",
        description: "i18n.collectors.euroshell_card.description",
        version: "0",
        website: "https://simplyui-sme.azurewebsites.net/reports",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9538.jpg",
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
        entryUrl: "https://simplyui-sme.azurewebsites.net/reports",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(EuroshellCardCollector.CONFIG);
    }
}
