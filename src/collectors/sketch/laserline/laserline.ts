
import { SketchCollector } from '../../sketchCollector';

export class LaserlineCollector extends SketchCollector {

    static CONFIG = {
        id: "laserline",
        name: "LASERLINE",
        description: "i18n.collectors.laserline.description",
        version: "0",
        website: "https://www.laser-line.de/benutzerkonto/bestellungen.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/20592.jpg",
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
        entryUrl: "https://www.laser-line.de/benutzerkonto/bestellungen.html",
    }

    constructor() {
        super(LaserlineCollector.CONFIG);
    }
}
