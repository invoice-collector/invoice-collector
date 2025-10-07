
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class ActiveAssurancesCollector extends SketchCollector {

    static CONFIG = {
        id: "active_assurances",
        name: "Active Assurances",
        description: "i18n.collectors.active_assurances.description",
        version: "0",
        website: "https://client.activeassurances.fr/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/105195.jpg",
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
        entryUrl: "https://client.activeassurances.fr/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ActiveAssurancesCollector.CONFIG);
    }
}
