
import { SketchCollector } from '../../sketchCollector';

export class HaistGmbhCollector extends SketchCollector {

    static CONFIG = {
        id: "haist_gmbh",
        name: "Haist GmbH",
        description: "i18n.collectors.haist_gmbh.description",
        version: "0",
        website: "https://www.haist.com/statistik/statistik.cgi?un=w7codUxUMof3aEEcyhvOHytCefOpMVif",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1271408.jpg",
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
        entryUrl: "https://www.haist.com/statistik/statistik.cgi?un=w7codUxUMof3aEEcyhvOHytCefOpMVif",
    }

    constructor() {
        super(HaistGmbhCollector.CONFIG);
    }
}
