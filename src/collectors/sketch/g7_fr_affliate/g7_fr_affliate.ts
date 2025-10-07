
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class G7FrAffliateCollector extends SketchCollector {

    static CONFIG = {
        id: "g7_fr_affliate",
        name: "G7.fr - Affliate",
        description: "i18n.collectors.g7_fr_affliate.description",
        version: "0",
        website: "https://www.g7.fr/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/108268.jpg",
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
        entryUrl: "https://www.g7.fr/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(G7FrAffliateCollector.CONFIG);
    }
}
