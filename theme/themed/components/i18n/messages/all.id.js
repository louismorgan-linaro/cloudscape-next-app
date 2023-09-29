export default {
  '@cloudscape-design/components': {
    id: {
      '[charts]': {
        loadingText: [{ type: 0, value: 'Memuat bagan' }],
        errorText: [{ type: 0, value: 'Data tidak dapat diambil. Coba lagi nanti.' }],
        recoveryText: [{ type: 0, value: 'Coba lagi' }],
        'i18nStrings.filterLabel': [{ type: 0, value: 'Filter data yang ditampilkan' }],
        'i18nStrings.filterPlaceholder': [{ type: 0, value: 'Filter data' }],
        'i18nStrings.legendAriaLabel': [{ type: 0, value: 'Legenda' }],
        'i18nStrings.xAxisAriaRoleDescription': [{ type: 0, value: 'sumbu x' }],
        'i18nStrings.yAxisAriaRoleDescription': [{ type: 0, value: 'sumbu y' }],
      },
      alert: { dismissAriaLabel: [{ type: 0, value: 'Abaikan pemberitahuan' }] },
      'annotation-context': {
        'i18nStrings.nextButtonText': [{ type: 0, value: 'Berikutnya' }],
        'i18nStrings.previousButtonText': [{ type: 0, value: 'Sebelumnya' }],
        'i18nStrings.finishButtonText': [{ type: 0, value: 'Selesai' }],
        'i18nStrings.labelDismissAnnotation': [{ type: 0, value: 'Abaikan anotasi' }],
        'i18nStrings.stepCounterText': [
          { type: 0, value: 'Langkah ' },
          { type: 1, value: 'stepNumber' },
          { type: 0, value: ' dari ' },
          { type: 1, value: 'totalStepCount' },
        ],
        'i18nStrings.taskTitle': [
          { type: 0, value: 'Tugas ' },
          { type: 1, value: 'taskNumber' },
          { type: 0, value: ': ' },
          { type: 1, value: 'taskTitle' },
        ],
        'i18nStrings.labelHotspot': [
          {
            type: 5,
            value: 'openState',
            options: {
              true: {
                value: [
                  { type: 0, value: 'Tutup anotasi untuk langkah ' },
                  { type: 1, value: 'stepNumber' },
                  { type: 0, value: ' dari ' },
                  { type: 1, value: 'totalStepCount' },
                ],
              },
              false: {
                value: [
                  { type: 0, value: 'Buka anotasi untuk langkah ' },
                  { type: 1, value: 'stepNumber' },
                  { type: 0, value: ' dari ' },
                  { type: 1, value: 'totalStepCount' },
                ],
              },
              other: { value: [] },
            },
          },
        ],
      },
      'app-layout': {
        'ariaLabels.navigation': [{ type: 0, value: 'Navigasi samping' }],
        'ariaLabels.navigationClose': [{ type: 0, value: 'Tutup navigasi samping' }],
        'ariaLabels.navigationToggle': [{ type: 0, value: 'Buka navigasi samping' }],
        'ariaLabels.notifications': [{ type: 0, value: 'Notifikasi' }],
        'ariaLabels.tools': [{ type: 0, value: 'Panel bantuan' }],
        'ariaLabels.toolsClose': [{ type: 0, value: 'Tutup panel bantuan' }],
        'ariaLabels.toolsToggle': [{ type: 0, value: 'Buka panel bantuan' }],
      },
      'area-chart': { 'i18nStrings.detailTotalLabel': [{ type: 0, value: 'Total' }] },
      'attribute-editor': { removeButtonText: [{ type: 0, value: 'Hapus' }] },
      autosuggest: {
        errorIconAriaLabel: [{ type: 0, value: 'Kesalahan' }],
        selectedAriaLabel: [{ type: 0, value: 'Dipilih' }],
        enteredTextLabel: [
          { type: 0, value: 'Gunakan: "' },
          { type: 1, value: 'value' },
          { type: 0, value: '"' },
        ],
        recoveryText: [{ type: 0, value: 'Coba lagi' }],
      },
      'breadcrumb-group': { expandAriaLabel: [{ type: 0, value: 'Tampilkan jalur' }] },
      calendar: {
        nextMonthAriaLabel: [{ type: 0, value: 'Bulan berikutnya' }],
        previousMonthAriaLabel: [{ type: 0, value: 'Bulan sebelumnya' }],
        todayAriaLabel: [{ type: 0, value: 'Hari ini' }],
      },
      cards: { 'ariaLabels.selectionGroupLabel': [{ type: 0, value: 'Pemilihan item' }] },
      'code-editor': {
        'i18nStrings.loadingState': [{ type: 0, value: 'Memuat editor kode' }],
        'i18nStrings.errorState': [{ type: 0, value: 'Terjadi kesalahan saat memuat editor kode.' }],
        'i18nStrings.errorStateRecovery': [{ type: 0, value: 'Coba lagi' }],
        'i18nStrings.editorGroupAriaLabel': [{ type: 0, value: 'Editor kode' }],
        'i18nStrings.statusBarGroupAriaLabel': [{ type: 0, value: 'Bilah status' }],
        'i18nStrings.cursorPosition': [
          { type: 0, value: 'Brs. ' },
          { type: 1, value: 'row' },
          { type: 0, value: ', Kol. ' },
          { type: 1, value: 'column' },
        ],
        'i18nStrings.errorsTab': [{ type: 0, value: 'Kesalahan' }],
        'i18nStrings.warningsTab': [{ type: 0, value: 'Peringatan' }],
        'i18nStrings.preferencesButtonAriaLabel': [{ type: 0, value: 'Preferensi' }],
        'i18nStrings.paneCloseButtonAriaLabel': [{ type: 0, value: 'Tutup' }],
        'i18nStrings.preferencesModalHeader': [{ type: 0, value: 'Preferensi' }],
        'i18nStrings.preferencesModalCancel': [{ type: 0, value: 'Batalkan' }],
        'i18nStrings.preferencesModalConfirm': [{ type: 0, value: 'Konfirmasikan' }],
        'i18nStrings.preferencesModalWrapLines': [{ type: 0, value: 'Bungkus baris' }],
        'i18nStrings.preferencesModalTheme': [{ type: 0, value: 'Tema' }],
        'i18nStrings.preferencesModalLightThemes': [{ type: 0, value: 'Tema terang' }],
        'i18nStrings.preferencesModalDarkThemes': [{ type: 0, value: 'Tema gelap' }],
      },
      'collection-preferences': {
        title: [{ type: 0, value: 'Preferensi' }],
        confirmLabel: [{ type: 0, value: 'Konfirmasikan' }],
        cancelLabel: [{ type: 0, value: 'Batalkan' }],
        'pageSizePreference.title': [{ type: 0, value: 'Ukuran halaman' }],
        'wrapLinesPreference.label': [{ type: 0, value: 'Bungkus baris' }],
        'wrapLinesPreference.description': [{ type: 0, value: 'Pilih untuk melihat semua teks dan membungkus baris' }],
        'stripedRowsPreference.label': [{ type: 0, value: 'Baris bergaris' }],
        'stripedRowsPreference.description': [{ type: 0, value: 'Pilih untuk menambahkan baris berbayang bergantian' }],
        'contentDensityPreference.label': [{ type: 0, value: 'Mode ringkas' }],
        'contentDensityPreference.description': [
          { type: 0, value: 'Pilih untuk menampilkan konten dalam mode yang lebih padat dan ringkas' },
        ],
        'contentDisplayPreference.title': [{ type: 0, value: 'Preferensi kolom' }],
        'contentDisplayPreference.description': [{ type: 0, value: 'Sesuaikan visibilitas dan urutan kolom.' }],
        'contentDisplayPreference.dragHandleAriaLabel': [{ type: 0, value: 'Tuas seret' }],
        'contentDisplayPreference.dragHandleAriaDescription': [
          {
            type: 0,
            value:
              'Gunakan Spasi atau Enter untuk mengaktifkan seret item, lalu gunakan tombol panah untuk memindahkan posisi item. Untuk menyelesaikan perpindahan posisi, gunakan Spasi atau Enter, atau untuk membatalkan perpindahan, gunakan Escape.',
          },
        ],
        'contentDisplayPreference.liveAnnouncementDndStarted': [
          { type: 0, value: 'Mengambil item pada posisi ' },
          { type: 1, value: 'position' },
          { type: 0, value: ' dari ' },
          { type: 1, value: 'total' },
        ],
        'contentDisplayPreference.liveAnnouncementDndDiscarded': [{ type: 0, value: 'Pengurutan ulang dibatalkan' }],
        'contentDisplayPreference.liveAnnouncementDndItemReordered': [
          {
            type: 5,
            value: 'isInitialPosition',
            options: {
              true: {
                value: [
                  { type: 0, value: 'Memindahkan item kembali ke posisi ' },
                  { type: 1, value: 'currentPosition' },
                  { type: 0, value: ' dari ' },
                  { type: 1, value: 'total' },
                ],
              },
              false: {
                value: [
                  { type: 0, value: 'Memindahkan item ke posisi ' },
                  { type: 1, value: 'currentPosition' },
                  { type: 0, value: ' dari ' },
                  { type: 1, value: 'total' },
                ],
              },
              other: { value: [] },
            },
          },
        ],
        'contentDisplayPreference.liveAnnouncementDndItemCommitted': [
          {
            type: 5,
            value: 'isInitialPosition',
            options: {
              true: {
                value: [
                  { type: 0, value: 'Item dipindahkan kembali ke posisi aslinya ' },
                  { type: 1, value: 'initialPosition' },
                  { type: 0, value: ' dari ' },
                  { type: 1, value: 'total' },
                ],
              },
              false: {
                value: [
                  { type: 0, value: 'Item dipindahkan dari posisi ' },
                  { type: 1, value: 'initialPosition' },
                  { type: 0, value: ' ke posisi ' },
                  { type: 1, value: 'finalPosition' },
                  { type: 0, value: ' dari ' },
                  { type: 1, value: 'total' },
                ],
              },
              other: { value: [] },
            },
          },
        ],
      },
      'date-range-picker': {
        'i18nStrings.relativeModeTitle': [{ type: 0, value: 'Mode relatif' }],
        'i18nStrings.absoluteModeTitle': [{ type: 0, value: 'Mode absolut' }],
        'i18nStrings.relativeRangeSelectionHeading': [{ type: 0, value: 'Pilih rentang' }],
        'i18nStrings.cancelButtonLabel': [{ type: 0, value: 'Batalkan' }],
        'i18nStrings.clearButtonLabel': [{ type: 0, value: 'Hapus dan abaikan' }],
        'i18nStrings.applyButtonLabel': [{ type: 0, value: 'Terapkan' }],
        'i18nStrings.customRelativeRangeOptionLabel': [{ type: 0, value: 'Rentang kustom' }],
        'i18nStrings.customRelativeRangeOptionDescription': [{ type: 0, value: 'Atur rentang kustom pada masa lalu' }],
        'i18nStrings.customRelativeRangeUnitLabel': [{ type: 0, value: 'Satuan waktu' }],
        'i18nStrings.customRelativeRangeDurationLabel': [{ type: 0, value: 'Durasi' }],
        'i18nStrings.customRelativeRangeDurationPlaceholder': [{ type: 0, value: 'Masukkan durasi' }],
        'i18nStrings.startDateLabel': [{ type: 0, value: 'Tanggal mulai' }],
        'i18nStrings.startTimeLabel': [{ type: 0, value: 'Waktu mulai' }],
        'i18nStrings.endDateLabel': [{ type: 0, value: 'Tanggal berakhir' }],
        'i18nStrings.endTimeLabel': [{ type: 0, value: 'Waktu berakhir' }],
        'i18nStrings.dateTimeConstraintText': [
          { type: 0, value: 'Untuk tanggal, gunakan HH/BB/TTTT. Untuk waktu, gunakan format 24 jam.' },
        ],
        'i18nStrings.errorIconAriaLabel': [{ type: 0, value: 'Kesalahan' }],
        'i18nStrings.renderSelectedAbsoluteRangeAriaLive': [
          { type: 0, value: 'Rentang dipilih dari ' },
          { type: 1, value: 'startDate' },
          { type: 0, value: ' hingga ' },
          { type: 1, value: 'endDate' },
        ],
        'i18nStrings.formatRelativeRange': [
          {
            type: 6,
            value: 'amount',
            options: {
              one: {
                value: [
                  { type: 1, value: 'amount' },
                  { type: 0, value: ' ' },
                  { type: 1, value: 'unit' },
                  { type: 0, value: ' terakhir' },
                ],
              },
              other: {
                value: [
                  { type: 1, value: 'amount' },
                  { type: 0, value: ' ' },
                  { type: 1, value: 'unit' },
                  { type: 0, value: ' terakhir' },
                ],
              },
            },
            offset: 0,
            pluralType: 'cardinal',
          },
        ],
        'i18nStrings.formatUnit': [
          {
            type: 6,
            value: 'amount',
            options: { one: { value: [{ type: 1, value: 'unit' }] }, other: { value: [{ type: 1, value: 'unit' }] } },
            offset: 0,
            pluralType: 'cardinal',
          },
        ],
      },
      drawer: { 'i18nStrings.loadingText': [{ type: 0, value: 'Memuat konten' }] },
      flashbar: {
        'i18nStrings.ariaLabel': [{ type: 0, value: 'Notifikasi' }],
        'i18nStrings.errorIconAriaLabel': [{ type: 0, value: 'Kesalahan' }],
        'i18nStrings.inProgressIconAriaLabel': [{ type: 0, value: 'Sedang berlangsung' }],
        'i18nStrings.infoIconAriaLabel': [{ type: 0, value: 'Info' }],
        'i18nStrings.notificationBarAriaLabel': [{ type: 0, value: 'Semua notifikasi' }],
        'i18nStrings.notificationBarText': [{ type: 0, value: 'Notifikasi' }],
        'i18nStrings.successIconAriaLabel': [{ type: 0, value: 'Berhasil' }],
        'i18nStrings.warningIconAriaLabel': [{ type: 0, value: 'Peringatan' }],
      },
      'form-field': { 'i18nStrings.errorIconAriaLabel': [{ type: 0, value: 'Kesalahan' }] },
      form: { errorIconAriaLabel: [{ type: 0, value: 'Kesalahan' }] },
      'help-panel': { loadingText: [{ type: 0, value: 'Memuat konten' }] },
      input: { clearAriaLabel: [{ type: 0, value: 'Hapus' }] },
      link: { externalIconAriaLabel: [{ type: 0, value: 'Buka di tab baru' }] },
      modal: { closeAriaLabel: [{ type: 0, value: 'Tutup modal' }] },
      multiselect: {
        deselectAriaLabel: [
          { type: 0, value: 'Hapus ' },
          { type: 1, value: 'option__label' },
        ],
      },
      pagination: {
        'ariaLabels.nextPageLabel': [{ type: 0, value: 'Halaman berikutnya' }],
        'ariaLabels.pageLabel': [
          { type: 0, value: 'Halaman ' },
          { type: 1, value: 'pageNumber' },
          { type: 0, value: ' dari semua halaman' },
        ],
        'ariaLabels.previousPageLabel': [{ type: 0, value: 'Halaman sebelumnya' }],
      },
      'pie-chart': {
        'i18nStrings.detailsValue': [{ type: 0, value: 'Nilai' }],
        'i18nStrings.detailsPercentage': [{ type: 0, value: 'Persentase' }],
        'i18nStrings.chartAriaRoleDescription': [{ type: 0, value: 'Bagan pai' }],
        'i18nStrings.segmentAriaRoleDescription': [{ type: 0, value: 'Segmen' }],
      },
      popover: { dismissAriaLabel: [{ type: 0, value: 'Tutup popover' }] },
      'property-filter': {
        'i18nStrings.allPropertiesLabel': [{ type: 0, value: 'Semua properti' }],
        'i18nStrings.applyActionText': [{ type: 0, value: 'Terapkan' }],
        'i18nStrings.cancelActionText': [{ type: 0, value: 'Batalkan' }],
        'i18nStrings.clearFiltersText': [{ type: 0, value: 'Hapus filter' }],
        'i18nStrings.editTokenHeader': [{ type: 0, value: 'Edit filter' }],
        'i18nStrings.groupPropertiesText': [{ type: 0, value: 'Properti' }],
        'i18nStrings.groupValuesText': [{ type: 0, value: 'Nilai' }],
        'i18nStrings.operationAndText': [{ type: 0, value: 'dan' }],
        'i18nStrings.operationOrText': [{ type: 0, value: 'atau' }],
        'i18nStrings.operatorContainsText': [{ type: 0, value: 'Berisi' }],
        'i18nStrings.operatorDoesNotContainText': [{ type: 0, value: 'Tidak berisi' }],
        'i18nStrings.operatorDoesNotEqualText': [{ type: 0, value: 'Tidak sama dengan' }],
        'i18nStrings.operatorEqualsText': [{ type: 0, value: 'Sama dengan' }],
        'i18nStrings.operatorGreaterOrEqualText': [{ type: 0, value: 'Lebih besar dari atau sama dengan' }],
        'i18nStrings.operatorGreaterText': [{ type: 0, value: 'Lebih besar dari' }],
        'i18nStrings.operatorLessOrEqualText': [{ type: 0, value: 'Kurang dari atau sama dengan' }],
        'i18nStrings.operatorLessText': [{ type: 0, value: 'Kurang dari' }],
        'i18nStrings.operatorText': [{ type: 0, value: 'Operator' }],
        'i18nStrings.operatorsText': [{ type: 0, value: 'Operator' }],
        'i18nStrings.propertyText': [{ type: 0, value: 'Properti' }],
        'i18nStrings.tokenLimitShowFewer': [{ type: 0, value: 'Tampilkan lebih sedikit' }],
        'i18nStrings.tokenLimitShowMore': [{ type: 0, value: 'Tampilkan selengkapnya' }],
        'i18nStrings.valueText': [{ type: 0, value: 'Nilai' }],
        'i18nStrings.removeTokenButtonAriaLabel': [
          {
            type: 5,
            value: 'token__operator',
            options: {
              equals: {
                value: [
                  { type: 0, value: 'Hapus filter, ' },
                  { type: 1, value: 'token__propertyKey' },
                  { type: 0, value: ' sama dengan ' },
                  { type: 1, value: 'token__value' },
                ],
              },
              not_equals: {
                value: [
                  { type: 0, value: 'Hapus filter, ' },
                  { type: 1, value: 'token__propertyKey' },
                  { type: 0, value: ' tidak sama dengan ' },
                  { type: 1, value: 'token__value' },
                ],
              },
              greater_than: {
                value: [
                  { type: 0, value: 'Hapus filter, ' },
                  { type: 1, value: 'token__propertyKey' },
                  { type: 0, value: ' lebih besar dari ' },
                  { type: 1, value: 'token__value' },
                ],
              },
              greater_than_equal: {
                value: [
                  { type: 0, value: 'Hapus filter, ' },
                  { type: 1, value: 'token__propertyKey' },
                  { type: 0, value: ' lebih besar dari atau sama dengan ' },
                  { type: 1, value: 'token__value' },
                ],
              },
              less_than: {
                value: [
                  { type: 0, value: 'Hapus filter, ' },
                  { type: 1, value: 'token__propertyKey' },
                  { type: 0, value: ' kurang dari ' },
                  { type: 1, value: 'token__value' },
                ],
              },
              less_than_equal: {
                value: [
                  { type: 0, value: 'Hapus filter, ' },
                  { type: 1, value: 'token__propertyKey' },
                  { type: 0, value: ' kurang dari atau sama dengan ' },
                  { type: 1, value: 'token__value' },
                ],
              },
              contains: {
                value: [
                  { type: 0, value: 'Hapus filter, ' },
                  { type: 1, value: 'token__propertyKey' },
                  { type: 0, value: ' berisi ' },
                  { type: 1, value: 'token__value' },
                ],
              },
              not_contains: {
                value: [
                  { type: 0, value: 'Hapus filter, ' },
                  { type: 1, value: 'token__propertyKey' },
                  { type: 0, value: ' tidak berisi ' },
                  { type: 1, value: 'token__value' },
                ],
              },
              other: { value: [] },
            },
          },
        ],
      },
      's3-resource-selector': {
        'i18nStrings.inContextSelectPlaceholder': [{ type: 0, value: 'Pilih versi' }],
        'i18nStrings.inContextBrowseButton': [{ type: 0, value: 'Jelajahi S3' }],
        'i18nStrings.inContextViewButton': [{ type: 0, value: 'Lihat' }],
        'i18nStrings.inContextViewButtonAriaLabel': [{ type: 0, value: 'Lihat (buka di tab baru)' }],
        'i18nStrings.inContextLoadingText': [{ type: 0, value: 'Memuat sumber daya' }],
        'i18nStrings.inContextUriLabel': [{ type: 0, value: 'URI S3' }],
        'i18nStrings.inContextVersionSelectLabel': [{ type: 0, value: 'Versi objek' }],
        'i18nStrings.modalTitle': [{ type: 0, value: 'Pilih arsip di S3' }],
        'i18nStrings.modalCancelButton': [{ type: 0, value: 'Batalkan' }],
        'i18nStrings.modalSubmitButton': [{ type: 0, value: 'Pilih' }],
        'i18nStrings.modalBreadcrumbRootItem': [{ type: 0, value: 'Bucket S3' }],
        'i18nStrings.selectionBuckets': [{ type: 0, value: 'Bucket' }],
        'i18nStrings.selectionObjects': [{ type: 0, value: 'Objek' }],
        'i18nStrings.selectionVersions': [{ type: 0, value: 'Versi' }],
        'i18nStrings.selectionBucketsSearchPlaceholder': [{ type: 0, value: 'Temukan bucket' }],
        'i18nStrings.selectionObjectsSearchPlaceholder': [{ type: 0, value: 'Temukan objek berdasarkan prefiks' }],
        'i18nStrings.selectionVersionsSearchPlaceholder': [{ type: 0, value: 'Temukan versi' }],
        'i18nStrings.selectionBucketsLoading': [{ type: 0, value: 'Memuat bucket' }],
        'i18nStrings.selectionBucketsNoItems': [{ type: 0, value: 'Tidak ada bucket' }],
        'i18nStrings.selectionObjectsLoading': [{ type: 0, value: 'Memuat objek' }],
        'i18nStrings.selectionObjectsNoItems': [{ type: 0, value: 'Tidak ada objek' }],
        'i18nStrings.selectionVersionsLoading': [{ type: 0, value: 'Memuat versi' }],
        'i18nStrings.selectionVersionsNoItems': [{ type: 0, value: 'Tidak ada versi' }],
        'i18nStrings.filteringNoMatches': [{ type: 0, value: 'Tidak ada kecocokan' }],
        'i18nStrings.filteringCantFindMatch': [{ type: 0, value: 'Kami tidak dapat menemukan kecocokan.' }],
        'i18nStrings.clearFilterButtonText': [{ type: 0, value: 'Hapus filter' }],
        'i18nStrings.columnBucketID': [{ type: 0, value: 'ID' }],
        'i18nStrings.columnBucketName': [{ type: 0, value: 'Nama' }],
        'i18nStrings.columnBucketCreationDate': [{ type: 0, value: 'Tanggal pembuatan' }],
        'i18nStrings.columnBucketRegion': [{ type: 0, value: 'Wilayah' }],
        'i18nStrings.columnObjectKey': [{ type: 0, value: 'Kunci' }],
        'i18nStrings.columnObjectLastModified': [{ type: 0, value: 'Terakhir diubah' }],
        'i18nStrings.columnObjectSize': [{ type: 0, value: 'Ukuran' }],
        'i18nStrings.columnVersionID': [{ type: 0, value: 'ID Versi' }],
        'i18nStrings.columnVersionLastModified': [{ type: 0, value: 'Terakhir diubah' }],
        'i18nStrings.columnVersionSize': [{ type: 0, value: 'Ukuran' }],
        'i18nStrings.validationPathMustBegin': [{ type: 0, value: 'Jalur harus dimulai dengan s3://' }],
        'i18nStrings.validationBucketLowerCase': [
          { type: 0, value: 'Nama bucket harus diawali dengan karakter huruf kecil atau angka.' },
        ],
        'i18nStrings.validationBucketMustNotContain': [
          { type: 0, value: 'Nama bucket tidak boleh berisi karakter huruf besar.' },
        ],
        'i18nStrings.validationBucketLength': [
          { type: 0, value: 'Nama bucket harus terdiri dari 3 hingga 63 karakter.' },
        ],
        'i18nStrings.validationBucketMustComplyDns': [
          { type: 0, value: 'Nama bucket harus mematuhi konvensi penamaan DNS.' },
        ],
        'i18nStrings.labelSortedDescending': [
          { type: 1, value: 'columnName' },
          { type: 0, value: ', diurutkan turun' },
        ],
        'i18nStrings.labelSortedAscending': [
          { type: 1, value: 'columnName' },
          { type: 0, value: ', diurutkan naik' },
        ],
        'i18nStrings.labelNotSorted': [
          { type: 1, value: 'columnName' },
          { type: 0, value: ', tidak diurutkan' },
        ],
        'i18nStrings.labelsBucketsSelection.selectionGroupLabel': [{ type: 0, value: 'Bucket' }],
        'i18nStrings.labelsBucketsSelection.itemSelectionLabel': [{ type: 1, value: 'item__Name' }],
        'i18nStrings.labelsObjectsSelection.selectionGroupLabel': [{ type: 0, value: 'Objek' }],
        'i18nStrings.labelsObjectsSelection.itemSelectionLabel': [{ type: 1, value: 'item__Key' }],
        'i18nStrings.labelsVersionsSelection.selectionGroupLabel': [{ type: 0, value: 'Versi' }],
        'i18nStrings.labelsVersionsSelection.itemSelectionLabel': [{ type: 1, value: 'item__VersionId' }],
        'i18nStrings.labelFiltering': [
          { type: 0, value: 'Temukan ' },
          { type: 1, value: 'itemsType' },
        ],
        'i18nStrings.labelRefresh': [{ type: 0, value: 'Segarkan data' }],
        'i18nStrings.labelBreadcrumbs': [{ type: 0, value: 'Navigasi S3' }],
        'i18nStrings.filteringCounterText': [
          {
            type: 6,
            value: 'count',
            options: {
              one: { value: [{ type: 0, value: '1 kecocokan' }] },
              other: {
                value: [
                  { type: 1, value: 'count' },
                  { type: 0, value: ' kecocokan' },
                ],
              },
            },
            offset: 0,
            pluralType: 'cardinal',
          },
        ],
      },
      select: {
        errorIconAriaLabel: [{ type: 0, value: 'Kesalahan' }],
        selectedAriaLabel: [{ type: 0, value: 'Dipilih' }],
        recoveryText: [{ type: 0, value: 'Coba lagi' }],
      },
      'split-panel': {
        'i18nStrings.closeButtonAriaLabel': [{ type: 0, value: 'Tutup panel' }],
        'i18nStrings.openButtonAriaLabel': [{ type: 0, value: 'Buka panel' }],
        'i18nStrings.preferencesTitle': [{ type: 0, value: 'Preferensi panel terpisah' }],
        'i18nStrings.preferencesPositionLabel': [{ type: 0, value: 'Posisi panel terpisah' }],
        'i18nStrings.preferencesPositionDescription': [
          { type: 0, value: 'Pilih posisi panel terpisah default untuk layanan.' },
        ],
        'i18nStrings.preferencesPositionSide': [{ type: 0, value: 'Samping' }],
        'i18nStrings.preferencesPositionBottom': [{ type: 0, value: 'Bawah' }],
        'i18nStrings.preferencesConfirm': [{ type: 0, value: 'Konfirmasikan' }],
        'i18nStrings.preferencesCancel': [{ type: 0, value: 'Batalkan' }],
        'i18nStrings.resizeHandleAriaLabel': [{ type: 0, value: 'Ubah ukuran panel terpisah' }],
      },
      table: {
        'ariaLabels.submittingEditText': [{ type: 0, value: 'Mengirimkan pengeditan' }],
        'ariaLabels.successfulEditLabel': [{ type: 0, value: 'Edit berhasil' }],
        'columnDefinitions.editConfig.errorIconAriaLabel': [{ type: 0, value: 'Kesalahan' }],
        'columnDefinitions.editConfig.editIconAriaLabel': [{ type: 0, value: 'dapat diedit' }],
      },
      tabs: {
        'i18nStrings.scrollLeftAriaLabel': [{ type: 0, value: 'Gulir ke kiri' }],
        'i18nStrings.scrollRightAriaLabel': [{ type: 0, value: 'Gulir ke kanan' }],
      },
      'tag-editor': {
        'i18nStrings.keyPlaceholder': [{ type: 0, value: 'Masukkan kunci' }],
        'i18nStrings.valuePlaceholder': [{ type: 0, value: 'Masukkan nilai' }],
        'i18nStrings.addButton': [{ type: 0, value: 'Tambahkan tanda baru' }],
        'i18nStrings.removeButton': [{ type: 0, value: 'Hapus' }],
        'i18nStrings.removeButtonAriaLabel': [
          { type: 0, value: 'Hapus ' },
          { type: 1, value: 'tag__key' },
        ],
        'i18nStrings.undoButton': [{ type: 0, value: 'Batalkan' }],
        'i18nStrings.undoPrompt': [{ type: 0, value: 'Tanda ini akan dihapus setelah perubahan disimpan' }],
        'i18nStrings.loading': [{ type: 0, value: 'Memuat tanda yang terkait dengan sumber daya ini' }],
        'i18nStrings.keyHeader': [{ type: 0, value: 'Kunci' }],
        'i18nStrings.valueHeader': [{ type: 0, value: 'Nilai' }],
        'i18nStrings.optional': [{ type: 0, value: 'opsional' }],
        'i18nStrings.keySuggestion': [{ type: 0, value: 'Kunci tanda kustom' }],
        'i18nStrings.valueSuggestion': [{ type: 0, value: 'Nilai tanda kustom' }],
        'i18nStrings.emptyTags': [{ type: 0, value: 'Tidak ada tanda yang terkait dengan sumber daya.' }],
        'i18nStrings.tooManyKeysSuggestion': [
          { type: 0, value: 'Kunci yang Anda miliki lebih banyak dari yang dapat ditampilkan' },
        ],
        'i18nStrings.tooManyValuesSuggestion': [
          { type: 0, value: 'Nilai yang Anda miliki lebih banyak dari yang dapat ditampilkan' },
        ],
        'i18nStrings.keysSuggestionLoading': [{ type: 0, value: 'Memuat kunci tanda' }],
        'i18nStrings.keysSuggestionError': [{ type: 0, value: 'Kunci tanda tidak dapat diambil' }],
        'i18nStrings.valuesSuggestionLoading': [{ type: 0, value: 'Memuat nilai tanda' }],
        'i18nStrings.valuesSuggestionError': [{ type: 0, value: 'Nilai tanda tidak dapat diambil' }],
        'i18nStrings.emptyKeyError': [{ type: 0, value: 'Anda harus menentukan kunci tanda' }],
        'i18nStrings.maxKeyCharLengthError': [
          { type: 0, value: 'Jumlah maksimum karakter yang dapat Anda gunakan dalam kunci tanda adalah 128.' },
        ],
        'i18nStrings.maxValueCharLengthError': [
          { type: 0, value: 'Jumlah maksimum karakter yang dapat Anda gunakan dalam nilai tanda adalah 256.' },
        ],
        'i18nStrings.duplicateKeyError': [{ type: 0, value: 'Anda harus menentukan kunci tanda unik.' }],
        'i18nStrings.invalidKeyError': [
          {
            type: 0,
            value:
              'Kunci tidak valid. Kunci hanya dapat berisi huruf Unicode, angka, spasi kosong, dan salah satu dari karakter berikut: _.:/=+@-',
          },
        ],
        'i18nStrings.invalidValueError': [
          {
            type: 0,
            value:
              'Nilai tidak valid. Nilai hanya dapat berisi huruf Unicode, angka, spasi kosong, dan salah satu dari karakter berikut: _.:/=+@-',
          },
        ],
        'i18nStrings.awsPrefixError': [{ type: 0, value: 'Tidak boleh diawali dengan aws:' }],
        'i18nStrings.tagLimitReached': [
          {
            type: 6,
            value: 'tagLimit',
            options: {
              one: { value: [{ type: 0, value: 'Anda telah mencapai batas 1 tanda.' }] },
              other: {
                value: [
                  { type: 0, value: 'Anda telah mencapai batas ' },
                  { type: 1, value: 'tagLimit' },
                  { type: 0, value: ' tanda.' },
                ],
              },
            },
            offset: 0,
            pluralType: 'cardinal',
          },
        ],
        'i18nStrings.tagLimitExceeded': [
          {
            type: 6,
            value: 'tagLimit',
            options: {
              one: { value: [{ type: 0, value: 'Anda telah melampaui batas 1 tanda.' }] },
              other: {
                value: [
                  { type: 0, value: 'Anda telah melampaui batas ' },
                  { type: 1, value: 'tagLimit' },
                  { type: 0, value: ' tanda.' },
                ],
              },
            },
            offset: 0,
            pluralType: 'cardinal',
          },
        ],
        'i18nStrings.tagLimit': [
          {
            type: 5,
            value: 'tagLimitAvailable',
            options: {
              true: {
                value: [
                  {
                    type: 6,
                    value: 'availableTags',
                    options: {
                      other: {
                        value: [
                          { type: 0, value: 'Anda dapat menambahkan hingga ' },
                          { type: 1, value: 'tagLimit' },
                          { type: 0, value: ' tanda.' },
                        ],
                      },
                    },
                    offset: 0,
                    pluralType: 'cardinal',
                  },
                ],
              },
              false: {
                value: [
                  {
                    type: 6,
                    value: 'availableTags',
                    options: {
                      one: { value: [{ type: 0, value: 'Anda dapat menambahkan hingga 1 tanda lagi.' }] },
                      other: {
                        value: [
                          { type: 0, value: 'Anda dapat menambahkan hingga ' },
                          { type: 1, value: 'availableTags' },
                          { type: 0, value: ' tanda lagi.' },
                        ],
                      },
                    },
                    offset: 0,
                    pluralType: 'cardinal',
                  },
                ],
              },
              other: { value: [] },
            },
          },
        ],
      },
      'token-group': {
        'i18nStrings.limitShowFewer': [{ type: 0, value: 'Tampilkan lebih sedikit' }],
        'i18nStrings.limitShowMore': [{ type: 0, value: 'Tampilkan selengkapnya' }],
      },
      'top-navigation': {
        'i18nStrings.searchIconAriaLabel': [{ type: 0, value: 'Cari' }],
        'i18nStrings.searchDismissIconAriaLabel': [{ type: 0, value: 'Tutup pencarian' }],
        'i18nStrings.overflowMenuTriggerText': [{ type: 0, value: 'Lainnya' }],
        'i18nStrings.overflowMenuDismissIconAriaLabel': [{ type: 0, value: 'Tutup menu' }],
        'i18nStrings.overflowMenuBackIconAriaLabel': [{ type: 0, value: 'Kembali' }],
        'i18nStrings.overflowMenuTitleText': [{ type: 0, value: 'Semua' }],
      },
      'tutorial-panel': {
        'i18nStrings.loadingText': [{ type: 0, value: 'Memuat' }],
        'i18nStrings.tutorialListTitle': [{ type: 0, value: 'Pilih tutorial' }],
        'i18nStrings.tutorialListDownloadLinkText': [{ type: 0, value: 'Unduh versi PDF' }],
        'i18nStrings.labelTutorialListDownloadLink': [{ type: 0, value: 'Unduh versi PDF tutorial ini' }],
        'i18nStrings.tutorialCompletedText': [{ type: 0, value: 'Tutorial selesai' }],
        'i18nStrings.learnMoreLinkText': [{ type: 0, value: 'Pelajari selengkapnya' }],
        'i18nStrings.startTutorialButtonText': [{ type: 0, value: 'Mulai tutorial' }],
        'i18nStrings.restartTutorialButtonText': [{ type: 0, value: 'Mulai ulang tutorial' }],
        'i18nStrings.completionScreenTitle': [{ type: 0, value: 'Selamat! Anda menyelesaikan tutorial.' }],
        'i18nStrings.feedbackLinkText': [{ type: 0, value: 'Umpan balik' }],
        'i18nStrings.dismissTutorialButtonText': [{ type: 0, value: 'Abaikan tutorial' }],
        'i18nStrings.taskTitle': [
          { type: 0, value: 'Tugas ' },
          { type: 1, value: 'taskNumber' },
          { type: 0, value: ': ' },
          { type: 1, value: 'taskTitle' },
        ],
        'i18nStrings.stepTitle': [
          { type: 0, value: 'Langkah ' },
          { type: 1, value: 'stepNumber' },
          { type: 0, value: ': ' },
          { type: 1, value: 'stepTitle' },
        ],
        'i18nStrings.labelExitTutorial': [{ type: 0, value: 'Abaikan tutorial' }],
        'i18nStrings.labelTotalSteps': [
          { type: 0, value: 'Total langkah: ' },
          { type: 1, value: 'totalStepCount' },
        ],
        'i18nStrings.labelsTaskStatus.pending': [{ type: 0, value: 'Tertunda' }],
        'i18nStrings.labelsTaskStatus.in-progress': [{ type: 0, value: 'Sedang berlangsung' }],
        'i18nStrings.labelsTaskStatus.success': [{ type: 0, value: 'Berhasil' }],
      },
      wizard: {
        'i18nStrings.stepNumberLabel': [
          { type: 0, value: 'Langkah ' },
          { type: 1, value: 'stepNumber' },
        ],
        'i18nStrings.collapsedStepsLabel': [
          { type: 0, value: 'Langkah ' },
          { type: 1, value: 'stepNumber' },
          { type: 0, value: ' dari ' },
          { type: 1, value: 'stepsCount' },
        ],
        'i18nStrings.skipToButtonLabel': [
          { type: 0, value: 'Lewati ke ' },
          { type: 1, value: 'task__title' },
        ],
        'i18nStrings.navigationAriaLabel': [{ type: 0, value: 'Langkah' }],
        'i18nStrings.cancelButton': [{ type: 0, value: 'Batalkan' }],
        'i18nStrings.previousButton': [{ type: 0, value: 'Sebelumnya' }],
        'i18nStrings.nextButton': [{ type: 0, value: 'Berikutnya' }],
        'i18nStrings.optional': [{ type: 0, value: 'opsional' }],
        'i18nStrings.nextButtonLoadingAnnouncement': [{ type: 0, value: 'Memuat langkah berikutnya' }],
        'i18nStrings.submitButtonLoadingAnnouncement': [{ type: 0, value: 'Mengirimkan formulir' }],
      },
    },
  },
};
