
import { SketchCollector } from '../../sketchCollector';

export class BurstSpieleCollector extends SketchCollector {

    static CONFIG = {
        id: "burst_spiele",
        name: "BURST Spiele",
        description: "i18n.collectors.burst_spiele.description",
        version: "0",
        website: "https://www.burstspiele.de/shop2/index.php?page=account&action=bills",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1980326.jpg",
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
        entryUrl: "https://www.burstspiele.de/shop2/index.php?page=account&action=bills",
    }

    constructor() {
        super(BurstSpieleCollector.CONFIG);
    }
}
