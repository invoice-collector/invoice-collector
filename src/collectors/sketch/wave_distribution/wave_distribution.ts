
import { SketchCollector } from '../../sketchCollector';

export class WaveDistributionCollector extends SketchCollector {

    static CONFIG = {
        id: "wave_distribution",
        name: "Wave Distribution",
        description: "i18n.collectors.wave_distribution.description",
        version: "0",
        website: "https://www.wave-distribution.de/Mein-Konto/Bestellungen",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/40222.jpg",
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
        entryUrl: "https://www.wave-distribution.de/Mein-Konto/Bestellungen",
    }

    constructor() {
        super(WaveDistributionCollector.CONFIG);
    }
}
