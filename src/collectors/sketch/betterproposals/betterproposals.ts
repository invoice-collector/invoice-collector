
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class BetterproposalsCollector extends SketchCollector {

    static CONFIG = {
        id: "betterproposals",
        name: "BetterProposals",
        description: "i18n.collectors.betterproposals.description",
        version: "0",
        website: "https://betterproposals.io/2/settings/account-invoice-view?id=",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/513496.jpg",
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
        entryUrl: "https://betterproposals.io/2/settings/account-invoice-view?id=",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(BetterproposalsCollector.CONFIG);
    }
}
