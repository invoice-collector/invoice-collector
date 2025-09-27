
import { SketchCollector } from '../../sketchCollector';

export class ParkenInMainzGmbhCollector extends SketchCollector {

    static CONFIG = {
        id: "parken_in_mainz_gmbh",
        name: "Parken in Mainz GmbH",
        description: "i18n.collectors.parken_in_mainz_gmbh.description",
        version: "0",
        website: "https://pmg.evopark.de/b/aHR0cHM6Ly9hcGktcHJvZHVjdC5ldm9wYXJrLmRlL3BtZy5ldm9wYXJrLmRlL2ludm9pY2Vz",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/185152.jpg",
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
        entryUrl: "https://pmg.evopark.de/b/aHR0cHM6Ly9hcGktcHJvZHVjdC5ldm9wYXJrLmRlL3BtZy5ldm9wYXJrLmRlL2ludm9pY2Vz",
    }

    constructor() {
        super(ParkenInMainzGmbhCollector.CONFIG);
    }
}
