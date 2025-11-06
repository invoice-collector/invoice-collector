import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class AelBureautiqueCollector extends SketchCollector {

    static CONFIG = {
        id: "aelbureautique",
        name: "Ael bureautique",
        description: "i18n.collectors.aelbureautique.description",
        version: "0",
        website: "https://aelbureautique.fournituredebureau.net",
        logo: "https://aelbureautique.fournituredebureau.net/INTERSHOP/static/WFS/ADVEO-6019898-Site/-/ADVEO-6019898/fr_FR/logo/logo-ael-bureautique.jpg",
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
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AelBureautiqueCollector.CONFIG);
    }
}
