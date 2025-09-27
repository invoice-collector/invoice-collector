
import { SketchCollector } from '../../sketchCollector';

export class BackupRadarScalepadCollector extends SketchCollector {

    static CONFIG = {
        id: "backup_radar_scalepad",
        name: "Backup Radar Scalepad",
        description: "i18n.collectors.backup_radar_scalepad.description",
        version: "0",
        website: "https://eu.backupradar.com/app/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1488446.jpg",
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
        entryUrl: "https://eu.backupradar.com/app/invoices",
    }

    constructor() {
        super(BackupRadarScalepadCollector.CONFIG);
    }
}
