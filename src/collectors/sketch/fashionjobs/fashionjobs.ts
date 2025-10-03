
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class FashionjobsCollector extends SketchCollector {

    static CONFIG = {
        id: "fashionjobs",
        name: "FashionJobs",
        description: "i18n.collectors.fashionjobs.description",
        version: "0",
        website: "https://fr.fashionjobs.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/778798.jpg",
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
        entryUrl: "https://fr.fashionjobs.com/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(FashionjobsCollector.CONFIG);
    }
}
