
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class PrismaPbsGmbhCollector extends SketchCollector {

    static CONFIG = {
        id: "prisma_pbs_gmbh",
        name: "Prisma (PBS-GmbH)",
        description: "i18n.collectors.prisma_pbs_gmbh.description",
        version: "0",
        website: "https://archiv.pbs-gmbh.com/cgi-bin/m210000.asp/Aktion=Archiv&Neu_BelegArt=ZR",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/203070.jpg",
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
        entryUrl: "https://archiv.pbs-gmbh.com/cgi-bin/m210000.asp/Aktion=Archiv&Neu_BelegArt=ZR",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(PrismaPbsGmbhCollector.CONFIG);
    }
}
