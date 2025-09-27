
import { SketchCollector } from '../../sketchCollector';

export class LeaderDriveCollector extends SketchCollector {

    static CONFIG = {
        id: "leader_drive",
        name: "Leader Drive",
        description: "i18n.collectors.leader_drive.description",
        version: "0",
        website: "https://www.leaderdrive.fr/connexion",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/107057.jpg",
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
        entryUrl: "https://www.leaderdrive.fr/connexion",
    }

    constructor() {
        super(LeaderDriveCollector.CONFIG);
    }
}
