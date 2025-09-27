
import { SketchCollector } from '../../sketchCollector';

export class TrebonoCollector extends SketchCollector {

    static CONFIG = {
        id: "trebono",
        name: "trebono",
        description: "i18n.collectors.trebono.description",
        version: "0",
        website: "https://service.trebono.de/admin/module.php?load=billing&Section=invoice",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/428633.jpg",
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
        entryUrl: "https://service.trebono.de/admin/module.php?load=billing&Section=invoice",
    }

    constructor() {
        super(TrebonoCollector.CONFIG);
    }
}
