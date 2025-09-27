
import { SketchCollector } from '../../sketchCollector';

export class MitgasMitteldeutscheGasversorgungGmbhCollector extends SketchCollector {

    static CONFIG = {
        id: "mitgas_mitteldeutsche_gasversorgung_gmbh",
        name: "MITGAS Mitteldeutsche Gasversorgung GmbH",
        description: "i18n.collectors.mitgas_mitteldeutsche_gasversorgung_gmbh.description",
        version: "0",
        website: "https://www.mitgas.de/privatkunden",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/90720.jpg",
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
        entryUrl: "https://www.mitgas.de/privatkunden",
    }

    constructor() {
        super(MitgasMitteldeutscheGasversorgungGmbhCollector.CONFIG);
    }
}
