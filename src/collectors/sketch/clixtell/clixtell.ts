
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class ClixtellCollector extends SketchCollector {

    static CONFIG = {
        id: "clixtell",
        name: "Clixtell",
        description: "i18n.collectors.clixtell.description",
        version: "0",
        website: "https://app.clixtell.com/#/dashboard/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4564083.jpg",
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
        entryUrl: "https://app.clixtell.com/#/dashboard/billing",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ClixtellCollector.CONFIG);
    }
}
