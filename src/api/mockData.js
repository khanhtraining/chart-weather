export const chartWeather = [
    {
        tide: 0.8,
        hour: 'Mon 12:00 pm',
        sun: 0
    },
    {
        tide: 2.1,
        hour: 'Mon 6:00 am',
        sun: 0.001
    },
    {
        tide: 0.7,
        hour: 'Mon 12:00 am',
        sun: 2
    },
    {
        tide: 1.9,
        hour: 'Mon 6:00 pm',
        sun: 0
    },
    {
        tide: 0.9,
        hour: 'Tue 12:00 pm',
        sun: 0
    },
    {
        tide: 2.1,
        hour: 'Tue 6:00 am',
        sun: 0.001
    },
    {
        tide: 0.6,
        hour: 'Tue 12:00 am',
        sun: 2
    },
    {
        tide: 2.1,
        hour: 'Tue 6:00 pm',
        sun: 0
    },
    {
        tide: 0.8,
        hour: 'Wed 12:00 pm',
        sun: 0
    },
    {
        tide: 2.3,
        hour: 'Wed 6:00 am',
        sun: 0.001
    },
    {
        tide: 0.8,
        hour: 'Wed 12:00 am',
        sun: 2
    },
    {
        tide: 2.2,
        hour: 'Wed 6:00 pm',
        sun: 0
    },
    {
        tide: 0.8,
        hour: 'Thur 12:00 pm',
        sun: 0
    },
]

export const singaporeWeather = {
    data: {
        'coord': {
            'lon': 103.8501,
            'lat': 1.2897
        },
        'weather': [
            {
                'id': 522,
                'main': "Rain",
                'description': 'heavy intensity shower rain',
                'icon': '09n'
            }
        ],
        'base': 'stations',
        'main': {
            'temp': 300.32,
            'feels_like': 303.27,
            'temp_min': 298.23,
            'temp_max': 302.12,
            'pressure': 1012,
            'humidity': 80
        },
        'visibility': 10000,
        'wind': {
            'speed': 4.12,
            'deg': 40
        },
        'rain': {
            '1h': 0.13
        },
        'clouds': {
            'all': 40
        },
        'dt': 1629035191,
        'sys': {
            'type': 1,
            'id': 9470,
            'country': 'SG',
            'sunrise': 1628982272,
            'sunset': 1629026038
        },
        'timezone': 28800,
        'id': 1880252,
        'name': 'Singapore',
        'cod': 200
    }
}

export const hcmWeather = {
    data: {
        'coord': {
            'lon': 106.6667,
            'lat': 10.75
        },
        'weather': [
            {
                'id': 802,
                'main': 'Clouds',
                'description': 'scattered clouds',
                'icon': '03d'
            }
        ],
        'base': 'stations',
        'main': {
            'temp': 307.16,
            'feels_like': 310.28,
            'temp_min': 307.16,
            'temp_max': 307.16,
            'pressure': 1011,
            'humidity': 46
        },
        'visibility': 10000,
        'wind': {
            'speed': 2.57,
            'deg': 0
        },
        'clouds': {
            'all': 40
        },
        'dt': 1629094681,
        'sys': {
            'type': 1,
            'id': 9314,
            'country': 'VN',
            'sunrise': 1629067419,
            'sunset': 1629112317
        },
        'timezone': 25200,
        'id': 1566083,
        'name': 'Ho Chi Minh City',
        'cod': 200
    }
}
