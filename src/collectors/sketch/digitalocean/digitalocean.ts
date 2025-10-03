
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class DigitaloceanCollector extends SketchCollector {

    static CONFIG = {
        id: "digitalocean",
        name: "DigitalOcean",
        description: "i18n.collectors.digitalocean.description",
        version: "0",
        website: "https://cloud.digitalocean.com/droplets",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/6598.jpg",
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
        entryUrl: "https://cloud.digitalocean.com/droplets",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(DigitaloceanCollector.CONFIG);
    }
}
