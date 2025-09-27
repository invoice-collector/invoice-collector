
import { SketchCollector } from '../../sketchCollector';

export class BackupsheepCollector extends SketchCollector {

    static CONFIG = {
        id: "backupsheep",
        name: "BackupSheep",
        description: "i18n.collectors.backupsheep.description",
        version: "0",
        website: "https://backupsheep.com/console/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/534531.jpg",
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
        entryUrl: "https://backupsheep.com/console/billing",
    }

    constructor() {
        super(BackupsheepCollector.CONFIG);
    }
}
