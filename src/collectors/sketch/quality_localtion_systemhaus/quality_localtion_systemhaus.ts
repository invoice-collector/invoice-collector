
import { SketchCollector } from '../../sketchCollector';

export class QualityLocaltionSystemhausCollector extends SketchCollector {

    static CONFIG = {
        id: "quality_localtion_systemhaus",
        name: "Quality Localtion Systemhaus",
        description: "i18n.collectors.quality_localtion_systemhaus.description",
        version: "0",
        website: "https://kundencenter.qloc.de/clientarea.php?action=invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1645335.jpg",
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
        entryUrl: "https://kundencenter.qloc.de/clientarea.php?action=invoices",
    }

    constructor() {
        super(QualityLocaltionSystemhausCollector.CONFIG);
    }
}
