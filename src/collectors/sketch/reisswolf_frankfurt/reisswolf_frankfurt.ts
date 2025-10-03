
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class ReisswolfFrankfurtCollector extends SketchCollector {

    static CONFIG = {
        id: "reisswolf_frankfurt",
        name: "Reisswolf Frankfurt",
        description: "i18n.collectors.reisswolf_frankfurt.description",
        version: "0",
        website: "https://www.reisswolf-frankfurt.de/webportal.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/76451.jpg",
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
        entryUrl: "https://www.reisswolf-frankfurt.de/webportal.html",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ReisswolfFrankfurtCollector.CONFIG);
    }
}
